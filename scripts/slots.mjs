/**
 * Elenca gli slot ancora aperti nei sorgenti: marker [[DA COMPILARE: …]] e numeri [[N…]].
 * Gli slot dentro funzioni che generano più voci (es. 12 progetti) contano una volta qui,
 * ma compaiono N volte nel sito: per il conteggio "a schermo" usa --dist dopo la build.
 *
 *   npm run slots            → sorgenti (src/, astro.config.mjs)
 *   npm run slots -- --dist  → pagine generate (dist/), conteggio per pagina
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = process.argv.includes('--dist');
const RE = /\[\[(?:DA COMPILARE:[^\]]*|N\d+)\]\]/g;

const walk = (dir, out = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(astro|ts|mjs|js|html|txt|xml|webmanifest|json)$/.test(e.name)) out.push(p);
  }
  return out;
};

if (dist) {
  const files = walk(path.join(ROOT, 'dist')).filter((f) => /\.(html|txt|webmanifest)$/.test(f));
  let tot = 0;
  for (const f of files) {
    const n = (fs.readFileSync(f, 'utf8').match(RE) || []).length;
    if (n) { tot += n; console.log(String(n).padStart(4), path.relative(path.join(ROOT, 'dist'), f)); }
  }
  console.log(`\n${tot} slot aperti nelle pagine generate (${files.length} file).`);
} else {
  const files = [...walk(path.join(ROOT, 'src')), path.join(ROOT, 'astro.config.mjs')];
  let tot = 0;
  for (const f of files) {
    const lines = fs.readFileSync(f, 'utf8').split('\n');
    lines.forEach((l, i) => {
      for (const m of l.matchAll(RE)) { tot++; console.log(`${path.relative(ROOT, f)}:${i + 1}  ${m[0]}`); }
    });
  }
  console.log(`\n${tot} slot aperti nei sorgenti.`);
}
