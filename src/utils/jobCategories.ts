import type { CareerJob } from './careers';

export interface JobCategory {
  id: string;
  name: string;
  icon: string;
  order: number;
  published: boolean;
  description?: string;
  jobs?: string[];
  slug: string;
}

export interface JobCategoryWithJobs extends JobCategory {
  jobListings: CareerJob[];
}

/**
 * Fetch job categories from API endpoint (for client-side use)
 */
export async function fetchJobCategories(): Promise<JobCategory[]> {
  try {
    const response = await fetch('/api/job-categories');
    if (!response.ok) {
      throw new Error('Failed to fetch job categories');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching job categories:', error);
    return [];
  }
}

/**
 * Organize jobs by categories based on CMS configuration
 */
export function organizeJobsByCategories(
  categories: JobCategory[],
  jobs: CareerJob[]
): JobCategoryWithJobs[] {
  return categories.map(category => {
    // Find jobs that belong to this category
    let categoryJobs: CareerJob[] = [];

    if (category.jobs && category.jobs.length > 0) {
      // Use the jobs specified in the category's multi-reference field
      categoryJobs = jobs.filter(job =>
        category.jobs!.includes(job.slug || job.title.toLowerCase().replace(/\s+/g, '-'))
      );
    } else {
      // Fallback: match by department name for backward compatibility
      categoryJobs = jobs.filter(job =>
        job.department === category.name
      );
    }

    return {
      ...category,
      jobListings: categoryJobs,
    };
  });
}

/**
 * Get icon component name based on category name (fallback for missing icons)
 */
export function getCategoryIcon(categoryName: string): string {
  const iconMap: Record<string, string> = {
    'Software & Development': 'Code',
    'Engineering & Infrastructure': 'Cloud',
    'Experience & Design': 'Palette',
    'Quality & Data': 'BarChart3',
    'DevOps & Automation': 'Settings',
    'Cybersecurity': 'Shield',
    'Product Management': 'Target',
    'Sales & Marketing': 'TrendingUp',
  };

  return iconMap[categoryName] || 'Briefcase';
}

/**
 * Get category color based on order or name
 */
export function getCategoryColor(order: number): string {
  const colors = ['primary', 'secondary', 'accent', 'primary'];
  const colorIndex = (order - 1) % colors.length;
  return colors[colorIndex];
}
