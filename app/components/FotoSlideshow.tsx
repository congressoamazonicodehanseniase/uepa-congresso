'use client';

import { useEffect, useState } from 'react';

type Foto = { src: string; alt: string };

/**
 * Slideshow com crossfade automático entre várias fotos, num único quadro.
 * Indicadores (dots) mostram quantas fotos há e qual está ativa.
 */
export default function FotoSlideshow({
  fotos,
  ratio = 'aspect-[16/10]',
  interval = 4000,
  position = 'center top',
  className = '',
}: {
  fotos: Foto[];
  ratio?: string;
  interval?: number;
  position?: string;
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (fotos.length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % fotos.length), interval);
    return () => clearInterval(t);
  }, [fotos.length, interval]);

  return (
    <div className={`relative ${ratio} ${className} overflow-hidden rounded-2xl border border-line bg-brand-soft`}>
      {fotos.map((f, idx) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={f.src}
          src={f.src}
          alt={f.alt}
          loading={idx === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === i ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition: position }}
        />
      ))}

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {fotos.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Ver foto ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === i ? 'w-5 bg-white' : 'w-1.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
