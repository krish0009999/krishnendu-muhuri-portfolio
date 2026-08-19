export type NavSection = 'home' | 'skills' | 'projects' | 'dsa' | 'academic' | 'terminal' | 'contact';

export interface SkillItem {
  id: string;
  name: string;
  category: 'languages' | 'dsa' | 'web' | 'core_cs';
  icon: string;
  level: number; // 0-100
  badge: string;
  color: string;
  accentGradient: string;
  shortDesc: string;
  details: {
    coreConcepts: string[];
    useCases: string[];
    codeSnippet: string;
    snippetLang: string;
    solvedProblemsCount?: number;
    experienceTime: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Web Dev' | 'DSA / Algorithms' | 'Systems & C++' | 'Full-Stack';
  description: string;
  detailedOverview: string;
  image: string;
  tags: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  architectureHighlights: string[];
  featured: boolean;
}

export interface EducationMilestone {
  period: string;
  title: string;
  institution: string;
  grade: string;
  status: 'Current' | 'Completed';
  highlights: string[];
  courses: string[];
}

export interface DsaTopic {
  name: string;
  solved: number;
  total: number;
  color: string;
  icon: string;
}
