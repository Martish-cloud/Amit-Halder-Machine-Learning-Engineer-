export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isRemote?: boolean;
  category: 'genai' | 'operations';
  responsibilities: string[];
  skills: string[];
  impactSummary: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    subskills?: string[];
    highlight?: boolean;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  category: 'AI & GenAI' | 'Data & Analytics' | 'Automation & Dev' | 'Productivity & Languages';
  year?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period?: string;
  status?: string;
  field?: string;
  type: 'degree' | 'school' | 'language';
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  levelCode: string;
  nativeName?: string;
}

export interface CareerPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface EvolutionStage {
  step: string;
  title: string;
  domain: string;
  description: string;
  timeframe: string;
  capabilities: string[];
}
