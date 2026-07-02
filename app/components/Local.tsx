'use client';

import { useState } from 'react';
import { MapPin, Plane } from 'lucide-react';
import { LOCAIS } from '../lib/config';
import FotoSlideshow from './FotoSlideshow';

const venues = [LOCAIS.capacitacoes, LOCAIS.congresso];

export default function Local() {
  const [active, setActive] = useState(0);
  const v = venues[active];

  return (
    <section id="local" className="pt-8 sm:pt-12 pb-16 sm:pb-24 bg-canvas border-t border-line">
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
                <div
                  key={venue.nome}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                  aria-pressed={isActive}
                  className={`cursor-pointer rounded-2xl border p-3 transition-colors ${
                    isActive
                      ? 'border-brand-strong bg-brand-soft'
                      : 'border-line bg-surface hover:border-brand-tint'
                  }`}
                >
                  <FotoSlideshow
                    fotos={venue.fotos.map((src) => ({ src, alt: venue.nome }))}
                    ratio="aspect-[5/2]"
                    interval={4500}
                    position="center"
                    className="mb-3"
                  />
                  <div className="flex items-start gap-3 px-1">
                    <span className={`font-[family-name:var(--font-display)] text-xl font-bold leading-none shrink-0 ${isActive ? 'text-brand-strong' : 'text-brand-tint'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.62rem] font-semibold tracking-[0.04em] sm:tracking-[0.12em] uppercase text-brand-strong leading-snug">{venue.rotulo}</p>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-sm sm:text-base mt-0.5 leading-snug">
                        {venue.nome}
                      </h3>
                      {'desc' in venue && (
                        <p className="text-ink-soft text-xs mt-1 leading-relaxed">
                          {venue.desc}
                        </p>
                      )}
                      <p className="text-muted text-xs mt-1 leading-snug">{venue.endereco}</p>
                    </div>
                  </div>
                </div>
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
