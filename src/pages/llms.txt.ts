/** llms.txt per i motori generativi: generato dai dati, si aggiorna da solo al riempimento. */
import type { APIRoute } from 'astro';
import { site, isSet, url } from '../data/site';
import { servizi } from '../data/servizi';
import { team } from '../data/team';
import { categorie, progettiIn } from '../data/progetti';
import { faq } from '../data/contenuti';

export const GET: APIRoute = () => {
  const r = [
    `# ${site.nome}`,
    '',
    `> ${site.descrizione}`,
    '',
    '## Dati essenziali',
    '',
    `- Nome: ${site.nome}${isSet(site.ragioneSociale) ? ` (${site.ragioneSociale})` : ''}`,
    `- Sito: ${url('/')}`,
    `- Sede: ${site.indirizzo.via}, ${site.indirizzo.cap} ${site.indirizzo.citta} (${site.indirizzo.provincia}), Italia`,
    `- Telefono: ${site.telefono.display}`,
    ...(isSet(site.email) ? [`- Email: ${site.email}`] : []),
    ...site.social.filter((s) => isSet(s.url)).map((s) => `- ${s.nome}: ${s.url}`),
    `- Aree servite: ${site.areeServite.join(', ')}`,
    '',
    '## Pagine',
    '',
    `- [Lo studio](${url('/studio/')})`,
    `- [Servizi](${url('/servizi/')})`,
    `- [Metodo](${url('/metodo/')})`,
    `- [Progetti](${url('/progetti/')})`,
    `- [Contatti](${url('/contatti/')})`,
    '',
    '## Servizi',
    '',
    ...servizi.map((s) => `- [${s.nome}](${url(`/servizi/#${s.id}`)}): ${s.breve}`),
    '',
    '## Team',
    '',
    ...team.map((p) => `- ${p.nome}, ${p.ruolo}`),
    '',
    ...categorie.flatMap((c) => [`## ${c.nome}`, '', ...progettiIn(c.slug).map((p) => `- [${p.titolo}](${url(`/progetti/${p.slug}/`)}): ${p.luogo}`), '']),
    '## Domande frequenti',
    '',
    ...faq.flatMap((f) => [`### ${f.domanda}`, '', f.risposta, '']),
  ];
  return new Response(r.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
