"use client";

import Footer from "@/components/footer/page";
import Nav from "@/components/nav/page";
import React, { useEffect, useRef, useState } from "react";

/** Tipos mínimos da API do Turnstile para evitar `any` */
type TurnstileWidgetId = string;
type TurnstileTheme = "auto" | "light" | "dark";
interface TurnstileRenderOptions {
  sitekey: string;
  theme?: TurnstileTheme;
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
}
interface TurnstileAPI {
  render(container: HTMLElement, options: TurnstileRenderOptions): TurnstileWidgetId;
  reset(id?: TurnstileWidgetId): void;
  remove(id: TurnstileWidgetId): void;
}
declare global {
  interface Window {
    turnstile?: TurnstileAPI;
    onTurnstileLoad?: () => void;
  }
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<null | "ok" | "err">(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const startedAtRef = useRef<number>(Date.now());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSubmitted(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          honeypot: form.honeypot,
          startedAt: startedAtRef.current,
          turnstileToken,
        }),
      });
      const data: { ok: boolean } = await res.json();
      if (data.ok) {
        setSubmitted("ok");
        setForm({ name: "", email: "", message: "", honeypot: "" });
        if (window.turnstile?.reset) window.turnstile.reset();
        setTurnstileToken("");
        startedAtRef.current = Date.now();
      } else {
        setSubmitted("err");
      }
    } catch {
      setSubmitted("err");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundAura />
      <Nav />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:pt-28">
        <section className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00C0FF]" />
            Fale com o Grupo ARC
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Entre em contato
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Tem uma ideia, projeto ou dúvida? Envie uma mensagem e retornaremos em breve.
          </p>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-5">
          <aside className="md:col-span-2">
            <InfoCard />
          </aside>

          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              {/* Honeypot invisível */}
              <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="Nome"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="voce@exemplo.com"
                  required
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-white" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 transition focus:border-[#00C0FF]/60 focus:outline-none"
                  placeholder="Conte um pouco sobre sua necessidade ou projeto…"
                />
              </div>

              {/* Turnstile */}
              <div className="mt-5">
                <Turnstile onToken={setTurnstileToken} />
                {!turnstileToken && (
                  <p className="mt-2 text-xs text-white/60">
                    Complete a verificação acima para habilitar o envio.
                  </p>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                {submitted === "ok" && (
                  <p className="text-sm text-emerald-400">
                    Mensagem enviada! Em breve entraremos em contato.
                  </p>
                )}
                {submitted === "err" && (
                  <p className="text-sm text-rose-400">
                    Não foi possível enviar agora. Tente novamente em instantes.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading || !turnstileToken}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00C0FF] px-5 py-3 font-medium text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/40 border-t-black" />
                      Enviando…
                    </>
                  ) : (
                    <>Enviar mensagem</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 transition focus:border-[#00C0FF]/60 focus:outline-none"
      />
    </div>
  );
}

function InfoCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="text-lg font-semibold text-white">Canais diretos</h2>
      <div className="mt-4 space-y-4 text-white/80">
        <InfoRow
          label="Email"
          value="contato@grouparc.com.br"
          href="mailto:contato@grouparc.com.br"
        />
        <InfoRow
          label="LinkedIn"
          value="/company/arc-grupo"
          href="https://www.linkedin.com/company/arc-grupo"
        />
        <InfoRow label="Portfólio" value="site-arc.vercel.app" href="https://site-arc.vercel.app" />
      </div>
      <div className="mt-6 rounded-xl bg-gradient-to-br from-[#00C0FF]/20 to-transparent p-[1px]">
        <div className="rounded-xl bg-[#0C0F1A] p-4">
          <p className="text-sm text-white/70">
            Preferimos contato por email. Sem WhatsApp por enquanto — respondemos rapidamente por
            aqui. 💬
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-black/20 px-3 py-2">
      <span className="text-sm text-white/60">{label}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block transition hover:opacity-90">
      {content}
    </a>
  ) : (
    content
  );
}

function BackgroundAura() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0F1A] via-[#0F1322] to-[#0C0F1A]" />
      <div className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-[#00C0FF]/15 blur-3xl" />
      <div className="absolute -bottom-40 right-[-10%] h-[40rem] w-[40rem] rounded-full bg-[#00C0FF]/10 blur-3xl" />
    </div>
  );
}

/** Turnstile robusto: render via API, sem `any` */
function Turnstile({ onToken }: { onToken: (t: string) => void }) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string | undefined;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<TurnstileWidgetId | null>(null);

  useEffect(() => {
    if (!siteKey) return;

    window.onTurnstileLoad = () => {
      if (widgetIdRef.current || !containerRef.current || !window.turnstile) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: "auto",
        callback: (token: string) => onToken(token),
        "error-callback": () => onToken(""),
        "expired-callback": () => onToken(""),
      });
    };

    const SCRIPT_ID = "cf-turnstile-script";
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (!existing) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    } else if (window.turnstile && containerRef.current && !widgetIdRef.current) {
      // script já carregado (hot reload)
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: "auto",
        callback: (token: string) => onToken(token),
        "error-callback": () => onToken(""),
        "expired-callback": () => onToken(""),
      });
    }

    return () => {
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // ignore
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, onToken]);

  return (
    <div className="flex flex-col gap-2">
      <div ref={containerRef} />
      {!siteKey && <p className="text-xs text-rose-400">Erro: NEXT_PUBLIC_TURNSTILE_SITE_KEY ausente.</p>}
    </div>
  );
}
