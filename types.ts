export interface Service {
  id: string;
  title: string;
  icon: 'zap' | 'globe' | 'trend' | 'camera' | 'palette' | 'cpu';
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface GeneratedCaption {
  caption: string;
  hashtags: string[];
}

export enum ViralTone {
  EDGY = 'Edgy & Bold',
  PROFESSIONAL = 'Professional',
  MEME = 'Meme/GenZ',
  MINIMALIST = 'Minimalist'
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  stats: {
    label: string;
    value: string;
  }[];
}