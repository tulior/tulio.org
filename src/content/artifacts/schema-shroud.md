---
title: 'SchemaShroud'
updated: 2026-05-24
description: 'A .NET data anonymization library for protecting sensitive fields in non-production and compliance-adjacent workflows.'
type: 'open-source-library'
status: 'maintained'
featured: true
stack: ['.NET 8', 'C#', 'Reflection', 'Data privacy']
primaryAction:
  label: 'Source'
  href: 'https://github.com/tulior/schema-shroud'
interactive: false
apiMode: 'none'
---

SchemaShroud is an open-source .NET library for declaring sensitive fields and anonymizing data through explicit attributes.

The interesting part is the contract: sensitive data is marked near the model, then processed through a predictable anonymization pipeline. That keeps privacy behavior inspectable instead of hiding it in scattered scripts or one-off cleanup jobs.

## What It Proves

- Data protection work can be expressed as code-level intent.
- Reflection-heavy utilities still need boring, readable contracts.
- Compliance helpers should make risky behavior easier to see.
