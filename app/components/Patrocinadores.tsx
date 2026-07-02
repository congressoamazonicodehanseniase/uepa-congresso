import { CONTATO } from '../lib/config';
import { LeafMark } from './Decor';
import { LOGO_POR_NOME } from '../lib/parceiros';

const grupos = [
  { titulo: 'Realização', parceiros: ['ADHAM', 'UEPA', 'LIMDERM', 'CIPE'] },
  { titulo: 'Apoio científico', parceiros: ['CNPq', 'SBH'] },
  { titulo: 'Apoio institucional', parceiros: ['SMS Marabá'] },
  // SESPA e UNIACESSE temporariamente removidos
];

export default function Patrocinadores() {
  return (
    <section id="apoiadores" className="relative py-16 sm:py-24 bg-canvas overflow-hidden">
      <LeafMark className="absolute -bottom-12 -right-12 w-72 text-brand-tint rotate-[30deg] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="rule-label mb-7">Apoiadores e parceiros</p>
          <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
            Quem realiza<br />e apoia
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed">
            Uma realização do ADHAM em parceria com instituições de ensino, pesquisa, gestão pública e
            organizações científicas que fortalecem a rede de enfrentamento da hanseníase na Amazônia.
          </p>
        </div>

        <div className="space-y-10">
          {grupos.map((g) => (
            <div key={g.titulo} className="grid sm:grid-cols-[12rem_1fr] gap-4 sm:gap-8 border-t border-line pt-6">
              <p className="text-sm font-semibold tracking-[0.12em] uppercase text-brand-strong">{g.titulo}</p>
              <div className="flex flex-wrap items-center gap-x-9 gap-y-5">
                {g.parceiros.map((p) => {
                  const logo = LOGO_POR_NOME[p];
                  return logo ? (
                    <img
                      key={p}
                      src={logo}
                      alt={p}
                      title={p}
                      loading="lazy"
                      className="max-h-12 max-w-[8rem] w-auto object-contain transition-all duration-300 ease-out hover:-translate-y-1"
                    />
                  ) : (
                    <span key={p} className="font-[family-name:var(--font-display)] font-bold text-muted text-lg">{p}</span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>


        <div className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-3xl bg-brand-darker text-white p-8">
          <div>
            <p className="font-[family-name:var(--font-display)] font-bold text-xl">Seja um parceiro</p>
            <p className="text-brand-faint text-sm mt-1">Junte-se à rede de cuidado e ciência do congresso.</p>
          </div>
          <a href={`mailto:${CONTATO.email}`} className="btn btn-white shrink-0">Falar com a organização</a>
        </div>
      </div>
    </section>
  );
}
