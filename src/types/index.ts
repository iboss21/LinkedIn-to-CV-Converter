import { LucideIcon } from 'lucide-react';

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  action: () => void;
  buttonText: string;
  component: React.ReactNode;
}

export interface LinkedInProfile {
  firstName: string;
  lastName: string;
  headline: string;
  summary?: string;
  experience?: Array<{
    title: string;
    company: string;
    dateRange: string;
    description: string;
  }>;
  education?: Array<{
    school: string;
    degree: string;
    field: string;
    dateRange: string;
  }>;
  skills?: string[];
}
