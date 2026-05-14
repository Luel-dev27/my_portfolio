export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Design';
  level: number; // 0 to 100
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}
