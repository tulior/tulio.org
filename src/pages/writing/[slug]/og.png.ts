import type { CollectionEntry } from 'astro:content';
import { getPublishedWriting } from '../../../lib/content';
import { formatDate } from '../../../lib/dates';
import { renderOgImage } from '../../../lib/og/renderOgImage';

type Props = { post: CollectionEntry<'writing'> };

export async function getStaticPaths() {
  const posts = await getPublishedWriting();
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export async function GET({ props }: { props: Props }) {
  const { post } = props;

  const png = await renderOgImage({
    eyebrow: 'tulio.org / writing',
    title: post.data.title,
    description: post.data.description,
    meta: formatDate(post.data.date),
  });

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
