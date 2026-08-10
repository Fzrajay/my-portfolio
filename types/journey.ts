import { LucideIcon } from 'lucide-react';

export interface JourneyItem {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: LucideIcon;
  category: 'work' | 'education' | 'certificate';
  technologies?: string[];
}
