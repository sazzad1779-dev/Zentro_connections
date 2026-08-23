export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'digital' | 'creative' | 'marketing' | 'tech';
  categoryLabel: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  impactMetric: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  categorySlug: 'digital' | 'brand' | 'motion' | 'growth';
  year: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  image: string;
  aspectRatio?: 'wide' | 'tall' | 'standard';
  tags: string[];
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'leadership' | 'tech' | 'creative' | 'marketing' | 'animation';
  departmentLabel: string;
  bio: string;
  image: string;
  linkedinUrl?: string;
  specialization: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metric: string;
  metricLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  keyOutputs: string[];
}

export interface ClientSector {
  id: string;
  title: string;
  badge: string;
  description: string;
  keyBenefits: string[];
  icon: string;
}
