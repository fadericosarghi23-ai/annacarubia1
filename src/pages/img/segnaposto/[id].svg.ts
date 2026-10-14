/**
 * Genera in build un SVG segnaposto per ogni immagine registrata con ph() nei file dati.
 * Stesse misure dell'immagine originale, con etichetta e misura scritte sopra.
 * Quando metti le foto vere, il segnaposto smette di essere usato e non viene più generato.
 */
import type { APIRoute } from 'astro';
import { placeholders } from '../../../lib/media';
// I file dati registrano i segnaposto quando vengono importati.
import '../../../data/site';
import '../../../data/team';
import '../../../data/progetti';
import '../../../data/contenuti';

export function getStaticPaths() {
  return placeholders().map((p) => ({ params: { id: p.id }, props: p }));
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

export const GET: APIRoute = ({ props }) => {
  const { label, width: w, height: h } = props as { label: string; width: number; height: number };
  const m = Math.min(w, h);
  const fs = Math.max(12, Math.round(Math.min(m * 0.075, w / (label.length * 0.62))));
  const fs2 = Math.round(fs * 0.7);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<rect width="${w}" height="${h}" fill="#d8d4cf"/>
<rect x="${m * 0.02}" y="${m * 0.02}" width="${w - m * 0.04}" height="${h - m * 0.04}" fill="none" stroke="#a9a39c" stroke-width="${Math.max(1, m * 0.004)}" stroke-dasharray="${m * 0.02} ${m * 0.015}"/>
<path d="M0 0L${w} ${h}M${w} 0L0 ${h}" stroke="#c6c1bb" stroke-width="${Math.max(1, m * 0.003)}"/>
<g font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" text-anchor="middle" fill="#4d4843">
<text x="${w / 2}" y="${h / 2 - fs2 * 0.4}" font-size="${fs}" font-weight="700">${esc(label)}</text>
<text x="${w / 2}" y="${h / 2 + fs2 * 1.3}" font-size="${fs2}">${w}×${h} · da sostituire</text>
</g>
</svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};
