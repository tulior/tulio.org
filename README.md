# tulio.org

Personal timeline, engineering artifacts, and writing from Túlio Ribeiro dos Anjos.

Built with Astro 6, Tailwind CSS v4.3, Bun, static output, and no unnecessary client framework runtime.

## Commands

```sh
bun install
bun run dev
bun run check
bun run build
bun run preview
```

## Architecture

- Homepage is a personal-professional timeline.
- Interactive tools and open-source work live under `/artifacts/`.
- Writing lives under `/writing/`.
- Styling is Tailwind CSS v4.3 through `@tailwindcss/vite`.
- Design tokens live in `src/styles/global.css` under `@theme`.
- The resume page is intentionally removed.
- There is no `/tools/` route.
