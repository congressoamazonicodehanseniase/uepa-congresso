import PhotoPlaceholder from './PhotoPlaceholder';
import { FOTOS } from '../lib/fotos';

const coordenacao = [
  {
    name: 'Dra. Dyana Melkys Borges da Silva',
    role: 'Coordenação Geral e Científica',
    institution: 'Médica Dermatologista · CRM-PA 9310 · RQE 5394 (Dermatologia) · RQE 6065 (Hansenologia)',
    bio: 'Graduada em Medicina pela UEPA, Mestra em Cirurgia Experimental (CIPE-UEPA) e orientadora da LIMDERM. Membro da SBH, SBD, SBCD, GBM e SBC. Idealizadora do ADHAM.',
    foto: FOTOS.dyana,
  },
  {
    name: 'Dra. Milene Silveira Ferreira',
    role: 'Coordenação Científica',
    institution: 'Biomédica · Doutora em Biologia de Agentes Infecciosos e Parasitários',
    bio: 'Pós-doutora em Ciência da Saúde (FIOCRUZ-MG), docente da UEPA e pesquisadora do Instituto Evandro Chagas. Líder de grupo de pesquisa em doenças humanas e saúde única.',
    foto: FOTOS.milene,
  },
];

export default function Palestrantes() {
  return (
    <section id="palestrantes" className="py-12 sm:py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <p className="rule-label mb-4">Coordenação científica</p>
          <h2
            className="font-[family-name:var(--font-display)] font-bold text-ink leading-tight"
            style={{ fontSize: 'clamp(1.35rem, 2.6vw, 1.9rem)' }}
          >
            Quem conduz o congresso
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-7">
          {coordenacao.map((s, i) => (
            <div key={s.name} className="flex gap-4 rounded-xl border border-line bg-canvas p-4 sm:p-5">
              <div className="w-20 sm:w-24 shrink-0">
                <PhotoPlaceholder ratio="aspect-[4/5]" src={s.foto.src} caption={s.foto.alt} position="center top" />
              </div>
              <div className="min-w-0">
                <span className="font-[family-name:var(--font-display)] font-bold text-brand-strong text-xs">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-base leading-snug mt-0.5">
                  {s.name}
                </h3>
                <p className="text-brand-strong font-semibold text-sm mt-1">{s.role}</p>
                <p className="text-muted text-xs mt-0.5">{s.institution}</p>
                <p className="text-ink-soft text-sm mt-2.5 leading-relaxed">{s.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="relative mt-10 pl-9 sm:pl-12 max-w-2xl">
          <span
            aria-hidden
            className="absolute left-0 -top-3 font-[family-name:var(--font-display)] font-bold text-brand-tint leading-none select-none"
            style={{ fontSize: 'clamp(3.4rem, 7vw, 4.6rem)' }}
          >
            “
          </span>
          <p className="font-[family-name:var(--font-display)] text-lg sm:text-xl text-ink leading-snug italic">
            Com a participação de especialistas nacionais vinculados à Sociedade Brasileira de
            Dermatologia e à Sociedade Brasileira de Hansenologia.
          </p>

        </blockquote>
      </div>
    </section>
  );
}
