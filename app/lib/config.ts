// Fonte única de verdade institucional do ADHAM e do Congresso.
// Dados extraídos do material oficial (PDFs institucional + inauguração + congresso).

export const CONGRESSO = {
  edicao: 'I',
  nome: 'I Congresso Amazônico de Hanseníase',
  // 27, 28 e 29 de agosto de 2026 — Marabá/PA. Evento bienal, apoio CNPq.
  datasLabel: '27, 28 e 29 de agosto de 2026',
  datasCurta: '27 – 29 Ago 2026',
  // Abertura do congresso (ISO) — alvo da contagem regressiva.
  inicioISO: '2026-08-27T08:00:00',
  ano: '2026',
  local: 'Marabá · Pará · Brasil',
  apoio: 'Apoio CNPq',
} as const;

// Inscrições e submissão de trabalhos acontecem na página oficial do evento no Even3.
// ⚠️ SUBSTITUA pela URL real da página do evento no Even3 antes de publicar.
export const INSCRICAO_URL = 'https://www.even3.com.br/';

export const CONTATO = {
  // Telefone/WhatsApp institucional ainda a definir (a adquirir).
  telefone: 'A definir',
  telefoneHref: '',
  email: 'congressoamazonicodehanseniase@gmail.com',
  endereco: 'Av. Hiléia, s/n – Bairro Amapá – Marabá/PA – CEP 68.502-100',
  enderecoCurto: 'Av. Hiléia, s/n – Bairro Amapá – Marabá/PA',
  horario: 'A confirmar',
} as const;

export const REDES = {
  adham: { handle: '@adham.pa', url: 'https://instagram.com/adham.pa' },
  congresso: { handle: '@CAHANS_', url: 'https://instagram.com/CAHANS_' },
} as const;

// Coordenação Geral e Científica do I Congresso Amazônico de Hanseníase.
export const RESPONSAVEL = {
  nome: 'Dra. Dyana Melkys Borges da Silva',
  titulo: 'Médica Dermatologista · Responsável Técnica do ADHAM',
  registro: 'CRM-PA 9310 · RQE 5394 (Dermatologia) · RQE 6065 (Hansenologia)',
} as const;

// Locais do evento (PDF "Programação do Congresso").
export const LOCAIS = {
  capacitacoes: {
    rotulo: 'Capacitações · 27 de agosto',
    nome: 'Universidade do Estado do Pará (UEPA)',
    endereco: 'Av. Hiléia, s/n – Bairro Amapá – Marabá/PA – CEP 68.502-100',
    mapsQuery: 'UEPA Marabá Avenida Hiléia Bairro Amapá',
  },
  congresso: {
    rotulo: 'Congresso Científico · 28 e 29 de agosto',
    nome: 'Carajás Centro de Convenções – Leonildo Borges Rocha',
    endereco: 'BR-222 – Vila Militar Presidente Médici – Marabá/PA',
    mapsQuery: 'Carajás Centro de Convenções Leonildo Borges Rocha Marabá',
  },
} as const;

// Inscrições e submissão de trabalhos (PDF "Programação do Congresso").
export const INSCRICOES_INFO = {
  ligantesPeriodo: '26/06 a 05/07/2026',
  submissaoPeriodo: '26/06/2026 a 11/07/2026',
  // Datas-fim (ISO) usadas pelo countdown de urgência.
  ligantesFim: '2026-07-05',
  submissaoFim: '2026-07-11',
  publicoAlvo: [
    'Médicos',
    'Médicos residentes',
    'Agentes Técnicos de Saúde',
    'Enfermeiros',
    'Fisioterapeutas',
    'Profissionais da saúde',
    'Acadêmicos',
    'Pós-graduandos',
    'Pesquisadores',
    'Gestores',
  ],
} as const;
