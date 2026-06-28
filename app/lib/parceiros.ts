// Parceiros e apoiadores. Logos otimizados (fundo removido) em /public/parceiros/.

export type Parceiro = { nome: string; logo: string | null };

export const PARCEIROS: Parceiro[] = [
  { nome: 'UEPA', logo: '/parceiros/uepa.png' },
  { nome: 'LIMDERM', logo: '/parceiros/limderm.png' },
  { nome: 'ADHAM', logo: '/parceiros/adham-logo.png' },
];

export const LOGO_POR_NOME: Record<string, string | null> = Object.fromEntries(
  PARCEIROS.map((p) => [p.nome, p.logo]),
);
