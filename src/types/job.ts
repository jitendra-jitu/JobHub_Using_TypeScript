export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  logo: string;
  skills: string[];
  experience: string;
  recommendations?: string[];
}

export type JobFilters = {
  type?: string;
  location?: string;
  experience?: string;
};

export type JobSkill = {
  name: string;
  weight: number;
};