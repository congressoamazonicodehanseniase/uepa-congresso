import { LeafMark } from './Decor';
import { REDES } from '../lib/config';

// Adicione os palestrantes confirmados aqui quando disponíveis.
// Deixe o array vazio para exibir o estado "em breve".
const palestrantes: { nome: string; titulo: string; instituicao: string }[] = [
  // { nome: 'Dr. Nome Sobrenome', titulo: 'Especialidade · Titulação', instituicao: 'Instituição' },
];

export default function PalestrantesConvidados() {
  return (
    <section id="palestrantes-convidados" className="relative py-16 sm:py-24 bg-canvas overflow-hidden">
      <LeafMark className="absolute -top-10 -left-10 w-52 text-brand-tint rotate-[15deg] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
          <div className="lg:col-span-7">
            <p className="rule-label mb-7">Palestrantes</p>
            <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
              Especialistas convidados
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed max-w-xl">
              Com participação de especialistas nacionais vinculados à Sociedade Brasileira de
              Hansenologia (SBH) e à Sociedade Brasileira de Dermatologia (SBD). Os nomes
              confirmados serão divulgados pelos canais oficiais.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-4 flex flex-col gap-3">
            <a
              href={`https://instagram.com/CAHANS_`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-strong font-semibold text-sm hover:gap-3 transition-all"
            >
              Acompanhe os anúncios no {REDES.congresso.handle} →
            </a>
          </div>
        </div>

        {palestrantes.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {palestrantes.map((p, i) => (
              <div key={p.nome} className="rounded-2xl border border-line bg-surface p-6">
                <span className="index-num block text-brand-tint">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-lg mt-2 leading-snug">{p.nome}</h3>
                <p className="text-brand-strong text-sm font-semibold mt-1">{p.titulo}</p>
                <p className="text-muted text-sm mt-0.5">{p.instituicao}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { sigla: 'SBH', nome: 'Sociedade Brasileira de Hansenologia', papel: 'Especialistas convidados' },
              { sigla: 'SBD', nome: 'Sociedade Brasileira de Dermatologia', papel: 'Referências nacionais' },
              { sigla: 'FIOCRUZ', nome: 'Fundação Oswaldo Cruz', papel: 'Pesquisa e saúde pública' },
            ].map((p) => (
              <div
                key={p.sigla}
                className="relative rounded-2xl border border-line bg-surface p-7 overflow-hidden transition-colors hover:border-brand-tint"
              >
                <LeafMark className="absolute -right-5 -top-5 w-20 text-brand-soft rotate-6 pointer-events-none" />
                <div className="relative">
                  <p className="font-[family-name:var(--font-display)] font-extrabold text-brand-strong text-2xl tracking-tight">{p.sigla}</p>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink text-base mt-2 leading-snug">{p.nome}</h3>
                  <p className="text-muted text-sm mt-1.5 leading-relaxed">{p.papel}</p>
                  <div className="mt-6 pt-4 border-t border-line flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-strong" />
                    <span className="text-xs uppercase tracking-[0.16em] text-brand-strong font-semibold">Nomes a confirmar</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 border-t border-line pt-8">
          <p className="text-muted text-sm">
            * Programação de palestrantes em fase de confirmação. Acompanhe os anúncios nas
            redes sociais oficiais do congresso.
          </p>
        </div>
      </div>
    </section>
  );
}
