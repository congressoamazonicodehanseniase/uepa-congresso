import Link from 'next/link';
import { Mail, MapPin, AtSign } from 'lucide-react';
import { CONTATO, REDES, CONGRESSO } from '../lib/config';
import { LeafMark } from './Decor';

const navLinks = [
  { label: 'Quem somos', href: '/#sobre' },
  { label: 'Nossa atuação', href: '/#atuacao' },
  { label: 'Parceiros', href: '/#apoiadores' },
  { label: 'Contato', href: '/#contato' },
  { label: 'Congresso 2026', href: '/congresso' },
  { label: 'Inscrições', href: '/congresso#inscricoes' },
];

const sociais = [
  { label: 'Instagram do ADHAM', href: REDES.adham.url, handle: REDES.adham.handle },
  { label: 'Instagram do Congresso', href: REDES.congresso.url, handle: REDES.congresso.handle },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-darker text-brand-faint">
      <LeafMark className="leaf-congresso pointer-events-none absolute -top-12 -right-10 w-56 text-brand-panel rotate-[25deg]" />
      <LeafMark className="leaf-congresso pointer-events-none absolute bottom-2 -left-14 w-44 text-brand-panel -rotate-[18deg]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10 gap-y-12 mb-12">
          <div className="md:col-span-5">
            <div className="mb-6 flex flex-wrap items-center gap-5">
              <img
                src="/adham-icon.png"
                alt="Ambulatório de Dermatologia e Hanseníase da Amazônia"
                className="h-20 w-auto object-contain"
              />
              <img
                src="/parceiros/logouepaa.png"
                alt="Universidade do Estado do Pará"
                className="h-14 w-auto object-contain"
              />
              <img
                src="/parceiros/cipe.png"
                alt="CIPE"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-sm text-white/70">
              Assistência, ensino, pesquisa e extensão em dermatologia e hanseníase na Amazônia.
              Em Marabá-PA. Realizador do {CONGRESSO.nome}.
            </p>
            <div className="flex flex-wrap gap-3">
              {sociais.map(({ label, href, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-panel border border-brand-edge hover:bg-brand-strong hover:border-brand px-3 py-2 transition-colors"
                >
                  <AtSign size={15} className="text-white" />
                  <span className="text-xs text-white">{handle}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-[family-name:var(--font-display)] font-semibold text-xs uppercase tracking-[0.18em] mb-5">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/75 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-[family-name:var(--font-display)] font-semibold text-xs uppercase tracking-[0.18em] mb-5">Contato</h4>
            <div className="space-y-3">
              <a href={`mailto:${CONTATO.email}`} className="flex items-start gap-2.5 text-sm text-white/75 hover:text-white transition-colors break-words">
                <Mail size={14} className="flex-shrink-0 mt-0.5 text-white" />
                {CONTATO.email}
              </a>
              <p className="flex items-start gap-2.5 text-sm text-white/75">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 text-white" />
                {CONTATO.enderecoCurto}
              </p>
            </div>
            <div className="mt-6 p-4 bg-brand-panel rounded-xl border border-brand-edge">
              <p className="text-[0.7rem] text-white/40 mb-1 uppercase tracking-wider">Endereço completo</p>
              <p className="text-white/80 text-sm leading-snug">{CONTATO.endereco}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-edge pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Ambulatório de Dermatologia e Hanseníase da Amazônia (ADHAM). Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
