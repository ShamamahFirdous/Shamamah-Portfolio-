
export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  points: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  date: string;
  gpa: string;
  coursework: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: 'ML/AI' | 'Full Stack' | 'Data Science';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Publication {
  title: string;
  journal: string;
  date: string;
  link?: string;
}
