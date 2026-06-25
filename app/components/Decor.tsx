/* Elementos decorativos orgânicos — evocam o logo do congresso
   (folhas, ondas, curvas). Usam currentColor, então herdam o tema. */

export function LeafMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 110" className={className} fill="none" aria-hidden>
      <path d="M50 105 C18 80 16 34 50 4 C84 34 82 80 50 105 Z" fill="currentColor" />
      <path d="M50 98 L50 16" stroke="rgba(0,0,0,0.18)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 40 L34 30 M50 56 L34 46 M50 72 L34 62 M50 40 L66 30 M50 56 L66 46 M50 72 L66 62"
        stroke="rgba(0,0,0,0.14)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* Onda orgânica de borda de seção (como as faixas do pôster). */
export function WaveTop({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={className} aria-hidden>
      <path d="M0 80 C220 10 420 10 720 70 C1010 128 1230 120 1440 50 L1440 0 L0 0 Z" fill={color} />
    </svg>
  );
}

export function WaveBottom({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={className} aria-hidden>
      <path d="M0 70 C240 130 470 128 720 60 C980 -8 1220 0 1440 60 L1440 120 L0 120 Z" fill={color} />
    </svg>
  );
}

/* Mancha orgânica para fundos. */
export function Blob({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor" aria-hidden>
      <path d="M44 -12 C82 -2 120 26 122 66 C124 108 92 140 50 150 C4 161 -44 142 -64 102 C-82 64 -66 12 -30 -16 C2 -41 8 -22 44 -12 Z" transform="translate(100 100)" />
    </svg>
  );
}
