import type { CollectionEntry } from 'astro:content';
import { getPublishedArtifacts } from '../../../lib/content';
import { renderOgImage } from '../../../lib/og/renderOgImage';

type Props = { artifact: CollectionEntry<'artifacts'> };

export async function getStaticPaths() {
  const artifacts = await getPublishedArtifacts();
  return artifacts.map((artifact) => ({ params: { slug: artifact.id }, props: { artifact } }));
}

export async function GET({ props }: { props: Props }) {
  const { artifact } = props;

  const png = await renderOgImage({
    eyebrow: 'tulio.org / built',
    title: artifact.data.title,
    description: artifact.data.description,
    meta: artifact.data.type.replaceAll('-', ' '),
  });

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
