/**
 * PROGETTI — Anna Carubia.
 *
 * INVENTATO: TUTTI i 16 progetti. La mappa dice che non esiste nessun progetto pubblicato
 * (né testi né foto). Titoli, località e categorie sono gli stessi del sito gemello
 * `../anna-carubia/` (src/data/progetti.ts); questa base chiede in più per ogni scheda
 * intervento, temi e un paragrafo: scritti da noi, generici, da sostituire.
 * Le località indicano solo la zona di attività, non luoghi di progetti reali.
 * Importo lavori e progettisti NON sono inventati: senza dato la riga non compare.
 *
 * Foto: FOTO STOCK Unsplash, non della cliente (stesse del sito gemello, vedi TESTI-INVENTATI.md).
 * Copertine in alta risoluzione (stesse foto del sito gemello, riscaricate da Unsplash a 2400 px)
 * più 2 foto di galleria per progetto, scelte per tema: tutte FOTO STOCK, nessuna è della cliente.
 */
import { foto } from '../lib/foto';
import type { Img } from '../lib/media';

export interface Categoria {
  slug: string;
  nome: string;
  breve: string;
  intro: string;
}

// INVENTATO: le 4 categorie e i testi = gli "ambiti" del sito gemello.
export const categorie: Categoria[] = [
  { slug: 'residenziale', nome: 'Residenziale', breve: 'Residenziale', intro: 'Case e appartamenti, dalla prima casa alla ristrutturazione, su misura di chi li abita.' },
  { slug: 'piccoli-spazi', nome: 'Piccoli spazi', breve: 'Piccoli spazi', intro: 'Monolocali e appartamenti compatti: ogni metro quadro sfruttato, senza rinunciare al comfort.' },
  { slug: 'outdoor', nome: 'Outdoor', breve: 'Outdoor', intro: 'Terrazzi, giardini e spazi esterni pensati come la naturale prosecuzione della casa.' },
  { slug: 'uffici-e-contract', nome: 'Uffici e contract', breve: 'Contract', intro: 'Uffici, negozi e spazi contract: ambienti di lavoro funzionali, con un’identità precisa.' },
];

export interface Progetto {
  slug: string;
  titolo: string;
  luogo: string;
  categorie: string[];
  intervento: string;
  progettisti?: string[];
  importo?: string;
  temi: string[];
  referente: string;
  paragrafi: string[];
  immagini: Img[];
  /** testata chiara anche se la copertina è una foto (foto troppo piccola per il full-bleed) */
  testataChiara?: boolean;
}

const REF = 'anna-carubia';

// Tutti i campi testuali qui sotto sono INVENTATO (titolo, luogo, categorie: dal sito gemello).
export const progetti: Progetto[] = [
  {
    slug: 'progetto-01', titolo: 'Terrazzo in quota', luogo: 'Alta Val Seriana (BG)', categorie: ['outdoor'],
    intervento: 'Progetto di un terrazzo panoramico con zona relax e sedute',
    temi: ['Outdoor', 'Terrazzo', 'Montagna'], referente: REF,
    paragrafi: ['Un terrazzo affacciato sulle montagne trasformato in una stanza all’aperto: sedute, materiali resistenti al clima di quota e una disposizione che lascia libera la vista.'],
    immagini: [
      foto('vetrina-03', 'Terrazza con sedute affacciata su montagne avvolte nella nebbia'), // FOTO STOCK wKHoG0Xg1SM
      foto('p01-g1', 'Terrazzo con ombrellone verde affacciato sulle montagne'), // FOTO STOCK Lw_WaDCQTKk
      foto('p01-g2', 'Sgabelli verdi su un balcone affacciato sul bosco'), // FOTO STOCK iQ02opeWE9g
    ],
  },
  {
    slug: 'progetto-02', titolo: 'Casa su tre livelli', luogo: 'Provincia di Bergamo', categorie: ['residenziale'],
    intervento: 'Progetto degli interni di una casa unifamiliare su tre livelli',
    temi: ['Residenziale', 'Interni', 'Nuova costruzione'], referente: REF,
    paragrafi: ['Una casa su tre livelli pensata come un unico racconto: zona giorno aperta verso le vetrate, collegamenti verticali leggeri e materiali caldi che accompagnano da un piano all’altro.'],
    immagini: [
      foto('vetrina-01', 'Casa moderna su tre livelli con rivestimento in legno e grandi vetrate'), // FOTO STOCK iDq7J5bAa0I
      foto('griglia-02', 'Casa moderna su tre livelli, vista verticale della facciata'), // FOTO STOCK iDq7J5bAa0I (altro taglio della stessa foto)
      foto('p02-g1', 'Soggiorno con pareti in legno e scala'), // FOTO STOCK R0BBCW1AnSc
      foto('p02-g2', 'Soggiorno moderno con scala e sedie gialle'), // FOTO STOCK 4E01lG9IlHk
    ],
  },
  {
    slug: 'progetto-03', titolo: 'Appartamento prima casa', luogo: 'Bergamo', categorie: ['residenziale'],
    intervento: 'Ristrutturazione e arredo di un appartamento per una giovane coppia',
    temi: ['Residenziale', 'Prima casa', 'Ristrutturazione'], referente: REF,
    paragrafi: ['La prima casa di una giovane coppia: spazi ridistribuiti per la vita di tutti i giorni, arredi su misura e una palette luminosa, seguendo budget e tempi del cantiere.'],
    immagini: [
      foto('vetrina-02', 'Soggiorno luminoso con divano bianco, cuscini verdi e tavolino basso'), // FOTO STOCK RuCVvjuyNeQ
      foto('p03-g1', 'Soggiorno con divano grigio e grande pianta'), // FOTO STOCK 6Rc6qfJraLI
      foto('p03-g2', 'Soggiorno con divano grigio, poltrona rossa e finestra'), // FOTO STOCK VLFebTo4zcI
    ],
  },
  {
    slug: 'progetto-04', titolo: 'Casa di famiglia', luogo: 'Provincia di Bergamo', categorie: ['residenziale'],
    intervento: 'Ripensamento della zona giorno di una casa di famiglia',
    temi: ['Residenziale', 'Zona giorno'], referente: REF,
    paragrafi: ['Una zona pranzo aperta e conviviale, ricavata riorganizzando gli spazi esistenti: un grande tavolo come centro della casa e arredi semplici, facili da vivere.'],
    immagini: [
      foto('hd-04', 'Zona pranzo con tavolo bianco rettangolare e sedie in un ambiente aperto'), // FOTO STOCK jm7HYtcW2VM
      foto('p04-g1', 'Tavolo da pranzo in legno con sei sedie imbottite'), // FOTO STOCK SOeq3VXKfQE
      foto('p04-g2', 'Tavola apparecchiata con centrotavola di frutta'), // FOTO STOCK M6e7bLEvgc8
    ],
  },
  {
    slug: 'progetto-05', titolo: 'Bilocale con soppalco', luogo: 'Bergamo', categorie: ['piccoli-spazi'],
    intervento: 'Progetto di un bilocale con soppalco per sfruttare l’altezza',
    temi: ['Piccoli spazi', 'Soppalco'], referente: REF,
    paragrafi: ['L’altezza del locale diventa spazio in più: un soppalco ricava la zona notte e libera il soggiorno, che resta luminoso grazie alla grande finestra.'],
    immagini: [
      foto('hd-05', 'Salotto con soppalco, soffitto alto e grande finestra'), // FOTO STOCK ac5ksdFJa0U
      foto('p05-g1', 'Soppalco con letto e scala a pioli'), // FOTO STOCK pjiuyiNhdBY
      foto('p05-g2', 'Camera sul soppalco con letto e scrivania'), // FOTO STOCK kcHIpdnBX2w
    ],
  },
  {
    slug: 'progetto-06', titolo: 'Mansarda', luogo: 'Alta Val Seriana (BG)', categorie: ['piccoli-spazi'],
    intervento: 'Recupero di un sottotetto come camera da letto',
    temi: ['Piccoli spazi', 'Sottotetto'], referente: REF,
    paragrafi: ['Un sottotetto recuperato come camera: arredi bassi lungo le falde, contenitori su misura e la finestra come punto focale della stanza.'],
    immagini: [
      foto('hd-06', 'Camera da letto in mansarda con soffitto inclinato e finestra'), // FOTO STOCK NhNccu6YZAE
      foto('p06-g1', 'Letto in una stanza con soffitto inclinato'), // FOTO STOCK YGAgRz4KADo
      foto('p06-g2', 'Camera in mansarda con camino e travi a vista'), // FOTO STOCK W3bI-XFSu5A
    ],
  },
  {
    slug: 'progetto-07', titolo: 'Ufficio open space', luogo: 'Bergamo', categorie: ['uffici-e-contract'],
    intervento: 'Progetto di un ufficio open space con postazioni operative',
    temi: ['Contract', 'Uffici', 'Open space'], referente: REF,
    paragrafi: ['Un ufficio open space organizzato per gruppi di lavoro: postazioni ordinate, luce naturale distribuita e spazi d’appoggio che rendono l’ambiente funzionale e riconoscibile.'],
    immagini: [
      foto('vetrina-06', 'Ufficio open space con postazioni di lavoro e monitor'), // FOTO STOCK wawEfYdpkag
      foto('p07-g1', 'Ufficio open space con file di scrivanie e luci lineari'), // FOTO STOCK Ugnm0F4e00U
      foto('p07-g2', 'Sala riunioni con tavolo lungo e sedie'), // FOTO STOCK bEBLQQPhqi8
    ],
  },
  {
    slug: 'progetto-08', titolo: 'Monolocale 25 mq', luogo: 'Provincia di Bergamo', categorie: ['piccoli-spazi'], // spunto BNI: "i 25 mq dell'appartamento"
    intervento: 'Progetto completo di un monolocale di 25 metri quadri',
    temi: ['Piccoli spazi', 'Arredo su misura'], referente: REF,
    paragrafi: ['Venticinque metri quadri in cui ogni centimetro conta: cucina, zona pranzo e zona giorno nello stesso ambiente, con arredi su misura che lasciano respirare lo spazio.'],
    immagini: [
      foto('vetrina-04', 'Monolocale con tavolo, sedie e zona giorno in un unico ambiente'), // FOTO STOCK hrY-pZqFGyI
      foto('p08-g1', 'Monolocale con letto e tavolino'), // FOTO STOCK dEuvqNbwRuw
      foto('p08-g2', 'Angolo cottura con mobili verde chiaro in un monolocale'), // FOTO STOCK YDLDyqibZmU
    ],
  },
  {
    slug: 'progetto-09', titolo: 'Terrazza panoramica', luogo: 'Bergamo', categorie: ['outdoor'],
    intervento: 'Progetto di una terrazza sul tetto in città',
    temi: ['Outdoor', 'Terrazza'], referente: REF,
    paragrafi: ['Una terrazza sui tetti della città pensata per essere vissuta: zone d’ombra, sedute e verde in vaso che la rendono una stanza in più della casa.'],
    immagini: [
      foto('hd-09', 'Terrazza sul tetto con vista sui tetti della città'), // FOTO STOCK wuhwDJauICs
      foto('p09-g1', 'Tetti in città con piccoli giardini pensili'), // FOTO STOCK BBWH3zfhJmo
      foto('p09-g2', 'Edificio con giardino pensile tra gli alberi'), // FOTO STOCK VI4pizZImbk
    ],
  },
  {
    slug: 'progetto-10', titolo: 'Casa in montagna', luogo: 'Alta Val Seriana (BG)', categorie: ['residenziale'],
    intervento: 'Interni di una casa di montagna in legno',
    temi: ['Residenziale', 'Montagna', 'Legno'], referente: REF,
    paragrafi: ['Interni caldi e semplici per una casa di montagna: il legno come materiale protagonista e arredi pensati per la vita di famiglia e l’accoglienza.'],
    immagini: [
      foto('hd-10', 'Interno in legno di una casa di montagna con tavolo e sedie'), // FOTO STOCK zVwBT5i2SoE
      foto('p10-g1', 'Tavolo e sedie in legno su parquet'), // FOTO STOCK eksdFRXS28s
      foto('p10-g2', 'Stanza in legno con tavolo da pranzo e panca'), // FOTO STOCK 659XSWPnSYE
    ],
  },
  {
    slug: 'progetto-11', titolo: 'Cucina in sei metri quadri', luogo: 'Provincia di Bergamo', categorie: ['piccoli-spazi'],
    intervento: 'Progetto di una cucina compatta in sei metri quadri',
    temi: ['Piccoli spazi', 'Cucina'], referente: REF,
    paragrafi: ['Una cucina completa in sei metri quadri: piano di lavoro continuo, contenitori fino al soffitto e un piccolo angolo per la colazione.'],
    immagini: [
      foto('hd-11', 'Piccola cucina con sedie in legno e piano di lavoro'), // FOTO STOCK UXFJ-6Zj27M
      foto('p11-g1', 'Cucina con tavolo e sedie accanto alla finestra'), // FOTO STOCK E7yGIdzNE3k
      foto('p11-g2', 'Cucina moderna con piccolo bancone per la colazione'), // FOTO STOCK mSw-nC3pQ7k
    ],
  },
  {
    slug: 'progetto-12', titolo: 'Monolocale per studenti', luogo: 'Bergamo', categorie: ['piccoli-spazi'],
    intervento: 'Arredo di un monolocale per studenti',
    temi: ['Piccoli spazi', 'Studio'], referente: REF,
    paragrafi: ['Un monolocale per studenti in cui dormire, studiare e ricevere amici: un angolo studio ben illuminato e arredi resistenti, pensati per durare.'],
    immagini: [
      foto('hd-12', 'Angolo studio con scrivania bianca e monitor in una cameretta'), // FOTO STOCK v7lqmaD8IEk
      foto('p12-g1', 'Camera con letto e scrivania'), // FOTO STOCK xMX8EOYLOG0
      foto('p12-g2', 'Scrivania con pianta e libri'), // FOTO STOCK ib4VRerGeDA
    ],
  },
  {
    slug: 'progetto-13', titolo: 'Giardino e portico', luogo: 'Alta Val Seriana (BG)', categorie: ['outdoor'],
    intervento: 'Sistemazione di un portico e del giardino di casa',
    temi: ['Outdoor', 'Giardino', 'Portico'], referente: REF,
    paragrafi: ['Il portico diventa il punto d’incontro tra casa e giardino: sedute all’ombra, pavimentazione continua e un verde che accompagna il passaggio verso l’esterno.'],
    immagini: [
      foto('vetrina-05', 'Portico con due sedie e un tavolino affacciato sul giardino'), // FOTO STOCK 5urBxoebDbQ
      foto('p13-g1', 'Portico con tovaglia a quadri e sedie'), // FOTO STOCK gG7HArvvv1E
      foto('p13-g2', 'Due sedie in legno sul prato'), // FOTO STOCK ml4-J3-a1IQ
    ],
  },
  {
    slug: 'progetto-14', titolo: 'Bagno compatto', luogo: 'Provincia di Bergamo', categorie: ['piccoli-spazi'],
    intervento: 'Ristrutturazione di un bagno di piccole dimensioni',
    temi: ['Piccoli spazi', 'Bagno'], referente: REF,
    paragrafi: ['Un bagno piccolo reso luminoso e ordinato: sanitari essenziali, superfici chiare e piante a portare un tocco naturale.'],
    immagini: [
      foto('hd-14', 'Bagno bianco compatto con lavabo a colonna e piante'), // FOTO STOCK U7PitHRnTNU
      foto('p14-g1', 'Bagno bianco con lavabo a colonna e vasca'), // FOTO STOCK FX1EbT-jKBQ
      foto('p14-g2', 'Bagno con lavabo e specchio'), // FOTO STOCK U-wGGIPC6gw
    ],
  },
  {
    slug: 'progetto-15', titolo: 'Loft in città', luogo: 'Bergamo', categorie: ['piccoli-spazi'],
    intervento: 'Progetto degli interni di un loft open space',
    temi: ['Piccoli spazi', 'Loft', 'Open space'], referente: REF,
    paragrafi: ['Un loft in cui cucina, pranzo e soggiorno convivono in un unico ambiente: gli arredi disegnano le zone senza bisogno di pareti.'],
    immagini: [
      foto('hd-15', 'Loft open space con zona pranzo e cucina'), // FOTO STOCK tqCfLSHgaIo
      foto('p15-g1', 'Ambiente industriale con muro in mattoni e lampade a sospensione'), // FOTO STOCK wdlFqI0s_Kg
      foto('p15-g2', 'Scala moderna con parapetto in metallo'), // FOTO STOCK GxQInQPa10c
    ],
  },
  {
    slug: 'progetto-16', titolo: 'Casa con piscina', luogo: 'Provincia di Bergamo', categorie: ['residenziale'],
    intervento: 'Progetto di interni ed esterni di una villa con piscina',
    temi: ['Residenziale', 'Outdoor', 'Piscina'], referente: REF,
    paragrafi: ['Una villa in cui interni ed esterni dialogano: la piscina come prosecuzione della zona giorno e materiali chiari che uniscono casa e giardino.'],
    immagini: [
      foto('hd-16', 'Villa moderna bianca con piscina sotto il cielo blu'), // FOTO STOCK _TPTXZd9mOo
      foto('p16-g1', 'Villa bianca moderna con piscina e zona relax'), // FOTO STOCK Id7u0EkTjBE
      foto('p16-g2', 'Casa con pareti vetrate accanto alla piscina'), // FOTO STOCK b_79nOqf95I
    ],
  },
];

export const categoria = (slug: string) => categorie.find((c) => c.slug === slug)!;
export const progettoBySlug = (slug: string) => progetti.find((p) => p.slug === slug)!;
export const progettiIn = (cat: string) => progetti.filter((p) => p.categorie.includes(cat));
