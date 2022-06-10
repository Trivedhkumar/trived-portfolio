export type GitHubProject = {
  id: number;
  name: string;
  description: string;
  repoLink: string;
  projectLink?: string;
};
export type Skill = {
  id: number;
  skill: string;
  value: number;
};
export type Langugue = {
  id: number;
  lang: string;
  value: number;
};
export type GitHubProjects = Array<GitHubProject>;
export type Skills = Array<Skill>;
export type Langugues = Array<Langugue>;
