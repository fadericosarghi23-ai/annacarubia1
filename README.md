# Anna Carubia Architetto — sito 2

Secondo sito per Anna Carubia, architetto d'interni (Songavazzo, BG): **design diverso, stessi
contenuti** del sito gemello `../anna-carubia/`. Nasce dalla base `base-studio-multidisciplinare-2`:
struttura, layout, design system e animazioni non sono stati toccati. Contenuti mappati in
[CONTENT_FILL.md](CONTENT_FILL.md).

**Stato: non pubblicabile così com'è.** Molti testi e tutti i progetti sono inventati, le foto sono
stock: tutto è segnato e spiegato in [TESTI-INVENTATI.md](TESTI-INVENTATI.md). Mancano email, dati
legali, social, dominio, palette e ritratto (`npm run slots`); il logo viene dalla scheda BNI ed è da confermare.

```bash
npm install
npm run dev             # http://localhost:4840
npm run build           # dist/ statico (31 pagine)
npm run slots           # dati ancora da compilare
npm run foto            # rigenera le varianti delle foto da foto-originali/
```

## Dove sono i contenuti

- `src/data/site.ts` — identità, contatti, form, logo
- `src/data/servizi.ts` — 6 servizi
- `src/data/progetti.ts` — 4 categorie, 16 progetti
- `src/data/contenuti.ts` — carosello, fasi, FAQ, numeri, zone, approccio, CTA
- `src/data/team.ts` — Anna Carubia
- testi propri delle pagine in `src/pages/*.astro`, footer in `src/layouts/Layout.astro`
- palette: solo i token `:root` di `src/styles/global.css` (oggi quelli della base)

Il resto (ordine di riempimento, immagini, animazioni) è come nella base: vedi
`../base-studio-multidisciplinare-2/README.md`.

## Pubblicazione su Netlify

- Collegare il repository a Netlify: build e cartella sono già in `netlify.toml` (Node 22).
- Canonical, anteprime social e sitemap usano da soli l'indirizzo del sito Netlify (variabile `URL`).
- **Anteprima non indicizzata**: `site.indicizza = false` in `src/data/site.ts` mette noindex su tutte
  le pagine e blocca tutto in robots.txt. Va messo a `true` solo dopo l'approvazione della cliente.
- Il modulo contatti non invia: per Netlify Forms basta `form: { netlify: true }` in `site.ts`.
- Foto: originali in `foto-originali/`, varianti compresse con `npm run foto` (AVIF + WebP, un JPG di riserva).
- Riepilogo per la cliente: `docs/palette-e-interventi.pdf` (palette, errori corretti, migliorie).
