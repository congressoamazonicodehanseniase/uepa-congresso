'use client';

import { useEffect, useState } from 'react';

function diasRestantes(iso: string): number | null {
  const fim = new Date(`${iso}T23:59:59`);
  const ms = fim.getTime() - Date.now();
  if (ms < 0) return null;
  return Math.ceil(ms / 86_400_000);
}

/**
 * Pílula de urgência: mostra "faltam N dias" até o prazo (ISO).
 * Renderiza nada no servidor e até montar (evita mismatch de hidratação) e
 * desaparece quando o prazo já passou.
 */
export default function Countdown({
  deadline,
  className = '',
}: {
  deadline: string;
  className?: string;
}) {
  const [dias, setDias] = useState<number | null>(null);

  useEffect(() => {
    setDias(diasRestantes(deadline));
    const id = setInterval(() => setDias(diasRestantes(deadline)), 60_000);
    return () => clearInterval(id);
  }, [deadline]);

  if (dias === null) return null;

  const texto = dias === 0 ? 'encerra hoje' : dias === 1 ? 'falta 1 dia' : `faltam ${dias} dias`;

  return <span className={className}>{texto}</span>;
}
