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
  { label: 'Sede', value: 'UEPA e Carajás Centro de Convenções · Marabá-PA' },
  { label: 'Apoio', value: 'CNPq' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="pt-8 sm:pt-12 pb-16 sm:pb-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Abertura editorial assimétrica */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="rule-label mb-7">Sobre o congresso</p>
            <h2 className="display text-ink" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
              Um <span className="italic text-brand-strong">marco</span> para a Amazônia
            </h2>
            <p className="dropcap mt-7 text-ink-soft leading-relaxed text-sm">
              A persistência da hanseníase na Região Norte reforça a necessidade de serviços
              especializados, diagnóstico precoce e formação profissional qualificada. Da experiência
              construída pelo ADHAM nasceu o {CONGRESSO.nome}, fortalecendo a discussão científica
              sobre a doença na região.
            </p>
            <p className="mt-5 text-ink-soft leading-relaxed text-sm">
              Estruturado para ocorrer a cada dois anos, o evento visa consolidar-se como espaço
              permanente de atualização, intercâmbio de experiências e fortalecimento da pesquisa e da
              assistência em hanseníase na Amazônia Legal, reunindo especialistas, pesquisadores,
              gestores, profissionais e estudantes, com apoio do CNPq.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 text-brand-strong font-semibold mt-6 hover:gap-3 transition-all">
              Conheça o ADHAM, organizador do congresso <ArrowRight size={18} />
            </Link>
          </div>

          {/* Ficha sem foto, deslocada */}
          <div className="lg:col-span-5 lg:pt-16">
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

        {/* Por que participar */}
        <div className="mt-24 rounded-3xl bg-brand-darker text-white px-8 py-12 sm:px-12 sm:py-14">
          <div className="max-w-xl mb-12">
            <p className="rule-label mb-6 text-brand-light">Por que participar</p>
            <h2 className="display text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              O que você leva<br />do congresso
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                n: '01',
                title: 'Certificado com carga horária',
                desc: 'Documento oficial emitido aos participantes, com carga horária válida para atualização curricular e requisitos de educação continuada.',
              },
              {
                n: '02',
                title: 'Especialistas nacionais',
                desc: 'Palestras e mesas com profissionais vinculados à Sociedade Brasileira de Hansenologia, SBD e FIOCRUZ, referências nacionais na área.',
              },
              {
                n: '03',
                title: 'Apresentação de trabalhos',
                desc: 'Submita seu trabalho científico, apresente-o e receba certificação específica. Submissões abertas até 18/07/2026.',
              },
              {
                n: '04',
                title: 'Capacitações práticas',
                desc: 'Dia 27/08 dedicado a oficinas e capacitações técnicas para profissionais e estudantes, na UEPA.',
              },
              {
                n: '05',
                title: 'Rede científica amazônica',
                desc: 'Conecte-se a pesquisadores, gestores e clínicos que atuam na Amazônia Legal, um espaço único de intercâmbio na região.',
              },
              {
                n: '06',
                title: 'Apoio CNPq',
                desc: 'Evento com suporte do Conselho Nacional de Desenvolvimento Científico e Tecnológico, legitimidade científica reconhecida.',
              },
            ].map((b) => (
              <div key={b.n} className="border-t border-brand-edge pt-5">
                <span className="index-num text-brand-light block">{b.n}</span>
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-white text-base mt-2 leading-snug">{b.title}</h3>
                <p className="text-brand-faint text-sm mt-2 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-brand-edge flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/congresso/inscricao" className="btn btn-white">Garantir minha vaga agora</Link>
            <p className="text-brand-faint text-sm">Lotes esgotam rápido — o 1º e o 2º lote já esgotaram, garanta sua vaga no 3º lote!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
