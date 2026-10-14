/**
 * IDENTITÀ — Anna Carubia, architetto d'interni (Songavazzo, BG).
 *
 * Riempita da CONTENT_FILL.md con gli STESSI contenuti del sito gemello `../anna-carubia/`.
 * Ogni testo dichiara da dove viene:
 *   // MAPPA       preso dalla mappa (verbatim o già riscritto lì, da validare)
 *   // INVENTATO   scritto da noi, NON fornito dalla cliente: da validare
 * Ciò che non si inventa (email, P.IVA, PEC, social, dominio, coordinate) resta
 * [[DA COMPILARE]]: `npm run slots` lo elenca. Elenco degli inventati: TESTI-INVENTATI.md.
 */

export const site = {
  // INVENTATO: la mappa lascia il nome "da decidere"; stesso nome del sito gemello.
  nome: 'Anna Carubia Architetto',
  ragioneSociale: '[[DA COMPILARE: ragione sociale o dicitura professionale]]', // la mappa: da chiedere
  nomiAlternativi: ['Anna Carubia', 'Dott. Anna Carubia'], // MAPPA
  piva: '[[DA COMPILARE: partita IVA, 11 cifre]]', // la mappa: da chiedere
  pec: '[[DA COMPILARE: indirizzo PEC]]', // la mappa: da chiedere
  slogan: 'Dal disegno al cantiere', // MAPPA (dal titolo riscritto)
  // INVENTATO: stessa frase della meta description del sito gemello.
  descrizione:
    'Architetto d’interni in provincia di Bergamo: case, piccoli spazi, uffici e outdoor su misura, con rilievo laser scanner e cantiere seguito fino alla consegna.',

  // MAPPA. Da confermare con la cliente se vuole pubblicare l'indirizzo o solo la zona.
  indirizzo: {
    via: 'Via Piave 18',
    cap: '24020',
    citta: 'Songavazzo',
    provincia: 'BG',
    regioneIso: 'IT-BG',
  },
  /** Coordinate non fornite: la mappa usa l'indirizzo (embed Google, come nel sito gemello). */
  geo: null as null | { lat: number; lng: number },

  telefono: {
    display: '339 131 0258', // MAPPA (3391310258, solo formattato)
    href: '+393391310258', // MAPPA
  },
  email: '[[DA COMPILARE: email dello studio]]', // la mappa: nascosta su BNI, da chiedere
  orari: 'Su appuntamento, in studio o in cantiere.', // INVENTATO

  // la mappa: nessun social sulla scheda BNI, da chiedere (come nel sito gemello)
  social: [
    { nome: 'Instagram', icona: 'instagram' as const, url: '[[DA COMPILARE: URL profilo Instagram]]' },
    { nome: 'Facebook', icona: 'facebook' as const, url: '[[DA COMPILARE: URL pagina Facebook]]' },
  ],

  // Dominio: lo prende da astro.config.mjs, che su Netlify usa l'URL del sito (variabile URL).
  // [[DA COMPILARE: dominio di produzione]] quando la cliente ne avrà uno.
  dominio: (import.meta.env.SITE ?? 'https://esempio.it').replace(/\/$/, ''),
  /**
   * false = anteprima: meta noindex su tutte le pagine e robots.txt che blocca tutto.
   * Da mettere a true solo dopo l'approvazione della cliente (oggi progetti e foto sono di esempio).
   */
  indicizza: false,
  // Palette: la mappa la segna "DA FORNIRE" e vieta valori inventati → restano i colori della base.
  themeColor: '#931a1d',
  lingua: 'it',

  /** Form: la mappa dice "recapito all'email che fornirà la cliente" → ancora scollegato. */
  form: { netlify: false, endpoint: '' },

  areeServite: ['Songavazzo', 'Provincia di Bergamo', 'Lombardia'], // INVENTATO: la mappa dice "zona Bergamo"
  // MAPPA: i 7 servizi della mappa (derivati dalla bio, da validare).
  competenze: [
    'Progettazione d’interni residenziale',
    'Progettazione uffici e spazi contract',
    'Arredamento d’interni',
    'Progettazione outdoor',
    'Rilievo con laser scanner ad alta precisione',
    'Direzione lavori e coordinamento del cantiere',
    'Soluzioni chiavi in mano',
  ],

  /**
   * Logo: il riquadro con la «A» della scheda BNI (link della mappa), scelto per la presentazione.
   * DA CONFERMARE con la cliente che sia davvero il suo logo; poi serve la versione vettoriale SVG.
   * Raster 400×400 messo a sinistra in uno slot trasparente 882×182 (misura dello slot della base),
   * uguale nei due siti. Originale in brand-originali/.
   */
  logo: {
    scuro: { src: '/img/logo/logo.png', width: 882, height: 182, alt: '' },
    // versione sull'hero (header trasparente) e nel footer: riquadro nel rosso d'accento (--accent),
    // con la «A» trasparente. Se cambia la palette va rigenerato (brand-originali/logo-bni-stampo-rosso.png).
    chiaro: { src: '/img/logo/logo-chiaro.png', width: 882, height: 182, alt: '' },
    alt: 'Anna Carubia Architetto — interior design', // INVENTATO
  },
  // FOTO STOCK (stessa del sito gemello: Unsplash iDq7J5bAa0I, non della cliente)
  ogImage: { src: '/img/og/og-default.jpg', width: 1200, height: 630 },
};

/** true se il valore è stato compilato (non è più un marker). */
export const isSet = (v: string | null | undefined): v is string => !!v && !v.startsWith('[[');

export const telHref = () => (isSet(site.telefono.href) ? `tel:${site.telefono.href}` : '#');
export const mailHref = () => (isSet(site.email) ? `mailto:${site.email}` : '#');
export const indirizzoRiga = () =>
  `${site.indirizzo.via}, ${site.indirizzo.cap} ${site.indirizzo.citta}`;
export const mapsUrl = () =>
  isSet(site.indirizzo.via)
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${indirizzoRiga()} (${site.indirizzo.provincia})`)}`
    : '#';
export const url = (path = '/') => site.dominio + path;
export const anno = new Date().getFullYear();
