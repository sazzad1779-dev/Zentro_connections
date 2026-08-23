import { 
  Globe, 
  Smartphone, 
  Bot, 
  Sparkles, 
  TrendingUp, 
  Film, 
  Server, 
  Camera, 
  FileText, 
  Layers,
  Cpu,
  Zap,
  Code2,
  Compass
} from 'lucide-react';

export interface NetworkServiceNode {
  id: string;
  name: string;
  shortName: string;
  category: 'Digital' | 'Creative' | 'Growth' | 'Tech' | 'Strategy';
  description: string;
  impactMetric: string;
  iconName: string;
  angleDeg: number; // Angular position relative to center in degrees
  distanceRatio: number; // Normalized radial distance (0.8 - 1.2)
  mobileVisible: boolean; // Whether visible on compact mobile viewports
  destinationSection: string;
  deliverables: string[];
}

export const NETWORK_SERVICES: NetworkServiceNode[] = [
  {
    id: 'website',
    name: 'Websites & Web Apps',
    shortName: 'Web Platforms',
    category: 'Digital',
    description: 'High-performance React/Next.js platforms, headless e-commerce, and responsive web portals.',
    impactMetric: '99/100 Core Web Vitals',
    iconName: 'Globe',
    angleDeg: -60,
    distanceRatio: 0.92,
    mobileVisible: true,
    destinationSection: '#services',
    deliverables: ['Custom Web Architecture', 'Headless CMS Integration', 'Edge CDN Optimization']
  },
  {
    id: 'mobile-app',
    name: 'Mobile App Engineering',
    shortName: 'Mobile Apps',
    category: 'Digital',
    description: 'Native iOS & Android mobile applications engineered with seamless offline sync and fluid 120Hz UX.',
    impactMetric: '4.9★ App Store Rating',
    iconName: 'Smartphone',
    angleDeg: -18,
    distanceRatio: 1.05,
    mobileVisible: true,
    destinationSection: '#services',
    deliverables: ['iOS Swift & Android Kotlin', 'Real-time WebSockets', 'Biometric Security']
  },
  {
    id: 'ai-products',
    name: 'AI Products & Automation',
    shortName: 'AI Products',
    category: 'Tech',
    description: 'Autonomous workflow agents, custom LLM fine-tuning, and predictive business intelligence pipelines.',
    impactMetric: '10x Workflow Acceleration',
    iconName: 'Bot',
    angleDeg: 24,
    distanceRatio: 0.88,
    mobileVisible: true,
    destinationSection: '#services',
    deliverables: ['Custom LLM Integration', 'Predictive ML Pipelines', 'Automated Agents']
  },
  {
    id: 'branding',
    name: 'Brand Strategy & Identity',
    shortName: 'Brand Strategy',
    category: 'Strategy',
    description: 'Distinctive visual identities, design tokens, positioning frameworks, and brand guidelines.',
    impactMetric: '+180% Brand Recall',
    iconName: 'Sparkles',
    angleDeg: 66,
    distanceRatio: 1.04,
    mobileVisible: true,
    destinationSection: '#services',
    deliverables: ['Brand Guidelines & Voice', 'Design Tokens System', 'Investor Pitch Decks']
  },
  {
    id: 'marketing',
    name: 'Performance & Growth Marketing',
    shortName: 'Growth & Ads',
    category: 'Growth',
    description: 'Full-funnel customer acquisition, multi-channel paid media, SEO dominance, and retention loops.',
    impactMetric: '4.6x Verified ROAS',
    iconName: 'TrendingUp',
    angleDeg: 112,
    distanceRatio: 0.90,
    mobileVisible: true,
    destinationSection: '#services',
    deliverables: ['Omnichannel Media Buying', 'Conversion Rate Optimization', 'Cohort Analytics']
  },
  {
    id: 'video-motion',
    name: '3D Motion & Video Production',
    shortName: '3D & Motion',
    category: 'Creative',
    description: 'Cinematic commercial video, 3D CGI product renders, and fluid kinetic UI animations.',
    impactMetric: '4K 120 FPS Production',
    iconName: 'Film',
    angleDeg: 156,
    distanceRatio: 1.06,
    mobileVisible: true,
    destinationSection: '#services',
    deliverables: ['3D Product Renders', 'Commercial Video Editing', 'Brand Motion Systems']
  },
  {
    id: 'cloud-it',
    name: 'Cloud & DevOps Solutions',
    shortName: 'Cloud Systems',
    category: 'Tech',
    description: 'Resilient multi-region Kubernetes clusters, automated CI/CD pipelines, and zero-trust security.',
    impactMetric: '99.999% SLA Uptime',
    iconName: 'Server',
    angleDeg: 198,
    distanceRatio: 0.94,
    mobileVisible: true,
    destinationSection: '#services',
    deliverables: ['Kubernetes Orchestration', 'Multi-Region Failover', 'SOC-2 Compliance']
  },
  {
    id: 'photoshoot',
    name: 'Commercial Photography',
    shortName: 'Photoshoot',
    category: 'Creative',
    description: 'Editorial brand campaigns, executive portraits, and high-resolution commercial product imagery.',
    impactMetric: 'High-Res Studio Capture',
    iconName: 'Camera',
    angleDeg: 242,
    distanceRatio: 1.04,
    mobileVisible: false,
    destinationSection: '#services',
    deliverables: ['Studio Editorial Shoots', 'Lifestyle Brand Imagery', 'Color Grading & Retouching']
  },
  {
    id: 'narrative',
    name: 'Narrative & Scriptwriting',
    shortName: 'Content & PR',
    category: 'Strategy',
    description: 'High-stakes executive communication, press releases, video scripts, and conversion copy.',
    impactMetric: 'Tier-1 Media Placements',
    iconName: 'FileText',
    angleDeg: 280,
    distanceRatio: 0.88,
    mobileVisible: false,
    destinationSection: '#services',
    deliverables: ['Executive Keynotes', 'Commercial Video Scripts', 'PR Press Releases']
  },
  {
    id: 'uiux-systems',
    name: 'Graphic Design & UI/UX',
    shortName: 'Design Systems',
    category: 'Creative',
    description: 'Design systems with multi-device component libraries and seamless micro-interactions.',
    impactMetric: '80+ Reusable Components',
    iconName: 'Layers',
    angleDeg: 320,
    distanceRatio: 1.02,
    mobileVisible: true,
    destinationSection: '#services',
    deliverables: ['Figma Design Systems', 'Accessible UI Libraries', 'Micro-Interactions']
  }
];

// Intelligent pulse transmission sequence
export const INTELLIGENT_PULSE_ROUTE = [
  'website',
  'ai-products',
  'branding',
  'cloud-it',
  'marketing',
  'video-motion',
  'mobile-app',
  'uiux-systems',
  'narrative',
  'photoshoot'
];
