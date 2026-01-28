
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  category: 'Frontend' | 'Mobile' | 'ERP' | 'Backend';
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  skills: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'Core' | 'Frameworks' | 'Backend' | 'Tools';
  icon: string;
  relevance: string;
}
