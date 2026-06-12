# tulio.org

Static personal site for backend notes, public tools, and work traces from Túlio Ribeiro dos Anjos.

The site is intentionally small: writing first, built things second, work history as context. No résumé funnel, no contact form, no analytics, no client framework runtime for pages that do not need it.

## Stack

* [Astro](https://astro.build/) for static site generation
* Tailwind CSS v4 through `@tailwindcss/vite`
* Bun for package management and scripts
* Sharp for generated images and icons
* GitHub Pages for hosting

## Local development

```sh
bun install
bun run dev
```

The dev server runs at:

```txt
http://localhost:8000
```

## Commands

```sh
bun run dev       # start local dev server
bun run check     # run Astro diagnostics and type checks
bun run build     # build the static site
bun run preview   # preview the production build locally
bun run icons     # regenerate favicon, app, and manifest icons
bun run clean     # remove generated Astro/build output
```

## Site structure

```txt
/
  Homepage: writing, built work, and a short work trace.

/writing/
  Notes and essays.

/writing/[slug]/
  Individual writing pages.

/built/
  Public tools, libraries, and small projects.

/built/[slug]/
  Individual built/project pages.

/work/
  Full work trace.

/rss.xml
  RSS feed for writing.

/og.png
  Default generated Open Graph image.

/writing/[slug]/og.png
  Generated Open Graph image for each writing page.

/built/[slug]/og.png
  Generated Open Graph image for each built page.
```

## Content

Published writing and built items are handled through Astro content collections.

Shared content helpers live in:

```txt
src/lib/content.ts
src/lib/dates.ts
```

Site metadata lives in:

```txt
src/data/site.ts
src/data/nav.ts
src/data/timeline.ts
```

## Design

The design is deliberately restrained:

* serif display type for major titles
* monospace only for metadata and small interface text
* dark static-site palette
* minimal navigation
* no project cards where a plain entry is enough
* no portrait in the hero
* no analytics or marketing funnel

Global design tokens live in:

```txt
src/styles/global.css
```

## Generated assets

Open Graph images are generated at build time from site/content data.

Icon assets are generated with:

```sh
bun run icons
```

Generated icon outputs include:

```txt
public/favicon.svg
public/favicon.ico
public/apple-touch-icon.png
public/icons/icon-192.png
public/icons/icon-512.png
public/icons/icon-512-maskable.png
```

## Deployment

The site is deployed to GitHub Pages from the `main` branch using the workflow in:

```txt
.github/workflows/deploy.yml
```

The build command is:

```sh
bun run build
```

## Notes

This is a personal site, not a theme. The code is public for reference, but the content, writing, design direction, and identity are specific to `tulio.org`.
