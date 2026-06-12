---
title: 'wingetdb'
updated: 2026-05-24
description: 'A static generator and public index for Windows Package Manager packages.'
type: 'interactive-tool'
status: 'live'
featured: true
order: 2
stack: ['Go', 'Static HTML', 'Vanilla JS', 'GitHub Pages', 'winget']
primaryAction:
  label: 'Source'
  href: 'https://github.com/tulior/wingetdb'
secondaryAction:
  label: 'Use site'
  href: 'https://winget.tulio.org/'
---

wingetdb builds a static site for browsing Windows Package Manager packages.

It reads from `microsoft/winget-pkgs` and generates package pages with IDs, version history, and copyable `winget install` commands.