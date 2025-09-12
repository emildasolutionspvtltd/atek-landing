import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  try {
    const categories = await getCollection('job-categories');
    
    const jobCategories = categories
      .filter(category => category.data.published)
      .map(category => ({
        id: category.id,
        slug: category.slug,
        name: category.data.name,
        icon: category.data.icon,
        order: category.data.order,
        published: category.data.published,
        description: category.data.description,
        jobs: category.data.jobs || [],
      }))
      .sort((a, b) => a.order - b.order);

    return new Response(JSON.stringify(jobCategories), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching job categories:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch job categories' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
