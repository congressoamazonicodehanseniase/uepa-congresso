import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InscricaoForm from './InscricaoForm';

export const metadata: Metadata = {
  title: 'Inscrição | I Congresso Amazônico de Hanseníase',
  description: 'Inscreva-se no I Congresso Amazônico de Hanseníase. Preencha seus dados e finalize com o pagamento via Pix.',
};

export default function InscricaoPage() {
  return (
    <div className="theme-congresso">
      <Navbar />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-canvas min-h-[70vh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <InscricaoForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
