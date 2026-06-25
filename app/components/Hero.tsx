import { LeafMark, WaveBottom } from './Decor';
import { CONGRESSO, LOCAIS } from '../lib/config';

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-brand-darker text-white pt-32 pb-36 lg:pt-40">
      {/* Decoração orgânica */}
      <LeafMark className="absolute -top-10 -right-10 w-72 text-brand-panel rotate-[18deg] pointer-events-none" />
      <LeafMark className="absolute bottom-24 -left-16 w-56 text-brand-panel -rotate-[24deg] pointer-events-none" />
      <LeafMark className="absolute top-44 right-1/3 w-14 text-brand-panel rotate-[35deg] pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.3em] uppercase text-brand-light">
            {CONGRESSO.edicao} Congresso · Bienal · Marabá, PA
          </p>

          <h1 className="display mt-6 text-white" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
            Congresso<br />
            <span className="text-brand-light italic">Amazônico</span><br />
            de Hanseníase
          </h1>

          <p className="mt-8 text-lg md:text-xl text-brand-faint leading-relaxed max-w-lg">
            Ciência, clínica e comunidade reunidas para transformar o enfrentamento
            da hanseníase na Amazônia. Uma realização do ADHAM, com apoio do CNPq.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brand-faint">
            <span className="text-white font-semibold">{CONGRESSO.datasLabel}</span>
            <span className="text-brand-edge">/</span>
            <span>{LOCAIS.congresso.nome.split('–')[0].trim()}</span>
            <span className="text-brand-edge">/</span>
            <span>{CONGRESSO.apoio}</span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#inscricoes" className="btn btn-white">Inscreva-se</a>
            <a href="#programacao" className="btn btn-ghost-light">Ver programação</a>
          </div>
        </div>

        {/* Data como peça gráfica */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="border border-brand-edge rounded-[2rem] p-10 text-center bg-brand-panel">
              <p className="font-[family-name:var(--font-display)] text-brand-light tracking-[0.3em] uppercase text-xs">Agosto · 2026</p>
              <div className="mt-4 flex items-end justify-center gap-3 leading-none">
                <span className="display text-white" style={{ fontSize: 'clamp(3.5rem,9vw,6rem)' }}>27</span>
                <span className="display outline-text" style={{ fontSize: 'clamp(3.5rem,9vw,6rem)', WebkitTextStroke: '2px var(--color-brand-light)' }}>28</span>
                <span className="display text-brand-light" style={{ fontSize: 'clamp(3.5rem,9vw,6rem)' }}>29</span>
              </div>
              <p className="mt-5 text-brand-faint text-sm border-t border-brand-edge pt-5">
                Quinta · Sexta · Sábado<br />Marabá, Pará, Brasil
              </p>
            </div>
            <LeafMark className="absolute -bottom-8 -right-6 w-24 text-brand-light rotate-12" />
          </div>
        </div>
      </div>

      <WaveBottom className="absolute bottom-0 left-0 w-full h-20 text-canvas" />
    </section>
  );
}
