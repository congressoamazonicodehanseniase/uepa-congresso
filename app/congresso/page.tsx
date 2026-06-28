import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Sobre from '../components/Sobre';
import Programacao from '../components/Programacao';
import Palestrantes from '../components/Palestrantes';
import PalestrantesConvidados from '../components/PalestrantesConvidados';
import Local from '../components/Local';
import Inscricoes from '../components/Inscricoes';
import Patrocinadores from '../components/Patrocinadores';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';

export const metadata: Metadata = {
  title: { absolute: 'I Congresso Amazônico de Hanseníase | 27–29 Ago 2026 · Marabá, PA' },
  description:
    'O primeiro Congresso Amazônico de Hanseníase reúne especialistas, pesquisadores, gestores e estudantes para três dias de ciência e clínica. Marabá, Pará, 27, 28 e 29 de agosto de 2026. Realização: ADHAM. Apoio: CNPq.',
  openGraph: {
    title: 'I Congresso Amazônico de Hanseníase',
    description: '27, 28 e 29 de agosto de 2026 · Marabá, PA · Apoio CNPq',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function CongressoPage() {
  return (
    <div className="theme-congresso">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <PalestrantesConvidados />
        <Inscricoes />
        <Local />
        <Sobre />
        <Programacao />
        <Palestrantes />
        <Patrocinadores />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
