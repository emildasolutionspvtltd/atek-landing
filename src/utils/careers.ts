import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface CareerJob {
  slug: string;
  title: string;
  department?: string; // Keep for backward compatibility
  jobCategory?: string; // New field for job category reference
  location: string;
  type: string;
  experience: string;
  salary?: string;
  description: string;
  requirements?: string[]; // Made optional for simplified CMS
  responsibilities?: string[]; // Made optional for simplified CMS
  benefits?: string[];
  skills?: string[];
  published: boolean;
  featured: boolean;
  date: string;
}

export interface CareerPageContent {
  hero_title: string;
  hero_subtitle: string;
  why_join_title: string;
  why_join_description: string;
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  application_title: string;
  application_instructions: string;
  contact_email: string;
  office_location: string;
}

export function getCareerJobs(): CareerJob[] {
  const careersDirectory = join(process.cwd(), 'src/content/careers');

  try {
    const filenames = readdirSync(careersDirectory);
    const jobs = filenames
      .filter(name => name.endsWith('.md'))
      .map(name => {
        const fullPath = join(careersDirectory, name);
        const fileContents = readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Handle both markdown description and text description
        const description = data.description || content || '';

        // Ensure arrays exist with defaults
        const requirements = Array.isArray(data.requirements) ? data.requirements : [];
        const responsibilities = Array.isArray(data.responsibilities) ? data.responsibilities : [];
        const benefits = Array.isArray(data.benefits) ? data.benefits : [];
        const skills = Array.isArray(data.skills) ? data.skills : [];

        return {
          slug: name.replace(/\.md$/, ''),
          title: data.title || '',
          department: data.department || '',
          location: data.location || '',
          type: data.type || 'Full-time',
          experience: data.experience || 'Entry Level',
          salary: data.salary || '',
          description: typeof description === 'string' ? description : '',
          requirements,
          responsibilities,
          benefits,
          skills,
          published: data.published !== false, // Default to true
          featured: data.featured === true,
          date: data.date || new Date().toISOString()
        } as CareerJob;
      })
      .filter(job => job.published && job.title) // Ensure job has title
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return jobs;
  } catch (error) {
    console.warn('Could not read career jobs:', error);
    return [];
  }
}

export function getCareerPageContent(): CareerPageContent | null {
  const careerPagePath = join(process.cwd(), 'src/content/career-page.md');
  
  try {
    const fileContents = readFileSync(careerPagePath, 'utf8');
    const { data } = matter(fileContents);
    return data as CareerPageContent;
  } catch (error) {
    console.warn('Could not read career page content:', error);
    return null;
  }
}

export function getFeaturedJobs(): CareerJob[] {
  return getCareerJobs().filter(job => job.featured);
}

export function getJobsByDepartment(department: string): CareerJob[] {
  return getCareerJobs().filter(job => 
    job.department.toLowerCase() === department.toLowerCase()
  );
}
