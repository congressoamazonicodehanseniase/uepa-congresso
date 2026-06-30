// Parceiros e apoiadores. Logos otimizados (fundo removido) em /public/parceiros/.

export type Parceiro = { nome: string; logo: string | null };

export const PARCEIROS: Parceiro[] = [
  { nome: 'UEPA', logo: '/parceiros/logouepaa.png' },
  { nome: 'LIMDERM', logo: '/parceiros/limderm.png' },
  { nome: 'ADHAM', logo: '/parceiros/adham-logo.png' },
  { nome: 'CIPE', logo: '/parceiros/cipe.png' },
  { nome: 'CNPq', logo: '/parceiros/cnpq.png' },
  { nome: 'SBH', logo: '/parceiros/sbh.png' },
  { nome: 'SMS Marabá', logo: '/parceiros/sms-maraba.png' },
  { nome: 'SESPA', logo: '/parceiros/sespa.png' },
  { nome: 'UNIACESSE', logo: '/parceiros/uniacesse.png' },
];

export const LOGO_POR_NOME: Record<string, string | null> = Object.fromEntries(
  PARCEIROS.map((p) => [p.nome, p.logo]),
);
