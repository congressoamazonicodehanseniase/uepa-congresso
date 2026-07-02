import { FileText } from 'lucide-react';
import { LeafMark } from './Decor';

export default function SubmissaoTrabalhos() {
  return (
    <section id="trabalhos" className="relative py-16 sm:py-24 bg-canvas overflow-hidden">
      <LeafMark className="absolute -top-10 -right-10 w-52 text-brand-tint rotate-[-15deg] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="mb-14">
          <p className="rule-label mb-7">Trabalhos Científicos</p>
          <h2 className="display text-ink" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Submissão de Trabalhos
          </h2>
          <div className="mt-6 p-5 bg-brand-soft border-l-4 border-brand-strong rounded-r-xl">
            <p className="text-brand-strong font-semibold mb-2 flex items-center gap-2">
              <FileText size={18} />
              Edital Aberto
            </p>
            <p className="text-ink-soft text-sm leading-relaxed mb-4">
              A submissão dos trabalhos científicos já está aberta! Os trabalhos devem ser submetidos exclusivamente através da plataforma Even3. Antes de submeter, leia atentamente as regras gerais de formatação e os eixos temáticos abaixo.
            </p>
            <a
              href="https://www.even3.com.br/i-congresso-amazonico-de-hanseniase-757463"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-brand-strong text-canvas font-bold text-sm hover:bg-brand-tint transition-colors w-full sm:w-auto"
            >
              Submeter Trabalho no Even3
            </a>
          </div>
          <p className="mt-6 font-semibold text-ink">Importante: a submissão será na modalidade resumo simples.</p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-xl mb-4">Categorias de Trabalho Aceitas</h3>
            <ul className="list-disc pl-5 text-ink-soft space-y-1.5 marker:text-brand-tint">
              <li>Pesquisa Original</li>
              <li>Revisão de Literatura</li>
              <li>Relato de Caso</li>
              <li>Relato de Experiência</li>
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-xl mb-4">Eixos Temáticos</h3>
            <ol className="list-decimal pl-5 text-ink-soft space-y-1.5 marker:text-brand-strong font-semibold">
              <li className="pl-1"><span className="font-normal">Epidemiologia da Hanseníase na Amazônia</span></li>
              <li className="pl-1"><span className="font-normal">Diagnóstico Clínico e Laboratorial</span></li>
              <li className="pl-1"><span className="font-normal">Tratamento e Manejo das Reações Hansênicas</span></li>
              <li className="pl-1"><span className="font-normal">Políticas Públicas e Vigilância em Saúde</span></li>
              <li className="pl-1"><span className="font-normal">Educação em Saúde e Combate ao Estigma</span></li>
              <li className="pl-1"><span className="font-normal">Pesquisa Básica, Translacional e Inovação em Hanseníase</span></li>
              <li className="pl-1"><span className="font-normal">Experiências Extensionistas e Atenção Primária em Saúde</span></li>
            </ol>
            <p className="mt-3 text-sm text-ink-soft italic">O eixo temático escolhido deverá ser obrigatoriamente informado no corpo do resumo.</p>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-xl mb-4">Regras Gerais de Formatação do Resumo</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-brand-strong mb-2">Configuração do arquivo</h4>
                <ul className="list-disc pl-5 text-ink-soft space-y-1.5 marker:text-brand-tint text-sm">
                  <li>Formato do arquivo: .doc ou .docx (arquivos em PDF não serão aceitos)</li>
                  <li>Papel A4, orientação retrato; margens de 2,5 cm em todos os lados</li>
                  <li>Fonte Arial, tamanho 12; espaçamento entre linhas de 1,5</li>
                  <li>Alinhamento justificado (exceto o título, que deve ser centralizado)</li>
                  <li>Extensão: mínimo de 1.500 e máximo de 2.500 caracteres com espaços, incluindo as referências</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-brand-strong mb-2">Título e autores</h4>
                <ul className="list-disc pl-5 text-ink-soft space-y-1.5 marker:text-brand-tint text-sm">
                  <li>Título conciso, com no máximo 15 palavras, centralizado, em letras maiúsculas e negrito</li>
                  <li>Subtítulo em inglês abaixo do título</li>
                  <li>Máximo de 10 autores, com vinculação institucional indicada em nota de rodapé</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-brand-strong mb-2">Estrutura obrigatória do resumo</h4>
                <ul className="list-none text-ink-soft space-y-1.5 text-sm">
                  <li>1. Introdução</li>
                  <li>2. Metodologia</li>
                  <li>3. Resultados e Discussão</li>
                  <li>4. Considerações Finais</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-brand-strong mb-2">Palavras-chave e referências</h4>
                <ul className="list-disc pl-5 text-ink-soft space-y-1.5 marker:text-brand-tint text-sm">
                  <li>Mínimo de 3 e máximo de 5 palavras-chave, conforme o DeCS, separadas por ponto e vírgula</li>
                  <li>Entre 3 e 5 referências, preferencialmente dos últimos cinco anos, formatadas segundo as normas ABNT vigentes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 border-t border-line pt-10">
            <div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-xl mb-4">Cronograma Previsto</h3>
              <ul className="list-none text-ink-soft space-y-3">
                <li className="flex flex-col">
                  <span className="text-sm font-semibold text-brand-strong uppercase tracking-wider">Abertura das submissões</span>
                  <span>04/07/2026</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm font-semibold text-brand-strong uppercase tracking-wider">Encerramento das submissões</span>
                  <span>18/07/2026</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-ink text-xl mb-4">Observação Importante</h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                A submissão dos trabalhos será exclusiva para participantes inscritos e confirmados no evento, por meio da plataforma Even3.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-muted pt-8 border-t border-line">
            <p className="font-semibold text-ink">Comissão Científica — I Congresso Amazônico de Hanseníase</p>
            <p>Marabá (PA), 02 de julho de 2026.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
