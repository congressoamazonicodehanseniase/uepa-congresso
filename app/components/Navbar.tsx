'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#atuacao', label: 'Atuação' },
  { href: '/#apoiadores', label: 'Parceiros' },
  { href: '/#contato', label: 'Contato' },
  { href: '/congresso', label: 'Congresso 2026' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isCongresso = pathname?.startsWith('/congresso');
  const cta = isCongresso
    ? { href: '/congresso/inscricao', label: 'Inscrever' }
    : { href: '/#contato', label: 'Agendar' };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Trava o scroll do fundo enquanto o drawer está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-surface border-b border-line transition-all duration-300 ${
        scrolled ? 'py-1' : 'py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group ml-2 sm:ml-6 lg:ml-10">
          <img
            src="/parceiros/logoamb.png"
            alt="Ambulatório de Dermatologia e Hanseníase da Amazônia"
            className="adham-only h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <img
            src="/logo-congresso.png"
            alt="I Congresso Amazônico de Hanseníase"
            className="cong-only h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="w-px h-8 sm:h-12 lg:h-14 bg-line shrink-0" />
          <img
            src="/parceiros/logouepaa.png"
            alt="Universidade do Estado do Pará"
            className="h-8 sm:h-11 lg:h-14 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <img
            src="/parceiros/cipe.png"
            alt="CIPE"
            className="h-8 sm:h-11 lg:h-14 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[0.9rem] font-medium text-ink-soft hover:text-brand-strong transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href={cta.href} className="btn btn-primary btn-sm">{cta.label}</Link>
        </div>

        <button
          className="lg:hidden text-ink p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-ink/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      {/* Drawer lateral (desliza da direita) */}
      <aside
        id="mobile-menu"
        className={`lg:hidden fixed top-0 right-0 z-50 h-dvh w-4/5 max-w-xs bg-surface border-l border-line flex flex-col transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 h-[4.5rem] border-b border-line flex-shrink-0">
          <img src="/parceiros/logoamb.png" alt="ADHAM" className="h-12 w-auto object-contain" />
          <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="text-ink p-1">
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-4 flex-1 overflow-y-auto">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block py-3.5 text-base font-medium text-ink-soft hover:text-brand-strong transition-colors border-b border-line"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-6 pb-8 pt-2 flex-shrink-0">
          <Link href={cta.href} className="btn btn-primary w-full" onClick={() => setOpen(false)}>{cta.label}</Link>
        </div>
      </aside>
    </nav>
  );
}
