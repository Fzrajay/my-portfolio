export interface Project {
  id: number;
  title: string;
  description: string;
  gallery: string[];
  technologies: string[];
  github: string;
  demo: string;
  featured?: boolean;
}
