import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const ip = getIp(req);
    const { name, email, message, honeypot = "", startedAt, turnstileToken } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    if (honeypot && String(honeypot).trim() !== "") {
      return NextResponse.json({ ok: true }); // finge sucesso p/ bots
    }

    const now = Date.now();
    const opened = Number(startedAt);
    if (!opened || Number.isNaN(opened) || now - opened < 3000) {
      return NextResponse.json({ ok: false, error: "Envio muito rápido. Tente novamente." }, { status: 400 });
    }

    const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
    const verifyResp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET_KEY || "",
        response: turnstileToken || "",
        remoteip: ip || "",
      }),
    });
    const verifyJson = await verifyResp.json();
    if (!verifyJson.success) {
      return NextResponse.json({ ok: false, error: "Falha no desafio anti-spam." }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const emailResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Grupo ARC <noreply@grouparc.com.br>",
        to: ["contato@grouparc.com.br"],
        subject: `Novo contato – ${name}`,
        reply_to: email,
        text: `Nome: ${name}\nEmail: ${email}\nIP: ${ip}\n\nMensagem:\n${message}`,
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;padding:16px;background:#0C0F1A;color:#fff">
            <h2 style="margin:0 0 12px;color:#fff">Novo contato pelo site</h2>
            <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>IP:</strong> ${escapeHtml(ip || "-")}</p>
            <p><strong>Mensagem:</strong></p>
            <div style="white-space:pre-wrap;line-height:1.6;color:#E6F7FF">${escapeHtml(message)}</div>
          </div>
        `,
      }),
    });

    if (!emailResp.ok) {
      return NextResponse.json({ ok: false, error: "Falha ao enviar email." }, { status: 500 });
    }

    const webhook = process.env.SHEETS_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          ip,
          timestamp: new Date().toISOString(),
        }),
      }).catch((e) => console.error("Sheets webhook error:", e));
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Erro inesperado." }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getIp(req: Request): string | undefined {
  const xf = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim();
  if (xf) return xf;
  return undefined;
}
