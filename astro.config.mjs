// @ts-check
import { copyFileSync, existsSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = 'https://tulio.org';
const root = fileURLToPath(new URL('.', import.meta.url));
const lastmodByUrl = buildLastmodMap();

/** @param {string} pathname */
function absoluteUrl(pathname) {
  return new URL(pathname, site).toString();
}

/** @param {string} path */
function sourceDate(path) {
  return statSync(join(root, path)).mtime;
}

/** @param {Date[]} dates */
function latestDate(dates) {
  if (dates.length === 0) {
    return new Date(0);
  }

  return dates.reduce((latest, date) => (date > latest ? date : latest));
}

/** @param {string} base */
function contentFiles(base) {
  /** @type {string[]} */
  const files = [];

  /** @param {string} directory */
  function walk(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);

      if (entry.isDirectory()) {
        walk(path);
      } else if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) {
        files.push(path);
      }
    }
  }

  walk(base);
  return files;
}

/** @param {string} file */
function frontmatterDate(file) {
  const markdown = readFileSync(file, 'utf8');
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(markdown);

  if (!match?.[1]) {
    return undefined;
  }

  /** @type {Map<string, string>} */
  const fields = new Map();

  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z][\w-]*):\s*(.+)$/);

    if (field?.[1] && field[2]) {
      fields.set(field[1], field[2].replace(/^['"]|['"]$/g, ''));
    }
  }

  const rawDate = fields.get('updated') ?? fields.get('date');

  if (!rawDate) {
    return undefined;
  }

  const date = new Date(rawDate);
  return Number.isNaN(date.valueOf()) ? undefined : date;
}

/** @param {'artifacts' | 'writing'} collection */
function collectCollectionDates(collection) {
  const base = join(root, 'src', 'content', collection);
  /** @type {Date[]} */
  const dates = [];
  /** @type {Map<string, Date>} */
  const routes = new Map();

  for (const file of contentFiles(base)) {
    const id = relative(base, file).replace(/\.(md|mdx)$/, '').split(sep).join('/');
    const date = frontmatterDate(file) ?? statSync(file).mtime;
    const url = absoluteUrl(`/${collection}/${id}/`);

    routes.set(url, date);
    dates.push(date);
  }

  return { dates, routes };
}

function buildLastmodMap() {
  const writing = collectCollectionDates('writing');
  const artifacts = collectCollectionDates('artifacts');
  const map = new Map([...writing.routes, ...artifacts.routes]);

  const artifactIndexDate = latestDate(artifacts.dates);
  const writingIndexDate = latestDate(writing.dates);
  const homepageDate = latestDate([
    artifactIndexDate,
    writingIndexDate,
    sourceDate('src/pages/index.astro'),
    sourceDate('src/data/timeline.ts'),
  ]);

  map.set(absoluteUrl('/'), homepageDate);
  map.set(absoluteUrl('/artifacts/'), artifactIndexDate);
  map.set(absoluteUrl('/writing/'), writingIndexDate);

  return map;
}

/**
 * @param {{
 *   dir: URL;
 *   logger: {
 *     info(message: string): void;
 *     warn(message: string): void;
 *   };
 * }} build
 */
function promoteSingleSitemap({ dir, logger }) {
  const destinationDir = fileURLToPath(dir);
  const generatedSitemap = join(destinationDir, 'sitemap-0.xml');
  const sitemapIndex = join(destinationDir, 'sitemap-index.xml');
  const publicSitemap = join(destinationDir, 'sitemap.xml');

  if (!existsSync(generatedSitemap)) {
    logger.warn('Expected sitemap-0.xml was not found; sitemap.xml was not created.');
    return;
  }

  copyFileSync(generatedSitemap, publicSitemap);
  rmSync(generatedSitemap);

  if (existsSync(sitemapIndex)) {
    rmSync(sitemapIndex);
  }

  logger.info('`sitemap.xml` created at `dist`');
}

function singleSitemap() {
  return {
    name: 'single-sitemap',
    hooks: {
      'astro:build:done': promoteSingleSitemap,
    },
  };
}

export default defineConfig({
  site,
  server: {
    host: true,
    port: 8000,
  },
  integrations: [
    sitemap({
      namespaces: {
        news: false,
        xhtml: false,
        image: false,
        video: false,
      },
      serialize(item) {
        const lastmod = lastmodByUrl.get(item.url);

        if (!lastmod) {
          return item;
        }

        return {
          ...item,
          lastmod: lastmod.toISOString(),
        };
      },
    }),
    singleSitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
