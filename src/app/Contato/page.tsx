//src\app\Contato\page.tsx
"use client";

import Footer from "@/components/footer/page";
import Nav from "@/components/nav/page";
import React, { useMemo, useState } from "react";

const WHATSAPP_NUMBER = "5521983324011"; // +55 21 98332-4011
const PREFILL =
  "Olá! Gostaria de solicitar um orçamento/atendimento. Podemos conversar sobre meu projeto?";

function buildWhatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState<null | "ok" | "err">(null);

  const whatsappHref = useMemo(() => {
    const parts = [
      PREFILL,
      "",
      `Nome: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      "",
      `Mensagem: ${form.message || "-"}`,
    ];
    return buildWhatsappHref(parts.join("\n"));
  }, [form.name, form.email, form.message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Anti-bot simples
    if (form.honeypot) return;
    if (!agree) return;

    setLoading(true);
    setSubmitted(null);

    try {
      window.open(whatsappHref, "_blank", "noopener,noreferrer");
      setSubmitted("ok");
      setForm({ name: "", email: "", message: "", honeypot: "" });
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
            Atendimento mais rápido pelo WhatsApp. Clique no botão abaixo para abrir a conversa
            com uma mensagem inicial já preenchida.
          </p>
        </section>

        {/* CTA WhatsApp (baseado no padrão do rafaeldesanzio, adaptado para ARC) */}
        <section className="mt-10">
          <div className="relative">
            {/* aura suave */}
            <div
              className="absolute -inset-1 rounded-[24px] blur-xl opacity-35"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,192,255,0.18), rgba(0,0,90,0.16), rgba(0,224,255,0.14))",
              }}
            />

            <div
              className="
                relative overflow-hidden
                rounded-2xl
                border border-white/12
                bg-white/6 backdrop-blur-2xl
                px-6 sm:px-10 py-10
                text-center
                shadow-[0_14px_45px_rgba(0,0,0,0.45)]
              "
            >
              {/* sheen discreto */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(255,255,255,0.10), transparent 35%, rgba(255,255,255,0.05) 55%, transparent 75%)",
                }}
              />

              <div className="relative">
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Atendimento mais rápido pelo WhatsApp
                </h2>
                <p className="mt-2 text-sm text-white/70 max-w-2xl mx-auto">
                  Ideal para orçamento, prazos e alinhamento de escopo. Você pode também preencher o
                  formulário abaixo — ao enviar, abriremos o WhatsApp com seus dados.
                </p>

                <a
                  href={buildWhatsappHref(PREFILL)}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "inline-flex items-center justify-center mt-6",
                    "px-7 py-3 rounded-xl",
                    "bg-[#00C0FF] text-black font-semibold",
                    "border border-white/10",
                    "shadow-[0_0_0px_rgba(0,0,0,0)]",
                    "hover:shadow-[0_0_28px_rgba(0,192,255,0.45)]",
                    "transition-all duration-200",
                    "hover:scale-[1.04]",
                  ].join(" ")}
                >
                  Falar no WhatsApp
                </a>

                <p className="mt-3 text-[11px] text-white/55">Número: +55 (21) 98332-4011</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-5">
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

              <div className="mt-6 flex flex-col gap-4">
                {submitted === "ok" && (
                  <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4">
                    <p className="text-sm text-emerald-300">
                      Abrimos o WhatsApp com sua mensagem. ✅
                    </p>
                  </div>
                )}

                {submitted === "err" && (
                  <p className="text-sm text-rose-400">
                    Não foi possível abrir o WhatsApp agora. Tente novamente.
                  </p>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <input
                      id="agree"
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-white/30 bg-black/20"
                      required
                    />
                    <label htmlFor="agree" className="text-sm text-white/80">
                      Li e concordo com os{" "}
                      <a href="/termos" target="_blank" className="underline text-[#00C0FF]">
                        Termos & Privacidade
                      </a>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !agree}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00C0FF] px-5 py-3 font-medium text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/40 border-t-black" />
                        Abrindo WhatsApp…
                      </>
                    ) : (
                      <>Enviar no WhatsApp</>
                    )}
                  </button>
                </div>
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
  const whatsappHref = buildWhatsappHref(PREFILL);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="text-lg font-semibold text-white">Canais diretos</h2>

      <div className="mt-4 space-y-4 text-white/80">
        <InfoRow label="WhatsApp" value="+55 (21) 98332-4011" href={whatsappHref} />
        <InfoRow
          label="LinkedIn"
          value="/company/grupo-arc"
          href="https://www.linkedin.com/company/grupo-arc"
        />
        <InfoRow label="Portfólio" value="site.grouparc.com.br" href="https://site.grouparc.com.br" />
      </div>

      <div className="mt-6 rounded-xl bg-gradient-to-br from-[#00C0FF]/20 to-transparent p-[1px]">
        <div className="rounded-xl bg-[#0C0F1A] p-4">
          <p className="text-sm text-white/70">
            Atendimento prioritário via WhatsApp. Clique em “WhatsApp” acima para iniciar a conversa. 💬
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