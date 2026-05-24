import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    description: z.string(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    relatedArtifacts: z.array(reference('artifacts')).default([]),
  }),
});

const artifacts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/artifacts' }),
  schema: z.object({
    title: z.string(),
    updated: z.coerce.date().optional(),
    description: z.string(),
    type: z.enum(['interactive-tool', 'open-source-library', 'backend-system', 'case-study', 'experiment']),
    status: z.enum(['live', 'maintained', 'prototype', 'archived']),
    featured: z.boolean().default(false),
    stack: z.array(z.string()).default([]),
    primaryAction: z.object({
      label: z.string(),
      href: z.string(),
    }),
    secondaryAction: z
      .object({
        label: z.string(),
        href: z.string(),
      })
      .optional(),
    interactive: z.boolean().default(false),
    toolModule: z.string().optional(),
    apiMode: z.enum(['none', 'client-fetch']).default('none'),
    relatedWriting: z.array(reference('writing')).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, artifacts };
