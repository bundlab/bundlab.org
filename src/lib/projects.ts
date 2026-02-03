import data from './projects.json';

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  client: string;
};

export const projectsData: Project[] = data.projects;

export function getAllProjects(): Project[] {
  return projectsData;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}
