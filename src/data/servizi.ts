/**
 * SERVIZI — Anna Carubia.
 * Nomi: MAPPA, i primi 6 dei 7 servizi della mappa (derivati dalla bio, da validare).
 * Il 7° ("Soluzioni chiavi in mano") è nella checklist del servizio 6 e nell'elenco
 * della pagina Studio: la base ha 6 sezioni e la griglia della home è a 3 colonne.
 * INVENTATO: frase breve, paragrafi e checklist di tutti i servizi (ricavati dalla bio),
 * e l'abbinamento ai progetti (anche i progetti sono inventati).
 */
import type { NomeIcona } from './icone';

export interface Servizio {
  id: string;
  nome: string;
  breve: string;
  icona: NomeIcona;
  paragrafi: string[];
  checklist: string[];
  progetti: string[];
  categoria: string;
}

export const servizi: Servizio[] = [
  {
    id: 'interni-residenziali',
    nome: 'Progettazione d’interni residenziale', // MAPPA
    breve: 'Case e appartamenti su misura di chi li abita, dalla prima casa alla ristrutturazione completa.', // INVENTATO
    icona: 'pianta',
    paragrafi: [
      'Progetto case e appartamenti partendo da come vengono vissuti: distribuzione degli spazi, luce, materiali e arredi pensati insieme, fin dal primo disegno.', // INVENTATO
      'Mi piace in particolare accompagnare le giovani coppie alla prima casa, seguendo budget e tempi con la stessa attenzione dedicata al progetto.', // INVENTATO (spunto BNI: giovani coppie, prima casa)
    ],
    checklist: ['Rilievo e analisi dello stato di fatto', 'Ridistribuzione degli spazi', 'Progetto della luce e dei materiali', 'Viste 3D prima di iniziare', 'Pratiche e coordinamento con le imprese'], // INVENTATO
    progetti: ['progetto-03', 'progetto-02', 'progetto-04'],
    categoria: 'residenziale',
  },
  {
    id: 'uffici-contract',
    nome: 'Progettazione uffici e spazi contract', // MAPPA
    breve: 'Uffici, negozi e spazi contract funzionali, con un’identità precisa e riconoscibile.', // INVENTATO
    icona: 'struttura',
    paragrafi: [
      'Progetto ambienti di lavoro e spazi aperti al pubblico: layout delle postazioni, accoglienza, luce e materiali scelti per durare nell’uso quotidiano.', // INVENTATO
      'Ogni spazio deve funzionare per chi ci lavora e raccontare l’attività a chi entra: per questo progetto e arredo nascono insieme.', // INVENTATO
    ],
    checklist: ['Layout delle postazioni', 'Spazi di accoglienza e riunione', 'Arredi e finiture contract', 'Coordinamento dei fornitori'], // INVENTATO
    progetti: ['progetto-07'],
    categoria: 'uffici-e-contract',
  },
  {
    id: 'arredamento',
    nome: 'Arredamento d’interni', // MAPPA
    breve: 'Arredi su misura, complementi e tessili scelti fino all’ultimo dettaglio.', // INVENTATO
    icona: 'arredo',
    paragrafi: [
      'Disegno arredi su misura e seleziono complementi, luci e finiture perché ogni ambiente sia coerente, dall’insieme al singolo dettaglio.', // INVENTATO
      'Vengo da una scuola in cui il cliente si segue fino all’ultima scelta, dagli arredi ai tessili: è lo stesso modo in cui lavoro oggi.', // INVENTATO (dal sito gemello; spunto BNI "fino alla scelta della biancheria")
    ],
    checklist: ['Arredi su misura', 'Scelta di complementi e luci', 'Finiture e tessili', 'Rapporto con artigiani e fornitori'], // INVENTATO
    progetti: ['progetto-15', 'progetto-10', 'progetto-05'],
    categoria: 'residenziale',
  },
  {
    id: 'outdoor',
    nome: 'Progettazione outdoor', // MAPPA
    breve: 'Terrazzi, giardini e portici pensati come la naturale prosecuzione della casa.', // INVENTATO (= testo ambito Outdoor del sito gemello)
    icona: 'verde',
    paragrafi: [
      'Progetto gli spazi esterni come stanze all’aperto: terrazzi, giardini e portici con sedute, ombra, verde e materiali adatti al clima.', // INVENTATO
      'L’esterno nasce insieme all’interno, per dare continuità alla casa anche oltre le vetrate.', // INVENTATO
    ],
    checklist: ['Terrazzi e terrazze sul tetto', 'Giardini e portici', 'Arredo per esterni', 'Verde e illuminazione esterna'], // INVENTATO
    progetti: ['progetto-01', 'progetto-13', 'progetto-09'],
    categoria: 'outdoor',
  },
  {
    id: 'rilievo-laser-scanner',
    nome: 'Rilievo con laser scanner ad alta precisione', // MAPPA
    breve: 'Misure al centimetro come base affidabile per tutto il progetto.', // INVENTATO (dalla bio)
    icona: 'rilievo',
    paragrafi: [
      'Rilievo con laser scanner ad alta precisione: lo stato di fatto viene misurato al centimetro, senza approssimazioni, prima di iniziare a progettare.', // INVENTATO (dalla bio)
      'Un rilievo preciso evita sorprese in cantiere ed è decisivo soprattutto negli spazi piccoli, dove ogni centimetro conta.', // INVENTATO
    ],
    checklist: ['Rilievo laser scanner', 'Restituzione di piante e sezioni', 'Verifica dello stato di fatto', 'Base per progetto e arredi su misura'], // INVENTATO
    progetti: ['progetto-08', 'progetto-11', 'progetto-14'],
    categoria: 'piccoli-spazi',
  },
  {
    id: 'direzione-lavori',
    nome: 'Direzione lavori e coordinamento del cantiere', // MAPPA
    breve: 'La figura che tiene insieme disegno e cantiere, fino alla consegna chiavi in mano.', // INVENTATO (dalla bio)
    icona: 'casco',
    paragrafi: [
      'Seguo il cantiere con direzione lavori e coordinamento delle imprese, perché il progetto realizzato sia quello disegnato.', // INVENTATO (dalla bio)
      'Su richiesta l’incarico arriva fino alla soluzione chiavi in mano: un solo riferimento dal primo disegno alla consegna.', // INVENTATO (dalla bio)
    ],
    checklist: ['Direzione lavori', 'Coordinamento delle imprese', 'Controllo di tempi e costi', 'Soluzioni chiavi in mano'], // INVENTATO; l'ultima voce è il 7° servizio della mappa
    progetti: ['progetto-02', 'progetto-16', 'progetto-06'],
    categoria: 'residenziale',
  },
];
