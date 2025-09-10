export interface DownloadableGuide {
  title: string;
  description: string;
  icon: string;
  pdfFile: string;
  published: boolean;
  order: number;
  date: string;
  slug: string;
}

// Function to fetch guides from CMS content
export async function getGuides(): Promise<DownloadableGuide[]> {
  try {
    // Import all guide files from the content directory
    const guideFiles = import.meta.glob('/src/content/guides/*.md', { eager: true });
    
    const guides: DownloadableGuide[] = [];
    
    for (const path in guideFiles) {
      const file = guideFiles[path] as any;
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      
      if (file.frontmatter) {
        const guide: DownloadableGuide = {
          title: file.frontmatter.title || '',
          description: file.frontmatter.description || '',
          icon: file.frontmatter.icon || '',
          pdfFile: file.frontmatter.pdfFile || '',
          published: file.frontmatter.published || false,
          order: file.frontmatter.order || 1,
          date: file.frontmatter.date || '',
          slug: slug
        };
        
        // Only include published guides
        if (guide.published) {
          guides.push(guide);
        }
      }
    }
    
    // Sort by order field (ascending)
    return guides.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error fetching guides:', error);
    return [];
  }
}

// Function to get a single guide by slug
export async function getGuideBySlug(slug: string): Promise<DownloadableGuide | null> {
  try {
    const guides = await getGuides();
    return guides.find(guide => guide.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching guide by slug:', error);
    return null;
  }
}

// Function to validate guide file paths
export function validateGuidePaths(guide: DownloadableGuide): boolean {
  // Check if icon path exists (basic validation)
  if (!guide.icon || !guide.icon.startsWith('/images/guides/')) {
    return false;
  }
  
  // Check if PDF path exists (basic validation)
  if (!guide.pdfFile || !guide.pdfFile.startsWith('/downloads/guides/')) {
    return false;
  }
  
  return true;
}

// Function to get download URL for a guide
export function getDownloadUrl(guide: DownloadableGuide): string {
  return guide.pdfFile;
}

// Function to get icon URL for a guide
export function getIconUrl(guide: DownloadableGuide): string {
  return guide.icon;
}
