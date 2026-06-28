import { FileText, Clock, ArrowUpRight } from 'lucide-react';
import { CONTATO, INSCRICOES_INFO, INSCRICAO_URL } from '../lib/config';

const tabela = [
  {
    name: 'Estudantes Ligantes',
    sub: 'LIMDERM e parceiros',
    lotes: [{ lote: `Inscrições de ${INSCRICOES_INFO.ligantesPeriodo}`, valor: 'Gratuito' }],
    free: true,
  },
  {
    name: 'Estudantes',
    sub: 'Alunos UEPA (não ligantes) e de outras instituições',
    lotes: [
      { lote: '1º lote', valor: 'R$ 40' },
      { lote: '2º lote', valor: 'R$ 60' },
      { lote: '3º lote', valor: 'R$ 80' },
    ],
  },
  {
    name: 'Profissionais da Saúde',
    sub: 'Médicos, residentes, pós-graduandos e Agentes Técnicos (ACS/ACE)',
    lotes: [
      { lote: 'Lote promocional', valor: 'R$ 80' },
      { lote: '2º lote', valor: 'R$ 100' },
      { lote: '3º lote', valor: 'R$ 150' },
      { lote: '4º lote', valor: 'R$ 180' },
    ],
  },
];

const faqs = [
  { q: 'Como faço a inscrição?', a: 'A inscrição é feita pela plataforma oficial do evento no Even3. Clique em “Inscrever-se” e conclua por lá; o período por lote e os documentos constam na própria página.' },
  { q: 'Haverá certificado?', a: 'Sim. O certificado com carga horária será emitido aos participantes; os critérios serão informados na confirmação.' },
  { q: 'Como submeter trabalhos?', a: `As submissões vão de ${INSCRICOES_INFO.submissaoPeriodo}. Normas, áreas temáticas, formato e certificação constarão no edital.` },
  { q: 'Como entro em contato?', a: `Pelo e-mail ${CONTATO.email} ou pelas redes sociais oficiais do congresso.` },
];

export default function Inscricoes() {
  return (
    <section id="inscricoes" className="py-16 sm:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        {/* Faixa de urgência */}
        <div className="mb-10 rounded-2xl bg-brand-darker text-white px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-brand-light text-xs font-semibold uppercase tracking-widest">Atenção</span>
            <span className="w-px h-4 bg-brand-edge hidden sm:block" />
            <span className="text-white text-sm font-medium">Ligantes LIMDERM: <strong>gratuidade encerra 05/07</strong></span>
            <span className="w-px h-4 bg-brand-edge hidden sm:block" />
            <span className="text-white text-sm font-medium">Submissão de trabalhos: <strong>até 11/07</strong></span>
          </div>
          <a href={INSCRICAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white btn-sm shrink-0">Quero me inscrever</a>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="rule-label mb-7">Inscrições</p>
            <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
              Inscreva-se agora —<br />o 1º lote é o menor preço
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-relaxed">
            Os valores aumentam a cada lote. Inscreva-se quanto antes para garantir
            o menor preço disponível na sua categoria.
          </p>
        </div>

        {/* Valores por categoria e lote */}
        <div className="space-y-4 mb-5">
          {tabela.map((c) => (
            <div
              key={c.name}
              className={`rounded-2xl border p-6 md:p-7 grid md:grid-cols-12 gap-5 md:gap-8 md:items-center transition-colors ${
                c.free ? 'border-brand-tint bg-brand-soft' : 'border-line bg-surface hover:border-brand-tint'
              }`}
            >
              <div className="md:col-span-4">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-xl leading-tight">{c.name}</h3>
                <p className="text-muted text-sm mt-1.5 leading-snug">{c.sub}</p>
              </div>

              {c.free ? (
                <div className="md:col-span-8 md:text-right">
                  <p className="font-[family-name:var(--font-display)] font-extrabold text-3xl text-brand-strong leading-none">Gratuito</p>
                  <p className="text-ink-soft text-sm mt-2">
                    Inscrições de {INSCRICOES_INFO.ligantesPeriodo}, exclusivamente neste período.
                  </p>
                </div>
              ) : (
                <div className="md:col-span-8 flex flex-wrap gap-3 md:justify-end">
                  {c.lotes.map((l, idx) => (
                    <div
                      key={l.lote}
                      className={`rounded-xl border px-4 py-3 min-w-[7.25rem] flex-1 sm:flex-none ${
                        idx === 0 ? 'border-brand-strong bg-brand-soft' : 'border-line bg-canvas'
                      }`}
                    >
                      <p className="text-[0.66rem] uppercase tracking-[0.08em] text-muted">{l.lote}</p>
                      <p className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-brand-strong mt-0.5 leading-none">{l.valor}</p>
                      {idx === 0 && (
                        <p className="text-[0.6rem] uppercase tracking-[0.1em] text-brand-strong font-semibold mt-1.5">Melhor preço</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Progressão de preço — trilho único, do menor ao maior valor */}
        <div className="mt-4 mb-6 flex items-center gap-3 text-xs">
          <span className="font-semibold text-brand-strong whitespace-nowrap">1º lote · menor preço</span>
          <span className="relative flex-1 h-px bg-brand-tint">
            <span className="absolute left-0 -top-[3px] w-1.5 h-1.5 rounded-full bg-brand-strong" />
            <span className="absolute right-0 -top-[3px] w-1.5 h-1.5 rounded-full bg-muted" />
          </span>
          <span className="text-muted whitespace-nowrap">maior valor</span>
        </div>
        <p className="text-muted text-sm mb-16">
          Os lotes encerram por ordem de inscrição — ao esgotar um lote, o próximo valor passa a valer imediatamente.
        </p>

        {/* Submissão + público-alvo */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <FileText size={20} className="text-brand-strong" />
              <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-lg">Submissão de trabalhos</h3>
            </div>
            <div className="inline-flex items-center gap-2 bg-brand-soft border border-brand-tint text-brand-strong px-3 py-1.5 rounded-full text-sm font-medium">
              <Clock size={14} /> {INSCRICOES_INFO.submissaoPeriodo}
            </div>
            <p className="text-muted text-sm mt-4 leading-relaxed">
              O edital trará normas para resumo, áreas temáticas e eixos, formato de apresentação e
              regras de certificação.
            </p>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-lg mb-3">Público-alvo</h3>
            <p className="text-ink-soft leading-relaxed">
              {INSCRICOES_INFO.publicoAlvo.join(' · ')}
            </p>
          </div>
        </div>

        {/* Chamada de inscrição — direto ao Even3 */}
        <div className="rounded-3xl bg-brand-darker text-white p-8 md:p-12 mb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:items-center">
            <div className="lg:col-span-8">
              <p className="rule-label mb-5 text-brand-light">Inscrição oficial</p>
              <h3 className="display text-white" style={{ fontSize: 'clamp(1.7rem,3.2vw,2.6rem)' }}>
                Garanta sua vaga enquanto o 1º lote está aberto
              </h3>
              <p className="text-brand-faint mt-4 max-w-xl leading-relaxed">
                Inscrições e submissão de trabalhos pela plataforma oficial do evento. Quanto antes
                você se inscreve, menor o valor — o 1º lote tem o melhor preço da sua categoria.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href={INSCRICAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white w-full sm:w-auto text-base px-8 py-3.5"
              >
                Inscrever-se agora <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-16">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-t border-line pt-5">
              <h4 className="font-[family-name:var(--font-display)] font-semibold text-ink mb-1.5">{faq.q}</h4>
              <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="border-t-2 border-brand-strong pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-[family-name:var(--font-display)] font-bold text-ink text-xl leading-snug">
              Ficou com dúvida? Fale direto com a organização.
            </p>
            <p className="text-muted text-sm mt-1">
              E-mail: <a href={`mailto:${CONTATO.email}`} className="text-brand-strong hover:underline">{CONTATO.email}</a>
              {' · '}Instagram: <a href="https://instagram.com/CAHANS_" target="_blank" rel="noopener noreferrer" className="text-brand-strong hover:underline">@CAHANS_</a>
            </p>
          </div>
          <a href={INSCRICAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary shrink-0">Garantir vaga agora</a>
        </div>
      </div>
    </section>
  );
}
