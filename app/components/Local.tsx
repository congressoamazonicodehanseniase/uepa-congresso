import { MapPin, Plane } from 'lucide-react';
import PhotoPlaceholder from './PhotoPlaceholder';
import { LeafMark } from './Decor';
import { LOCAIS } from '../lib/config';
import { FOTOS } from '../lib/fotos';

const venues = [LOCAIS.capacitacoes, LOCAIS.congresso];

export default function Local() {
  return (
    <section id="local" className="py-24 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Coluna editorial */}
          <div className="lg:col-span-5">
            <p className="rule-label mb-7">Locais do evento</p>
            <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
              Marabá, no coração do sudeste amazônico
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Principal polo de saúde do sudeste do Pará e sede do ADHAM. As capacitações ocorrem na
              UEPA (27/08) e o congresso científico no Carajás Centro de Convenções (28 e 29/08).
            </p>
            <div className="relative mt-8">
              <PhotoPlaceholder ratio="aspect-[16/10]" src={FOTOS.fachada.src} caption="Sede do ADHAM · Marabá, Pará" />
              <LeafMark className="absolute -top-6 right-6 w-12 text-brand-tint rotate-12" />
            </div>
            <div className="mt-5 flex items-start gap-3 text-sm text-ink-soft">
              <Plane size={18} className="text-brand-strong flex-shrink-0 mt-0.5" />
              <p>Aeroporto de Marabá: João Correa da Rocha (MAB). Informações de hospedagem em breve.</p>
            </div>
          </div>

          {/* Sedes numeradas */}
          <div className="lg:col-span-7 lg:pt-4">
            {venues.map((v, i) => (
              <div key={v.nome} className="border-t border-line py-7 first:border-t-0 lg:first:border-t">
                <div className="flex items-start gap-5">
                  <span className="index-num shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold tracking-[0.14em] uppercase text-brand-strong">{v.rotulo}</p>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-xl mt-1.5 leading-snug">{v.nome}</h3>
                    <p className="text-muted mt-1.5">{v.endereco}</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(v.mapsQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-brand-strong text-sm font-semibold mt-4 hover:gap-2.5 transition-all"
                    >
                      <MapPin size={15} /> Ver no Maps
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
