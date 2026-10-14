/**
 * Foto vere (oggi: FOTO STOCK Unsplash, non della cliente — vedi TESTI-INVENTATI.md).
 * `foto('vetrina-01', alt)` → Img con misure e varianti generate da `npm run foto`.
 */
import misure from '../data/foto-misure.json';
import type { Img } from './media';

type Misure = Record<string, { width: number; height: number; widths: number[] }>;

export function foto(nome: string, alt: string): Img {
  const m = (misure as Misure)[nome];
  if (!m) throw new Error(`Foto "${nome}" non trovata: mettila in foto-originali/ e lancia npm run foto`);
  return { src: `/img/foto/${nome}`, width: m.width, height: m.height, widths: m.widths, alt };
}
