import { site } from '../data/site';
import { getPublishedWriting } from '../lib/content';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET() {
  const posts = await getPublishedWriting();
  const feedUrl = new URL('/rss.xml', site.url).toString();
  const lastBuildDate = posts
    .reduce<Date | undefined>((latest, post) => {
      const updated = post.data.updated ?? post.data.date;
      return !latest || updated > latest ? updated : latest;
    }, undefined)
    ?.toUTCString();

  const items = posts
    .map((post) => {
      const link = new URL(`/writing/${post.id}/`, site.url).toString();

      return [
        '<item>',
        `<title>${escapeXml(post.data.title)}</title>`,
        `<description>${escapeXml(post.data.description)}</description>`,
        `<link>${link}</link>`,
        `<guid>${link}</guid>`,
        `<pubDate>${post.data.date.toUTCString()}</pubDate>`,
        '</item>',
      ].join('');
    })
    .join('');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '<channel>',
    `<title>${escapeXml(`${site.name} | Writing`)}</title>`,
    `<description>${escapeXml(site.description)}</description>`,
    `<link>${site.url}</link>`,
    '<language>en</language>',
    `<atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />`,
    lastBuildDate ? `<lastBuildDate>${lastBuildDate}</lastBuildDate>` : '',
    items,
    '</channel>',
    '</rss>',
  ].join('');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
