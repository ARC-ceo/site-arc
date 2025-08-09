'use client';

import Nav from '@/components/nav/page';
import Footer from '@/components/footer/page';
import Image from 'next/image';
import Link from 'next/link';

function Separator() {
  return (
    <div className="mx-10 my-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
  );
}

export default function ProjetoSolarMetricsPage() {
  return (
    <main className="relative overflow-hidden">
      {/* FUNDO ÚNICO */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0F1A] via-[#0F1322] to-[#0C0F1A]" />
        <div className="absolute -top-20 -left-20 h-[36rem] w-[36rem] rounded-full bg-[#00C0FF]/15 blur-3xl" />
        <div className="absolute -bottom-32 right-[-10%] h-[40rem] w-[40rem] rounded-full bg-[#00005A]/30 blur-3xl" />
      </div>

      <Nav />
      <Separator />

      {/* HERO */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/metricsbanner.png"
          alt="Solar Metrics"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-4 rounded-3xl bg-black/40 p-8 text-center text-white backdrop-blur-xl ring-1 ring-white/10">
            <h1 className="mb-3 text-3xl font-bold md:text-5xl">SMART SOLAR PERFORMANCE</h1>
            <h2 className="text-xl md:text-2xl">Solar Metrics</h2>
          </div>
        </div>
      </section>

      {/* Voltar */}
      <div className="mx-auto max-w-5xl px-4 py-8">
        <Link
          href="/Projetos"
          className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 font-semibold text-[#3ACEFF] ring-1 ring-white/15 backdrop-blur hover:bg-white/10"
        >
          {/* ícone igual ao anterior */}
          <svg width="20" height="20" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.25 62.4998C31.25 61.1185 31.7987 59.7937 32.7755 58.817C33.7522 57.8402 35.077 57.2915 36.4583 57.2915L88.5417 57.2915C89.923 57.2915 91.2478 57.8402 92.2245 58.817C93.2013 59.7937 93.75 61.1185 93.75 62.4998C93.75 63.8812 93.2013 65.2059 92.2245 66.1827C91.2478 67.1594 89.923 67.7082 88.5417 67.7082L36.4583 67.7082C35.077 67.7082 33.7522 67.1594 32.7755 66.1827C31.7987 65.2059 31.25 63.8812 31.25 62.4998Z" fill="#3ACEFF" />
            <path d="M31.2502 62.5C31.2495 61.8159 31.3839 61.1385 31.6458 60.5066C31.9077 59.8746 32.2919 59.3007 32.7762 58.8177L58.8179 32.776C59.8002 31.8273 61.1158 31.3023 62.4815 31.3142C63.8471 31.326 65.1534 31.8738 66.119 32.8395C67.0847 33.8051 67.6325 35.1114 67.6443 36.477C67.6562 37.8426 67.1312 39.1583 66.1825 40.1406L43.8231 62.5L66.1825 84.8593C67.1312 85.8416 67.6562 87.1573 67.6443 88.5229C67.6325 89.8885 67.0847 91.1948 66.119 92.1605C65.1534 93.1261 63.8471 93.6739 62.4815 93.6858C61.1158 93.6976 59.8002 93.1727 58.8179 92.2239L32.7762 66.1823C32.2919 65.6992 31.9077 65.1253 31.6458 64.4934C31.3839 63.8614 31.2495 63.184 31.2502 62.5Z" fill="#3ACEFF" />
          </svg>
          Voltar aos Projetos
        </Link>
      </div>

      {/* CONTEÚDO */}
      <section className="mx-auto max-w-5xl space-y-10 px-4 pb-20">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-white">
            Estudo de Caso: Solar Metrics — por ARC Sustentável
          </h2>
        </div>

        <div className="rounded-3xl bg-white/5 p-6 text-white backdrop-blur-xl ring-1 ring-white/10">
          <h3 className="mb-2 text-lg font-semibold">Contexto</h3>
          <p className="text-white/90">
            Com o crescimento do uso de painéis solares em residências e empresas, surgiu a
            necessidade de monitorar de forma inteligente a geração de energia e avaliar o retorno
            financeiro dos sistemas fotovoltaicos. Muitas soluções disponíveis no mercado
            apresentavam interfaces complexas ou dados limitados, dificultando a compreensão e o
            aproveitamento real da economia gerada.
          </p>
        </div>

        <div className="rounded-3xl bg-white/5 p-6 text-white backdrop-blur-xl ring-1 ring-white/10">
          <h3 className="mb-2 text-lg font-semibold">Desafio</h3>
          <p className="text-white/80">
            Os usuários de energia solar enfrentam dois grandes obstáculos:<br />
            1 - Falta de visibilidade clara sobre o desempenho do sistema solar<br />
            2 - Dificuldade para calcular o real impacto financeiro da geração energética ao longo do tempo<br />
            Sem dados organizados e indicadores financeiros precisos, o investimento em energia solar muitas vezes
            não é acompanhado da análise necessária para otimizar seu uso.
          </p>
        </div>

        <div className="rounded-3xl bg-white/5 p-6 text-white backdrop-blur-xl ring-1 ring-white/10">
          <h3 className="mb-2 text-lg font-semibold">Solução</h3>
          <p className="text-white/80">
            O Solar Metrics é uma plataforma desenvolvida para tornar o acompanhamento da energia solar
            acessível, transparente e inteligente. Por meio de dashboards simples e conectividade com APIs
            e sensores, os usuários conseguem visualizar dados de geração, comparar desempenho e estimar
            economia futura com base em projeções reais.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2">
          <div className="flex items-start gap-4 rounded-3xl bg-white/5 p-6 text-white backdrop-blur-xl ring-1 ring-white/10">
            <img src="painel.png" className="h-7 w-6" alt="" />
            <div>
              <h4 className="mb-1 font-semibold">Dashboard de Geração Solar</h4>
              <p className="text-sm text-white/80">
                Exibe dados em tempo real, gráficos históricos e alertas de baixa performance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-3xl bg-white/5 p-6 text-white backdrop-blur-xl ring-1 ring-white/10">
            <img src="megafone.png" className="h-7 w-7" alt="" />
            <div>
              <h4 className="mb-1 font-semibold">Comparador Inteligente</h4>
              <p className="text-sm text-white/80">
                Analisa o desempenho da instalação atual frente a sistemas semelhantes na região.
              </p>
            </div>
          </div>
        </div>

        {/* Funcionalidades */}
        <div className="pt-8">
          <h3 className="mb-3 text-lg font-semibold text-white">Funcionalidades-chave</h3>
          <ul className="space-y-1 pl-5 text-white/80 marker:text-white/60 list-disc">
            <li>Monitoramento de geração em tempo real.</li>
            <li>Projeção de economia mensal, anual e acumulada.</li>
            <li>Alertas de desempenho abaixo do ideal.</li>
            <li>Módulo técnico com diagnósticos detalhados.</li>
            <li>Interface responsiva (mobile e desktop).</li>
          </ul>
        </div>

        {/* Benefícios */}
        <div className="px-4 py-24 text-white">
          <h2 className="mb-12 text-2xl font-bold">Benefícios</h2>
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="w-32 shrink-0">
              {/* SVG original mantido */}
              <svg width="100" height="310" viewBox="0 0 124 371" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.677 46.4198H7.2252C4.08537 46.4198 1.53125 43.8656 1.53125 40.7258V8.27403C1.53125 5.1342 4.08537 2.58008 7.2252 2.58008H39.6777C42.8176 2.58008 45.3717 5.1342 45.3717 8.27403V10.8894C45.3717 11.7347 44.6857 12.4207 43.8404 12.4207C42.9952 12.4207 42.3092 11.7347 42.3092 10.8894V8.27403C42.3092 6.82317 41.1286 5.64258 39.6777 5.64258H7.2252C5.77434 5.64258 4.59375 6.82317 4.59375 8.27403V40.7266C4.59375 42.1774 5.77434 43.358 7.2252 43.358H39.6777C41.1286 43.358 42.3092 42.1774 42.3092 40.7266V25.3268C42.3092 24.4815 42.9952 23.7955 43.8404 23.7955C44.6857 23.7955 45.3717 24.4815 45.3717 25.3268V40.7266C45.3717 43.8664 42.8176 46.4205 39.6777 46.4205L39.677 46.4198Z" fill="white" />
                <path d="M27.2544 35.8193C26.8486 35.8193 26.4589 35.6578 26.1718 35.3707L17.3625 26.5614C16.7646 25.9634 16.7646 24.9941 17.3625 24.3962C17.9605 23.7982 18.9298 23.7982 19.5277 24.3962L27.2544 32.1229L44.8554 14.5227C45.4533 13.9247 46.4226 13.9247 47.0206 14.5227C47.6185 15.1206 47.6185 16.0899 47.0206 16.6879L28.337 35.3714C28.0499 35.6585 27.6602 35.8193 27.2544 35.8193Z" fill="white" />
                <path d="M114.677 154.42H82.2252C79.0854 154.42 76.5312 151.866 76.5312 148.726V116.274C76.5312 113.134 79.0854 110.58 82.2252 110.58H114.678C117.818 110.58 120.372 113.134 120.372 116.274V118.889C120.372 119.735 119.686 120.421 118.84 120.421C117.995 120.421 117.309 119.735 117.309 118.889V116.274C117.309 114.823 116.129 113.643 114.678 113.643H82.2252C80.7743 113.643 79.5937 114.823 79.5937 116.274V148.727C79.5937 150.177 80.7743 151.358 82.2252 151.358H114.678C116.129 151.358 117.309 150.177 117.309 148.727V133.327C117.309 132.482 117.995 131.796 118.84 131.796C119.686 131.796 120.372 132.482 120.372 133.327V148.727C120.372 151.866 117.818 154.421 114.678 154.421L114.677 154.42Z" fill="white" />
                <path d="M102.254 143.819C101.849 143.819 101.459 143.658 101.172 143.371L92.3625 134.561C91.7646 133.963 91.7646 132.994 92.3625 132.396C92.9605 131.798 93.9298 131.798 94.5277 132.396L102.254 140.123L119.855 122.523C120.453 121.925 121.423 121.925 122.021 122.523C122.619 123.121 122.619 124.09 122.021 124.688L103.337 143.371C103.05 143.659 102.66 143.819 102.254 143.819Z" fill="white" />
                <path d="M39.677 259.42H7.2252C4.08537 259.42 1.53125 256.866 1.53125 253.726V221.274C1.53125 218.134 4.08537 215.58 7.2252 215.58H39.6777C42.8176 215.58 45.3717 218.134 45.3717 221.274V223.889C45.3717 224.735 44.6857 225.421 43.8404 225.421C42.9952 225.421 42.3092 224.735 42.3092 223.889V221.274C42.3092 219.823 41.1286 218.643 39.6777 218.643H7.2252C5.77434 218.643 4.59375 219.823 4.59375 221.274V253.727C4.59375 255.177 5.77434 256.358 7.2252 256.358H39.6777C41.1286 256.358 42.3092 255.177 42.3092 253.727V238.327C42.3092 237.482 42.9952 236.796 43.8404 236.796C44.6857 236.796 45.3717 237.482 45.3717 238.327V253.727C45.3717 256.866 42.8176 259.421 39.6777 259.421L39.677 259.42Z" fill="white" />
                <path d="M27.2544 248.819C26.8486 248.819 26.4589 248.658 26.1718 248.371L17.3625 239.561C16.7646 238.963 16.7646 237.994 17.3625 237.396C17.9605 236.798 18.9298 236.798 19.5277 237.396L27.2544 245.123L44.8554 227.523C45.4533 226.925 46.4226 226.925 47.0206 227.523C47.6185 228.121 47.6185 229.09 47.0206 229.688L28.337 248.371C28.0499 248.659 27.6602 248.819 27.2544 248.819Z" fill="white" />
                <path d="M114.677 368.42H82.2252C79.0854 368.42 76.5312 365.866 76.5312 362.726V330.274C76.5312 327.134 79.0854 324.58 82.2252 324.58H114.678C117.818 324.58 120.372 327.134 120.372 330.274V332.889C120.372 333.735 119.686 334.421 118.84 334.421C117.995 334.421 117.309 333.735 117.309 332.889V330.274C117.309 328.823 116.129 327.643 114.678 327.643H82.2252C80.7743 327.643 79.5937 328.823 79.5937 330.274V362.727C79.5937 364.177 80.7743 365.358 82.2252 365.358H114.678C116.129 365.358 117.309 364.177 117.309 362.727V347.327C117.309 346.482 117.995 345.796 118.84 345.796C119.686 345.796 120.372 346.482 120.372 347.327V362.727C120.372 365.866 117.818 368.421 114.678 368.421L114.677 368.42Z" fill="white" />
                <path d="M102.254 357.819C101.849 357.819 101.459 357.658 101.172 357.371L92.3625 348.561C91.7646 347.963 91.7646 346.994 92.3625 346.396C92.9605 345.798 93.9298 345.798 94.5277 346.396L102.254 354.123L119.855 336.523C120.453 335.925 121.423 335.925 122.021 336.523C122.619 337.121 122.619 338.09 122.021 338.688L103.337 357.371C103.05 357.659 102.66 357.819 102.254 357.819Z" fill="white" />
                <line x1="26.1896" y1="45.0863" x2="79.1896" y2="114.086" stroke="white" strokeWidth="3" />
                <line x1="26.1896" y1="258.086" x2="79.1896" y2="327.086" stroke="white" strokeWidth="3" />
                <line x1="83.1289" y1="152.988" x2="27.1289" y2="216.988" stroke="white" strokeWidth="3" />
              </svg>
            </div>
            <div className="space-y-12 text-sm text-white/85">
              <div>
                <h4 className="font-bold text-white">Uso consciente da energia solar</h4>
                <p>Visualização clara da geração e consumo incentiva a eficiência energética.</p>
              </div>
              <div>
                <h4 className="font-bold text-white">Clareza no retorno do investimento</h4>
                <p>ROI calculado automaticamente com base nos dados reais do sistema.</p>
              </div>
              <div>
                <h4 className="font-bold text-white">Tomada de decisão baseada em dados</h4>
                <p>Ajuda o usuário a decidir quando expandir, manter ou reajustar o sistema.</p>
              </div>
              <div>
                <h4 className="font-bold text-white">Facilidade na manutenção preventiva</h4>
                <p>Alertas evitam perdas por falhas ocultas nos painéis ou inversores.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resultado */}
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="md:w-1/2">
            <h3 className="mb-2 text-[24px] font-semibold text-white">Resultado</h3>
            <p className="mt-8 text-white/85">
              O Solar Metrics promoveu uma transformação na forma como os usuários acompanham sua geração solar.
            </p>
            <p className="mt-8 text-white/85">
              Além de proporcionar maior entendimento sobre o retorno financeiro, a solução criou uma ponte
              entre consumidores e integradores, aumentando a eficiência técnica e o engajamento com práticas
              sustentáveis.
            </p>
          </div>
          <div className="flex">
            <img src="mockupmetrics.png" alt="Mockup Solar Metrics" width={300} />
          </div>
        </div>
      </section>

      {/* CTA vidro */}
      <Separator />
      <section className="w-full">
        <div className="mx-4 mt-20 rounded-3xl bg-white/5 py-16 ring-1 ring-white/10 backdrop-blur-xl md:mx-10">
          <div className="flex flex-col items-center gap-8 px-6 md:flex-row md:items-center md:gap-8">
            <div className="w-full space-y-6 text-left md:w-1/2 md:pl-10">
              <p className="text-[32px] font-semibold leading-relaxed text-white">
                Pronto para alcançar <br /> resultados como esses <br /> com a sua ideia?
              </p>
              <button className="mt-2 rounded-full bg-[#00C0FF] px-6 py-2 text-[20px] text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] hover:brightness-110">
                Iniciar parceria
              </button>
            </div>
            <div className="flex w-full justify-end">
              <div className="max-w-[500px]">
                <img src="pcs.png" alt="Pessoa escrevendo" className="rounded-l-[60px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <Footer />
    </main>
  );
}
