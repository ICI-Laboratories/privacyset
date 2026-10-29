import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const appSchema = z.object({
  title: z.string(),
  shortDescription: z.string(),
  category: z.string().default('Aplicación Móvil'),
  lastUpdated: z.string(),
  platforms: z.array(z.string()).default(['Android']),
  developer: z.string().default('ICI Laboratories'),
  collaboration: z.string().optional(),
  contactEmail: z.string().default('icilaboratories@gmail.com'),
  order: z.number().default(99),
  isCoreAccount: z.boolean().default(false),
  icon: z.string().optional(),
  summary: z.object({
    whatIs: z.string(),
    dataUsed: z.string(),
    purposes: z.string(),
    contact: z.string().default('icilaboratories@gmail.com'),
  }).optional(),
  accountDeletion: z.object({
    supported: z.boolean().default(false),
    email: z.string().default('icilaboratories@gmail.com'),
    subject: z.string().optional(),
    processingDays: z.number().default(15),
    responsible: z.string().optional(),
  }).optional(),
  offlineOnly: z.boolean().default(false),
});

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: appSchema,
});

const appsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps-en' }),
  schema: appSchema,
});

export const collections = { apps, appsEn };
