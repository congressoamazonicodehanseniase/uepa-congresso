import PhotoPlaceholder from './PhotoPlaceholder';
import { LeafMark } from './Decor';
import { FOTOS } from '../lib/fotos';

const coordenacao = [
  {
    name: 'Dra. Dyana Melkys Borges da Silva',
    role: 'Coordenação Geral e Científica',
    institution: 'Médica Dermatologista · CRM-PA 9310 | RQE 53946065',
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
    <section id="palestrantes" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="rule-label mb-7">Coordenação científica</p>
          <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
            Quem conduz<br />o congresso
          </h2>
        </div>

        <div className="space-y-12">
          {coordenacao.map((s, i) => (
            <div
              key={s.name}
              className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${i % 2 ? 'md:[direction:rtl]' : ''}`}
            >
              <div className="md:col-span-4 [direction:ltr]">
                <div className="relative max-w-[16rem]">
                  <PhotoPlaceholder ratio="aspect-[4/5]" src={s.foto.src} caption={s.foto.alt} position="center top" />
                  <LeafMark className={`absolute w-16 text-brand-tint ${i % 2 ? '-bottom-6 -left-6 rotate-12' : '-bottom-6 -right-6 -rotate-12'}`} />
                </div>
              </div>
              <div className="md:col-span-8 [direction:ltr]">
                <span className="index-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="display text-ink mt-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>{s.name}</h3>
                <p className="text-brand-strong font-semibold mt-2">{s.role}</p>
                <p className="text-muted text-sm mt-1">{s.institution}</p>
                <p className="text-ink-soft mt-4 leading-relaxed max-w-xl">{s.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="mt-16 border-l-4 border-brand-strong pl-6 max-w-3xl">
          <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-ink leading-snug italic">
            “Com a participação de especialistas nacionais vinculados à Sociedade Brasileira de
            Dermatologia e à Sociedade Brasileira de Hansenologia.”
          </p>
          <footer className="text-muted text-sm mt-3">Os nomes e convidados serão anunciados em breve.</footer>
        </blockquote>
      </div>
    </section>
  );
}
