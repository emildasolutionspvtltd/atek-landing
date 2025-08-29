# Netlify CMS Setup for ATEK IT Website

## Overview
This setup enables content management for the careers page through Netlify CMS, allowing non-technical team members to easily update job postings and career page content.

## Setup Instructions

### 1. Deploy to Netlify
1. Connect your repository to Netlify
2. Deploy the site with build command: `npm run build`
3. Set publish directory to: `dist`

### 2. Enable Netlify Identity
1. Go to your Netlify site dashboard
2. Navigate to **Identity** tab
3. Click **Enable Identity**
4. Under **Registration preferences**, select "Invite only" or "Open" based on your needs
5. Under **External providers**, you can enable GitHub, Google, etc. (optional)

### 3. Enable Git Gateway
1. In the Identity tab, scroll down to **Services**
2. Click **Enable Git Gateway**
3. This allows Netlify CMS to commit changes back to your repository

### 4. Access the CMS
1. Visit `https://your-site-name.netlify.app/admin/`
2. You'll be prompted to sign up/log in
3. Once authenticated, you can manage career content

## Content Structure

### Career Jobs (`/admin/collections/careers`)
- **Title**: Job position title
- **Department**: Engineering, Sales, Marketing, etc.
- **Location**: Office location or Remote
- **Type**: Full-time, Part-time, Contract, Internship
- **Experience Level**: Entry, Mid, Senior, Lead/Principal
- **Salary Range**: Optional salary information
- **Description**: Detailed job description (Markdown supported)
- **Requirements**: List of job requirements
- **Responsibilities**: List of job responsibilities
- **Benefits**: List of benefits offered
- **Skills**: Required/preferred skills
- **Published**: Show/hide the job posting
- **Featured**: Mark as featured job
- **Publish Date**: When the job was posted

### Career Page Settings (`/admin/collections/career-settings`)
- **Hero Title**: Main headline on careers page
- **Hero Subtitle**: Subtitle text
- **Why Join Section**: Title and description
- **Benefits**: List of company benefits with icons
- **Application Process**: Instructions for applying
- **Contact Information**: Email and office location

## File Structure
```
public/
  admin/
    config.yml          # Netlify CMS configuration
    index.html          # CMS admin interface

src/
  content/
    career-page.md      # Career page content
    careers/            # Individual job postings
      *.md              # Job posting files

  utils/
    careers.ts          # Utility functions for reading career content
```

## Usage

### Adding a New Job
1. Go to `/admin/`
2. Click "Careers" collection
3. Click "New Careers"
4. Fill in all job details
5. Set "Published" to true
6. Save and publish

### Editing Career Page Content
1. Go to `/admin/`
2. Click "Career Page Settings"
3. Click "Career Page Content"
4. Edit any content
5. Save and publish

### Managing Job Status
- Set "Published" to false to hide a job posting
- Set "Featured" to true to highlight important positions
- Use "Publish Date" to control job posting order

## Development Notes

### Adding New Fields
To add new fields to job postings:
1. Update `public/admin/config.yml`
2. Update the `CareerJob` interface in `src/utils/careers.ts`
3. Update the careers component to display new fields

### Customizing the CMS
- Edit `public/admin/config.yml` to modify field types, validation, etc.
- Refer to [Netlify CMS documentation](https://www.netlifycms.org/docs/) for advanced configuration

## Security
- The CMS is protected by Netlify Identity
- Only authenticated users can access `/admin/`
- All changes are committed to your Git repository
- Consider using "Invite only" registration for production

## Troubleshooting

### CMS Not Loading
- Ensure Netlify Identity is enabled
- Check that Git Gateway is enabled
- Verify the site is deployed and accessible

### Content Not Updating
- Check that changes are being committed to the repository
- Ensure the build process includes the content files
- Verify file paths in the CMS configuration

### Authentication Issues
- Clear browser cache and cookies
- Check Netlify Identity settings
- Ensure external providers are configured correctly if using them
