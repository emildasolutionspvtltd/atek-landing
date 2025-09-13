import { defineCollection, z } from 'astro:content';

const careersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    department: z.string().optional(), // Keep for backward compatibility
    jobCategory: z.string().optional(), // New field for job category reference
    location: z.string(),
    type: z.enum(['Full-time', 'Part-time', 'Contract', 'Internship']),
    experience: z.enum(['Entry Level', 'Mid Level', 'Senior Level', 'Lead/Principal']),
    salary: z.string().optional(), // Optional for backward compatibility
    description: z.string(),
    requirements: z.array(z.string()).optional(), // Made optional for simplified CMS
    responsibilities: z.array(z.string()).optional(), // Made optional for simplified CMS
    benefits: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

// Define the guides collection schema
const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    pdfFile: z.string(),
    published: z.boolean().default(true),
    order: z.number().default(1),
    date: z.coerce.date(),
  }),
});

// Define the job categories collection schema
const jobCategoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    order: z.number().default(1),
    published: z.boolean().default(true),
    description: z.string().optional(),
    jobs: z.array(z.string()).optional(), // Array of job slugs associated with this category
  }),
});

export const collections = {
  careers: careersCollection,
  guides: guidesCollection,
  'job-categories': jobCategoriesCollection,
};
