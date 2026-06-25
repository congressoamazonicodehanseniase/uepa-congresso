'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { CheckCircle2, FileText, Clock } from 'lucide-react';
import { CONTATO, INSCRICOES_INFO } from '../lib/config';

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
  { q: 'Como faço a inscrição?', a: 'A inscrição será feita pela plataforma oficial. O link, o período por lote e os documentos serão divulgados pelos canais oficiais.' },
  { q: 'Haverá certificado?', a: 'Sim. O certificado com carga horária será emitido aos participantes; os critérios serão informados na confirmação.' },
  { q: 'Como submeter trabalhos?', a: `As submissões vão de ${INSCRICOES_INFO.submissaoPeriodo}. Normas, áreas temáticas, formato e certificação constarão no edital.` },
  { q: 'Como entro em contato?', a: `Pelo e-mail ${CONTATO.email} ou pelas redes sociais oficiais do congresso.` },
];

type FormData = { nome: string; email: string; registro: string; categoria: string };

const inputClass =
  'bg-surface border border-line rounded-xl px-4 py-3 text-sm text-ink placeholder-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand-tint transition w-full';

export default function Inscricoes() {
  const [form, setForm] = useState<FormData>({ nome: '', email: '', registro: '', categoria: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="inscricoes" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="rule-label mb-7">Inscrições</p>
            <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
              Garanta sua vaga
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-relaxed">
            Valores por categoria e lote. Os Estudantes Ligantes (LIMDERM e parceiros) têm gratuidade
            apenas no período indicado.
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
        <p className="text-muted text-sm mb-16">
          Os lotes seguem a ordem de inscrição: quanto antes, menor o valor.
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

        {/* Formulário */}
        <div id="formulario" className="rounded-3xl bg-brand-darker text-white p-8 md:p-10 mb-16">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 size={52} className="text-brand-light mx-auto mb-5" />
              <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl mb-3">Tudo certo!</h3>
              <p className="text-brand-faint max-w-sm mx-auto">
                Enviaremos o link da plataforma e os prazos no e-mail <strong className="text-white">{form.email}</strong>.
              </p>
            </div>
          ) : (
            <>
              <div className="max-w-xl mb-8">
                <h3 className="display text-white" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}>Receba o link de inscrição</h3>
                <p className="text-brand-faint mt-2">Deixe seus dados e enviamos o link da plataforma e os prazos de cada lote.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 mb-7 max-w-2xl">
                  <input name="nome" type="text" value={form.nome} onChange={handleChange} placeholder="Nome completo *" required className={inputClass} aria-label="Nome completo" />
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="E-mail *" required className={inputClass} aria-label="E-mail" />
                  <input name="registro" type="text" value={form.registro} onChange={handleChange} placeholder="CRM / Registro / Matrícula (opcional)" className={inputClass} aria-label="Registro" />
                  <select name="categoria" value={form.categoria} onChange={handleChange} required className={inputClass} aria-label="Categoria">
                    <option value="">Categoria *</option>
                    <option value="ligante">Estudante Ligante (LIMDERM e parceiros)</option>
                    <option value="estudante">Estudante (UEPA / outras instituições)</option>
                    <option value="profissional">Profissional da saúde</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-white">Quero receber o link</button>
                <p className="text-brand-faint text-xs mt-3">
                  Seus dados são protegidos conforme a{' '}
                  <a href="/privacidade" className="underline hover:text-white transition-colors">LGPD</a>.
                </p>
              </form>
            </>
          )}
        </div>

        {/* FAQ */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-t border-line pt-5">
              <h4 className="font-[family-name:var(--font-display)] font-semibold text-ink mb-1.5">{faq.q}</h4>
              <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
