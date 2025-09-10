import { defineCollection, z } from 'astro:content';

// Define the careers collection schema
const careersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    experience: z.enum(['Entry Level', 'Mid Level']),
    location: z.string(),
    department: z.enum(['Software & Development', 'Engineering & Infrastructure', 'Experience & Design', 'Quality & Data']),
    type: z.enum(['Full-time', 'Part-time', 'Contract', 'Internship']),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    date: z.string().transform((str) => new Date(str)),
  }),
});

// Define the guides collection schema
const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(150),
    icon: z.string(),
    pdfFile: z.string(),
    published: z.boolean().default(false),
    order: z.number().default(1),
    date: z.string().transform((str) => new Date(str)),
  }),
});

// Export the collections
export const collections = {
  'careers': careersCollection,
  'guides': guidesCollection,
};
