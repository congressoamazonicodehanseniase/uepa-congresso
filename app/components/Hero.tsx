import { CONGRESSO, LOCAIS, INSCRICAO_URL } from '../lib/config';

const dias = [
  { d: '27', w: 'Quinta' },
  { d: '28', w: 'Sexta' },
  { d: '29', w: 'Sábado' },
];

const provas = [
  'Certificado com carga horária',
  'Especialistas SBH e SBD',
  'Apoio CNPq',
];

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative bg-brand-darker text-white pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Mensagem de venda */}
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 font-[family-name:var(--font-display)] text-xs sm:text-sm tracking-[0.26em] uppercase text-brand-light">
              <span className="w-8 h-px bg-brand-edge" />
              {CONGRESSO.edicao} Edição · Bienal · Marabá, PA
            </p>
            <h1 className="display mt-5 text-white" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.6rem)' }}>
              Congresso <span className="text-brand-light italic">Amazônico</span> de Hanseníase
            </h1>
            <p className="mt-6 text-base sm:text-lg text-brand-faint leading-relaxed max-w-xl">
              Três dias de atualização científica com especialistas nacionais, certificação,
              apresentação de trabalhos e networking para quem atua na linha de frente da
              hanseníase na Amazônia.
            </p>

            {/* Prova social — linha editorial, sem ícones genéricos */}
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-faint">
              {provas.map((p, i) => (
                <span key={p} className="flex items-center gap-3">
                  {i > 0 && <span className="text-brand-edge">·</span>}
                  <span>{p}</span>
                </span>
              ))}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={INSCRICAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white">Garantir minha vaga</a>
              <a href="#programacao" className="btn btn-ghost-light">Ver programação</a>
            </div>

            {/* Urgência real */}
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="inline-flex items-center gap-2 text-brand-light font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-light" />
                Ligantes: gratuidade até 05/07
              </span>
              <span className="text-brand-edge">·</span>
              <span className="text-brand-faint">Submissão de trabalhos até 11/07</span>
            </p>
          </div>

          {/* Card de datas e local — âncora de conversão */}
          <div className="lg:col-span-5">
            <div className="rounded-[1.75rem] border border-brand-edge bg-brand-panel p-8 sm:p-9">
              <p className="flex items-center gap-3 font-[family-name:var(--font-display)] text-brand-light text-[0.7rem] uppercase tracking-[0.28em]">
                Agosto 2026
                <span className="flex-1 h-px bg-brand-edge" />
              </p>
              <div className="mt-6 flex items-stretch">
                {dias.map((x, i) => (
                  <div
                    key={x.d}
                    className={`flex-1 text-center ${i > 0 ? 'border-l border-brand-edge' : ''}`}
                  >
                    <span
                      className="display block text-white tabular-nums"
                      style={{ fontSize: 'clamp(2.9rem, 8vw, 4.4rem)', lineHeight: 0.82, letterSpacing: '-0.045em' }}
                    >
                      {x.d}
                    </span>
                    <span className="mt-3 block text-brand-light text-[0.6rem] font-semibold uppercase tracking-[0.24em]">
                      {x.w}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-6 border-t border-brand-edge text-sm leading-relaxed">
                <p className="text-white font-semibold">Marabá, Pará · Brasil</p>
                <p className="text-brand-faint mt-0.5">{LOCAIS.congresso.nome}</p>
                <p className="text-brand-light mt-0.5">{CONGRESSO.apoio} · Bienal</p>
              </div>
              <a href={INSCRICAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white w-full mt-7">
                Quero me inscrever
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
