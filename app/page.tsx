import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PhotoPlaceholder from './components/PhotoPlaceholder';
import GaleriaImpacto from './components/GaleriaImpacto';
import FotoSlideshow from './components/FotoSlideshow';
import { CONTATO, REDES, RESPONSAVEL, CONGRESSO, LOCAIS } from './lib/config';
import { FOTOS } from './lib/fotos';
import { PARCEIROS } from './lib/parceiros';
import { MapPin, Mail, AtSign, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ambulatório de Dermatologia e Hanseníase da Amazônia · ADHAM · Marabá-PA',
  description:
    'O ADHAM integra assistência, ensino, pesquisa e extensão em dermatologia e hanseníase na Amazônia. Criado em 2024 (UEPA · LIMDERM · CIPE), em Marabá-PA. Realizador do I Congresso Amazônico de Hanseníase (27–29 de agosto de 2026).',
  keywords:
    'ADHAM, ambulatório, hanseníase, dermatologia, Marabá, Pará, UEPA, LIMDERM, CIPE, SUS, congresso, Amazônia',
  openGraph: {
    title: 'Ambulatório de Dermatologia e Hanseníase da Amazônia · ADHAM',
    description: 'Assistência, ensino, pesquisa e extensão contra a hanseníase · Marabá, PA',
    type: 'website',
    locale: 'pt_BR',
  },
};

const stats = [
  { value: '2024', label: 'Inauguração', sub: '31 de outubro' },
  { value: '+110', label: 'Atendimentos', sub: 'especializados' },
  { value: '4', label: 'Eixos integrados', sub: 'assistência · ensino · pesquisa · extensão' },
  { value: '1º', label: 'Congresso Amazônico', sub: 'de Hanseníase' },
];

const timeline = [
  { date: '2024', title: 'Nascimento do ADHAM', desc: 'Resultado da parceria entre a UEPA, o LIMDERM e o CIPE, com o objetivo de fortalecer o cuidado dermatológico e as ações de enfrentamento da hanseníase na região.' },
  { date: '31/10/2024', title: 'Inauguração oficial', desc: 'Marco de abertura do ambulatório, com docentes, gestores e acadêmicos da UEPA Campus VIII.' },
  { date: '22/11/2024', title: 'Primeiro atendimento', desc: 'Início das atividades assistenciais com o primeiro atendimento especializado.' },
  { date: 'Atual', title: 'Integração ao SUS', desc: 'A integração ao sistema municipal de regulação ampliou o acesso da população aos serviços especializados.' },
];

const pilares: { n: string; title: string; desc: string; foto: { src: string; alt: string }; pos?: string; contain?: boolean }[] = [
  { n: '01', title: 'Assistência', desc: 'Atendimento especializado em dermatologia e hanseníase, com diagnóstico precoce, acompanhamento clínico e tratamento.', foto: FOTOS.atendimento, pos: 'center bottom' },
  { n: '02', title: 'Ensino', desc: 'Campo de prática qualificado para a formação acadêmica, com vivência clínica real para estudantes e profissionais.', foto: FOTOS.discussao },
  { n: '03', title: 'Pesquisa', desc: 'Investigação científica voltada às demandas epidemiológicas da Amazônia e à formação de pesquisadores.', foto: FOTOS.producao, pos: 'center 20%' },
  { n: '04', title: 'Extensão', desc: 'Ações que aproximam ciência, educação e comunidade no enfrentamento da hanseníase.', foto: FOTOS.cartas, pos: 'center center' },
];

const extensao: { title: string; desc: string; foto: { src: string; alt: string }; pos?: string }[] = [
  { title: 'Primeiros sonhos do ADHAM', desc: 'Registros da origem do ambulatório, que nasceu do sonho coletivo de uma equipe comprometida com a saúde da Amazônia.', foto: FOTOS.primeirosSonhos },
  { title: 'Oficina de Hanseníase', desc: 'Oficina educativa promovida pelo ADHAM para capacitação e difusão do conhecimento sobre a doença.', foto: FOTOS.oficinaHanseniase },
  { title: 'Formação', desc: 'Desenvolvendo competências acadêmicas e profissionais por meio do ensino e da educação continuada.', foto: FOTOS.equipeExtensao },
  { title: 'Estágios da LIMDERM', desc: 'Vivência prática dos alunos de medicina no ambulatório.', foto: FOTOS.estagio },
  { title: 'Ação Social', desc: 'Atividade de extensão do ADHAM voltada ao atendimento e cuidado da população em situação de vulnerabilidade.', foto: FOTOS.acaoSocial },
  { title: 'Ação Social LIMDERM', desc: 'Ação social da LIMDERM em parceria com o ADHAM, levando atendimento especializado à comunidade.', foto: FOTOS.acaoSocialLimderm },
  { title: 'Campanha Doenças Reumáticas', desc: 'Ação de conscientização e prevenção de doenças reumáticas promovida pelo ADHAM junto à comunidade.', foto: FOTOS.campanhaReumaticas },
  { title: 'Campanha Dez Laranja', desc: 'Atividades práticas em cirurgia dermatológica desenvolvidas no Hospital Municipal de Marabá, com participação de acadêmicos de Medicina.', foto: FOTOS.campanhaLaranja },
  { title: 'Carreta Roda Hans', desc: 'Iniciativa do Ministério da Saúde; acadêmicos atuam na assistência em hanseníase em Marabá.', foto: FOTOS.carreta },
  { title: 'Projeto Cartas ao Cientista', desc: 'Atendimentos e orientações que aproximam ciência, educação e comunidade.', foto: FOTOS.jornadaLupus },
  { title: 'Cartas ao Cientista', desc: 'Equipe do ADHAM em ação de extensão do projeto Cartas ao Cientista, em parceria com GRUPO de Pacientes Reumáticos do Pará - GARPA.', foto: FOTOS.jornadaEstande, pos: 'center 60%' },
  { title: 'Produção científica', desc: 'Apresentação de trabalhos em congressos nacionais, como o 78º Congresso da Sociedade Brasileira de Dermatologia (CSBD), Rio 2025.', foto: FOTOS.producao, pos: 'center 30%' },
];

const reconhecimentos = [
  { title: 'Premiação CIPE: Impacto Social', desc: 'Reconhecimento da contribuição social do ADHAM.' },
  { title: 'Premiação CIPE: Produção Científica', desc: 'Reconhecimento da maior produção científica.' },
  { title: 'Aniversário UEPA 33 anos', desc: 'Reconhecimento institucional pela trajetória.' },
];

const visao = [
  { title: 'Referência na Amazônia Legal', desc: 'Consolidar-se como centro de referência em assistência, ensino, pesquisa e extensão.' },
  { title: 'Cursos em Dermatologia e Hanseníase', desc: 'Criação de programa de residência médica em dermatologia.' },
  { title: 'Congresso Amazônico', desc: 'Consolidar o congresso como espaço permanente de atualização e pesquisa.' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero editorial */}
        <section id="topo" className="pt-32 pb-20 bg-canvas text-ink">
          <div className="max-w-6xl mx-auto px-6">
            <p className="rule-label">ADHAM · Marabá, Pará</p>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end mt-8">
              <div className="lg:col-span-8">
                <h1 className="display text-ink" style={{ fontSize: 'clamp(1.9rem, 4.6vw, 3.8rem)' }}>
                  Ambulatório de Dermatologia e <span className="text-brand-strong mark">Hanseníase</span> da Amazônia
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-lg text-ink-soft leading-relaxed">
                  Integramos assistência, ensino, pesquisa e extensão, ampliando o acesso ao
                  atendimento especializado na Amazônia.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                  <a href="#contato" className="btn btn-primary w-full sm:w-auto">Agendar atendimento</a>
                  <Link href="/congresso" className="btn btn-outline w-full sm:w-auto">Congresso {CONGRESSO.ano}</Link>
                </div>
              </div>
            </div>
            {/* Banner do congresso — leva direto à página do evento */}
            <Link href="/congresso" className="theme-congresso group mt-12 block overflow-hidden rounded-2xl">
              <div className="relative flex flex-col items-center gap-7 bg-brand-darker px-7 py-8 transition-transform group-hover:-translate-y-0.5 sm:flex-row sm:gap-10 sm:px-12 sm:py-10">
                <img
                  src="/logo-congresso-claro.png"
                  alt="I Congresso Amazônico de Hanseníase"
                  className="order-1 w-36 shrink-0 sm:order-2 sm:w-44 lg:w-52"
                />
                <div className="order-2 flex-1 text-center sm:order-1 sm:text-left">
                  <p className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.22em] text-brand-light sm:text-sm">
                    27, 28 e 29 de Agosto de 2026 · Marabá, PA
                  </p>
                  <h2 className="display mt-3 text-white" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)' }}>
                    I Congresso Amazônico de Hanseníase
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-sm text-brand-faint sm:mx-0">
                    Realização do ADHAM, com apoio do CNPq. Inscrições abertas.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Conheça o congresso
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Stats — faixa navy editorial */}
        <section className="bg-brand-darker py-16 text-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {stats.map((s, i) => (
              <div key={i} className={`${i < 3 ? 'lg:border-r lg:border-brand-edge' : ''}`}>
                <p className="display text-white" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)' }}>{s.value}</p>
                <p className="text-brand-light font-semibold mt-2">{s.label}</p>
                <p className="text-brand-faint text-sm mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quem somos + Nossa história */}
        <section id="sobre" className="py-16 sm:py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <p className="rule-label mb-7">Quem somos</p>
              <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
                Cuidado, ciência e dignidade contra a hanseníase
              </h2>
              <p className="dropcap mt-7 text-ink-soft leading-relaxed text-[1.08rem]">
                O ADHAM surgiu da necessidade de ampliar o acesso da população aos serviços
                especializados em dermatologia e hanseníase, ao mesmo tempo em que proporciona um
                campo de formação prática qualificado para estudantes e profissionais da saúde.
              </p>
              <p className="mt-5 text-ink-soft leading-relaxed">
                Desempenha papel fundamental no diagnóstico precoce, no acompanhamento clínico, no
                tratamento e no monitoramento de pacientes, num ambiente que une assistência, ensino,
                pesquisa e extensão.
              </p>
              <div className="relative mt-8">
                <FotoSlideshow
                  ratio="aspect-[16/10]"
                  interval={4000}
                  position="center 40%"
                  fotos={[FOTOS.atendimento, FOTOS.discussao, FOTOS.pratica1, FOTOS.pratica2]}
                />
              </div>
            </div>

            <div className="lg:col-span-6 lg:pt-16">
              <p className="rule-label mb-7">Nossa história</p>
              <ol className="relative border-l border-line ml-1">
                {timeline.map((t) => (
                  <li key={t.date} className="ml-6 pb-9 last:pb-0">
                    <span className="absolute -left-[7px] w-3.5 h-3.5 rounded-full bg-brand-strong border-2 border-surface" />
                    <p className="font-[family-name:var(--font-display)] font-bold text-brand-strong text-sm">{t.date}</p>
                    <h3 className="font-semibold text-ink mt-0.5 text-lg">{t.title}</h3>
                    <p className="text-muted text-sm mt-1 leading-relaxed">{t.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* A hanseníase na Amazônia — manifesto */}
        <section className="py-16 sm:py-24 bg-brand-darker text-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.28em] uppercase text-brand-light mb-8">A hanseníase na Amazônia</p>
            <p className="display leading-[1.1]" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              A persistência da hanseníase na Região Norte reforça a necessidade de
              <span className="text-brand-light"> serviços especializados</span>, diagnóstico precoce e
              formação profissional qualificada.
            </p>
          </div>
        </section>

        {/* Pilares — numerado editorial */}
        <section id="atuacao" className="py-16 sm:py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
              <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
                Quatro eixos,<br />um só propósito
              </h2>
              <p className="text-muted max-w-sm text-sm leading-relaxed">
                O ADHAM integra assistência, ensino, pesquisa e extensão no enfrentamento da hanseníase.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {pilares.map((p) => (
                <div key={p.n} className="border-t-2 border-brand-strong pt-4 flex flex-col group">
                  <span className="index-num block">{p.n}</span>
                  <div className="mt-4 mb-4 rounded-xl overflow-hidden shadow-sm border border-line bg-canvas transition-transform duration-300 group-hover:-translate-y-1">
                    <PhotoPlaceholder ratio="aspect-[4/3]" src={p.foto.src} caption={p.foto.alt} position={p.pos} contain={p.contain} />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink text-lg">{p.title}</h3>
                  <p className="text-muted text-sm mt-1.5 leading-relaxed flex-1">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impacto e trajetória */}
        <section id="impacto" className="py-16 sm:py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="rule-label mb-7">Impacto e trajetória</p>
              <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
                Referência regional em poucos anos
              </h2>
              <p className="mt-6 text-ink-soft leading-relaxed">
                Recebemos pacientes de Marabá, Tocantins, Maranhão, São Paulo e de diversos municípios
                circunvizinhos. São mais de <strong className="text-ink">110 atendimentos</strong>,
                além de atividades extensionistas, tornando-se também um centro de produção de
                conhecimento e inovação em saúde.
              </p>
            </div>
            <div className="lg:col-span-7">
              <GaleriaImpacto />
            </div>
          </div>
        </section>

        {/* Extensão */}
        <section className="py-16 sm:py-24 bg-surface overflow-hidden">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="rule-label">Extensão, pesquisa e formação</p>
              <h2 className="display text-ink mt-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>Ciência que chega à população</h2>
            </div>
            
            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-edge md:-translate-x-1/2" />
              
              <div className="space-y-16 md:space-y-24">
                {extensao.map((e, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={index} className="relative flex items-center w-full group">
                      
                      {/* Ponto */}
                      <div className="absolute left-[11px] md:left-1/2 top-14 md:top-1/2 w-[18px] h-[18px] rounded-full bg-brand-strong border-[4px] border-surface shadow-[0_0_0_2px_var(--tw-shadow-color)] shadow-brand-edge md:-translate-x-1/2 md:-translate-y-1/2 z-10 transition-transform duration-300 group-hover:scale-125 group-hover:bg-brand-light" />

                      <div className="w-full pl-12 md:pl-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">
                        
                        {/* Container Esquerdo (Desktop) */}
                        <div className={`min-w-0 w-full ${isEven ? 'md:pr-12 md:text-right order-2 md:order-1' : 'md:pr-12 order-1 md:order-1'}`}>
                          {isEven ? (
                            <>
                              <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-2xl mb-3">{e.title}</h3>
                              <p className="text-ink-soft text-base leading-relaxed">{e.desc}</p>
                            </>
                          ) : (
                            <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-line bg-canvas transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                              <PhotoPlaceholder ratio="aspect-[16/10]" src={e.foto.src} caption={e.foto.alt} position={e.pos} />
                            </div>
                          )}
                        </div>
                        
                        {/* Container Direito (Desktop) */}
                        <div className={`min-w-0 w-full ${isEven ? 'md:pl-12 order-1 md:order-2' : 'md:pl-12 md:text-left order-2 md:order-2'}`}>
                          {isEven ? (
                            <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-line bg-canvas transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                              <PhotoPlaceholder ratio="aspect-[16/10]" src={e.foto.src} caption={e.foto.alt} position={e.pos} />
                            </div>
                          ) : (
                            <>
                              <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-2xl mb-3">{e.title}</h3>
                              <p className="text-ink-soft text-base leading-relaxed">{e.desc}</p>
                            </>
                          )}
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Reconhecimentos + Visão */}
        <section className="py-16 sm:py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            <div>
              <p className="rule-label mb-8">Reconhecimento</p>
              <div className="space-y-6">
                {reconhecimentos.map((r) => (
                  <div key={r.title} className="border-l-2 border-brand-strong pl-5">
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink">{r.title}</h3>
                    <p className="text-muted text-sm mt-1 leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="rule-label mb-8">Visão de futuro</p>
              <ol className="space-y-6">
                {visao.map((v, i) => (
                  <li key={v.title} className="flex gap-5">
                    <span className="index-num leading-none" style={{ fontSize: '1.8rem' }}>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink">{v.title}</h3>
                      <p className="text-muted text-sm mt-1 leading-relaxed">{v.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Congresso — destaque */}
        <section id="congresso" className="py-16 sm:py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl bg-brand-darker overflow-hidden grid lg:grid-cols-2">
              <div className="p-10 md:p-14">
                <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.22em] uppercase text-brand-light">
                  {CONGRESSO.datasLabel} · Marabá, PA
                </p>
                <h2 className="display text-white mt-4" style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)' }}>
                  {CONGRESSO.nome}
                </h2>
                <p className="mt-5 text-brand-faint leading-relaxed">
                  Nascido da experiência do ADHAM e apoiado pelo CNPq, o congresso reúne especialistas,
                  pesquisadores, gestores e estudantes para discutir os avanços no enfrentamento da
                  hanseníase. Estruturado para ocorrer a cada dois anos.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/congresso" className="btn btn-white">Ver o congresso</Link>
                  <Link href="/congresso/inscricao" className="btn btn-ghost-light">Inscrições</Link>
                </div>
              </div>
              <div className="flex items-center justify-center p-8 lg:p-10 min-h-[16rem] lg:min-h-full">
                <img
                  src="/logo-congresso-claro.png"
                  alt="I Congresso Amazônico de Hanseníase"
                  className="w-full max-w-[16rem] lg:max-w-[20rem] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Apoiadores */}
        <section id="apoiadores" className="py-16 sm:py-24 bg-canvas border-t border-line">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <p className="rule-label mb-7">Apoiadores e parceiros</p>
              <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>Uma rede de cuidado e ciência</h2>
              <p className="mt-6 text-ink-soft leading-relaxed">
                O ADHAM desenvolve suas atividades em parceria com instituições de ensino, pesquisa,
                gestão pública e organizações científicas.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-12 sm:gap-16 mt-12">
              {PARCEIROS.slice(0, 4).map((p) =>
                p.logo ? (
                  <div key={p.nome} className="flex items-center justify-center h-20 sm:h-24 w-32 sm:w-40">
                    <img
                      src={p.logo}
                      alt={p.nome}
                      title={p.nome}
                      loading="lazy"
                      className="w-full h-full object-contain transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105"
                    />
                  </div>
                ) : (
                  <div key={p.nome} className="flex items-center justify-center h-20 sm:h-24 w-32 sm:w-40">
                    <span className="font-[family-name:var(--font-display)] font-bold text-muted text-xl transition-colors hover:text-brand-strong text-center">{p.nome}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Contato + Responsável */}
        <section id="contato" className="py-16 sm:py-24 bg-surface border-t border-line">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="rule-label mb-7">Contato e localização</p>
              <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>Onde nos encontrar</h2>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-brand-strong flex-shrink-0 mt-0.5" />
                  <p className="text-ink-soft text-sm leading-relaxed">{CONTATO.endereco}</p>
                </div>
                <a href={`mailto:${CONTATO.email}`} className="flex items-start gap-3 hover:text-brand-strong transition-colors">
                  <Mail size={20} className="text-brand-strong flex-shrink-0 mt-0.5" />
                  <span className="text-ink-soft text-sm break-words">{CONTATO.email}</span>
                </a>
                <div className="flex items-start gap-3">
                  <AtSign size={20} className="text-brand-strong flex-shrink-0 mt-0.5" />
                  <span className="text-ink-soft text-sm">
                    <a href={REDES.adham.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-strong transition-colors">{REDES.adham.handle}</a>
                    {' · '}
                    <a href={REDES.congresso.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-strong transition-colors">{REDES.congresso.handle}</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Fotos UEPA + Ambulatório, lado a lado */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <figure className="rounded-2xl overflow-hidden">
                  <img
                    src={LOCAIS.capacitacoes.fotos[0]}
                    alt="Entrada da Universidade do Estado do Pará – Campus Universitário de Marabá"
                    className="w-full h-40 sm:h-52 object-cover object-center"
                  />
                </figure>
                <figure className="rounded-2xl overflow-hidden">
                  <img
                    src={FOTOS.fachada.src}
                    alt={FOTOS.fachada.alt}
                    className="w-full h-40 sm:h-52 object-cover"
                    style={{ objectPosition: 'center 55%' }}
                  />
                </figure>
              </div>

              {/* Responsável técnica — compacto */}
              <div className="rounded-2xl bg-brand-darker text-white px-6 py-5 flex items-center gap-5">
                <PhotoPlaceholder ratio="aspect-square" src={FOTOS.dyana.src} caption={FOTOS.dyana.alt} position="center top" className="w-14 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-brand-light">Responsável Técnica</p>
                  <p className="font-[family-name:var(--font-display)] font-bold text-white text-base leading-snug mt-0.5">{RESPONSAVEL.nome}</p>
                  <p className="text-brand-faint text-xs mt-0.5">{RESPONSAVEL.titulo} · {RESPONSAVEL.registro}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/congresso" className="btn btn-primary">Conheça o Congresso 2026 <ArrowRight size={16} /></Link>
                <a href="#topo" className="btn btn-outline">Voltar ao topo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
