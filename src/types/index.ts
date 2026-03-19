export interface PersonalInfo {
  name: string;
  title: string[];
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  summary: string;
  extendedSummary: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  location: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: number;
  gpa: string;
}
