import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Política de Privacidade · Ambulatório de Hanseníase da Amazônia',
  description: 'Como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).',
};

const sections = [
  {
    title: '1. Quem somos',
    body: 'O Ambulatório de Dermatologia e Hanseníase da Amazônia, com sede no Campus da UEPA em Marabá, Pará, é o controlador dos dados pessoais coletados por meio deste site e do formulário de inscrições do I Congresso Amazônico de Hanseníase.',
  },
  {
    title: '2. Dados que coletamos',
    body: 'Coletamos apenas os dados necessários para as finalidades declaradas: nome completo, endereço de e-mail, registro profissional (CRM ou número de matrícula) e categoria de inscrição. Não coletamos dados sensíveis adicionais sem consentimento expresso.',
  },
  {
    title: '3. Finalidade do tratamento',
    body: 'Seus dados são usados para: (a) processar e confirmar sua inscrição no congresso; (b) enviar informações logísticas e atualizações do evento; (c) emitir certificados de participação; (d) cumprir obrigações legais e regulatórias.',
  },
  {
    title: '4. Base legal (LGPD)',
    body: 'O tratamento se fundamenta no art. 7º, V da Lei nº 13.709/2018 (LGPD): execução de contrato ou procedimentos preliminares a pedido do titular. Para comunicações opcionais, a base é o consentimento (art. 7º, I), que pode ser revogado a qualquer momento.',
  },
  {
    title: '5. Compartilhamento de dados',
    body: 'Não vendemos nem cedemos seus dados a terceiros para fins comerciais. Podemos compartilhá-los com prestadores de serviço que auxiliam na operação do evento (plataformas de pagamento, emissão de certificados), sempre sob acordo de confidencialidade e pelo mínimo necessário.',
  },
  {
    title: '6. Retenção',
    body: 'Os dados são mantidos pelo período necessário para cumprimento das finalidades descritas e das obrigações legais, geralmente 5 anos após o evento, salvo obrigação legal de prazo diverso.',
  },
  {
    title: '7. Seus direitos',
    body: 'Nos termos da LGPD, você pode, a qualquer momento: confirmar a existência de tratamento; acessar seus dados; corrigir dados incompletos ou desatualizados; solicitar a anonimização, bloqueio ou eliminação de dados desnecessários; revogar o consentimento; e obter informações sobre com quem compartilhamos seus dados. Para exercer esses direitos, envie solicitação para o e-mail abaixo.',
  },
  {
    title: '8. Cookies e rastreamento',
    body: 'Este site utiliza cookies estritamente necessários para funcionamento técnico. Não utilizamos cookies de rastreamento publicitário ou análise comportamental de terceiros.',
  },
  {
    title: '9. Segurança',
    body: 'Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou divulgação indevida.',
  },
  {
    title: '10. Contato e DPO',
    body: 'Para dúvidas ou solicitações relacionadas a esta política ou ao tratamento de seus dados pessoais, entre em contato pelo e-mail contato@ambulatoriohanseniase.com.br. Responderemos em até 15 dias úteis.',
  },
  {
    title: '11. Atualizações',
    body: 'Esta política pode ser atualizada para refletir mudanças legais ou operacionais. A data da última revisão está indicada abaixo. Recomendamos verificá-la periodicamente.',
  },
];

export default function Privacidade() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-canvas">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <Link href="/" className="text-brand-strong text-sm hover:underline">← Voltar ao site</Link>
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl text-ink mt-6 leading-tight">
              Política de Privacidade
            </h1>
            <p className="text-muted text-sm mt-3">Última atualização: junho de 2026 · Em conformidade com a LGPD (Lei nº 13.709/2018)</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-[family-name:var(--font-display)] font-semibold text-lg text-ink mb-2">{s.title}</h2>
                <p className="text-ink-soft leading-relaxed text-[0.97rem]">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-brand-soft border border-brand-tint">
            <p className="text-ink-soft text-sm leading-relaxed">
              <strong className="text-ink">Dúvidas?</strong> Entre em contato:{' '}
              <a href="mailto:contato@ambulatoriohanseniase.com.br" className="text-brand-strong underline">
                contato@ambulatoriohanseniase.com.br
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
