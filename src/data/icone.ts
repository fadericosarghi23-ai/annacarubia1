/**
 * Icone a linea (viewBox 48×48, stroke 1.6) del design system. Pittogrammi generici
 * della nicchia, nessun riferimento al cliente: si possono tenere o sostituire.
 * Il markup <svg> è in src/components/Icon.astro.
 */
export const icone = {
  // servizi
  pianta: '<path d="M4 4h40v40H4z"/><path d="M4 18h16v26M20 4v8M28 44V26h16M34 26v-8h10M20 30h8"/>',
  arredo: '<path d="M10 22V10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12"/><path d="M6 22h36v10H6zM10 32v10M38 32v10M6 26h36"/>',
  struttura: '<path d="M4 10h40M4 38h40M10 10v28M38 10v28M10 10l28 28M38 10 10 38"/>',
  ponte: '<path d="M2 16h44M2 16v6M46 16v6M6 22h36"/><path d="M6 44V22c0 10 8 16 18 16s18-6 18-16v22"/><path d="M2 44h44"/>',
  casco: '<path d="M6 34a18 18 0 0 1 36 0"/><path d="M4 34h40v5H4zM20 16v-4h8v4M24 12v10"/>',
  rilievo: '<path d="M24 4v10M18 14h12l-2 6h-8zM24 20l-12 24M24 20l12 24M24 20v24"/><circle cx="24" cy="9" r="2"/>',
  // contatti
  luogo: '<path d="M24 44S10 30 10 19a14 14 0 0 1 28 0c0 11-14 25-14 25z"/><circle cx="24" cy="19" r="5"/>',
  telefono: '<path d="M14 4h8l4 10-5 3a24 24 0 0 0 10 10l3-5 10 4v8a4 4 0 0 1-4 4A36 36 0 0 1 10 8a4 4 0 0 1 4-4z"/>',
  email: '<path d="M4 10h40v28H4z"/><path d="M4 10l20 16 20-16"/>',
  // aggiunta per questo cliente: servizio outdoor (stesso stile a linea)
  verde: '<path d="M24 44V22"/><path d="M24 4c-8 0-13 6-13 12.5S16.5 27 24 27s13-4 13-10.5S32 4 24 4z"/><path d="M17 44h14M24 30l-6-5M24 26l5-4"/>',
  // social
  instagram:
    '<rect x="6" y="6" width="36" height="36" rx="10"/><circle cx="24" cy="24" r="8"/><circle cx="34.5" cy="13.5" r="1.5" fill="currentColor" stroke="none"/>',
  facebook:
    '<path d="M28 44V26h6l1-7h-7v-4c0-2 .6-3.5 3.5-3.5H35V5.3A48 48 0 0 0 30 5c-5 0-8.5 3-8.5 8.6V19H16v7h5.5v18" fill="currentColor" stroke="none"/>',
  // lightbox
  chiudi: '<path d="M8 8l32 32M40 8 8 40"/>',
  precedente: '<path d="M44 24H6M18 12 6 24l12 12"/>',
  successivo: '<path d="M4 24h38M30 12l12 12-12 12"/>',
} as const;

export type NomeIcona = keyof typeof icone;
