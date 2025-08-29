import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface CareerJob {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary?: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  skills: string[];
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
        const { data } = matter(fileContents);
        
        return {
          slug: name.replace(/\.md$/, ''),
          ...data
        } as CareerJob;
      })
      .filter(job => job.published)
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
