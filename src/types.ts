export type GitHubProject = {
  id: number;
  name: string;
  description: string;
  repoLink: string;
  projectLink?: string;
};
export type GitHubProjects = Array<GitHubProject>;
