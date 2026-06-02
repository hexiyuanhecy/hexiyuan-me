export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
  };
  experience: Experience[];
  skills: {
    frontend: string[];
    backend: string[];
    devops: string[];
  };
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
  techStack: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  github: string;
  period: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work' | 'achievement' | 'project';
}

export interface KnowledgeArticle {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}
