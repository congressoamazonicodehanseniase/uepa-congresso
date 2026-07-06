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
  resumo: string;
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
    resumo: 'Atua em hanseníase, dermatologia, cicatrização e pesquisa translacional. É coordenador do Laboratório de Cicatrização e Hanseníase da FMRP-USP.',
    lattes: 'http://lattes.cnpq.br/9103136155056414',
  },
  {
    nome: 'Dr. Cláudio Salgado',
    titulo: 'Dermatologista · Doutor (Univ. de Tóquio)',
    instituicao: 'Professor Titular da UFPA · Fundador do LDI/UFPA · Ex-presidente da SBH',
    foto: '/palestrantes/claudio-salgado.jpg',
    curriculo: 'Médico pela UEPA, Doutor em Medicina pela Universidade de Tóquio, Professor Titular da UFPA e fundador do LDI/UFPA. Referência em hanseníase, dermatologia tropical e imunologia. Ex-presidente da Sociedade Brasileira de Hansenologia, Conselheiro da International Leprosy Association (Américas) e Coordenador da Área Ciências Biológicas II da CAPES.',
    resumo: 'Referência em hanseníase, dermatologia tropical e imunologia, atuando como Professor Titular da UFPA e fundador do LDI/UFPA.',
    lattes: 'http://lattes.cnpq.br/2310734509396125',
  },
  {
    nome: 'Dr. Jaison Barreto',
    titulo: 'Dermatologista e hansenólogo · Doutor (USP)',
    instituicao: 'Instituto Lauro de Souza Lima (ILSL) · Aliança Contra a Hanseníase',
    foto: '/palestrantes/jaison-barreto.jpg',
    curriculo: 'Médico pela Universidade Federal de Santa Catarina, especialista em Dermatologia e Hansenologia, Doutor em Dermatologia pela USP. Médico do Instituto Lauro de Souza Lima (ILSL), preceptor da Residência Médica em Dermatologia e assessor médico da Aliança Contra a Hanseníase. Atua em Dermatologia, Dermatopatologia e Hansenologia.',
    resumo: 'Especialista em Dermatologia e Hansenologia, atua como médico do Instituto Lauro de Souza Lima (ILSL) e assessor da Aliança Contra a Hanseníase.',
    lattes: 'http://lattes.cnpq.br/5343952256246039',
  },
  {
    nome: 'Dra. Regina Carneiro',
    titulo: 'Dermatologista · Doutora (UNIFESP)',
    instituicao: 'Professora Titular da UEPA · Secretária-Geral da SBD',
    foto: '/palestrantes/regina-carneiro.jpg',
    curriculo: 'Graduada em Medicina pela Universidade Federal do Pará (1985), com especialização em Dermatologia Tropical (UFPA), Mestrado em Dermatologia e Doutorado em Medicina (Dermatologia) pela Universidade Federal de São Paulo (UNIFESP). É Professora Titular de Dermatologia da Universidade do Estado do Pará (UEPA) desde 2013, docente permanente dos programas de pós-graduação em Cirurgia Experimental e Biologia dos Agentes Parasitários da UEPA. Atua como Coordenadora e Preceptora da Residência Médica em Dermatologia da UEPA e exerce o cargo de Secretária-Geral da Sociedade Brasileira de Dermatologia. Desenvolve atividades de ensino, assistência e pesquisa com ênfase em Dermatologia Tropical, dermatoses inflamatórias e dermatologia pediátrica.',
    resumo: 'Desenvolve atividades com ênfase em Dermatologia Tropical, dermatoses inflamatórias e dermatologia pediátrica. É Professora Titular da UEPA.',
    lattes: 'http://lattes.cnpq.br/1387234135281918',
  },
  {
    nome: 'Dr. Josafá Barreto',
    titulo: 'Doutor em Doenças Tropicais (UFPA) · sanduíche na Emory (EUA)',
    instituicao: 'Professor Associado da UFPA · Coordenador do LabEE-UFPA (epidemiologia espacial)',
    foto: '/palestrantes/josafa-barreto.jpg',
    curriculo: 'Professor Associado II da Universidade Federal do Pará (UFPA), com mestrado e doutorado em Doenças Tropicais pela UFPA e doutorado sanduíche na Emory University (EUA). Atua como docente de Saúde Coletiva no Campus Castanhal e como professor permanente do Programa de Pós-Graduação em Doenças Tropicais da UFPA. Desenvolve pesquisas em epidemiologia espacial da hanseníase, com ênfase na distribuição espacial da doença, soroprevalência em municípios endêmicos e aplicação de Sistemas de Informação Geográfica (SIG) e geoprocessamento em saúde pública. É fundador e coordenador do Laboratório de Epidemiologia Espacial da UFPA (LabEE-UFPA) desde 2014, criado com financiamento do CNPq.',
    resumo: 'Desenvolve pesquisas em epidemiologia espacial da hanseníase, com ênfase na distribuição da doença e aplicação de geoprocessamento em saúde pública.',
    lattes: 'http://lattes.cnpq.br/1894551542259862',
  },
  {
    nome: 'Dra. Marília Brasil Xavier',
    titulo: 'Dermatologista e Infectologista · Pós-doutora (FM-USP)',
    instituicao: 'Docente Titular da UEPA e NMT/UFPA',
    foto: '/palestrantes/marilia-brasil.jpg',
    curriculo: 'Dermatologista (Sociedade Brasileira de Dermatologia) e Infectologista (Sociedade Brasileira de Infectologia)\nPós-doutora (FM-USP)\nDocente Titular de Dermatologia da UEPA e Titular do Núcleo de Medicina Tropical (NMT) da UFPA\nDocente dos Programas de Pós-Graduação PPGBPA (UEPA), PPGDT (UFPA) e PPGSA (UFPA).\n\nAtua no ensino, assistência e pesquisa, com ênfase em hanseníase, leishmaniose e epidemiologia das doenças endêmicas da Amazônia.',
    resumo: 'Dermatologista (Sociedade Brasileira de Dermatologia) e Infectologista (Sociedade Brasileira de Infectologia)\nPós-doutora (FM-USP)\nDocente Titular de Dermatologia da UEPA e Titular do Núcleo de Medicina Tropical (NMT) da UFPA\nDocente dos Programas de Pós-Graduação PPGBPA (UEPA), PPGDT (UFPA) e PPGSA (UFPA).\n\nAtua no ensino, assistência e pesquisa, com ênfase em hanseníase, leishmaniose e epidemiologia das doenças endêmicas da Amazônia.',
    lattes: 'http://lattes.cnpq.br/0548879430701901',
  },
  {
    nome: 'Dra. Ilma Pastana',
    titulo: 'Enfermeira · Doutora e pós-doutora em Enfermagem',
    instituicao: 'Vice-Reitora da UEPA · PPGENF e PPGESA',
    foto: '/palestrantes/ilma-pastana.jpg',
    curriculo: 'Enfermeira, mestre, doutora e pós-doutora em Enfermagem. Atualmente é Vice-Reitora da Universidade do Estado do Pará (UEPA), professora da graduação e dos programas de pós-graduação em Enfermagem (PPGENF) e Ensino na Saúde na Amazônia (PPGESA). Possui experiência em enfermagem cirúrgica, controle de infecções, gestão em saúde e educação em enfermagem, tendo ocupado cargos de destaque na UEPA e na Associação Brasileira de Enfermagem (ABEn), com relevante atuação no ensino, na pesquisa e na gestão acadêmica.',
    resumo: 'Possui experiência em enfermagem cirúrgica, controle de infecções, gestão em saúde e educação em enfermagem. Atualmente é Vice-Reitora da UEPA.',
    lattes: 'http://lattes.cnpq.br/1650337093024641',
  },
  {
    nome: 'Dr. Luann Wendel',
    titulo: 'Farmacêutico · Doutor em Inovação Farmacêutica (UFPA)',
    instituicao: 'Professor da UNIFESSPA · Coordenador do Curso de Medicina',
    foto: '/palestrantes/luann-wendel.jpg',
    curriculo: 'Farmacêutico, doutor em Inovação Farmacêutica e mestre em Ciências Farmacêuticas pela UFPA, com pós-doutorado em Doenças Tropicais pelo Núcleo de Medicina Tropical da UFPA. É Professor Adjunto e Pesquisador da UNIFESSPA, Coordenador da Faculdade de Medicina e do Curso de Medicina, além de coordenador do Programa de Pós-Graduação em Saúde da Família. Atua em pesquisa nas áreas de doenças tropicais e negligenciadas, assistência farmacêutica, farmacologia clínica, farmacogenômica e saúde coletiva, com produção científica e orientação em programas de pós-graduação.',
    resumo: 'Atua em pesquisa nas áreas de doenças tropicais e negligenciadas, assistência farmacêutica, farmacologia clínica e saúde coletiva.',
    lattes: 'http://lattes.cnpq.br/6233488431016391',
  },
  {
    nome: 'Dr. Anderson Bentes',
    titulo: 'Farmacêutico · Doutor em Biotecnologia (UFPA)',
    instituicao: 'Professor da UEPA · Bolsista de produtividade do CNPq',
    foto: '/palestrantes/anderson-bentes.jpg',
    curriculo: 'Farmacêutico graduado pela Universidade Federal do Pará (UFPA), com Mestrado em Ciências Farmacêuticas e Doutorado em Biotecnologia pela UFPA. É Professor Adjunto da Universidade do Estado do Pará (UEPA) e coordenador do Programa de Pós-Graduação Profissional em Cirurgia e Pesquisa Experimental. Atua em pesquisa nas áreas de Farmacologia Experimental, plantas medicinais, drogas sintéticas e tecnologias em saúde, sendo coordenador de laboratório de pesquisa e membro da Sociedade Brasileira de Farmacologia e Terapêutica Experimental. É bolsista de produtividade do CNPq.',
    resumo: 'Atua em pesquisa nas áreas de Farmacologia Experimental, plantas medicinais, drogas sintéticas e tecnologias em saúde.',
    lattes: 'http://lattes.cnpq.br/3455183793812931',
  },
  {
    nome: 'Dra. Dyana Melkys Borges da Silva',
    titulo: 'Coordenação Geral e Científica',
    instituicao: 'Médica Dermatologista · CRM-PA 9310 · RQE 5394 (Dermatologia) · RQE 6065 (Hansenologia)',
    foto: '/palestrantes/dyana-silva-nova.jpg',
    curriculo: 'Graduada em Medicina pela UEPA, Mestra em Cirurgia Experimental (CIPE-UEPA) e orientadora da LIMDERM. Membro da SBH, SBD, SBCD, GBM e SBC. Idealizadora do ADHAM.',
    resumo: 'Graduada em Medicina pela UEPA, Mestra em Cirurgia Experimental (CIPE-UEPA) e orientadora da LIMDERM. Idealizadora do ADHAM.',
  },
  {
    nome: 'Dra. Larissa Navarro Barros',
    titulo: 'Otorrinolaringologista · Mestre em Ensino na Saúde na Amazônia (UEPA)',
    instituicao: 'Professora UEPA Campus VIII · Coordenadora da LIOTO',
    foto: '/palestrantes/larissa-navarro.jpg',
    curriculo: 'Médica otorrinolaringologista, especialista pela ABORL-CCF, com Mestrado em Ensino em Saúde na Amazônia pela UEPA e pós-graduação em Alergia e Imunologia. É Professora Auxiliar do curso de Medicina da UEPA – Campus VIII e docente assistente no ambulatório de Otorrinolaringologia da FACIMPA. Atua como coordenadora e orientadora da Liga Acadêmica de Otorrinolaringologia de Marabá (LIOTO), com experiência em Otorrinolaringologia geral e pediátrica, incluindo rinologia, otologia, laringologia, otoneurologia e cirurgias otorrinolaringológicas.',
    resumo: 'Coordenadora da LIOTO, com experiência em Otorrinolaringologia geral e pediátrica, rinologia, otologia, laringologia e cirurgias otorrinolaringológicas.',
    lattes: 'http://lattes.cnpq.br/7017222096097910',
  },
  {
    nome: 'Dra. Cláudia Dizioli Franco Bueno',
    titulo: 'Pediatra e Infectologista · Mestre (USP Ribeirão Preto)',
    instituicao: 'Professora UEPA · Coordenadora do Suporte Básico de Vida UEPA',
    foto: '/palestrantes/claudia-dizioli.jpg',
    curriculo: 'Médica Pediatra e Infectologista, graduada e com residência pela Faculdade de Medicina da USP – Ribeirão Preto, com Mestrado pela USP. Possui títulos de especialista em Pediatria, Terapia Intensiva Pediátrica e Emergência Pediátrica, além de formação em Emergências Pediátricas pelo Hospital Albert Einstein. É Professora Auxiliar da UEPA, coordenadora do Laboratório de Suporte Básico de Vida e orientadora da Liga Acadêmica Marabaense de Pediatria (LAMPED). Atua em pesquisa e assistência nas áreas de urgências e emergências pediátricas e suporte básico de vida.',
    resumo: 'Atua em urgências e emergências pediátricas e suporte básico de vida.',
    lattes: 'http://lattes.cnpq.br/4167541584600306',
  },
  {
    nome: 'Dr. Carlos André',
    titulo: 'Cardiologista e Intensivista · Mestre (UEPA)',
    instituicao: 'Professor UEPA Marabá · Cardiologia e Medicina Intensiva',
    foto: '/palestrantes/carlos-andre.jpg',
    curriculo: 'Médico graduado pela Universidade do Estado do Pará (UEPA), especialista em Cardiologia pela SBC/AMB e em Terapia Intensiva pela AMIB/AMB, com habilitação em Ergometria e Ecocardiografia. É Mestre pela UEPA (CIPE) e professor do internato de Clínica Médica do curso de Medicina da UEPA – Marabá. Atua como médico nas áreas de Cardiologia e Terapia Intensiva nos hospitais de Marabá, além de instrutor em ultrassonografia point of care e ecocardiografia.',
    resumo: 'Especialista em Cardiologia e Terapia Intensiva, com habilitação em Ecocardiografia. Professor UEPA Marabá e instrutor em ultrassonografia point of care.',
    lattes: 'http://lattes.cnpq.br/5907719701481757',
  },
  {
    nome: 'Dra. Milena Lins Veiga',
    titulo: 'Neurologista e Neuroimunologista',
    instituicao: 'UEPA · Hospital Ophir Loyola · HC-FMUSP',
    foto: '/palestrantes/milena-lins-veiga.jpg',
    curriculo: 'Médica graduada pela Faculdade Metropolitana da Amazônia. Neurologista pela Universidade do Estado do Pará (UEPA) e pelo Hospital Ophir Loyola. Neuroimunologista pelo Hospital das Clínicas – FMUSP.',
    resumo: 'Neurologista e Neuroimunologista formada pela UEPA, Hospital Ophir Loyola e HC-FMUSP.',
    lattes: 'http://lattes.cnpq.br/0305074187747227',
  },
  {
    nome: 'Dr. Davi Tozzeto',
    titulo: 'Cardiologista e Intensivista · Doutor em Educação em Saúde (UEPA)',
    instituicao: 'Docente UEPA Marabá · Coordenador Medicina Intensiva HRS-PA',
    foto: '/palestrantes/davi-tozzeto.jpg',
    curriculo: 'Médico com atuação em Cardiologia, Medicina Intensiva e Clínica Médica, com títulos de especialista nessas áreas. Possui Mestrado em Ciências Médicas (Investigação Clínica) e Doutorado em Educação em Saúde pela UEPA. É docente do curso de Medicina da UEPA – Marabá, coordenador adjunto do curso desde sua implantação e atua como coordenador da Medicina Intensiva Adulto do Hospital Regional Público do Sudeste do Pará e do Hospital Municipal de Marabá. Possui RQE em Clínica Médica, Cardiologia, Ecocardiografia e Medicina Intensiva.',
    resumo: 'Doutor em Educação em Saúde (UEPA), coordenador adjunto do curso de Medicina da UEPA Marabá e coordenador da Medicina Intensiva do HRS-PA.',
    lattes: 'http://lattes.cnpq.br/7890221131531452',
  },
  {
    nome: 'Dr. Evardo Nunes',
    titulo: 'Dermatologista · Membro Titular da SBD e SBCD',
    instituicao: 'Dermatologista em Marabá · Professor Afya Marabá',
    foto: '/palestrantes/evardo-nunes.jpg',
    curriculo: 'Médico graduado pela Universidade Federal do Piauí (UFPI), especialista em Dermatologia pela Faculdade de Ciências Médicas da Universidade de Pernambuco (Hospital Oswaldo Cruz – HUOC/UPE). É Membro Titular da Sociedade Brasileira de Dermatologia e da Sociedade Brasileira de Cirurgia Dermatológica. Atua como dermatologista em Marabá-PA e como Professor do curso de Medicina da Afya Faculdade de Ciências Médicas de Marabá, com experiência em Dermatologia, Clínica Médica, Medicina Intensiva e Atenção à Saúde.',
    resumo: 'Dermatologista e professor universitário em Marabá, membro titular da SBD e da Sociedade Brasileira de Cirurgia Dermatológica.',
    lattes: 'http://lattes.cnpq.br/8924474953848229',
  },
  {
    nome: 'Dra. Amélia Leal',
    titulo: 'Dermatologista · Fellow em Cosmiatria (Hospital Albert Einstein)',
    instituicao: 'Dermatologia Clínica, Cirúrgica e Cosmiatria',
    foto: '/palestrantes/amelia-leal.jpg',
    curriculo: 'Médica graduada pela Universidade do Estado do Pará (UEPA), dermatologista com Fellow em Cosmiatria pelo Hospital Israelita Albert Einstein. Atua em Dermatologia Clínica, Cirúrgica e Cosmiatria, com experiência no atendimento de doenças da pele e procedimentos estéticos.',
    resumo: 'Dermatologista com Fellow em Cosmiatria pelo Hospital Albert Einstein. Atua em Dermatologia Clínica, Cirúrgica e Cosmiatria.',
    lattes: 'http://lattes.cnpq.br/9373610013404564',
  },

  {
    nome: 'Dra. Sarah Lais Rocha',
    titulo: 'Enfermeira · Doutora em Ensino na Saúde na Amazônia (UEPA)',
    instituicao: 'Docente UEPA e Afya Marabá · Pesquisadora em educação em saúde',
    foto: '/palestrantes/sarah-lais.jpg',
    curriculo: 'Enfermeira, Doutora e Mestra em Ensino em Saúde na Amazônia pela UEPA, com especializações em Saúde Mental, Gestão de Redes de Atenção à Saúde, Educação Médica e Gestão em Enfermagem. Atua como docente dos cursos de Medicina da UEPA e Afya Marabá, com experiência em Saúde Coletiva, metodologias ativas, formação de profissionais da saúde e integração ensino-serviço-comunidade. Desenvolve pesquisas em educação em saúde, inovação pedagógica e saúde mental docente, além de atuar em projetos científicos e extensão universitária.',
    resumo: 'Doutora em Ensino na Saúde na Amazônia (UEPA), atua como docente da UEPA e Afya Marabá com pesquisa em educação em saúde e inovação pedagógica.',
    lattes: 'http://lattes.cnpq.br/2851222415491802',
  },
  {
    nome: 'Dra. Natani Marreiros',
    titulo: 'Dermatologista · Título de Especialista pela SBD',
    instituicao: 'Membro Titular da SBD · UFPA',
    foto: '/palestrantes/natani-marreiros.jpg',
    curriculo: 'Médica Dermatologista pela Universidade Federal do Pará (UFPA). Título de Especialista pela Sociedade Brasileira de Dermatologia (SBD). Membro Titular da Sociedade Brasileira de Dermatologia (SBD).',
    resumo: 'Médica Dermatologista pela UFPA, com Título de Especialista e Membro Titular da Sociedade Brasileira de Dermatologia (SBD).',
  },
  {
    nome: 'Dra. Glaucielen Gomes da Silva',
    titulo: 'Biomédica · Doutora em Biologia Parasitária na Amazônia (UEPA)',
    instituicao: 'Professora Auxiliar I da UEPA · Departamento de Patologia (DPAT)',
    foto: '/palestrantes/glaucielen-gomes.jpg',
    curriculo: 'Biomédica (PUC Goiás - 2014), Mestrado em Ciências Ambientais e Saúde (PUC Goiás - 2017) e Doutorado em Biologia Parasitária na Amazônia (UEPA - 2023). Atualmente é Professora Auxiliar I da Universidade do Estado do Pará (UEPA) pelo Departamento de Patologia (DPAT).',
    resumo: 'Doutora em Biologia Parasitária na Amazônia (UEPA), atua como Professora Auxiliar no Departamento de Patologia da UEPA.',
    lattes: 'http://lattes.cnpq.br/1087812657057520',
  },
  {
    nome: 'Profa. Dra. Simone Argentino',
    titulo: 'Enfermeira · Mestra (UEPA)',
    instituicao: 'Docente efetiva da Universidade do Estado do Pará (UEPA)',
    foto: '/palestrantes/simone-argentino.jpg',
    curriculo: 'Enfermeira graduada pela Universidade Federal de São Paulo (UNIFESP), com pós-graduação em Saúde da Família e Mestrado em Ensino em Saúde na Amazônia pela UEPA. É docente efetiva da Universidade do Estado do Pará desde 2010 e atua nas áreas de Saúde Coletiva, Educação em Saúde e Saúde Indígena, com experiência na formação e capacitação de profissionais para atenção à saúde de populações amazônicas.',
    resumo: 'Atua nas áreas de Saúde Coletiva, Educação em Saúde e Saúde Indígena. Docente efetiva da UEPA desde 2010.',
    lattes: 'http://lattes.cnpq.br/0154609186488185',
  },
  {
    nome: 'Dr. Paulo Turiel',
    titulo: 'Médico Oftalmologista (HCFMUSP)',
    instituicao: 'Membro da American Academy of Ophthalmology',
    foto: '/palestrantes/paulo-turiel.jpg',
    curriculo: 'Médico graduado pela Universidade Federal do Pará. Oftalmologista pelo Hospital Federal de Bonsucesso - RJ. Realizou fellowship no setor de Catarata do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo - HCFMUSP. Membro da American Academy of Ophthalmology. Título de Especialista em Oftalmologia pela Associação Médica Brasileira e Conselho Brasileiro de Oftalmologia (2015).',
    resumo: 'Oftalmologista com fellowship em Catarata pelo HCFMUSP. Membro da American Academy of Ophthalmology.',
    lattes: 'http://lattes.cnpq.br/1186849050351849',
  },
  {
    nome: 'Dra. Luanna de Melo Pereira Fernandes',
    titulo: 'Doutora em Neurociências e Biologia Celular',
    instituicao: 'Pró-Reitora de Pesquisa e Pós-Graduação (UEPA)',
    foto: '/palestrantes/luanna-fernandes.jpg',
    curriculo: 'Pró-Reitora de Pesquisa e Pós-Graduação e Professora Adjunta do Departamento de Morfologia e Ciências Fisiológicas (DMCF/UEPA). Graduação em Odontologia, Especialização em Farmacologia e Ortodontia, Mestrado em Ciências Farmacêuticas, Doutorado em Neurociências e Biologia Celular. Docente Permanente do PPGCF-UFPA e BIONORTE. Coordenadora do LANEFC e líder de grupo de pesquisa no CNPq.',
    resumo: 'Pró-Reitora de Pesquisa e Pós-Graduação e Professora Adjunta da UEPA. Doutora em Neurociências e Biologia Celular.',
    lattes: 'http://lattes.cnpq.br/0156144290849777',
  },
  {
    nome: 'Waldirene Bentes Barreto',
    titulo: 'Visitadora Sanitária do MS · Especialista em Avaliação Neurológica Simplificada',
    instituicao: 'Secretaria Municipal de Saúde de Marabá',
    foto: '/palestrantes/waldirene-bentes.jpg',
    curriculo: 'Possui licenciatura em Letras pela UFPA. Visitadora Sanitária do Ministério da Saúde, com ênfase nos programas de Hanseníase e Tuberculose há 36 anos. Atua como Referência Técnica em Hanseníase na Secretaria Municipal de Saúde de Marabá e é Especialista em Avaliação Neurológica Simplificada.',
    resumo: 'Possui licenciatura em Letras pela UFPA. Visitadora Sanitária do Ministério da Saúde, com ênfase nos programas de Hanseníase e Tuberculose há 36 anos.\n\nAtua como Referência Técnica em Hanseníase na Secretaria Municipal de Saúde de Marabá e é Especialista em Avaliação Neurológica Simplificada.',
  }
];

export default function PalestrantesConvidados() {
  const [selected, setSelected] = useState<Palestrante | null>(null);

  return (
    <>
      <section id="palestrantes-convidados" className="relative pt-16 sm:pt-24 pb-8 sm:pb-12 bg-canvas overflow-hidden">
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
                <div className="aspect-[4/5] w-full bg-brand-soft overflow-hidden">
                  <img
                    src={p.foto || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" fill="%23f0f0f0"><rect width="100%25" height="100%25"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%23aaa">Foto Pendente</text></svg>'}
                    alt={p.nome}
                    loading="lazy"
                    className="w-full h-full object-cover object-[center_10%] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1 relative">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-lg leading-snug pr-6">
                    {p.nome}
                  </h3>
                  <p className="text-brand-strong text-sm font-semibold mt-1.5 leading-snug">{p.titulo}</p>
                  <p className="text-muted text-sm mt-1.5 leading-snug">{p.instituicao}</p>
                  <p className="text-ink-soft text-[0.8rem] mt-3 leading-relaxed flex-1 whitespace-pre-wrap">
                    {p.resumo}
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
                    src={selected.foto || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" fill="%23f0f0f0"><rect width="100%25" height="100%25"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="12" fill="%23aaa">Sem Foto</text></svg>'}
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
