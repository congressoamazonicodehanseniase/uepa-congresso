import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PhotoPlaceholder from './components/PhotoPlaceholder';
import GaleriaImpacto from './components/GaleriaImpacto';
import { CONTATO, REDES, RESPONSAVEL, CONGRESSO } from './lib/config';
import { FOTOS } from './lib/fotos';
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
  { value: '1º', label: 'Congresso Amazônico', sub: 'de Hanseníase (bienal)' },
];

const timeline = [
  { date: '2024', title: 'Nascimento do ADHAM', desc: 'Da parceria entre UEPA, LIMDERM e CIPE para fortalecer o cuidado dermatológico e o enfrentamento da hanseníase na região.' },
  { date: '31/10/2024', title: 'Inauguração oficial', desc: 'Marco de abertura do ambulatório, com docentes, gestores e acadêmicos da UEPA Campus VIII.' },
  { date: '22/11/2024', title: 'Primeiro atendimento', desc: 'Início das atividades assistenciais com o primeiro atendimento especializado.' },
  { date: 'Atual', title: 'Integração ao SUS', desc: 'A integração ao sistema municipal de regulação ampliou o acesso da população aos serviços especializados.' },
];

const pilares = [
  { n: '01', title: 'Assistência', desc: 'Atendimento especializado em dermatologia e hanseníase, com diagnóstico precoce, acompanhamento clínico e tratamento.' },
  { n: '02', title: 'Ensino', desc: 'Campo de prática qualificado para a formação acadêmica, com vivência clínica real para estudantes e profissionais.' },
  { n: '03', title: 'Pesquisa', desc: 'Investigação científica voltada às demandas epidemiológicas da Amazônia e à formação de pesquisadores.' },
  { n: '04', title: 'Extensão', desc: 'Ações que aproximam ciência, educação e comunidade no enfrentamento da hanseníase.' },
];

const extensao = [
  { title: 'II Jornada do Lúpus', desc: 'Integração e ciência fortalecendo o diálogo acadêmico sobre doenças autoimunes.', foto: FOTOS.jornadaLupus },
  { title: 'Cartas ao Cientista', desc: 'Ação de extensão que aproxima ciência, educação e comunidade.', foto: FOTOS.cartas },
  { title: 'Carreta Roda Hans', desc: 'Iniciativa do Ministério da Saúde; acadêmicos atuam na assistência em hanseníase em Marabá.', foto: FOTOS.carreta },
];

const reconhecimentos = [
  { title: 'Premiação CIPE: Impacto Social', desc: 'Reconhecimento da contribuição social do ADHAM.' },
  { title: 'Premiação CIPE: Produção Científica', desc: 'Reconhecimento da maior produção científica.' },
  { title: 'Aniversário UEPA 33 anos', desc: 'Reconhecimento institucional pela trajetória.' },
];

const visao = [
  { title: 'Referência na Amazônia Legal', desc: 'Consolidar-se como centro de referência em assistência, ensino, pesquisa e extensão.' },
  { title: 'Residência Médica de Dermatologia', desc: 'Criação de programa de residência médica em dermatologia.' },
  { title: 'Congresso Amazônico bienal', desc: 'Consolidar o congresso como espaço permanente de atualização e pesquisa.' },
];

const parceiros = ['UEPA', 'LIMDERM', 'CIPE', 'CNPq', 'SBH', 'SMS Marabá', 'SESPA', 'UNIACESSE'];

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
                <h1 className="display text-ink" style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.2rem)' }}>
                  Ambulatório de Dermatologia e <span className="text-brand-strong">Hanseníase</span> da Amazônia
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-lg text-ink-soft leading-relaxed">
                  Integramos assistência, ensino, pesquisa e extensão, ampliando o acesso ao
                  atendimento especializado na Amazônia.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#contato" className="btn btn-primary">Agendar atendimento</a>
                  <Link href="/congresso" className="btn btn-outline">Congresso {CONGRESSO.ano}</Link>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <PhotoPlaceholder ratio="aspect-[21/9]" priority src={FOTOS.hero.src} caption={FOTOS.hero.alt} position="center top" />
            </div>
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
        <section id="sobre" className="py-24 bg-surface">
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
                <PhotoPlaceholder ratio="aspect-[16/10]" src={FOTOS.inauguracao.src} caption={FOTOS.inauguracao.alt} />
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
        <section className="py-24 bg-brand-darker text-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.28em] uppercase text-brand-light mb-8">A hanseníase na Amazônia</p>
            <p className="display leading-[1.1]" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              A persistência da hanseníase na Região Norte reforça a necessidade de
              <span className="text-brand-light"> serviços especializados</span>, diagnóstico precoce e
              formação profissional qualificada.
            </p>
          </div>
        </section>

        {/* Impacto e trajetória */}
        <section id="impacto" className="py-24 bg-surface">
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

        {/* Pilares — numerado editorial */}
        <section id="atuacao" className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
              <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
                Quatro eixos,<br />um só propósito
              </h2>
              <p className="text-muted max-w-sm text-sm leading-relaxed">
                O ADHAM integra assistência, ensino, pesquisa e extensão no enfrentamento da hanseníase.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
              {pilares.map((p) => (
                <div key={p.n} className="border-t-2 border-brand-strong pt-4">
                  <span className="index-num block">{p.n}</span>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink text-lg mt-2">{p.title}</h3>
                  <p className="text-muted text-sm mt-1.5 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extensão */}
        <section className="py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <p className="rule-label mb-10">Extensão e comunidade · Ciência que chega à população</p>
            <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
              {extensao.map((e) => (
                <div key={e.title}>
                  <PhotoPlaceholder ratio="aspect-[16/10]" src={e.foto.src} caption={e.foto.alt} />
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink mt-4">{e.title}</h3>
                  <p className="text-muted text-sm mt-1.5 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reconhecimentos + Visão */}
        <section className="py-24 bg-canvas">
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
        <section id="congresso" className="py-24 bg-surface">
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
                  <Link href="/congresso#inscricoes" className="btn btn-ghost-light">Inscrições</Link>
                </div>
              </div>
              <PhotoPlaceholder ratio="min-h-[18rem] lg:min-h-full" src={FOTOS.evento.src} caption={FOTOS.evento.alt} className="m-6 lg:m-8" />
            </div>
          </div>
        </section>

        {/* Apoiadores */}
        <section id="apoiadores" className="py-24 bg-canvas border-t border-line">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <p className="rule-label mb-7">Apoiadores e parceiros</p>
              <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>Uma rede de cuidado e ciência</h2>
              <p className="mt-6 text-ink-soft leading-relaxed">
                O ADHAM desenvolve suas atividades em parceria com instituições de ensino, pesquisa,
                gestão pública e organizações científicas.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {parceiros.map((p) => (
                <span key={p} className="font-[family-name:var(--font-display)] font-bold text-ink text-xl">{p}</span>
              ))}
            </div>
            <p className="text-muted text-xs mt-6">Logotipos oficiais serão adicionados em breve.</p>
          </div>
        </section>

        {/* Contato + Responsável */}
        <section id="contato" className="py-24 bg-surface border-t border-line">
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

            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-brand-darker text-white p-8 md:p-10 grid sm:grid-cols-[auto_1fr] gap-8 items-start">
                <PhotoPlaceholder ratio="aspect-square" src={FOTOS.dyana.src} caption={FOTOS.dyana.alt} position="center top" className="w-32 sm:w-36" />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.18em] uppercase text-brand-light">Responsável Técnica</p>
                  <h3 className="display text-white mt-2" style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)' }}>{RESPONSAVEL.nome}</h3>
                  <p className="text-brand-faint mt-1">{RESPONSAVEL.titulo}</p>
                  <p className="text-brand-light text-sm mt-3 font-medium">{RESPONSAVEL.registro}</p>
                  <p className="text-brand-faint text-sm mt-4 leading-relaxed">
                    Graduada em Medicina pela UEPA, Mestra em Cirurgia Experimental (CIPE-UEPA) e
                    orientadora da LIMDERM. Membro da SBH, SBD, SBCD, GBM e SBC. Idealizadora do ADHAM e
                    Coordenação Geral e Científica do I Congresso Amazônico de Hanseníase.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
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
