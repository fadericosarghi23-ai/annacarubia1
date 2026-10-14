/**
 * TEAM — la cliente lavora da sola: una persona.
 * Ritratto: la mappa chiede un ritratto professionale (la foto BNI 400×400 è insufficiente).
 * Finché non arriva c'è il monogramma col logo: non si mette il volto di un'altra persona
 * al posto della cliente.
 */
import type { Img } from '../lib/media';
import { foto } from '../lib/foto';

export interface Persona {
  id: string;
  nome: string;
  ruolo: string;
  foto: Img;
}

export const team: Persona[] = [
  {
    id: 'anna-carubia',
    nome: 'Anna Carubia', // MAPPA
    ruolo: 'Architetto d’interni', // MAPPA
    // MONOGRAMMA provvisorio (la «A» del logo), NON un volto: va sostituito col ritratto vero
    // della cliente (foto-originali/ritratto-monogramma.jpg → npm run foto).
    foto: foto('ritratto-monogramma', 'Monogramma di Anna Carubia Architetto'),
  },
];

export const persona = (id: string) => team.find((p) => p.id === id);
