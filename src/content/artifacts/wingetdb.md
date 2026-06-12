---
title: 'wingetdb'
updated: 2026-05-24
description: 'Generates a static index for Windows Package Manager packages.'
type: 'interactive-tool'
status: 'live'
featured: true
stack: ['Go', 'Static HTML', 'Vanilla JS', 'GitHub Pages']
primaryAction:
  label: 'Source'
  href: 'https://github.com/tulior/wingetdb'
secondaryAction:
  label: 'Use site'
  href: 'https://winget.tulio.org/'
---

wingetdb builds the static site behind `winget.tulio.org`.

It reads from `microsoft/winget-pkgs` and emits package pages with IDs, version history, and copyable `winget install` commands.

The public site is the output. The repository is the generator.
