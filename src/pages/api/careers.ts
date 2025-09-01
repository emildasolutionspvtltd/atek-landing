import type { APIRoute } from 'astro';
import { getCareerJobs } from '../../utils/careers';

export const GET: APIRoute = async () => {
  try {
    const jobs = getCareerJobs();
    return new Response(JSON.stringify(jobs), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Error fetching career jobs:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch jobs' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  }
};
