import type { CareerJob } from './careers';

export interface JobCategory {
  id: string;
  name: string;
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
      // Match by jobCategory field (new) or department field (backward compatibility)
      categoryJobs = jobs.filter(job =>
        (job as any).jobCategory === category.name || job.department === category.name
      );
    }

    return {
      ...category,
      jobListings: categoryJobs,
    };
  });
}



/**
 * Get category color - standardized to purple for all categories
 */
export function getCategoryColor(order: number): string {
  // All categories now use primary (purple) color for consistent styling
  return 'primary';
}
