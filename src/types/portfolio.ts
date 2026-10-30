export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Systems & OOP' | 'IoT & Embedded' | 'Data & Analytics';
  summary: string;
  problemStatement: string;
  proposedSolution: string;
  architectureDetails: string[];
  technologies: string[];
  keyFeatures: string[];
  documentation?: string;
  githubUrl?: string;
  liveUrl?: string;
  fieldCode: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'internship' | 'opensource' | 'simulation';
  highlights: string[];
  technologies: string[];
  credentialNote?: string;
}

export interface SkillItem {
  name: string;
  focus: string;
  category: 'Programming' | 'Web Development' | 'Computer Science' | 'Tools & Platforms';
  isKey?: boolean;
}

export interface HackathonAchievement {
  id: string;
  title: string;
  event: string;
  team?: string;
  achievement: string;
  period: string;
  description: string;
  conceptHighlights?: string[];
  technologies?: string[];
  clarificationBadge?: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  university: string;
  period: string;
  cgpa: string;
  location: string;
  highlights: string[];
}

