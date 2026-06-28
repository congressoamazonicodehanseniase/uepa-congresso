'use client';

import { useEffect, useState } from 'react';

type Tempo = { d: number; h: number; m: number; s: number };

function calcular(targetISO: string): Tempo | null {
  const ms = new Date(targetISO).getTime() - Date.now();
  if (ms <= 0) return null;
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor((ms % 86_400_000) / 3_600_000),
    m: Math.floor((ms % 3_600_000) / 60_000),
    s: Math.floor((ms % 60_000) / 1_000),
  };
}

/**
 * Contagem regressiva (dias · horas · min · seg) até a data alvo (ISO).
 * Renderiza nada no servidor/até montar (evita mismatch de hidratação) e
 * desaparece quando a data já passou.
 */
export default function CountdownTimer({
  target,
  label,
  className = '',
}: {
  target: string;
  label?: string;
  className?: string;
}) {
  const [t, setT] = useState<Tempo | null>(null);

  useEffect(() => {
    setT(calcular(target));
    const id = setInterval(() => setT(calcular(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!t) return null;

  const unidades = [
    { v: t.d, l: 'Dias' },
    { v: t.h, l: 'Horas' },
    { v: t.m, l: 'Min' },
    { v: t.s, l: 'Seg' },
  ];

  return (
    <div className={className}>
      {label && (
        <p className="font-[family-name:var(--font-display)] text-brand-light text-[0.7rem] uppercase tracking-[0.24em] mb-4">
          {label}
        </p>
      )}
      <div className="flex flex-wrap items-stretch gap-2.5 sm:gap-3">
        {unidades.map((u, i) => (
          <div key={u.l} className="flex items-stretch gap-2.5 sm:gap-3">
            <div className="flex flex-col items-center justify-center rounded-xl border border-brand-edge bg-brand-panel px-4 py-3 sm:px-5 sm:py-4 min-w-[4.25rem] sm:min-w-[5rem]">
              <span
                className="display text-white tabular-nums leading-none"
                style={{ fontSize: 'clamp(1.7rem, 5vw, 2.7rem)', letterSpacing: '-0.03em' }}
              >
                {String(u.v).padStart(2, '0')}
              </span>
              <span className="mt-2 text-[0.58rem] sm:text-[0.64rem] uppercase tracking-[0.18em] text-brand-light">
                {u.l}
              </span>
            </div>
            {i < unidades.length - 1 && (
              <span className="self-center font-[family-name:var(--font-display)] text-brand-edge text-2xl sm:text-3xl leading-none">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
