// Fotos reais extraídas do material institucional (PDF "SITE INSTITUCIONAL ADHAM").
// Otimizadas em /public/fotos/. Legendas conferidas visualmente uma a uma.

const b = '/fotos/';

export const FOTOS = {
  // Institucional
  hero:        { src: b + 'p02a.jpg', alt: 'Equipe do ADHAM: docentes, gestores e acadêmicos da UEPA Campus VIII' },
  fachada:     { src: b + 'fachada-ambulatorio.jpg', alt: 'Fachada do Ambulatório de Dermatologia e Hanseníase da Amazônia' },
  inauguracao: { src: b + 'p01a.jpg', alt: 'Marco inaugural do ADHAM, com docentes, gestores e acadêmicos da UEPA Campus VIII' },
  academicos:  { src: b + 'p03a.jpg', alt: 'Inauguração do ADHAM com a Dra. Dyana Melkys e acadêmicos da UEPA' },

  // Assistência e ensino
  atendimento: { src: b + 'p14a.jpg', alt: 'Atendimento supervisionado pela Dra. Dyana Melkys no ADHAM' },
  discussao:   { src: b + 'p16a.jpg', alt: 'Discussão clínica supervisionada pela Dra. Dyana Melkys no ADHAM' },
  pratica1:    { src: b + 'p19a.jpg', alt: 'Prática supervisionada de acadêmicos da UEPA no ADHAM' },
  pratica2:    { src: b + 'p20a.jpg', alt: 'Prática supervisionada de acadêmicos da UEPA no ADHAM' },

  // Pesquisa e extensão
  producao:    { src: b + 'p23a.jpg', alt: 'Produção científica: Dra. Dyana Melkys apresentando trabalho em congresso da SBD' },
  jornadaLupus:{ src: b + 'p24b.jpg', alt: 'Ação de extensão e ciência na II Jornada do Lúpus' },
  jornadaEstande:{ src: b + 'p25a.jpg', alt: 'Equipe do ADHAM no estande da II Jornada do Lúpus, ao lado do GARPA' },
  evento:      { src: b + 'p24a.jpg', alt: 'Auditório durante a II Jornada do Lúpus, evento científico do ADHAM' },
  estagio:     { src: b + 'p21b.jpg', alt: 'Estágio da LIMDERM e atividades dos acadêmicos no ADHAM' },
  cartas:      { src: b + 'p26a.jpg', alt: 'Ação de extensão “Cartas ao Cientista”, aproximando ciência, educação e comunidade' },
  carreta:     { src: b + 'p28a.jpg', alt: 'Acadêmicos na ação de extensão da Carreta Roda Hans (Ministério da Saúde) em Marabá' },

  // Reconhecimento
  premioCientifico: { src: b + 'p31a.jpg', alt: 'Premiação CIPE: reconhecimento da produção científica do ADHAM' },
  premioSocial:     { src: b + 'p32a.jpg', alt: 'Premiação CIPE: reconhecimento do impacto social do ADHAM' },

  // Pessoas
  dyana:        { src: b + 'p34b.jpg', alt: 'Dra. Dyana Melkys Borges da Silva' },
  dyanaFachada: { src: b + 'p06a.jpg', alt: 'Dra. Dyana Melkys, responsável técnica e idealizadora do ADHAM' },
  milene:       { src: b + 'p35a.jpg', alt: 'Dra. Milene Silveira Ferreira' },
} as const;
