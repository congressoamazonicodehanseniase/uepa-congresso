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
    ? { href: '/congresso#inscricoes', label: 'Inscrever' }
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-surface border-b border-line transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img
            src="/llogoo.png"
            alt="Ambulatório de Dermatologia e Hanseníase da Amazônia"
            className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
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
          <Link href={cta.href} className="btn btn-primary btn-sm">
            {cta.label}
          </Link>
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

      {open && (
        <div id="mobile-menu" className="lg:hidden bg-surface px-6 pb-6 pt-3 border-t border-line">
          <ul className="flex flex-col gap-1 mb-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-2.5 text-base font-medium text-ink-soft hover:text-brand-strong transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={cta.href}
            className="btn btn-primary w-full"
            onClick={() => setOpen(false)}
          >
            {cta.label}
          </Link>
        </div>
      )}
    </nav>
  );
}
