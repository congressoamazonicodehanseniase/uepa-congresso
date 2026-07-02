'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { INSCRICOES_INFO } from '../lib/config';
import Countdown from './Countdown';

/**
 * Barra de inscrição fixa no rodapé da tela. Aparece após o usuário rolar para
 * fora do hero e se recolhe perto do rodapé real, para não cobrir o conteúdo.
 * Alavanca de conversão — CTA sempre ao alcance, sobretudo no mobile.
 */
export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom = window.innerHeight + y >= document.body.scrollHeight - 280;
      setShow(y > 680 && !nearBottom);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 transition-transform duration-300 ease-out ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!show}
    >
      <div className="mx-auto max-w-6xl px-3 pb-3 sm:px-6 sm:pb-5">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-brand-edge bg-brand-darker px-4 py-3 sm:px-6 sm:py-4 text-white">
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-display)] font-semibold text-sm sm:text-base leading-tight">
              Garanta sua vaga no congresso
            </p>
            <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-brand-faint">
              <span>Gratuidade dos ligantes de 03/07 a 09/07</span>
              <Countdown
                deadline={INSCRICOES_INFO.ligantesFim}
                className="bg-brand-strong px-2 py-0.5 font-semibold text-white"
              />
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <Link
              href="/congresso/inscricao"
              className="btn btn-white btn-sm whitespace-nowrap"
            >
              Inscrever-se
            </Link>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Fechar barra de inscrição"
              className="p-1 text-brand-faint transition-colors hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
