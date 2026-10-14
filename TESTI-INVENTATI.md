# Testi inventati — da validare con la cliente

Questo è il **secondo sito** per Anna Carubia: design della base `base-studio-multidisciplinare-2`,
**stessi contenuti** del sito gemello `../anna-carubia/`. Stessi testi, stessi progetti e
stesse foto stock. La mappa (`CONTENT_FILL.md`) copre poco: dove non dava un testo, l'abbiamo
scritto noi. **Nulla di quanto segue viene dalla cliente**: va letto con lei e confermato o
corretto prima di pubblicare.

Nel codice ogni testo porta accanto la sua fonte:

| Marca | Significato |
|---|---|
| `// MAPPA` o `{/* MAPPA */}` | preso dalla mappa (verbatim o già riscritto lì, da validare) |
| `// INVENTATO` o `{/* INVENTATO */}` | scritto da noi |
| `// FOTO STOCK` | foto Unsplash, **non** della cliente |

```bash
grep -rn INVENTATO src      # tutti i testi inventati
grep -rn "FOTO STOCK" src   # tutte le foto stock
npm run slots               # i dati che NON si inventano, ancora aperti
```

---

## Uguale al sito gemello (inventato là, riusato qui)

- Nome «Anna Carubia Architetto», meta title della home «… | Interior design a Bergamo» e
  meta description (qui sono anche `site.descrizione`).
- Sottotitolo dell'hero: «Architetto d’interni in provincia di Bergamo: case, uffici e spazi contract.»
- Secondo paragrafo della bio (giovani coppie e prima casa, piccoli spazi, cliente seguito
  fino ai tessili) e la frase «Sono la figura che tiene insieme il disegno e il cantiere…».
- Le 4 fasi del metodo (Rilievo, Progetto d’interni, Esecutivo e scelte, Cantiere) con i testi.
- Le 4 categorie (Residenziale, Piccoli spazi, Outdoor, Uffici e contract) con i testi.
- **I 16 progetti**: titoli, località e categorie. La mappa dice che non esiste nessun
  progetto pubblicato. Le località indicano solo la zona di attività.
- L'invito «Una casa da ripensare, un ufficio da progettare: raccontami la tua idea.»,
  «Ti rispondo io, direttamente.», la descrizione del footer, la voce di menu «Chi sono»,
  il nome breve del manifest.

## Inventato in più, perché questa base ha sezioni che il sito gemello non ha

| Dove | Cosa | Spunto |
|---|---|---|
| `src/data/progetti.ts` | per **ognuno dei 16 progetti**: riga «Intervento», temi, paragrafo descrittivo | titolo del progetto |
| `src/data/servizi.ts` | frase breve, 2 paragrafi e checklist dei 6 servizi; abbinamento ai progetti | bio della mappa |
| `src/data/contenuti.ts` | le **9 fasi di dettaglio** della pagina Metodo | le 4 fasi |
| `src/data/contenuti.ts` | i **3 punti dell'approccio** (pagina Chi sono) | bio |
| `src/data/contenuti.ts` | le **9 FAQ** (domande e formulazione; i dati citati vengono dalla mappa) | bio + mappa |
| `src/data/contenuti.ts` | le **3 zone** «Dove lavoro» (Sede Songavazzo, Alta Val Seriana, Bergamo e provincia) | mappa: «zona Bergamo» |
| `src/data/contenuti.ts` | le etichette delle **statistiche** | — |
| pagine `src/pages/*.astro`, `Portfolio.astro` | titoli di sezione, sottotitoli, meta title e description di Chi sono, Servizi, Metodo, Progetti, Contatti | — |
| `src/data/site.ts` | orari «Su appuntamento, in studio o in cantiere.», alt del logo, aree servite | — |
| `src/data/icone.ts` | icone «verde» (servizio outdoor) e «instagram», nello stile a linea della base | — |

**Statistiche**: i numeri non sono dati di attività inventati (anni, progetti realizzati…):
sono conteggi del sito stesso (7 servizi, 4 ambiti, 4 fasi, 1 architetto) e «1 cm», dalla bio
(«dettaglio fino al centimetro»). Se la cliente fornisce numeri veri, vanno messi qui.

## Adattamenti alla struttura della base

- **Servizi**: la mappa ne elenca 7, la base ha 6 sezioni e una griglia a 3 colonne. I primi 6
  sono servizi pieni; il 7° («Soluzioni chiavi in mano») è nella checklist della direzione lavori
  e nell'elenco completo della pagina Chi sono.
- **Team**: una sola persona (Anna Carubia). La striscia della home e la griglia della pagina
  Chi sono mostrano un solo ritratto.
- **Etichette** passate alla prima persona dove il plurale sarebbe falso: «Chi sono», «Come lavoro»,
  «Dove lavoro», «Dove sono», «Il riferimento», «Il mio approccio».
- **Mappa**: embed Google con l'indirizzo, come nel sito gemello (le coordinate non ci sono).
  La cookie policy ora cita Google Maps: **da verificare** con chi segue la parte legale,
  perché l'embed può impostare cookie di terze parti.
- **Schede progetto**: tutte con la foto a tutta larghezza e una galleria di 3 foto (copertina + 2).

---

## Cosa NON è stato inventato (resta aperto)

Un valore finto finirebbe online come se fosse vero. Restano `[[DA COMPILARE]]`:

- email da pubblicare (visibile a schermo in header mobile, footer, contatti, privacy);
- ragione sociale o dicitura professionale, P.IVA, PEC (footer e privacy);
- URL di Instagram e Facebook (le icone puntano a `#`);
- dominio (`site.ts` e `astro.config.mjs`), endpoint del form (oggi il form **non invia**);
- hosting e servizio del form nella privacy;
- importo lavori e progettisti dei progetti (la riga non compare);
- palette: la mappa la segna «DA FORNIRE» e vieta valori inventati, quindi restano i colori
  della base (`src/styles/global.css`, `:root`);
- **ritratto**: al suo posto c'è un MONOGRAMMA col logo (foto-originali/ritratto-monogramma.jpg),
  non un volto: non si mette il volto di un'altra persona al posto della cliente. Serve il suo
  ritratto professionale;
- logo e favicon: vedi «Logo e favicon» qui sotto;
- il segno grafico decorativo del blocco finale (`Cta.astro`): riquadro neutro.


## Logo e favicon: dalla scheda BNI, DA CONFERMARE

Per la presentazione logo e favicon usano il riquadro con la «A» della scheda BNI (link della
mappa, raster 400×400, scaricato il 2026-10-14; originale in `brand-originali/logo-bni-400.jpg`).
**Uguali nei due siti** (`anna-carubia/` e `anna-carubia-2/`).

- Il logo è la versione «a stampo» (`brand-originali/logo-bni-stampo.png`): riquadro grigio con
  la «A» trasparente. Su fondo chiaro è identico all'originale; dove il sito lo inverte in bianco
  (sopra l'hero, nel footer) resta leggibile come riquadro bianco con la «A» ritagliata.
- Messo a sinistra in uno slot trasparente con le misure dello slot del logo, così l'header non
  cambia altezza.
- Va **confermato con la cliente** che sia davvero il suo logo e non un'immagine BNI; poi serve la
  versione vettoriale SVG (la mappa la chiede) per sostituire questi file.
- **Animazione d’apertura** col logo (aggiunta su richiesta): la «A» bianca si disegna, compare il nome,
  poi si apre il sito (~2 s). Una volta per sessione, niente con «riduci animazioni». File: `src/components/Intro.astro`; segno in `public/img/logo/logo-segno.png`.

---

## Foto

Aggiornamento: le 10 copertine che erano a 490 px sono state riscaricate in alta risoluzione
(stesse foto, stesso ID Unsplash) e ogni progetto ha 2 foto di galleria in più:
42 foto nuove, tutte FOTO STOCK, elencate con autore in [CREDITI-FOTO.md](CREDITI-FOTO.md).

**Tutte le foto sono FOTO STOCK da Unsplash, non lavori della cliente**: le stesse 24 del sito
gemello (vedi la tabella con le fonti in `../anna-carubia/TESTI-INVENTATI.md`). Gli originali sono
in `foto-originali/`; `npm run foto` genera le varianti avif/webp/jpg in `public/img/foto/`.
Vanno sostituite tutte con le foto HD dei progetti della cliente: stesso nome in
`foto-originali/`, poi `npm run foto`. Anche gli `alt` descrivono la foto stock e vanno riscritti.

| File | Usata per | Unsplash |
|---|---|---|
| `vetrina-01` + `griglia-02` | Casa su tre livelli (copertina + 2ª foto), carosello | iDq7J5bAa0I |
| `vetrina-02` | Appartamento prima casa, carosello | RuCVvjuyNeQ |
| `vetrina-03` | Terrazzo in quota, carosello | wKHoG0Xg1SM |
| `vetrina-04` | Monolocale 25 mq, carosello | hrY-pZqFGyI |
| `vetrina-05` | Giardino e portico, carosello | 5urBxoebDbQ |
| `vetrina-06` | Ufficio open space, carosello | wawEfYdpkag |
| `hd-04…16` | copertine degli altri 10 progetti, in alta risoluzione (nel sito gemello sono a 490 px) | vedi sito gemello |
| `fase-01…04` | 4 fasi del metodo; fase-01 testata Metodo, fase-02 testata Servizi, fase-03 blocco Chi sono in home | 1GW45VDkFI0, Yn8D5B8C-eY, pdCTX1harH4, biRt6RXejuk |
| `ambito-01` | testata pagina Chi sono | 4xRP0Ajk9ys |
| `ambito-02`, `ambito-03` | i due riquadri della pagina Chi sono | NoPzk4m4jHc, KYoNhxcurtM |
| `public/img/og/og-default.jpg` | anteprima social (ritaglio 1200×630) | iDq7J5bAa0I |

`ambito-04` e le foto `progetti-extra` del sito gemello non sono usate: la prima è troppo
piccola, le seconde non hanno una fonte dichiarata.
