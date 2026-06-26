'use client';

import { useEffect, useState } from 'react';
import { FOTOS } from '../lib/fotos';

type Foto = { src: string; alt: string };

const frames: { cls: string; interval: number; fotos: Foto[] }[] = [
  // Quadro alto à esquerda
  { cls: 'row-span-2', interval: 4200, fotos: [FOTOS.atendimento, FOTOS.pratica1, FOTOS.estagio] },
  // Quadro superior direito
  { cls: '', interval: 5300, fotos: [FOTOS.academicos, FOTOS.discussao] },
  // Quadro inferior direito
  { cls: '', interval: 4700, fotos: [FOTOS.pratica2, FOTOS.inauguracao, FOTOS.evento] },
];

function Frame({ cls, interval, fotos }: { cls: string; interval: number; fotos: Foto[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % fotos.length), interval);
    return () => clearInterval(t);
  }, [fotos.length, interval]);

  return (
    <div className={`relative h-full overflow-hidden rounded-2xl border border-line ${cls}`}>
      {fotos.map((f, idx) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={f.src}
          src={f.src}
          alt={f.alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === i ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition: 'center top' }}
        />
      ))}
    </div>
  );
}

export default function GaleriaImpacto() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[24rem] sm:h-[28rem] lg:h-[30rem]">
      {frames.map((f, idx) => (
        <Frame key={idx} {...f} />
      ))}
    </div>
  );
}
