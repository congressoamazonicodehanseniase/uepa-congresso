'use client';

import { useState } from 'react';
import { LeafMark } from './Decor';
import { REDES } from '../lib/config';
import { X, ExternalLink } from 'lucide-react';

type Palestrante = {
  nome: string;
  titulo: string;
  instituicao: string;
  foto: string;
  curriculo: string;
  lattes?: string;
};

// Palestrantes confirmados do I Congresso Amazônico de Hanseníase.
const palestrantes: Palestrante[] = [
  {
    nome: 'Dr. Marco Andrey',
    titulo: 'Dermatologista · Doutor (USP), pós-doutor (Amsterdã)',
    instituicao: 'Presidente da Sociedade Brasileira de Hansenologia (2023–2026) · FMRP-USP',
    foto: '/palestrantes/marco-andrey.jpg',
    curriculo: 'Médico pela Universidade Federal de Juiz de Fora, Dermatologista, Doutor pela USP e pós-doutor pela Universidade de Amsterdã. Professor Titular da FMRP-USP, coordenador do Laboratório de Cicatrização e Hanseníase e do Programa de Pós-Graduação em Clínica Médica. Presidente da Sociedade Brasileira de Hansenologia (2023–2026) e membro do Conselho da International Leprosy Association (ILA). Atua em hanseníase, dermatologia, cicatrização e pesquisa translacional.',
    lattes: 'http://lattes.cnpq.br/9103136155056414',
  },
  {
    nome: 'Dr. Cláudio Salgado',
    titulo: 'Dermatologista · Doutor (Univ. de Tóquio)',
    instituicao: 'Professor Titular da UFPA · Fundador do LDI/UFPA · Ex-presidente da SBH',
    foto: '/palestrantes/claudio-salgado.jpg',
    curriculo: 'Médico pela UEPA, Doutor em Medicina pela Universidade de Tóquio, Professor Titular da UFPA e fundador do LDI/UFPA. Referência em hanseníase, dermatologia tropical e imunologia. Ex-presidente da Sociedade Brasileira de Hansenologia, Conselheiro da International Leprosy Association (Américas) e Coordenador da Área Ciências Biológicas II da CAPES.',
    lattes: 'http://lattes.cnpq.br/2310734509396125',
  },
  {
    nome: 'Dr. Jaison Barreto',
    titulo: 'Dermatologista e hansenólogo · Doutor (USP)',
    instituicao: 'Instituto Lauro de Souza Lima (ILSL) · Aliança Contra a Hanseníase',
    foto: '/palestrantes/jaison-barreto.jpg',
    curriculo: 'Médico pela Universidade Federal de Santa Catarina, especialista em Dermatologia e Hansenologia, Doutor em Dermatologia pela USP. Médico do Instituto Lauro de Souza Lima (ILSL), preceptor da Residência Médica em Dermatologia e assessor médico da Aliança Contra a Hanseníase. Atua em Dermatologia, Dermatopatologia e Hansenologia.',
    lattes: 'http://lattes.cnpq.br/5343952256246039',
  },
  {
    nome: 'Dra. Regina Carneiro',
    titulo: 'Dermatologista · Doutora (UNIFESP)',
    instituicao: 'Professora Titular da UEPA · Secretária-Geral da SBD',
    foto: '/palestrantes/regina-carneiro.jpg',
    curriculo: 'Graduada em Medicina pela Universidade Federal do Pará (1985), com especialização em Dermatologia Tropical (UFPA), Mestrado em Dermatologia e Doutorado em Medicina (Dermatologia) pela Universidade Federal de São Paulo (UNIFESP). É Professora Titular de Dermatologia da Universidade do Estado do Pará (UEPA) desde 2013, docente permanente dos programas de pós-graduação em Cirurgia Experimental e Biologia dos Agentes Parasitários da UEPA. Atua como Coordenadora e Preceptora da Residência Médica em Dermatologia da UEPA e exerce o cargo de Secretária-Geral da Sociedade Brasileira de Dermatologia. Desenvolve atividades de ensino, assistência e pesquisa com ênfase em Dermatologia Tropical, dermatoses inflamatórias e dermatologia pediátrica.',
    lattes: 'http://lattes.cnpq.br/1387234135281918',
  },
  {
    nome: 'Dr. Josafá Barreto',
    titulo: 'Doutor em Doenças Tropicais (UFPA) · sanduíche na Emory (EUA)',
    instituicao: 'Professor Associado da UFPA · Coordenador do LabEE-UFPA (epidemiologia espacial)',
    foto: '/palestrantes/josafa-barreto.jpg',
    curriculo: 'Professor Associado II da Universidade Federal do Pará (UFPA), com mestrado e doutorado em Doenças Tropicais pela UFPA e doutorado sanduíche na Emory University (EUA). Atua como docente de Saúde Coletiva no Campus Castanhal e como professor permanente do Programa de Pós-Graduação em Doenças Tropicais da UFPA. Desenvolve pesquisas em epidemiologia espacial da hanseníase, com ênfase na distribuição espacial da doença, soroprevalência em municípios endêmicos e aplicação de Sistemas de Informação Geográfica (SIG) e geoprocessamento em saúde pública. É fundador e coordenador do Laboratório de Epidemiologia Espacial da UFPA (LabEE-UFPA) desde 2014, criado com financiamento do CNPq.',
    lattes: 'http://lattes.cnpq.br/1894551542259862',
  },
  {
    nome: 'Dra. Marília Brasil',
    titulo: 'Dermatologista e infectologista · Pós-doutora (FM-USP)',
    instituicao: 'Professora Titular da UEPA · Mestrado Saúde na Amazônia (UFPA/UEPA)',
    foto: '/palestrantes/marilia-brasil.jpg',
    curriculo: 'Médica dermatologista e infectologista, com doutorado pela UFPA e pós-doutorado pela FM-USP. É Professora Titular de Dermatologia da UEPA, docente da UFPA e coordenadora do Mestrado Profissional Saúde na Amazônia (UFPA/UEPA). Atua em ensino, assistência e pesquisa com ênfase em hanseníase, HIV/AIDS, leishmanioses, dermatologia tropical e epidemiologia de doenças endêmicas da Amazônia.',
    lattes: 'http://lattes.cnpq.br/0548879430701901',
  },
  {
    nome: 'Dra. Lorena Carvalho',
    titulo: 'Dermatologista · Mestranda (UEPA)',
    instituicao: 'Membro da SBD · Dermatologista da SESMA/Belém · Docente do CESUPA',
    foto: '/palestrantes/lorena-carvalho.jpg',
    curriculo: 'Médica dermatologista, mestre em andamento pela UEPA, com atuação em dermatologia clínica, cirúrgica, dermatoscopia e cosmiatria. Graduada em Medicina pela UEPA e especialista em Dermatologia pela UFPA. É membro titular da Sociedade Brasileira de Dermatologia, dermatologista da SESMA/Belém e docente de Dermatologia do CESUPA, onde coordena o ambulatório de cirurgia dermatológica.',
    lattes: 'http://lattes.cnpq.br/7517604215547189',
  },
  {
    nome: 'Dra. Ilma Pastana',
    titulo: 'Enfermeira · Doutora e pós-doutora em Enfermagem',
    instituicao: 'Vice-Reitora da UEPA · PPGENF e PPGESA',
    foto: '/palestrantes/ilma-pastana.jpg',
    curriculo: 'Enfermeira, mestre, doutora e pós-doutora em Enfermagem. Atualmente é Vice-Reitora da Universidade do Estado do Pará (UEPA), professora da graduação e dos programas de pós-graduação em Enfermagem (PPGENF) e Ensino na Saúde na Amazônia (PPGESA). Possui experiência em enfermagem cirúrgica, controle de infecções, gestão em saúde e educação em enfermagem, tendo ocupado cargos de destaque na UEPA e na Associação Brasileira de Enfermagem (ABEn), com relevante atuação no ensino, na pesquisa e na gestão acadêmica.',
    lattes: 'http://lattes.cnpq.br/1650337093024641',
  },
  {
    nome: 'Dr. Luann Wendel',
    titulo: 'Farmacêutico · Doutor em Inovação Farmacêutica (UFPA)',
    instituicao: 'Professor da UNIFESSPA · Coordenador do Curso de Medicina',
    foto: '/palestrantes/luann-wendel.jpg',
    curriculo: 'Farmacêutico, doutor em Inovação Farmacêutica e mestre em Ciências Farmacêuticas pela UFPA, com pós-doutorado em Doenças Tropicais pelo Núcleo de Medicina Tropical da UFPA. É Professor Adjunto e Pesquisador da UNIFESSPA, Coordenador da Faculdade de Medicina e do Curso de Medicina, além de coordenador do Programa de Pós-Graduação em Saúde da Família. Atua em pesquisa nas áreas de doenças tropicais e negligenciadas, assistência farmacêutica, farmacologia clínica, farmacogenômica e saúde coletiva, com produção científica e orientação em programas de pós-graduação.',
    lattes: 'http://lattes.cnpq.br/6233488431016391',
  },
  {
    nome: 'Dr. Anderson Bentes',
    titulo: 'Farmacêutico · Doutor em Biotecnologia (UFPA)',
    instituicao: 'Professor da UEPA · Bolsista de produtividade do CNPq',
    foto: '/palestrantes/anderson-bentes.jpg',
    curriculo: 'Farmacêutico graduado pela Universidade Federal do Pará (UFPA), com Mestrado em Ciências Farmacêuticas e Doutorado em Biotecnologia pela UFPA. É Professor Adjunto da Universidade do Estado do Pará (UEPA) e coordenador do Programa de Pós-Graduação Profissional em Cirurgia e Pesquisa Experimental. Atua em pesquisa nas áreas de Farmacologia Experimental, plantas medicinais, drogas sintéticas e tecnologias em saúde, sendo coordenador de laboratório de pesquisa e membro da Sociedade Brasileira de Farmacologia e Terapêutica Experimental. É bolsista de produtividade do CNPq.',
    lattes: 'http://lattes.cnpq.br/3455183793812931',
  },
];

export default function PalestrantesConvidados() {
  const [selected, setSelected] = useState<Palestrante | null>(null);

  return (
    <>
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
                className="group rounded-2xl border border-line bg-surface overflow-hidden flex flex-col transition-all hover:border-brand-tint hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelected(p)}
              >
                <div className="aspect-[4/5] bg-brand-soft overflow-hidden">
                  <img
                    src={p.foto}
                    alt={p.nome}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1 relative">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-lg leading-snug pr-6">
                    {p.nome}
                  </h3>
                  <p className="text-brand-strong text-sm font-semibold mt-1.5 leading-snug">{p.titulo}</p>
                  <p className="text-muted text-sm mt-1.5 leading-snug">{p.instituicao}</p>
                  <p className="text-ink-soft text-[0.8rem] mt-3 leading-relaxed line-clamp-4 flex-1">
                    {p.curriculo}
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-line text-sm text-brand-strong font-semibold flex items-center justify-between">
                    Ler currículo completo
                    <ExternalLink size={16} />
                  </div>
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

      {/* Modal de Currículo */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelected(null)}
          />
          
          {/* Modal content */}
          <div className="relative w-full max-w-2xl bg-surface rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <button 
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-canvas text-ink-soft hover:bg-line hover:text-ink transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="overflow-y-auto p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden border-2 border-line">
                  <img
                    src={selected.foto}
                    alt={selected.nome}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-2xl sm:text-3xl leading-snug">
                    {selected.nome}
                  </h3>
                  <p className="text-brand-strong font-semibold mt-1.5">{selected.titulo}</p>
                  <p className="text-muted text-sm mt-1">{selected.instituicao}</p>
                  
                  {selected.lattes && (
                    <a 
                      href={selected.lattes} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-strong hover:bg-brand-tint hover:text-white transition-colors"
                    >
                      Ver no Lattes <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="mt-8 border-t border-line pt-6">
                <p className="text-ink-soft leading-relaxed whitespace-pre-wrap">
                  {selected.curriculo}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
