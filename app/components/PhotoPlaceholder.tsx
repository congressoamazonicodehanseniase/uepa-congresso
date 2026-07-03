import { ImageIcon } from 'lucide-react';

type Props = {
  /** Legenda/alt da foto (vinda do material institucional). */
  caption?: string;
  /** Classe de proporção, ex.: 'aspect-[4/3]', 'aspect-[21/9]'. */
  ratio?: string;
  /** Variante para uso sobre fundo escuro (seções navy/ameixa). */
  dark?: boolean;
  /** Caminho da imagem real (ex.: '/fotos/p02a.jpg'). Sem isto, vira placeholder. */
  src?: string;
  /** object-position, ex.: 'center top'. */
  position?: string;
  /** Prioriza o carregamento (LCP, hero). */
  priority?: boolean;
  /** Usa object-contain para mostrar a imagem toda sem cortes. */
  contain?: boolean;
  className?: string;
};

/**
 * Quando recebe `src`, mostra a foto real (object-cover). Sem `src`, mostra um
 * espaço reservado com a legenda — para fotos ainda não enviadas.
 */
export default function PhotoPlaceholder({
  caption,
  ratio = 'aspect-[4/3]',
  dark = false,
  src,
  position,
  priority = false,
  contain = false,
  className = '',
}: Props) {
  if (src) {
    return (
      <figure className={`${ratio} ${className} relative overflow-hidden rounded-2xl bg-brand-soft`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={caption ?? ''}
          loading={priority ? 'eager' : 'lazy'}
          className={`absolute inset-0 w-full h-full ${contain ? 'object-contain' : 'object-cover'}`}
          // Padrão: ancora no topo, então qualquer corte tira a parte de baixo (preserva cabeças/topo).
          style={{ objectPosition: position ?? 'center top' }}
        />
      </figure>
    );
  }

  const base = dark ? 'border-brand-edge bg-brand-panel' : 'border-brand-tint bg-brand-soft';
  const tag = dark ? 'text-brand-faint' : 'text-brand-strong';
  const text = dark ? 'text-brand-faint' : 'text-muted';

  return (
    <div
      className={`${ratio} ${base} ${className} overflow-hidden rounded-2xl border border-dashed flex flex-col items-center justify-center text-center p-6`}
    >
      <ImageIcon size={28} className="text-brand-light" aria-hidden />
      <span className={`mt-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase ${tag}`}>Foto</span>
      {caption && <p className={`mt-2 text-xs leading-snug max-w-[92%] ${text}`}>{caption}</p>}
    </div>
  );
}
