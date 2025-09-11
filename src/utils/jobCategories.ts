import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface JobCategory {
  slug: string;
  name: string;
  icon: string;
  order: number;
  published: boolean;
  description?: string;
}

export const getJobCategories = (): JobCategory[] => {
  try {
    const categoriesDirectory = join(process.cwd(), 'src/content/job-categories');
    const filenames = readdirSync(categoriesDirectory);
    
    const categories = filenames
      .filter(name => name.endsWith('.md'))
      .map(name => {
        const fullPath = join(categoriesDirectory, name);
        const fileContents = readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        
        return {
          slug: name.replace(/\.md$/, ''),
          name: data.name,
          icon: data.icon,
          order: data.order || 999,
          published: data.published !== false,
          description: data.description,
        } as JobCategory;
      })
      .filter(category => category.published)
      .sort((a, b) => a.order - b.order);
    
    return categories;
  } catch (error) {
    console.warn('Error loading job categories:', error);
    return [];
  }
};

export const getJobCategoryBySlug = (slug: string): JobCategory | null => {
  const categories = getJobCategories();
  return categories.find(category => category.slug === slug) || null;
};
