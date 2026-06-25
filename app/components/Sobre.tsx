import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PhotoPlaceholder from './PhotoPlaceholder';
import { LeafMark } from './Decor';
import { CONGRESSO } from '../lib/config';
import { FOTOS } from '../lib/fotos';

const eixos = [
  { n: '01', title: 'Ciência', desc: 'Atualização científica, apresentação de trabalhos e troca de experiências sobre hanseníase.' },
  { n: '02', title: 'Educação médica', desc: 'Capacitações, oficinas, mesas-redondas e palestras para qualificação profissional.' },
  { n: '03', title: 'Impacto social', desc: 'Políticas públicas, combate ao estigma e enfrentamento da doença.' },
  { n: '04', title: 'Rede amazônica', desc: 'Fortalecimento da rede de profissionais e pesquisadores da Amazônia Legal.' },
];

const ficha = [
  { label: 'Realização', value: 'ADHAM · Ambulatório de Dermatologia e Hanseníase da Amazônia' },
  { label: 'Datas', value: CONGRESSO.datasLabel },
  { label: 'Sedes', value: 'UEPA e Carajás Centro de Convenções · Marabá-PA' },
  { label: 'Apoio', value: 'CNPq · periodicidade bienal' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Abertura editorial assimétrica */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="rule-label mb-7">Sobre o congresso</p>
            <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
              Um marco para a Amazônia
            </h2>
            <p className="dropcap mt-7 text-ink-soft leading-relaxed text-[1.08rem]">
              A persistência da hanseníase na Região Norte reforça a necessidade de serviços
              especializados, diagnóstico precoce e formação profissional qualificada. Da experiência
              construída pelo ADHAM nasceu o {CONGRESSO.nome}, fortalecendo a discussão científica
              sobre a doença na região.
            </p>
            <p className="mt-5 text-ink-soft leading-relaxed text-[1.02rem]">
              Estruturado para ocorrer a cada dois anos, o evento visa consolidar-se como espaço
              permanente de atualização, intercâmbio de experiências e fortalecimento da pesquisa e da
              assistência em hanseníase na Amazônia Legal, reunindo especialistas, pesquisadores,
              gestores, profissionais e estudantes, com apoio do CNPq.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 text-brand-strong font-semibold mt-6 hover:gap-3 transition-all">
              Conheça o ADHAM, organizador do congresso <ArrowRight size={18} />
            </Link>
          </div>

          {/* Ficha + foto, deslocadas */}
          <div className="lg:col-span-5 lg:pt-16">
            <div className="relative">
              <PhotoPlaceholder ratio="aspect-[4/3]" src={FOTOS.producao.src} caption={FOTOS.producao.alt} position="center 28%" />
              <LeafMark className="absolute -top-7 -left-7 w-20 text-brand-tint -rotate-12" />
            </div>
            <dl className="mt-6 divide-y divide-line border-t border-b border-line">
              {ficha.map((item) => (
                <div key={item.label} className="grid grid-cols-[7rem_1fr] gap-3 py-3.5">
                  <dt className="text-xs uppercase tracking-[0.12em] text-brand-strong font-semibold pt-0.5">{item.label}</dt>
                  <dd className="text-ink text-sm leading-snug">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Eixos — lista numerada editorial */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
          {eixos.map((e) => (
            <div key={e.n} className="border-t-2 border-brand-strong pt-4">
              <span className="index-num block">{e.n}</span>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink text-lg mt-2">{e.title}</h3>
              <p className="text-muted text-sm mt-1.5 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
