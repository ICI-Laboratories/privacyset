import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    category: z.string().default('Aplicación Móvil'),
    lastUpdated: z.string(),
    platforms: z.array(z.string()).default(['Android']),
    developer: z.string().default('ICI Laboratories'),
    collaboration: z.string().optional(),
    contactEmail: z.string().default('soporte@ici-labs.com'),
    accountDeletion: z.object({
      supported: z.boolean().default(false),
      email: z.string().default('icilaboratories@gmail.com'),
      subject: z.string().optional(),
      processingDays: z.number().default(15),
      responsible: z.string().optional(),
    }).optional(),
    offlineOnly: z.boolean().default(false),
  }),
});

export const collections = { apps };
