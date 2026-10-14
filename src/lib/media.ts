/**
 * Immagini della base.
 *
 * Ogni immagine è un oggetto `Img` con le misure INTRINSECHE (width/height): sono quelle che
 * finiscono negli attributi dell'<img>, quindi decidono proporzioni, crop e animazioni.
 *
 * - Segnaposto: `ph(id, etichetta, w, h)` → SVG grigio generato in build da
 *   src/pages/img/segnaposto/[id].svg.ts, con scritte etichetta e misura.
 * - Foto vera, file singolo: `{ src: '/img/...jpg', width, height, alt }`.
 * - Foto vera con varianti come nel sito di partenza (`<stem>-<w>.avif/.webp/.jpg`):
 *   `{ src: '/img/progetti/x/x-01', width, height, alt, widths: [480, 800, 1200, 1600, 2400] }`
 *   → Picture.astro genera i <source> avif/webp e usa la variante 1200 come src.
 */
export interface Img {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** larghezze disponibili se `src` è uno stem con varianti <stem>-<w>.{avif,webp,jpg} */
  widths?: number[];
  /** disegno/render: niente crop nella galleria, testata chiara nella scheda progetto */
  drawing?: boolean;
}

export interface Placeholder {
  id: string;
  label: string;
  width: number;
  height: number;
}

const registry = new Map<string, Placeholder>();

/** Segnaposto con le misure dell'immagine originale. L'alt è un marker da compilare. */
export function ph(id: string, label: string, width: number, height: number, extra: Partial<Img> = {}): Img {
  registry.set(id, { id, label, width, height });
  return {
    src: `/img/segnaposto/${id}.svg`,
    width,
    height,
    alt: `DA COMPILARE: descrizione ${label.toLowerCase()}`,
    ...extra,
  };
}

export const placeholders = () => [...registry.values()];

/** src dell'<img>: per le immagini con varianti la 1200 (o la più grande sotto), come nell'originale. */
export function imgSrc(img: Img): string {
  if (!img.widths?.length) return img.src;
  const w = [...img.widths].reverse().find((x) => x <= 1200) ?? img.widths[0];
  return `${img.src}-${w}.jpg`;
}

/** Versione grande per la lightbox (webp più largo, come nell'originale). */
export function imgFull(img: Img): string {
  if (!img.widths?.length) return img.src;
  return `${img.src}-${img.widths[img.widths.length - 1]}.webp`;
}

export function srcset(img: Img, ext: 'avif' | 'webp'): string | undefined {
  if (!img.widths?.length) return undefined;
  return img.widths.map((w) => `${img.src}-${w}.${ext} ${w}w`).join(', ');
}

/** Classe della figura in galleria, ricavata dalle proporzioni come nel sito di partenza. */
export function galleryClass(img: Img): string | undefined {
  const r = img.width / img.height;
  const cls = r < 0.88 ? 'tall' : img.drawing || r >= 1.6 ? 'wide' : '';
  return [cls, img.drawing ? 'drawing' : ''].filter(Boolean).join(' ') || undefined;
}
