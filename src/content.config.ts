import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const course = defineCollection({
  loader: glob({ base: './src/courses', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    status: z.optional(z.string()),
		image: z.optional(image()),
  }),
});

export const collections = { course };
