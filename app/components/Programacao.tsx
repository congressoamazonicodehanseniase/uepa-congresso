'use client';

import { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { LOCAIS } from '../lib/config';

const days = [
  {
    num: '27',
    weekday: 'Quinta-feira',
    mes: 'Ago',
    theme: 'Capacitações',
    venue: LOCAIS.capacitacoes,
    activities: [
      'Capacitações técnico-científicas para profissionais e estudantes da área da saúde',
      'Oficinas práticas supervisionadas',
      'Conteúdo direcionado ao diagnóstico e manejo clínico',
    ],
  },
  {
    num: '28',
    weekday: 'Sexta-feira',
    mes: 'Ago',
    theme: 'Congresso Científico',
    venue: LOCAIS.congresso,
    activities: [
      'Cerimônia de abertura oficial',
      'Palestras com especialistas nacionais',
      'Mesas-redondas temáticas',
      'Apresentação de trabalhos científicos',
      'Debates sobre assistência, vigilância e pesquisa em hanseníase',
    ],
  },
  {
    num: '29',
    weekday: 'Sábado',
    mes: 'Ago',
    theme: 'Congresso Científico',
    venue: LOCAIS.congresso,
    activities: [
      'Palestras e mesas-redondas',
      'Sessão de pôsteres e comunicações orais',
      'Discussão de casos clínicos',
      'Premiação dos melhores trabalhos científicos',
      'Encerramento oficial do congresso',
    ],
  },
];

export default function Programacao() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="programacao" className="py-16 sm:py-24 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
            Três dias,<br />um propósito
          </h2>
          <p className="text-muted max-w-sm text-sm leading-relaxed">
            27/08: capacitações na UEPA. 28 e 29/08: congresso científico no Carajás Centro de
            Convenções. Horários e palestrantes em breve.
          </p>
        </div>

        {/* Cards dos três dias — desktop lado a lado, mobile accordion */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {days.map((d) => (
            <div
              key={d.num}
              className="rounded-2xl border border-line border-t-2 border-t-brand-strong bg-surface p-7 flex flex-col gap-5"
            >
              {/* Cabeçalho do dia */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="display leading-none text-ink" style={{ fontSize: 'clamp(3rem,5vw,4rem)' }}>
                    {d.num}
                  </span>
                  <p className="font-[family-name:var(--font-display)] font-semibold text-ink text-sm mt-1">{d.weekday}</p>
                  <p className="text-muted text-xs">{d.mes} 2026</p>
                </div>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-brand-strong border border-brand-tint rounded-full px-2.5 py-1">
                  {d.theme}
                </span>
              </div>

              {/* Local */}
              <div className="flex items-start gap-2 text-sm border-t border-line pt-5">
                <MapPin size={14} className="text-brand-strong flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-ink leading-snug">{d.venue.nome}</p>
                  <p className="text-muted text-xs mt-0.5 leading-snug">{d.venue.endereco}</p>
                </div>
              </div>

              {/* Atividades */}
              <ul className="flex flex-col gap-2.5 mt-1">
                {d.activities.map((a, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink-soft leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-brand-strong" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile: accordion */}
        <div className="lg:hidden flex flex-col gap-3">
          {days.map((d, i) => (
            <div key={d.num} className="rounded-2xl border border-line border-l-2 border-l-brand-strong bg-surface overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="display leading-none text-ink" style={{ fontSize: '2.4rem' }}>{d.num}</span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] font-semibold text-ink text-sm">{d.weekday} · {d.mes}</p>
                    <p className="text-muted text-xs">{d.theme}</p>
                  </div>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-muted shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>

              {open === i && (
                <div className="px-5 pb-5 border-t border-line">
                  <div className="flex items-start gap-2 text-sm py-4 mb-2">
                    <MapPin size={14} className="text-brand-strong flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-ink">{d.venue.nome}</p>
                      <p className="text-muted text-xs mt-0.5">{d.venue.endereco}</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {d.activities.map((a, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-ink-soft leading-snug">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-brand-strong" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-muted text-xs mt-8">
          * Programação preliminar. Horários, títulos e palestrantes serão divulgados pelos canais oficiais.
        </p>
      </div>
    </section>
  );
}
