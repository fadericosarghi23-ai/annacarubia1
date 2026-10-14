/**
 * CONTENUTI CONDIVISI — Anna Carubia.
 * Fonti: // MAPPA, // INVENTATO (da validare), // FOTO STOCK (Unsplash, non della cliente).
 */
import { foto } from '../lib/foto';

/** Carosello della home: i 6 progetti in vetrina del sito gemello, stesso ordine. */
export const heroSlides = [
  { progetto: 'progetto-02', foto: 0 },
  { progetto: 'progetto-03', foto: 0 },
  { progetto: 'progetto-01', foto: 0 },
  { progetto: 'progetto-08', foto: 0 },
  { progetto: 'progetto-13', foto: 0 },
  { progetto: 'progetto-07', foto: 0 },
];

/** Progetti in evidenza nella home (6 card). */
export const inEvidenza = ['progetto-02', 'progetto-03', 'progetto-01', 'progetto-08', 'progetto-13', 'progetto-07'];

// FOTO STOCK Unsplash, non della cliente (stesse foto del sito gemello).
export const immagini = {
  homeStudio: foto('fase-03', 'Mano che tiene campioni di colore sopra disegni di progetto'), // pdCTX1harH4
  testataStudio: foto('ambito-01', 'Soggiorno con tavolo in legno bianco e sedie'), // 4xRP0Ajk9ys
  testataServizi: foto('fase-02', 'Planimetrie architettoniche con matite e righello sul tavolo'), // Yn8D5B8C-eY
  testataMetodo: foto('fase-01', 'Strumento di rilievo topografico su treppiede'), // 1GW45VDkFI0
  studio1: foto('ambito-02', 'Cucina compatta con tavolo e sedie in un monolocale'), // NoPzk4m4jHc
  studio2: foto('ambito-03', 'Casa bianca con terrazza sul tetto costruita su un pendio roccioso'), // KYoNhxcurtM
};

/** Le 4 fasi: titoli e testi identici al sito gemello. INVENTATO (la cliente non ha descritto un metodo). */
export const fasi = [
  {
    img: foto('fase-01', 'Strumento di rilievo topografico su treppiede'), // FOTO STOCK 1GW45VDkFI0
    titolo: 'Rilievo',
    testo: 'Rilievo dello spazio con laser scanner: misure di alta precisione, al centimetro, come base affidabile per tutto il progetto.',
  },
  {
    img: foto('fase-02', 'Planimetrie architettoniche con matite e righello sul tavolo'), // FOTO STOCK Yn8D5B8C-eY
    titolo: 'Progetto d’interni',
    testo: 'Distribuzione degli spazi, arredo su misura, materiali e luci, con viste 3D per vedere il risultato prima di iniziare.',
  },
  {
    img: foto('fase-03', 'Mano che tiene campioni di colore sopra disegni di progetto'), // FOTO STOCK pdCTX1harH4
    titolo: 'Esecutivo e scelte',
    testo: 'Disegni esecutivi, dettagli costruttivi e scelta di finiture, arredi e complementi.',
  },
  {
    img: foto('fase-04', 'Stanza in ristrutturazione con puntelli metallici e calcinacci'), // FOTO STOCK biRt6RXejuk
    titolo: 'Cantiere',
    testo: 'Direzione lavori e coordinamento delle imprese, fino alla consegna chiavi in mano.',
  },
];

/** Le 9 fasi di dettaglio di /metodo/. INVENTATO: sviluppo delle 4 fasi qui sopra. */
export const fasiDettaglio = [
  { titolo: 'Primo incontro', testo: 'Mi racconti lo spazio, le tue abitudini, il budget e i tempi: capiamo insieme che tipo di intervento serve.' },
  { titolo: 'Rilievo con laser scanner', testo: 'Misuro lo spazio con il laser scanner: una base precisa al centimetro per tutto quello che viene dopo.' },
  { titolo: 'Concept e layout', testo: 'Studio la distribuzione degli spazi e ti propongo le prime soluzioni, da confrontare e scegliere insieme.' },
  { titolo: 'Progetto e viste 3D', testo: 'Sviluppo il progetto d’interni con materiali, luci e arredi, e lo vediamo in 3D prima di decidere.' },
  { titolo: 'Esecutivi e dettagli', testo: 'Disegni esecutivi e dettagli costruttivi per imprese e artigiani, senza margini di interpretazione.' },
  { titolo: 'Finiture e arredi', testo: 'Scegliamo finiture, arredi, complementi e tessili, fino all’ultimo dettaglio.' },
  { titolo: 'Imprese e preventivi', testo: 'Ti aiuto a confrontare i preventivi e a scegliere imprese e fornitori adatti al progetto.' },
  { titolo: 'Direzione lavori', testo: 'Seguo il cantiere e coordino le imprese, controllando qualità, tempi e costi.' },
  { titolo: 'Consegna chiavi in mano', testo: 'Chiudo il cantiere e ti consegno lo spazio finito, pronto da vivere.' },
];

// INVENTATO: solo numeri verificabili dentro il sito (nessun dato di attività inventato:
// anni di esperienza, progetti realizzati ecc. vanno chiesti alla cliente).
export const numeriHome = [
  { valore: '7', etichetta: 'Servizi' },
  { valore: '4', etichetta: 'Ambiti di progetto' },
  { valore: '4', etichetta: 'Fasi di lavoro' },
  { valore: '1', etichetta: 'Unico riferimento' },
];
export const numeriStudio = [
  { valore: '1', etichetta: 'Architetto' },
  { valore: '1 cm', etichetta: 'Precisione del rilievo' }, // MAPPA: "un dettaglio fino al centimetro"
  { valore: '7', etichetta: 'Servizi' },
  { valore: '4', etichetta: 'Ambiti' },
];

/** Zone di lavoro. INVENTATO: la mappa dice solo "zona Bergamo"; Alta Val Seriana come nel sito gemello. */
export const aree = [
  { conteggio: 'Sede', nome: 'Songavazzo (BG)', luoghi: 'Via Piave 18, su appuntamento.' },
  { conteggio: 'Zona', nome: 'Alta Val Seriana', luoghi: 'I comuni della valle e dell’altopiano intorno alla sede.' },
  { conteggio: 'Zona', nome: 'Bergamo e provincia', luoghi: 'Città e provincia; fuori zona su richiesta.' },
];

/** Tre punti dell'approccio (/studio/). INVENTATO, dagli spunti della bio. */
export const approccio = [
  { titolo: 'Dal disegno al cantiere', testo: 'Sono la figura che tiene insieme il disegno e il cantiere: trasformo un’idea in uno spazio concreto e la seguo fino all’ultimo dettaglio.' },
  { titolo: 'Precisione al centimetro', testo: 'Con il rilievo laser scanner ogni progetto parte da misure esatte: niente sorprese in cantiere, arredi su misura che entrano davvero.' },
  { titolo: 'Fino all’ultima scelta', testo: 'Dagli arredi ai tessili, il cliente si segue fino alla consegna. Su richiesta, la soluzione è chiavi in mano.' },
];

/** Elenco accanto alla sede (/studio/): MAPPA, i 7 servizi verbatim. */
export const competenzeStudio = [
  'Progettazione d’interni residenziale',
  'Progettazione uffici e spazi contract',
  'Arredamento d’interni',
  'Progettazione outdoor',
  'Rilievo con laser scanner ad alta precisione',
  'Direzione lavori e coordinamento del cantiere',
  'Soluzioni chiavi in mano',
];

/** FAQ della home. INVENTATO (domande e formulazione); i dati citati vengono dalla mappa. */
export const faq = [
  { domanda: 'Di cosa ti occupi?', risposta: 'Sono architetto con specializzazione in progettazione d’interni, indoor e outdoor. Lavoro su progetti residenziali, uffici e contract, dal disegno iniziale fino al cantiere.' },
  { domanda: 'Dove si trova lo studio?', risposta: 'Lo studio è in Via Piave 18 a Songavazzo (BG). Puoi chiamarmi al 339 131 0258 per fissare un appuntamento.' },
  { domanda: 'In quali zone lavori?', risposta: 'Lavoro soprattutto in Alta Val Seriana, a Bergamo e in provincia. Per progetti fuori zona possiamo valutarlo insieme.' },
  { domanda: 'Segui anche il cantiere?', risposta: 'Sì: mi occupo di direzione lavori e coordinamento delle imprese, e su richiesta porto il progetto fino alla soluzione chiavi in mano.' },
  { domanda: 'A cosa serve il rilievo con laser scanner?', risposta: 'Misura lo spazio con alta precisione, fino al centimetro. Il progetto parte da dati esatti e gli arredi su misura si disegnano senza approssimazioni.' },
  { domanda: 'Lavori anche su spazi molto piccoli?', risposta: 'Sì, ed è una delle cose che preferisco: monolocali, mansarde, cucine e bagni compatti, dove ogni centimetro va pensato.' },
  { domanda: 'Progetti anche uffici e negozi?', risposta: 'Sì: uffici, negozi e spazi contract, con layout, arredi e finiture pensati per l’uso quotidiano e per l’identità dell’attività.' },
  { domanda: 'Ti occupi anche degli spazi esterni?', risposta: 'Sì: terrazzi, giardini e portici, progettati come la naturale prosecuzione della casa.' },
  { domanda: 'Come posso chiedere un preventivo?', risposta: 'Compila il modulo nella pagina Contatti o chiamami: raccontami lo spazio e l’intervento che hai in mente e fissiamo un primo incontro.' },
];

/** Blocco CTA in fondo alle pagine. */
export const cta = {
  titolo: 'Parliamo del tuo progetto', // MAPPA (CTA proposta)
  testo: 'Una casa da ripensare, un ufficio da progettare: raccontami la tua idea.', // INVENTATO (= invito del sito gemello)
};
