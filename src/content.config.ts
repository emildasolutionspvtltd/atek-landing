import { defineCollection, z } from 'astro:content';

const careersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    department: z.string(),
    location: z.string(),
    type: z.enum(['Full-time', 'Part-time', 'Contract', 'Internship']),
    experience: z.enum(['Entry Level', 'Mid Level', 'Senior Level', 'Lead/Principal']),
    salary: z.string().optional(),
    description: z.string(),
    requirements: z.array(z.string()),
    responsibilities: z.array(z.string()),
    benefits: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

export const collections = {
  careers: careersCollection,
};
