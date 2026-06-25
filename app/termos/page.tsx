import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Termos de Uso · I Congresso Amazônico de Hanseníase',
  description: 'Condições de uso do site e do processo de inscrição do I Congresso Amazônico de Hanseníase.',
};

const sections = [
  {
    title: '1. Aceitação',
    body: 'Ao acessar este site ou preencher o formulário de inscrição, você concorda com os presentes Termos de Uso. Caso não concorde, não utilize nossos serviços.',
  },
  {
    title: '2. Objeto',
    body: 'Estes termos regulam o uso do site do Ambulatório de Dermatologia e Hanseníase da Amazônia e do formulário de inscrições do I Congresso Amazônico de Hanseníase (27, 28 e 29 de agosto de 2026, Marabá-PA).',
  },
  {
    title: '3. Inscrições',
    body: 'A inscrição é efetivada após confirmação de pagamento. O organizador reserva-se o direito de cancelar inscrições com dados inconsistentes ou suspeita de fraude. Vagas são limitadas e preenchidas por ordem de conclusão do pagamento.',
  },
  {
    title: '4. Cancelamento e reembolso',
    body: 'Solicitações de cancelamento com mais de 30 dias de antecedência ao evento garantem reembolso integral. Após esse prazo, o valor é convertido em crédito para a próxima edição. Não há reembolso para ausências sem aviso prévio.',
  },
  {
    title: '5. Certificados',
    body: 'Certificados são emitidos em formato digital e enviados por e-mail em até 10 dias após o evento, condicionados à presença mínima de 75% da carga horária. O participante é responsável por informar corretamente seus dados no ato da inscrição.',
  },
  {
    title: '6. Propriedade intelectual',
    body: 'Todo o conteúdo deste site (textos, imagens, logotipos e materiais do congresso) é de propriedade do Ambulatório de Dermatologia e Hanseníase da Amazônia ou de seus respectivos autores. É proibida a reprodução sem autorização prévia por escrito.',
  },
  {
    title: '7. Código de conduta',
    body: 'Os participantes comprometem-se a manter conduta respeitosa durante o evento. O organizador poderá retirar credenciais de participante que adote comportamento abusivo, discriminatório ou que perturbe o andamento do congresso, sem direito a reembolso.',
  },
  {
    title: '8. Limitação de responsabilidade',
    body: 'O organizador não se responsabiliza por danos indiretos, lucros cessantes ou perdas decorrentes de cancelamento por caso fortuito, força maior ou determinação de autoridade sanitária. Em tais casos, o crédito para edição futura será garantido.',
  },
  {
    title: '9. Uso aceitável do site',
    body: 'É proibido usar este site para fins ilícitos, enviar spam, tentar acesso não autorizado a sistemas, ou qualquer ação que possa prejudicar a disponibilidade ou integridade do serviço.',
  },
  {
    title: '10. Modificações',
    body: 'Estes termos podem ser atualizados a qualquer momento. Mudanças relevantes serão comunicadas por e-mail aos inscritos. O uso continuado após a publicação das alterações implica aceitação.',
  },
  {
    title: '11. Lei aplicável',
    body: 'Estes termos são regidos pela legislação brasileira. Fica eleito o foro da Comarca de Marabá, Pará, para dirimir eventuais controvérsias.',
  },
];

export default function Termos() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-canvas">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <Link href="/" className="text-brand-strong text-sm hover:underline">← Voltar ao site</Link>
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl text-ink mt-6 leading-tight">
              Termos de Uso
            </h1>
            <p className="text-muted text-sm mt-3">Última atualização: junho de 2026</p>
          </div>

          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-[family-name:var(--font-display)] font-semibold text-lg text-ink mb-2">{s.title}</h2>
                <p className="text-ink-soft leading-relaxed text-[0.97rem]">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-brand-soft border border-brand-tint">
            <p className="text-ink-soft text-sm leading-relaxed">
              <strong className="text-ink">Contato:</strong>{' '}
              <a href="mailto:contato@ambulatoriohanseniase.com.br" className="text-brand-strong underline">
                contato@ambulatoriohanseniase.com.br
              </a>
              {' '}· Veja também nossa{' '}
              <Link href="/privacidade" className="text-brand-strong underline">Política de Privacidade</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
