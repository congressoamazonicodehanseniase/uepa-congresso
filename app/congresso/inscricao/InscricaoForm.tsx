'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import imageCompression from 'browser-image-compression';
import { upload } from '@vercel/blob/client';
import Link from 'next/link';
import { Check, Copy, Loader2, ArrowLeft, Paperclip } from 'lucide-react';
import { CATEGORIAS_INSCRICAO, TIPOS_PARTICIPACAO, PIX, CONTATO } from '../../lib/config';

type Categoria = (typeof CATEGORIAS_INSCRICAO)[number];

const ESTADO_INICIAL = {
  nomeCompleto: '',
  nomeCracha: '',
  categoria: '' as Categoria | '',
  especialidade: '',
  empresa: '',
  postoSaude: '',
  funcao: '',
  tipoParticipacao: '' as (typeof TIPOS_PARTICIPACAO)[number] | '',
  cidade: '',
  instituicao: '',
  contato: '',
  email: '',
};

export default function InscricaoForm() {
  const [dados, setDados] = useState(ESTADO_INICIAL);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');
  const [copiado, setCopiado] = useState('');

  const [comprovante, setComprovante] = useState<File | null>(null);
  const [comprovanteVinculo, setComprovanteVinculo] = useState<File | null>(null);
  const [enviandoComprovante, setEnviandoComprovante] = useState(false);
  const [comprovanteEnviado, setComprovanteEnviado] = useState(false);
  const [erroComprovante, setErroComprovante] = useState('');

  const set = <K extends keyof typeof ESTADO_INICIAL>(campo: K, valor: (typeof ESTADO_INICIAL)[K]) =>
    setDados((d) => ({ ...d, [campo]: valor }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErro('');
    setEnviando(true);
    try {
      const res = await fetch('/api/inscricao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      });
      if (!res.ok) throw new Error();
      setEnviado(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setErro('Não foi possível enviar sua inscrição agora. Tente novamente em instantes ou nos chame por e-mail.');
    } finally {
      setEnviando(false);
    }
  }

  function copiar(campo: string, valor: string) {
    navigator.clipboard.writeText(valor);
    setCopiado(campo);
    setTimeout(() => setCopiado(''), 1500);
  }

  function onComprovanteChange(e: ChangeEvent<HTMLInputElement>) {
    setComprovante(e.target.files?.[0] ?? null);
    setErroComprovante('');
  }

  function onComprovanteVinculoChange(e: ChangeEvent<HTMLInputElement>) {
    setComprovanteVinculo(e.target.files?.[0] ?? null);
    setErroComprovante('');
  }

  async function onEnviarComprovante(e: FormEvent) {
    e.preventDefault();
    if (!comprovante) return;

    setErroComprovante('');
    setEnviandoComprovante(true);

    let arquivoFinal = comprovante;

    try {
      if (comprovante.type.startsWith('image/')) {
        arquivoFinal = await imageCompression(comprovante, {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        });
      }
    } catch (err) {
      console.warn('Erro ao comprimir imagem:', err);
    }

    // Limite individual não mais testado aqui para não quebrar fluxo prematuramente

    let arquivoFinalVinculo = comprovanteVinculo;
    if (comprovanteVinculo) {
      try {
        if (comprovanteVinculo.type.startsWith('image/')) {
          arquivoFinalVinculo = await imageCompression(comprovanteVinculo, {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
          });
        }
      } catch (err) {
        console.warn('Erro ao comprimir imagem do vínculo:', err);
      }
      
    }

    const totalSize = arquivoFinal.size + (arquivoFinalVinculo?.size || 0);
    if (totalSize > 12 * 1024 * 1024) {
      setEnviandoComprovante(false);
      setErroComprovante('O tamanho total dos arquivos excede o limite (máx 12MB). Tente reduzir o tamanho dos PDFs ou envie direto para nosso e-mail.');
      return;
    }

    try {
      const uniqueName1 = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}-${arquivoFinal.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const blobComprovante = await upload(uniqueName1, arquivoFinal, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      });

      let blobVinculo = null;
      if (arquivoFinalVinculo && comprovanteVinculo) {
        const uniqueName2 = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}-${arquivoFinalVinculo.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        blobVinculo = await upload(uniqueName2, arquivoFinalVinculo, {
          access: 'public',
          handleUploadUrl: '/api/upload',
        });
      }

      const form = new FormData();
      Object.entries(dados).forEach(([chave, valor]) => form.append(chave, valor));
      form.append('comprovanteUrl', blobComprovante.url);
      if (blobVinculo) form.append('comprovanteVinculoUrl', blobVinculo.url);

      const res = await fetch('/api/comprovante', { method: 'POST', body: form });
      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        throw new Error(errData?.error || 'Erro na comunicação com o servidor.');
      }
      setComprovanteEnviado(true);
    } catch (err: any) {
      setErroComprovante(err.message || 'Não foi possível enviar o comprovante agora. Tente novamente em instantes ou nos chame por e-mail.');
    } finally {
      setEnviandoComprovante(false);
    }
  }

  const campoLabel = 'block text-sm sm:text-base font-semibold uppercase tracking-wide text-ink-soft mb-2';
  const campoInput = 'w-full rounded-xl border border-line bg-canvas px-5 py-3.5 sm:py-4 text-base sm:text-lg text-ink outline-none focus:border-brand-strong';

  if (enviado) {
    return (
      <div className="max-w-4xl mx-auto rounded-3xl border border-line bg-surface p-8 sm:p-14 lg:p-16">
        <div className="flex items-center gap-4 mb-1">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-soft text-brand-strong shrink-0">
            <Check size={26} />
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-ink text-2xl sm:text-3xl leading-tight">
            Inscrição recebida!
          </h2>
        </div>
        <div className="mt-4 p-4 bg-brand-soft/50 rounded-xl border border-brand-tint">
          <p className="text-brand-strong font-medium">
            Você receberá em breve um e-mail de confirmação da inscrição no endereço: <strong className="break-all">{dados.email}</strong>
          </p>
        </div>
        {dados.categoria === 'Profissional da Saúde (Prefeitura)' ? (
          <p className="text-muted text-base sm:text-lg mt-5 leading-relaxed">
            Sua inscrição como profissional da rede municipal foi registrada. Agora, envie seu comprovante de vinculação com a Secretaria de Saúde abaixo ou para{' '}
            <strong className="text-ink">{CONTATO.email}</strong> para confirmarmos sua isenção.
          </p>
        ) : (
          <>
            <p className="text-muted text-base sm:text-lg mt-5 leading-relaxed">
              Agora finalize com o pagamento via Pix. Verifique abaixo o valor correspondente à sua categoria e o lote atual e, em seguida, realize a transferência para a chave Pix.
            </p>

            <div className="mt-6 p-6 bg-surface border border-brand-tint rounded-2xl">
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-brand-strong mb-4">
                Valores de Inscrição
              </h3>
              
              <div className="space-y-5">
                <div>
                  <p className="font-semibold text-ink text-sm">Estudantes</p>
                  <p className="text-muted text-sm mt-1"><span className="line-through opacity-70">1º lote: R$ 40</span> | <strong className="text-brand-strong">2º lote: R$ 60</strong> | 3º lote: <strong>R$ 80</strong></p>
                </div>
                
                <div>
                  <p className="font-semibold text-ink text-sm">Profissionais da Saúde e demais categorias</p>
                  <p className="text-muted text-sm mt-1">
                    <span className="line-through opacity-70">Lote promocional: R$ 80</span> | <strong className="text-brand-strong">2º lote: R$ 100</strong><br/>
                    3º lote: <strong>R$ 150</strong> | 4º lote: <strong>R$ 180</strong>
                  </p>
                </div>
              </div>
              
              <p className="text-xs text-brand-strong font-medium mt-4 bg-brand-soft p-3 rounded-lg">
                Dica: Confirme qual é o lote atual disponível antes de realizar a transferência. 
              </p>
            </div>

            <div className="mt-7 rounded-2xl border border-line bg-canvas p-6 sm:p-8 space-y-5">
              {[
                { label: `Chave Pix (${PIX.tipoChave})`, valor: PIX.chave },
                { label: 'Favorecido', valor: PIX.favorecido },
                { label: 'Banco', valor: PIX.banco },
                { label: 'Agência', valor: PIX.agencia },
                { label: 'Conta', valor: PIX.conta },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.08em] text-muted">{item.label}</p>
                    <p className="text-base sm:text-lg text-ink font-medium break-all">{item.valor}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => copiar(item.label, item.valor)}
                    className="shrink-0 p-3 rounded-lg border border-line text-ink-soft hover:border-brand-strong hover:text-brand-strong transition-colors"
                    aria-label={`Copiar ${item.label}`}
                  >
                    {copiado === item.label ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {comprovanteEnviado ? (
          <div className="mt-7 flex items-center gap-4 rounded-2xl border border-brand-tint bg-brand-soft p-6">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-strong text-white shrink-0">
              <Check size={18} />
            </span>
            <p className="text-base sm:text-lg text-brand-strong font-medium">Comprovante enviado! Vamos confirmar sua vaga em breve.</p>
          </div>
        ) : (
          <form onSubmit={onEnviarComprovante} className="mt-7 rounded-2xl border border-line bg-canvas p-6 sm:p-8">
            <p className={campoLabel}>
              {dados.categoria === 'Profissional da Saúde (Prefeitura)' 
                ? 'Anexar comprovante de vinculação' 
                : 'Anexar comprovante de pagamento'}
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
              Prefere enviar por aqui? Anexe a imagem ou PDF do comprovante e nós recebemos por e-mail na hora.
            </p>
            <label className="flex items-center gap-3 rounded-xl border border-dashed border-line bg-surface px-5 py-4 cursor-pointer hover:border-brand-strong transition-colors">
              <Paperclip size={20} className="text-muted shrink-0" />
              <span className="text-sm sm:text-base text-ink-soft truncate">
                {comprovante ? comprovante.name : 'Escolher arquivo (imagem ou PDF)'}
              </span>
              <input type="file" accept="image/*,application/pdf" onChange={onComprovanteChange} className="sr-only" />
            </label>

            {dados.categoria === 'Estudante' && (
               <div className="mt-6">
                 <p className={campoLabel}>
                   Anexar comprovante de vínculo com a faculdade
                 </p>
                 <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
                   Por favor, envie seu comprovante de matrícula, declaração de vínculo ou carteirinha de estudante atualizada.
                 </p>
                 <label className="flex items-center gap-3 rounded-xl border border-dashed border-line bg-surface px-5 py-4 cursor-pointer hover:border-brand-strong transition-colors">
                   <Paperclip size={20} className="text-muted shrink-0" />
                   <span className="text-sm sm:text-base text-ink-soft truncate">
                     {comprovanteVinculo ? comprovanteVinculo.name : 'Escolher arquivo (imagem ou PDF)'}
                   </span>
                   <input type="file" accept="image/*,application/pdf" onChange={onComprovanteVinculoChange} className="sr-only" />
                 </label>
               </div>
            )}

            {erroComprovante && <p className="text-sm text-red-600 mt-3">{erroComprovante}</p>}

            <button
              type="submit"
              disabled={!comprovante || (dados.categoria === 'Estudante' && !comprovanteVinculo) || enviandoComprovante}
              className="btn btn-primary w-full mt-5 text-base py-4 disabled:opacity-60"
            >
              {enviandoComprovante ? <Loader2 size={18} className="animate-spin" /> : 'Enviar comprovante'}
            </button>
          </form>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="https://www.even3.com.br/i-congresso-amazonico-de-hanseniase-757463"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex-1 text-base py-4 text-center"
          >
            Submeter trabalho científico
          </a>
          <Link href="/congresso" className="btn btn-outline flex-1 text-base py-4 text-center">
            Voltar ao congresso
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto rounded-3xl border border-line bg-surface p-8 sm:p-14 lg:p-16">
      <Link href="/congresso" className="inline-flex items-center gap-1.5 text-sm sm:text-base text-muted hover:text-brand-strong transition-colors mb-7">
        <ArrowLeft size={18} /> Voltar ao congresso
      </Link>

      <p className="rule-label mb-3">Inscrição</p>
      <h1 className="font-[family-name:var(--font-display)] font-bold text-ink text-3xl sm:text-4xl leading-tight">
        Quero me inscrever
      </h1>
      <p className="text-muted text-base sm:text-lg mt-3 leading-relaxed">
        Preencha seus dados. Ao final, você recebe as informações de pagamento via Pix.
      </p>

      <div className="mt-6 p-4 sm:p-5 bg-brand-soft/50 border border-brand-tint/60 rounded-xl">
        <p className="font-semibold text-brand-strong text-sm mb-3 uppercase tracking-wide">Tabela de Valores</p>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-ink">Estudantes</p>
            <p className="text-muted mt-1 leading-relaxed"><span className="line-through opacity-70">1º lote: R$ 40</span> <br className="hidden sm:block"/><strong className="text-brand-strong">2º lote: R$ 60</strong> <br className="hidden sm:block"/>3º lote: <strong>R$ 80</strong></p>
          </div>
          <div>
            <p className="font-semibold text-ink">Profissionais da Saúde / Demais</p>
            <p className="text-muted mt-1 leading-relaxed"><span className="line-through opacity-70">Lote promocional: R$ 80</span> <br className="hidden sm:block"/><strong className="text-brand-strong">2º lote: R$ 100</strong> | 3º lote: <strong>R$ 150</strong> <br className="hidden sm:block"/>4º lote: <strong>R$ 180</strong></p>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-9 sm:mt-10 space-y-6 sm:space-y-7">
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <label className={campoLabel}>Nome completo</label>
            <input
              required
              value={dados.nomeCompleto}
              onChange={(e) => set('nomeCompleto', e.target.value)}
              className={campoInput}
            />
          </div>

          <div>
            <label className={campoLabel}>Nome para o crachá</label>
            <input
              required
              value={dados.nomeCracha}
              onChange={(e) => set('nomeCracha', e.target.value)}
              className={campoInput}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <label className={campoLabel}>E-mail</label>
            <input
              required
              type="email"
              value={dados.email}
              onChange={(e) => set('email', e.target.value)}
              className={campoInput}
            />
          </div>
          <div>
            <label className={campoLabel}>Contato (WhatsApp)</label>
            <input
              required
              type="tel"
              value={dados.contato}
              onChange={(e) => set('contato', e.target.value)}
              className={campoInput}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <label className={campoLabel}>Categoria</label>
            <select
              required
              value={dados.categoria}
              onChange={(e) => set('categoria', e.target.value as Categoria)}
              className={campoInput}
            >
              <option value="" disabled>Selecione...</option>
              {CATEGORIAS_INSCRICAO.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={campoLabel}>Palestrante ou participante/ouvinte?</label>
            <select
              required
              value={dados.tipoParticipacao}
              onChange={(e) => set('tipoParticipacao', e.target.value as (typeof TIPOS_PARTICIPACAO)[number])}
              className={campoInput}
            >
              <option value="" disabled>Selecione...</option>
              {TIPOS_PARTICIPACAO.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {(dados.categoria === 'Profissional da Saúde (especialidade)' || dados.categoria === 'Representante (empresa)' || dados.categoria === 'Profissional da Saúde (Prefeitura)') && (
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {dados.categoria === 'Profissional da Saúde (especialidade)' && (
              <div>
                <label className={campoLabel}>Especialidade</label>
                <input
                  required
                  value={dados.especialidade}
                  onChange={(e) => set('especialidade', e.target.value)}
                  className={campoInput}
                />
              </div>
            )}

            {dados.categoria === 'Profissional da Saúde (Prefeitura)' && (
              <>
                <div>
                  <label className={campoLabel}>Posto de saúde</label>
                  <input
                    required
                    value={dados.postoSaude}
                    onChange={(e) => set('postoSaude', e.target.value)}
                    className={campoInput}
                  />
                </div>
                <div>
                  <label className={campoLabel}>Função</label>
                  <input
                    required
                    value={dados.funcao}
                    onChange={(e) => set('funcao', e.target.value)}
                    className={campoInput}
                  />
                </div>
              </>
            )}

            {dados.categoria === 'Representante (empresa)' && (
              <div>
                <label className={campoLabel}>Nome da empresa</label>
                <input
                  required
                  value={dados.empresa}
                  onChange={(e) => set('empresa', e.target.value)}
                  className={campoInput}
                />
              </div>
            )}
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <label className={campoLabel}>Cidade</label>
            <input
              required
              value={dados.cidade}
              onChange={(e) => set('cidade', e.target.value)}
              className={campoInput}
            />
          </div>
          <div>
            <label className={campoLabel}>Instituição</label>
            <input
              required
              value={dados.instituicao}
              onChange={(e) => set('instituicao', e.target.value)}
              className={campoInput}
            />
          </div>
        </div>

        {erro && <p className="text-sm text-red-600">{erro}</p>}

        <button type="submit" disabled={enviando} className="btn btn-primary w-full mt-3 text-base sm:text-lg py-4 sm:py-5 disabled:opacity-60">
          {enviando ? <Loader2 size={20} className="animate-spin" /> : 'Enviar inscrição'}
        </button>
      </form>
    </div>
  );
}
