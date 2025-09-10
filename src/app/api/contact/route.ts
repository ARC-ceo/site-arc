import { NextResponse } from "next/server";
import { Resend } from "resend";

const DEBUG = process.env.NODE_ENV !== "production";
const BYPASS_TURNSTILE = process.env.BYPASS_TURNSTILE === "1";

export async function POST(req: Request) {
  try {
    const ip = getIp(req);
    const { name, email, message, phone = "", honeypot = "", startedAt, turnstileToken, origin = "", agree } = await req.json();

    if (agree !== true) {
      return jerr("É necessário concordar com os Termos & Privacidade.", 400);
    }

    // 1) Campos
    if (!name || !email || !message) return jerr("Campos obrigatórios ausentes.", 400);
    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return jerr("Formato inválido.", 400);
    }

    // 2) Honeypot
    if (honeypot && String(honeypot).trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    // 3) Time trap (>=3s)
    const opened = Number(startedAt);
    if (!opened || Number.isNaN(opened) || Date.now() - opened < 3000) {
      return jerr("Envio muito rápido. Tente novamente.", 400);
    }

    // 4) Turnstile
    if (!BYPASS_TURNSTILE) {
      const secret = process.env.TURNSTILE_SECRET_KEY;
      if (!secret) return jerr("Captcha não configurado (TURNSTILE_SECRET_KEY).", 500);

      const verifyResp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret,
          response: turnstileToken || "",
          remoteip: ip || "",
        }),
      });
      const verifyJson: { success?: boolean } = await verifyResp.json();
      if (!verifyJson.success) return jerr("Falha no desafio anti-spam (Turnstile).", 400);
    }

    // 5) Resend (envio de email)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return jerr("RESEND_API_KEY ausente.", 500);

    const resend = new Resend(apiKey);
    const from = `${process.env.MAIL_FROM_NAME || "Grupo ARC"} <${process.env.MAIL_FROM || "onboarding@resend.dev"}>`;
    const to = process.env.MAIL_TO || "delivered@resend.dev";

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Novo contato – ${name}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;padding:16px;background:#0C0F1A;color:#fff">
          <h2 style="margin:0 0 12px;color:#fff">Novo contato pelo site</h2>
          <p><strong>Origem:</strong> ${escapeHtml(origin || "/Contato")}</p>
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>IP:</strong> ${escapeHtml(ip || "-")}</p>
          <p><strong>Mensagem:</strong></p>
          <div style="white-space:pre-wrap;line-height:1.6;color:#E6F7FF">${escapeHtml(message)}</div>
        </div>
      `,
    });

    if (error) return jerr(`Falha ao enviar email (Resend): ${error.message}`, 500);

    // 6) Planilha (best-effort)
    const webhook = process.env.SHEETS_WEBHOOK_URL;
    if (webhook) {
      fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          ip,
          origin,
          timestamp: new Date().toISOString(),
          transport: "resend",
        }),
      }).catch((err) => {
        if (DEBUG) console.error("Sheets webhook error:", err);
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    if (DEBUG) console.error("Erro inesperado:", msg);
    return jerr("Erro inesperado.", 500, DEBUG ? msg : undefined);
  }
}

function jerr(msg: string, status = 400, detail?: unknown) {
  return NextResponse.json({ ok: false, error: msg, detail }, { status });
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
  return xf || undefined;
}
