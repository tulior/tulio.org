import { renderOgImage } from '../lib/og/renderOgImage';

export async function GET() {
  const png = await renderOgImage({
    eyebrow: 'tulio.org',
    title: 'Túlio Ribeiro\ndos Anjos',
    description: 'Backend notes, production fixes, integration seams, and small public tools.',
    meta: 'Campo Grande · static site · no analytics · RSS',
  });

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
