'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { LOCAIS } from '../lib/config';

const days = [
  {
    num: '27',
    weekday: 'Quinta',
    theme: 'Capacitações',
    venue: LOCAIS.capacitacoes,
    activities: ['Capacitações técnico-científicas direcionadas a profissionais e estudantes da área da saúde'],
  },
  {
    num: '28',
    weekday: 'Sexta',
    theme: 'Congresso Científico',
    venue: LOCAIS.congresso,
    activities: [
      'Palestras com especialistas',
      'Mesas-redondas',
      'Discussões científicas',
      'Apresentação de trabalhos científicos',
      'Debates sobre assistência, vigilância e pesquisa em hanseníase',
    ],
  },
  {
    num: '29',
    weekday: 'Sábado',
    theme: 'Congresso Científico',
    venue: LOCAIS.congresso,
    activities: [
      'Palestras com especialistas',
      'Mesas-redondas',
      'Discussões científicas',
      'Apresentação de trabalhos científicos',
      'Debates sobre assistência, vigilância e pesquisa em hanseníase',
    ],
  },
];

export default function Programacao() {
  const [active, setActive] = useState(0);
  const day = days[active];

  return (
    <section id="programacao" className="py-24 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
            Três dias,<br />um propósito
          </h2>
          <p className="text-muted max-w-sm text-sm leading-relaxed">
            27 de agosto: capacitações na UEPA. 28 e 29: congresso científico no Carajás Centro de
            Convenções. Horários e palestrantes em breve.
          </p>
        </div>

        <div className="grid lg:grid-cols-[16rem_1fr] gap-8 lg:gap-14">
          {/* Trilha de dias */}
          <div className="flex lg:flex-col gap-3">
            {days.map((d, i) => (
              <button
                key={d.num}
                onClick={() => setActive(i)}
                className={`flex-1 lg:flex-none text-left flex items-baseline gap-3 border-l-2 pl-4 py-2 transition-colors ${
                  active === i ? 'border-brand-strong' : 'border-line hover:border-brand-tint'
                }`}
              >
                <span className={`display leading-none ${active === i ? 'text-brand-strong' : 'text-brand-tint'}`} style={{ fontSize: 'clamp(2.2rem,5vw,3.4rem)' }}>
                  {d.num}
                </span>
                <span className="leading-tight">
                  <span className={`block text-sm font-semibold ${active === i ? 'text-ink' : 'text-muted'}`}>{d.weekday}</span>
                  <span className={`block text-xs ${active === i ? 'text-brand-strong' : 'text-muted'}`}>AGO · {d.theme}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Conteúdo do dia */}
          <div>
            <div className="flex items-start gap-3 pb-6 mb-6 border-b border-line">
              <MapPin size={18} className="text-brand-strong flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[family-name:var(--font-display)] font-semibold text-ink">{day.venue.nome}</p>
                <p className="text-muted text-sm">{day.venue.endereco}</p>
              </div>
            </div>

            <ol className="space-y-0">
              {day.activities.map((a, i) => (
                <li key={i} className="flex gap-5 py-4 border-b border-line/70 last:border-0 group">
                  <span className="index-num text-brand-tint leading-none w-12 shrink-0" style={{ fontSize: '1.6rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-ink leading-snug pt-1.5 group-hover:text-brand-strong transition-colors">{a}</p>
                </li>
              ))}
            </ol>

            <p className="text-muted text-sm mt-8">
              * Programação preliminar. Horários, títulos e palestrantes serão divulgados pelos canais oficiais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
