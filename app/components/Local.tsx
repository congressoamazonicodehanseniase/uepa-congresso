'use client';

import { useState } from 'react';
import { MapPin, Plane } from 'lucide-react';
import { LOCAIS } from '../lib/config';

const venues = [LOCAIS.capacitacoes, LOCAIS.congresso];

export default function Local() {
  const [active, setActive] = useState(0);
  const v = venues[active];

  return (
    <section id="local" className="py-16 sm:py-24 bg-canvas border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="rule-label mb-7">Locais do evento</p>
          <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
            Marabá, no coração do sudeste amazônico
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed">
            Principal polo de saúde do sudeste do Pará e sede do ADHAM. As capacitações ocorrem na
            UEPA (27/08) e o congresso científico no Carajás Centro de Convenções (28 e 29/08).
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Seletor de sedes */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {venues.map((venue, i) => {
              const isActive = i === active;
              return (
                <button
                  key={venue.nome}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`text-left rounded-2xl border p-5 sm:p-6 transition-colors ${
                    isActive
                      ? 'border-brand-strong bg-brand-soft'
                      : 'border-line bg-surface hover:border-brand-tint'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`index-num shrink-0 ${isActive ? 'text-brand-strong' : 'text-brand-tint'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold tracking-[0.14em] uppercase text-brand-strong">{venue.rotulo}</p>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-lg mt-1.5 leading-snug">
                        {venue.nome}
                      </h3>
                      <p className="text-muted text-sm mt-1.5 leading-snug">{venue.endereco}</p>
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="flex items-start gap-3 text-sm text-ink-soft mt-1 px-1">
              <Plane size={18} className="text-brand-strong shrink-0 mt-0.5" />
              <p>Aeroporto de Marabá: João Correa da Rocha (MAB). Informações de hospedagem em breve.</p>
            </div>
          </div>

          {/* Mapa interativo — atualiza conforme a sede selecionada */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[20rem] lg:min-h-[26rem] rounded-2xl overflow-hidden border border-line bg-surface">
              <iframe
                key={v.nome}
                title={`Mapa — ${v.nome}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(v.mapsQuery)}&z=14&output=embed`}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(v.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand-strong text-sm font-semibold mt-4 hover:gap-2.5 transition-all"
            >
              <MapPin size={15} /> Abrir no Google Maps · {v.rotulo.split(' · ')[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
