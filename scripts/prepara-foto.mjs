/**
 * Dalle foto in foto-originali/ genera in public/img/foto/ le varianti compresse che
 * Picture.astro si aspetta con `widths` (<nome>-<w>.avif / .webp, più un solo .jpg di riserva).
 * Stampa e salva le misure da usare nei file dati (src/data/foto-misure.json).
 *
 *   npm run foto              (tutte)
 *   npm run foto -- ritratto  (solo i file il cui nome contiene "ritratto")
 *
 * Compressione:
 * - larghezze 480 / 800 / 1200 / 1600 / 2000 (mai oltre l'originale): 2000 basta anche a tutto
 *   schermo su un monitor 1920; la 2400 pesava più di un terzo del totale per un guadagno invisibile;
 * - AVIF q50 e WebP q74: sono i formati che i browser scaricano davvero (<source> del <picture>);
 * - JPG q76 (mozjpeg, progressivo) solo nella misura usata come src di riserva (≤ 1200):
 *   i JPG alle altre larghezze non venivano mai richiesti;
 * - metadati rimossi (sharp non li copia), orientamento EXIF applicato.
 *
 * Quando arrivano le foto vere della cliente: stesso nome in foto-originali/, rilanciare.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'foto-originali');
const OUT = path.join(ROOT, 'public', 'img', 'foto');
const FILE_MISURE = path.join(ROOT, 'src', 'data', 'foto-misure.json');
const STEPS = [480, 800, 1200, 1600, 2000];
const MAX = STEPS[STEPS.length - 1];
const solo = process.argv[2];

await fs.mkdir(OUT, { recursive: true });
const misure = solo ? JSON.parse(await fs.readFile(FILE_MISURE, 'utf8')) : {};
const files = (await fs.readdir(SRC)).filter((x) => /\.(jpe?g|png|webp)$/i.test(x) && (!solo || x.includes(solo))).sort();

let byte = 0;
for (const f of files) {
  const nome = f.replace(/\.[^.]+$/, '');
  // via le varianti vecchie di questa foto
  for (const old of await fs.readdir(OUT)) if (old.startsWith(`${nome}-`) && /^\d+\.(avif|webp|jpg)$/.test(old.slice(nome.length + 1))) await fs.unlink(path.join(OUT, old));

  const meta = await sharp(path.join(SRC, f)).rotate().metadata();
  const ow = meta.autoOrient?.width ?? meta.width;
  const oh = meta.autoOrient?.height ?? meta.height;
  const top = Math.min(ow, MAX);
  const widths = [...STEPS.filter((w) => w < top), top];
  const width = top;
  const height = Math.round((oh * top) / ow);
  const fallback = [...widths].reverse().find((w) => w <= 1200) ?? widths[0];

  for (const w of widths) {
    const r = sharp(path.join(SRC, f)).rotate().resize({ width: w });
    const out = [
      [r.clone().avif({ quality: 50, effort: 5 }), 'avif'],
      [r.clone().webp({ quality: 74, effort: 5 }), 'webp'],
      ...(w === fallback ? [[r.clone().jpeg({ quality: 76, mozjpeg: true, progressive: true }), 'jpg']] : []),
    ];
    for (const [img, ext] of out) {
      const info = await img.toFile(path.join(OUT, `${nome}-${w}.${ext}`));
      byte += info.size;
    }
  }
  misure[nome] = { width, height, widths };
  console.log(`${nome.padEnd(20)} ${width}×${height}  [${widths.join(', ')}]  jpg ${fallback}`);
}
await fs.writeFile(FILE_MISURE, JSON.stringify(misure, null, 2) + '\n');
console.log(`\n${files.length} foto, ${(byte / 1048576).toFixed(1)} MB generati. Misure in src/data/foto-misure.json`);
