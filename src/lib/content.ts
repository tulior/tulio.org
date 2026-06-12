import { getCollection } from 'astro:content';

export async function getPublishedArtifacts() {
  const artifacts = await getCollection('artifacts', ({ data }) => !data.draft);
  return artifacts.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      (a.data.order ?? Number.POSITIVE_INFINITY) - (b.data.order ?? Number.POSITIVE_INFINITY) ||
      a.data.title.localeCompare(b.data.title),
  );
}

export async function getPublishedWriting() {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}