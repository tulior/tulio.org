---
title: 'winget.tulio.org'
updated: 2026-05-24
description: 'A static index for Windows Package Manager packages.'
type: 'interactive-tool'
status: 'live'
featured: true
stack: ['Go', 'Static HTML', 'Vanilla JS', 'GitHub Pages', 'winget']
primaryAction:
  label: 'Use site'
  href: 'https://winget.tulio.org/'
secondaryAction:
  label: 'Source'
  href: 'https://github.com/tulior/wingetdb'
---

winget.tulio.org is a generated static site for browsing Windows Package Manager packages.

It reads from `microsoft/winget-pkgs` and builds pages with package IDs, version history, and copyable `winget install` commands.

The repository is `tulior/wingetdb`.
