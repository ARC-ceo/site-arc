"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import Nav from "../nav/page";
import Footer from "../footer/page";

/** Tipos mínimos Turnstile (sem any) */
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

type Props = {
  // Hero (texto à esquerda + formulário à direita)
  titulo: string;
  subtitulo: string;
  descricao: string;
  bgHeader: string | { src: string };

  // Benefícios (3)
  iconeb1?: ReactNode;
  beneficio1: string;
  descricaobeneficio1: string;

  iconeb2?: ReactNode;
  beneficio2: string;
  descricaobeneficio2: string;

  iconeb3?: ReactNode;
  beneficio3: string;
  descricaobeneficio3: string;

  // FAQ (3)
  pergunta1: string;
  resposta1: string;
  pergunta2: string;
  resposta2: string;
  pergunta3: string;
  resposta3: string;

  // CTA final
  cta: string;
  onCtaClick?: () => void;

  // Formulário
  ctaForm: string;
  onFormSubmit?: (data: { nome: string; email: string; telefone: string; mensagem: string }) => Promise<void> | void;
};

export default function LandingProduto(props: Props) {
  const {
    titulo, subtitulo, descricao, bgHeader,
    iconeb1, beneficio1, descricaobeneficio1,
    iconeb2, beneficio2, descricaobeneficio2,
    iconeb3, beneficio3, descricaobeneficio3,
    pergunta1, resposta1, pergunta2, resposta2, pergunta3, resposta3,
    cta, onCtaClick, ctaForm, onFormSubmit,
  } = props;

  const faqs = [
    { q: pergunta1, a: resposta1 },
    { q: pergunta2, a: resposta2 },
    { q: pergunta3, a: resposta3 },
  ];

  const [open, setOpen] = useState<number | null>(0);
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "", honeypot: "" });
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const startedAtRef = useRef<number>(Date.now());
  const [agree, setAgree] = useState(false);


  const bgSrc = typeof bgHeader === "string" ? (bgHeader.startsWith("/") ? bgHeader : `/${bgHeader}`) : bgHeader?.src;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      if (onFormSubmit) {
        await onFormSubmit({ nome: form.nome, email: form.email, telefone: form.telefone, mensagem: form.mensagem });
      } else {
        // Envia para a mesma rota /api/contact utilizada no Contato
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.nome,
            email: form.email,
            message: form.mensagem,
            phone: form.telefone,
            honeypot: form.honeypot,
            startedAt: startedAtRef.current,
            turnstileToken,
            origin: typeof window !== "undefined" ? window.location.pathname : "/LP",
            agree,
          }),
        });
        const data: { ok: boolean } = await res.json();
        if (!data.ok) throw new Error("Falha no envio");
      }
      setOk(true);
      setForm({ nome: "", email: "", telefone: "", mensagem: "", honeypot: "" });
      if (window.turnstile?.reset) window.turnstile.reset();
      setTurnstileToken("");
      startedAtRef.current = Date.now();
    } catch {
      setOk(false);
      alert("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="w-full text-white">
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden min-h-[560px]"
        style={{
          backgroundImage: bgSrc ? `url(${bgSrc})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Nav />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-40">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Texto */}
            <div>
              <div className="rounded-3xl ">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{titulo}</h1>
                <p className="my-10 text-sm tracking-wide text-white/80">{subtitulo}</p>
                <p className="my-6 text-base md:text-lg text-white/85">{descricao}</p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl p-[1px] bg-gradient-to-b from-white/25 via-white/12 to-white/8">
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
              >
                <h2 className="text-xl md:text-2xl font-bold">Fale com a ARC</h2>
                <p className="mt-1 text-white/80 text-sm">Conte rapidamente sobre seu projeto.</p>

                {/* Honeypot invisível */}
                <input
                  type="text"
                  name="honeypot"
                  value={form.honeypot}
                  onChange={(e) => setForm((f) => ({ ...f, honeypot: e.target.value }))}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="mt-5 grid grid-cols-1 gap-4">
                  <label className="block">
                    <span className="mb-1 block text-sm text-white/80">Nome</span>
                    <input
                      required
                      value={form.nome}
                      onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                      className="w-full rounded-xl bg-white/10 px-4 py-3 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-[#00C0FF] placeholder-white/50"
                      placeholder="Seu nome"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-sm text-white/80">E-mail</span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full rounded-xl bg-white/10 px-4 py-3 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-[#00C0FF] placeholder-white/50"
                      placeholder="voce@empresa.com"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-sm text-white/80">Telefone (opcional)</span>
                    <input
                      value={form.telefone}
                      onChange={(e) => setForm((f) => ({ ...f, telefone: e.target.value }))}
                      className="w-full rounded-xl bg-white/10 px-4 py-3 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-[#00C0FF] placeholder-white/50"
                      placeholder="(11) 9 9999-9999"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-sm text-white/80">Mensagem</span>
                    <textarea
                      required
                      rows={4}
                      value={form.mensagem}
                      onChange={(e) => setForm((f) => ({ ...f, mensagem: e.target.value }))}
                      className="w-full rounded-xl bg-white/10 px-4 py-3 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-[#00C0FF] placeholder-white/50"
                      placeholder="Me conte sobre o produto/ideia…"
                    />
                  </label>

                  {/* Turnstile */}
                  <div className="mt-1">
                    <Turnstile onToken={setTurnstileToken} />
                    {!turnstileToken && (
                      <p className="mt-2 text-xs text-white/60">Complete a verificação acima para habilitar o envio.</p>
                    )}
                  </div>

                  <div className="mt-2 flex items-start gap-3">
                    <input
                      id="agree-lp"
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10"
                      required
                    />
                    <label htmlFor="agree-lp" className="text-sm text-white/80">
                      Li e concordo com os{" "}
                      <a href="/termos" target="_blank" className="underline text-[#00C0FF]">
                        Termos & Privacidade
                      </a>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={sending || !turnstileToken || !agree}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-[#00C0FF] px-6 py-3 text-base font-semibold text-black hover:bg-[#00a7de] transition disabled:opacity-60"
                  >
                    {sending ? "Enviando…" : ctaForm}
                  </button>

                  {ok && (
                    <p className="mt-3 text-sm text-emerald-300">
                      Mensagem recebida! Em breve entraremos em contato. ✅
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="mx-auto max-w-6xl px-6 -mt-10 md:-mt-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: iconeb1, title: beneficio1, desc: descricaobeneficio1 },
            { icon: iconeb2, title: beneficio2, desc: descricaobeneficio2 },
            { icon: iconeb3, title: beneficio3, desc: descricaobeneficio3 },
          ].map((b, i) => (
            <div key={i} className="rounded-3xl bg-white/8 backdrop-blur-xl ring-1 ring-white/12 p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
              <div className="mb-4 h-12 w-12 flex items-center justify-center">{b.icon}</div>
              <h3 className="text-xl font-semibold text-[#00C0FF]">{b.title}</h3>
              <p className="mt-2 text-white/85">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Perguntas frequentes</h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} className="rounded-2xl bg-white/7 backdrop-blur-xl ring-1 ring-white/12 shadow-[0_6px_24px_rgba(0,0,0,0.25)]">
                <button className="w-full text-left px-5 py-4 flex items-center justify-between" onClick={() => setOpen(isOpen ? null : idx)}>
                  <span className="text-lg md:text-xl font-medium">{item.q}</span>
                  <span className={`ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-white/20 ${isOpen ? "bg-white/30" : "bg-white/10"}`}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-white/85">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl bg-white/8 backdrop-blur-xl ring-1 ring-white/12 p-8 md:p-12 text-center shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
          <h3 className="text-2xl md:text-3xl font-bold">Pronto para começar?</h3>
          <p className="mt-2 text-white/85">Vamos tirar sua ideia do papel com um plano claro e execução eficiente.</p>
          <button
            onClick={onCtaClick}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#00C0FF] px-7 py-3 text-lg font-semibold text-black hover:bg-[#00a7de] transition shadow-[0_12px_30px_rgba(0,192,255,0.35)]"
          >
            {cta} <span aria-hidden>→</span>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

/** Componente Turnstile */
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
          /* ignore */
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
