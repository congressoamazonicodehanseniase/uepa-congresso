import { LeafMark } from './Decor';
import { REDES } from '../lib/config';

// Palestrantes confirmados do I Congresso Amazônico de Hanseníase.
// Fotos e dados extraídos do material oficial (PDF "10 Palestrantes").
const palestrantes: { nome: string; titulo: string; instituicao: string; foto: string }[] = [
  {
    nome: 'Dr. Marco Andrey',
    titulo: 'Dermatologista · Doutor (USP), pós-doutor (Amsterdã)',
    instituicao: 'Presidente da Sociedade Brasileira de Hansenologia (2023–2026) · FMRP-USP',
    foto: '/palestrantes/marco-andrey.jpg',
  },
  {
    nome: 'Dr. Cláudio Salgado',
    titulo: 'Dermatologista · Doutor (Univ. de Tóquio)',
    instituicao: 'Professor Titular da UFPA · Fundador do LDI/UFPA · Ex-presidente da SBH',
    foto: '/palestrantes/claudio-salgado.jpg',
  },
  {
    nome: 'Dr. Jaison Barreto',
    titulo: 'Dermatologista e hansenologista · Doutor (USP)',
    instituicao: 'Instituto Lauro de Souza Lima (ILSL) · Aliança Contra a Hanseníase',
    foto: '/palestrantes/jaison-barreto.jpg',
  },
  {
    nome: 'Dra. Regina Carneiro',
    titulo: 'Dermatologista · Doutora (UNIFESP)',
    instituicao: 'Professora Titular da UEPA · Secretária-Geral da SBD',
    foto: '/palestrantes/regina-carneiro.jpg',
  },
  {
    nome: 'Dr. Josafá Barreto',
    titulo: 'Doutor em Doenças Tropicais (UFPA) · sanduíche na Emory (EUA)',
    instituicao: 'Professor Associado da UFPA · Coordenador do LabEE-UFPA (epidemiologia espacial)',
    foto: '/palestrantes/josafa-barreto.jpg',
  },
  {
    nome: 'Dra. Marília Brasil',
    titulo: 'Dermatologista e infectologista · Pós-doutora (FM-USP)',
    instituicao: 'Professora Titular da UEPA · Mestrado Saúde na Amazônia (UFPA/UEPA)',
    foto: '/palestrantes/marilia-brasil.jpg',
  },
  {
    nome: 'Dra. Lorena Carvalho',
    titulo: 'Dermatologista · Mestranda (UEPA)',
    instituicao: 'Membro da SBD · Dermatologista da SESMA/Belém · Docente do CESUPA',
    foto: '/palestrantes/lorena-carvalho.jpg',
  },
  {
    nome: 'Dra. Ilma Pastana',
    titulo: 'Enfermeira · Doutora e pós-doutora em Enfermagem',
    instituicao: 'Vice-Reitora da UEPA · PPGENF e PPGESA',
    foto: '/palestrantes/ilma-pastana.jpg',
  },
  {
    nome: 'Dr. Luann Wendel',
    titulo: 'Farmacêutico · Doutor em Inovação Farmacêutica (UFPA)',
    instituicao: 'Professor da UNIFESSPA · Coordenador do Curso de Medicina',
    foto: '/palestrantes/luann-wendel.jpg',
  },
  {
    nome: 'Dr. Anderson Bentes',
    titulo: 'Farmacêutico · Doutor em Biotecnologia (UFPA)',
    instituicao: 'Professor da UEPA · Bolsista de produtividade do CNPq',
    foto: '/palestrantes/anderson-bentes.jpg',
  },
];

export default function PalestrantesConvidados() {
  return (
    <section id="palestrantes-convidados" className="relative py-16 sm:py-24 bg-canvas overflow-hidden">
      <LeafMark className="absolute -top-10 -left-10 w-52 text-brand-tint rotate-[15deg] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
          <div className="lg:col-span-7">
            <p className="rule-label mb-7">Palestrantes confirmados</p>
            <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
              Especialistas convidados
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed max-w-xl">
              Referências nacionais em hanseníase, dermatologia tropical, pesquisa e saúde pública,
              vinculadas à Sociedade Brasileira de Hansenologia (SBH), à Sociedade Brasileira de
              Dermatologia (SBD), à UEPA, à UFPA e a outras instituições de ensino e pesquisa.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-4 flex flex-col gap-3">
            <a
              href={REDES.congresso.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-strong font-semibold text-sm hover:gap-3 transition-all"
            >
              Acompanhe os anúncios no {REDES.congresso.handle} →
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {palestrantes.map((p) => (
            <div
              key={p.nome}
              className="rounded-2xl border border-line bg-surface overflow-hidden flex flex-col transition-colors hover:border-brand-tint"
            >
              <div className="aspect-[4/5] bg-brand-soft overflow-hidden">
                <img
                  src={p.foto}
                  alt={p.nome}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-lg leading-snug">
                  {p.nome}
                </h3>
                <p className="text-brand-strong text-sm font-semibold mt-1.5 leading-snug">{p.titulo}</p>
                <p className="text-muted text-sm mt-1.5 leading-snug">{p.instituicao}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <p className="text-muted text-sm">
            * Palestrantes confirmados. Os temas, horários e a programação completa das palestras
            serão divulgados pelos canais oficiais do congresso.
          </p>
        </div>
      </div>
    </section>
  );
}
