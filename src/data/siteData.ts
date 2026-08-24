import {
  ServiceItem,
  ProjectItem,
  TeamMember,
  TestimonialItem,
  FaqItem,
  ProcessStep,
  ClientSector,
} from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'digital-solutions',
    number: '01',
    title: 'Digital Solutions & Platforms',
    category: 'digital',
    categoryLabel: 'Digital Solutions',
    tagline: 'High-performance web applications, digital ecosystems, and bespoke SaaS platforms.',
    description: 'We architect and build enterprise-grade web applications, headless commerce systems, and bespoke digital platforms designed for lightning speed, airtight security, and seamless scalability.',
    deliverables: [
      'Custom Web & SaaS Application Development',
      'Next-Gen Headless CMS & E-Commerce',
      'Responsive Web Platforms & Portals',
      'API Design, Cloud Infrastructure & Microservices',
      'Performance Tuning & Accessibility Compliance'
    ],
    technologies: ['React/Next.js', 'TypeScript', 'Node.js', 'TailwindCSS', 'GraphQL', 'AWS/GCP'],
    impactMetric: '99.98% Uptime & 3.4x Faster Load Speeds',
    iconName: 'Code2'
  },
  {
    id: 'creative-branding',
    number: '02',
    title: 'Branding & Design Systems',
    category: 'creative',
    categoryLabel: 'Creative',
    tagline: 'Distinctive brand identities, visual languages, and coherent product design systems.',
    description: 'We distill the essence of your business into an unforgettable visual and verbal identity. From comprehensive brand systems to digital UI/UX toolkits that scale across all touchpoints.',
    deliverables: [
      'Brand Strategy, Positioning & Brand Architecture',
      'Logo Systems & Complete Visual Guidelines',
      'UI/UX Product Design & Component Systems',
      'Editorial Print, Packaging & Collateral',
      'Design Token Libraries & Design System Governance'
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'Cinema 4D', 'Storybook', 'Tokens Studio'],
    impactMetric: '+180% Higher Brand Recall',
    iconName: 'Palette'
  },
  {
    id: 'digital-marketing',
    number: '03',
    title: 'Digital Marketing & Growth',
    category: 'marketing',
    categoryLabel: 'Marketing',
    tagline: 'Data-informed campaign strategies, performance marketing, and organic reach amplifiers.',
    description: 'Turn digital touchpoints into predictable growth engines. We craft integrated marketing funnels, search authority strategies, high-converting copy, and paid media acquisition campaigns.',
    deliverables: [
      'Full-Funnel Campaign Strategy & Execution',
      'Search Engine Optimization (Technical & Content SEO)',
      'Performance Paid Advertising (Meta, Google, LinkedIn)',
      'Content Marketing Ecosystems & Editorial Direction',
      'Conversion Rate Optimization (CRO) & A/B Testing'
    ],
    technologies: ['Google Analytics 4', 'HubSpot', 'SEMrush', 'Mixpanel', 'Looker Studio'],
    impactMetric: '+215% Average Organic Pipeline Growth',
    iconName: 'TrendingUp'
  },
  {
    id: 'video-animation',
    number: '04',
    title: 'Video & 3D Motion Graphics',
    category: 'creative',
    categoryLabel: 'Creative & Animation',
    tagline: 'Cinematic brand films, 3D product animations, and interactive motion graphics.',
    description: 'Transform complex technological concepts into captivating visual narratives. We produce high-fidelity 3D motion design, cinematic brand stories, and UI micro-interactions that mesmerize audiences.',
    deliverables: [
      '3D Product Visualization & Abstract Motion Design',
      'Cinematic Commercial Brand Films',
      'Explainer Videos & Interactive Walkthroughs',
      'UI Micro-Interactions & Lottie Web Animations',
      'Post-Production, Color Grading & Sound Design'
    ],
    technologies: ['Blender', 'Cinema 4D', 'After Effects', 'Premiere Pro', 'Rive', 'Lottie'],
    impactMetric: '4.8x Higher Video Engagement Rates',
    iconName: 'Film'
  },
  {
    id: 'it-cloud-solutions',
    number: '05',
    title: 'IT Solutions & Cloud Architecture',
    category: 'tech',
    categoryLabel: 'Technology',
    tagline: 'Modern infrastructure consulting, DevOps pipelines, and digital transformation.',
    description: 'Empower your engineering and operational teams with resilient cloud architectures, continuous integration workflows, workflow automation, and enterprise security auditing.',
    deliverables: [
      'Cloud Architecture & Migration (AWS, GCP, Azure)',
      'DevOps, CI/CD Automation & Docker Containerization',
      'System Integration, Workflow Automation & Webhooks',
      'Database Modeling, Optimization & Data Pipelines',
      'Security Audits, Compliance & Penetration Testing'
    ],
    technologies: ['Kubernetes', 'Terraform', 'PostgreSQL', 'Docker', 'Redis', 'Cloudflare'],
    impactMetric: '65% Reduction in Deployment Overhead',
    iconName: 'Server'
  },
  {
    id: 'strategic-communication',
    number: '06',
    title: 'Strategic Communication & PR',
    category: 'marketing',
    categoryLabel: 'Strategy',
    tagline: 'Corporate positioning, message architecture, and narrative leadership.',
    description: 'In an era of endless noise, we engineer high-clarity communications that build trust with enterprise buyers, investors, partners, and discerning consumer communities.',
    deliverables: [
      'Executive Thought Leadership & Message Frameworks',
      'Product Launch Positioning & Go-To-Market Playbooks',
      'Stakeholder & Crisis Communication Strategies',
      'Corporate Pitch Decks & Investor Relations Collateral',
      'Internal Communication Architecture & Culture Handbooks'
    ],
    technologies: ['Notion', 'Pitch', 'Cision', 'Substack', 'Keynote'],
    impactMetric: 'Featured in Top Tier Industry Publications',
    iconName: 'Compass'
  }
];

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: 'lumina-cloud',
    title: 'Lumina Cloud — Next-Gen AI Infrastructure Platform',
    client: 'Lumina Systems Inc.',
    category: 'Digital Experience & Web App',
    categorySlug: 'digital',
    year: '2025',
    tagline: 'Engineering a frictionless developer experience for an enterprise AI cloud orchestration engine.',
    summary: 'A complete end-to-end digital experience: high-converting marketing portal, interactive 3D compute visualizer, and an ultra-fast developer documentation platform.',
    challenge: 'Lumina needed to explain complex GPU cluster orchestration to enterprise CTOs while simultaneously delighting technical engineers with a lightning-fast web experience.',
    solution: 'Zentro designed a high-contrast dark tech aesthetic with interactive latency visualizers, bespoke motion design, and a sub-50ms React/Next.js frontend architecture.',
    results: [
      { label: 'Conversion Rate', value: '+310%' },
      { label: 'Avg Session Duration', value: '4m 12s' },
      { label: 'Enterprise Leads', value: '1.4k+' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    aspectRatio: 'wide',
    tags: ['Web Application', 'Interactive 3D', 'Design System', 'Cloud Architecture'],
    featured: true
  },
  {
    id: 'zenith-mobility',
    title: 'Zenith Mobility — Electric Fleet Visual Identity & Motion',
    client: 'Zenith Global Fleet',
    category: 'Brand Identity & Motion',
    categorySlug: 'brand',
    year: '2025',
    tagline: 'Shaping a sleek, sustainable brand identity for urban commercial electrification.',
    summary: 'Comprehensive brand strategy, dynamic typographic system, kinetic 3D vehicle animations, and an investor-facing digital experience.',
    challenge: 'Differentiating an autonomous EV startup in a crowded landscape dominated by legacy automotive giants.',
    solution: 'Crafted a distinctive minimalist brand identity anchored in precision typography, electric teal accents, and a cinematic 3D product showcase.',
    results: [
      { label: 'Series A Funding', value: '$24M' },
      { label: 'Brand Recognition', value: '+145%' },
      { label: 'Industry Design Award', value: 'Gold' }
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'standard',
    tags: ['Brand Strategy', '3D Motion', 'Design System'],
    featured: true
  },
  {
    id: 'strata-fintech',
    title: 'Strata Wealth — Institutional Asset Management Portal',
    client: 'Strata Capital Partners',
    category: 'Web Development & UI/UX',
    categorySlug: 'digital',
    year: '2024',
    tagline: 'Transforming legacy institutional wealth management into a modern, real-time analytics hub.',
    summary: 'A secure, high-density financial analytics suite with real-time portfolio rebalancing, customizable dashboards, and enterprise compliance integrations.',
    challenge: 'Balancing enormous quantitative data density with clear cognitive hierarchy for high-net-worth portfolio managers.',
    solution: 'Engineered a modular component architecture with instant chart recalculation, responsive grid layouts, and military-grade encryption workflows.',
    results: [
      { label: 'Assets Under Platform', value: '$1.8B+' },
      { label: 'Client Onboarding Time', value: '-65%' },
      { label: 'Daily Active Managers', value: '94%' }
    ],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'tall',
    tags: ['Fintech Platform', 'Data Visualization', 'UI/UX Design'],
    featured: false
  },
  {
    id: 'aether-audio',
    title: 'Aether Acoustic — 3D Product Launch & Cinematic Film',
    client: 'Aether Soundworks',
    category: 'Video & 3D Animation',
    categorySlug: 'motion',
    year: '2024',
    tagline: 'An immersive sensory journey celebrating precision acoustic craftsmanship.',
    summary: 'Hyper-detailed 3D spatial renders, exploded hardware animations, and a synchronized audio-visual campaign for premium audiophile hardware.',
    challenge: 'Conveying the invisible subtleties of spatial audio resonance through visual mediums.',
    solution: 'Designed fluid simulation aesthetics and explosive mechanical breakdowns in Cinema 4D that visualized sound frequencies as organic waves.',
    results: [
      { label: 'Pre-Order Sellout', value: '72 Hours' },
      { label: 'Video Views', value: '2.8M+' },
      { label: 'Press Coverage', value: '45+ Outlets' }
    ],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'standard',
    tags: ['3D Animation', 'Cinematic Film', 'Product Launch'],
    featured: false
  },
  {
    id: 'novus-health',
    title: 'Novus Health — Omnichannel Patient Growth Campaign',
    client: 'Novus Digital Healthcare',
    category: 'Marketing & Strategic Growth',
    categorySlug: 'growth',
    year: '2024',
    tagline: 'Scaling a telehealth ecosystem from regional pilot to nationwide coverage.',
    summary: 'Full-funnel digital marketing campaign, medical authority SEO content engine, and HIPAA-compliant conversion funnels.',
    challenge: 'Building authentic patient trust and high search engine authority in a strictly regulated healthcare vertical.',
    solution: 'Deployed expert-reviewed medical content hubs, frictionless appointment booking workflows, and hyper-targeted geo-location search campaigns.',
    results: [
      { label: 'Monthly Active Patients', value: '+420%' },
      { label: 'Cost Per Acquisition', value: '-38%' },
      { label: 'Organic Search Traffic', value: '850k/mo' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'wide',
    tags: ['Performance Growth', 'Healthcare SEO', 'Conversion Optimization'],
    featured: false
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Founder & Executive Creative Director',
    department: 'leadership',
    departmentLabel: 'Leadership',
    bio: '14+ years blending brand narrative with cutting-edge digital experiences. Formerly lead designer at top global innovation consultancies.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    linkedinUrl: 'https://linkedin.com',
    specialization: ['Creative Direction', 'Brand Strategy', 'Product Architecture']
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Head of Technology & Engineering',
    department: 'tech',
    departmentLabel: 'IT & Technology',
    bio: 'Systems architect specializing in high-concurrency cloud ecosystems, reactive frontend architectures, and resilient API infrastructure.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    linkedinUrl: 'https://linkedin.com',
    specialization: ['Cloud Infrastructure', 'React/Next.js', 'System Architecture']
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    role: 'Director of Growth & Performance Marketing',
    department: 'marketing',
    departmentLabel: 'Marketing',
    bio: 'Performance strategist obsessed with data-backed conversion funnels, algorithmic ad optimization, and organic market dominance.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    linkedinUrl: 'https://linkedin.com',
    specialization: ['Growth Hacking', 'Paid Acquisition', 'CRO Strategy']
  },
  {
    id: 'sophia-moretti',
    name: 'Sophia Moretti',
    role: 'Lead 3D & Motion Graphics Designer',
    department: 'animation',
    departmentLabel: 'Animation & Motion',
    bio: 'Visual storyteller crafting hypnotic 3D simulations, cinematic brand videos, and interactive WebGL micro-interactions.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    linkedinUrl: 'https://linkedin.com',
    specialization: ['Cinema 4D', 'Houdini FX', 'UI Motion Systems']
  },
  {
    id: 'julian-thorne',
    name: 'Julian Thorne',
    role: 'Principal UX & Design Systems Architect',
    department: 'creative',
    departmentLabel: 'Creative & UI/UX',
    bio: 'Human-centered design champion with a passion for mathematical typography scales, accessibility, and high-density interface design.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    linkedinUrl: 'https://linkedin.com',
    specialization: ['Figma Mastery', 'Design Tokens', 'User Research']
  },
  {
    id: 'amara-okafor',
    name: 'Amara Okafor',
    role: 'Director of Strategic Communications & PR',
    department: 'marketing',
    departmentLabel: 'Communications & PR',
    bio: 'Communications strategist helping technology pioneers articulate their vision to international enterprise markets and top-tier media.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80',
    linkedinUrl: 'https://linkedin.com',
    specialization: ['Media Relations', 'Thought Leadership', 'Crisis Management']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    quote: 'Zentro Communications transformed our brand from a confusing tech startup into a respected enterprise platform. Their ability to fuse complex engineering with breathtaking creative design is unprecedented in the agency world.',
    author: 'Sarah Jenkins',
    role: 'Chief Technology Officer',
    company: 'Lumina Cloud Systems',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    metric: '+310%',
    metricLabel: 'Enterprise Pipeline Growth'
  },
  {
    id: '2',
    quote: 'Working with Zentro felt like having an elite in-house team of world-class designers and engineers. They delivered our complete brand identity, 3D motion film, and investor portal 2 weeks ahead of our Series A deadline.',
    author: 'Alexander Sterling',
    role: 'Co-Founder & CEO',
    company: 'Zenith Mobility',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    metric: '$24M',
    metricLabel: 'Series A Capital Raised'
  },
  {
    id: '3',
    quote: 'Most agencies deliver either pretty visuals or functional code. Zentro is the first partner we found that truly masters both. Our user engagement scores skyrocketed immediately following the platform relaunch.',
    author: 'Dr. Evelyn Martinez',
    role: 'VP of Digital Experience',
    company: 'Novus Health Group',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    metric: '4.9/5',
    metricLabel: 'Customer Experience Rating'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVERY',
    duration: 'Step 01',
    description: 'We listen to your vision and goals',
    keyOutputs: ['Discovery Workshop', 'Goal Alignment', 'Needs Assessment', 'Project Scope']
  },
  {
    step: '02',
    title: 'PLANNING',
    duration: 'Step 02',
    description: 'We create a custom strategy for you',
    keyOutputs: ['Strategic Roadmap', 'Information Architecture', 'Resource Allocation', 'Milestone Plan']
  },
  {
    step: '03',
    title: 'DESIGN',
    duration: 'Step 03',
    description: 'We craft stunning visuals & concepts',
    keyOutputs: ['Visual Concepts', 'UI/UX Prototypes', 'Design System', 'Design Review']
  },
  {
    step: '04',
    title: 'DEVELOPMENT',
    duration: 'Step 04',
    description: 'We bring designs to life',
    keyOutputs: ['Clean Code Architecture', 'Responsive Frontend', 'Backend Integrations', 'Interactive Features']
  },
  {
    step: '05',
    title: 'DELIVERY',
    duration: 'Step 05',
    description: 'We launch and support you',
    keyOutputs: ['QA & Final Polish', 'Live Deployment', 'Admin Onboarding', 'Continuous Support']
  }
];

export const CLIENT_SECTORS: ClientSector[] = [
  {
    id: 'startups',
    title: 'High-Growth Startups',
    badge: 'Seed to Series B',
    description: 'Fast-paced teams that need high-impact branding, investor-grade landing experiences, and scalable web apps built with speed and precision.',
    keyBenefits: ['Rapid go-to-market prototypes', 'Venture-grade visual identity', 'Cost-effective scalable architectures'],
    icon: 'Rocket'
  },
  {
    id: 'smes',
    title: 'SMEs & Growing Brands',
    badge: 'Expansion Stage',
    description: 'Established businesses looking to modernize legacy digital touchpoints, refresh their brand image, and outcompete industry incumbents.',
    keyBenefits: ['Modern website overhauls', 'High-converting acquisition funnels', 'Brand repositioning'],
    icon: 'Building2'
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Global Corporations',
    badge: 'Enterprise Grade',
    description: 'Complex organizations requiring robust security, rigorous design systems, multiregion cloud architectures, and executive communications.',
    keyBenefits: ['Strict compliance & SOC2 readiness', 'Enterprise design systems', 'Dedicated SLA & engineering pods'],
    icon: 'ShieldCheck'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & DTC Pioneers',
    badge: 'Retail & Commerce',
    description: 'Digital-first consumer brands looking for ultra-fast headless storefronts, captivating 3D product animation, and high-LTV customer journeys.',
    keyBenefits: ['Headless Shopify/Custom Stores', '3D Product Renderings', 'Frictionless checkout optimization'],
    icon: 'ShoppingBag'
  },
  {
    id: 'technology',
    title: 'B2B Tech & AI Innovators',
    badge: 'Deep Tech & SaaS',
    description: 'Deep-tech, developer tools, and AI companies needing to translate complex algorithmic capabilities into intuitive, inspiring user experiences.',
    keyBenefits: ['Interactive product visualizers', 'Developer documentation hubs', 'High-density analytics dashboards'],
    icon: 'Cpu'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What makes Zentro Communications different from a traditional marketing agency?',
    answer: 'Traditional agencies usually specialize in either creative campaigns OR pure software engineering. Zentro operates at the exact intersection of both: we have senior brand designers working alongside cloud architects and growth engineers under one roof. This eliminates the disconnect between beautiful ideas and technical execution.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'How do you approach a new project from start to finish?',
    answer: 'We follow our proven 5-stage methodology: Discover, Strategize, Create, Launch, and Scale. Every project kicks off with an in-depth discovery sprint to align on business metrics and user pain points before writing a single line of code or designing a single layout.',
    category: 'Process'
  },
  {
    id: 'faq-3',
    question: 'Do you work with startups as well as established enterprises?',
    answer: 'Yes! We tailor our engagement models to match the maturity of our partners. For seed-stage startups, we offer agile sprint packages focused on rapid launch and investor readiness. For enterprise clients, we deploy dedicated engineering and creative pods backed by formal SLAs and security standards.',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'Can Zentro handle both UI/UX design and full-stack development?',
    answer: 'Absolutely. Over 85% of our client engagements are full-lifecycle: from initial brand strategy and UX wireframing to custom TypeScript development, database modeling, and automated cloud deployments on AWS/GCP.',
    category: 'Services'
  },
  {
    id: 'faq-5',
    question: 'How long does a typical project take to complete?',
    answer: 'A comprehensive brand identity or high-impact marketing website typically takes 4–6 weeks. Complex custom web applications, SaaS platforms, or deep digital transformations usually range from 8–14 weeks with bi-weekly deployable milestones.',
    category: 'Timeline'
  },
  {
    id: 'faq-6',
    question: 'How can I initiate a project with Zentro Communications?',
    answer: 'Simply click "Start a Project" or use our interactive cost estimator. You can schedule a 30-minute strategic discovery call directly with our leadership team to discuss scope, timeline, and goals. We provide transparent proposal scopes within 48 hours.',
    category: 'Onboarding'
  }
];

export const PARTNER_LOGOS = [
  { name: 'Apex Cloud', symbol: '▲' },
  { name: 'Vanguard Dynamics', symbol: '❖' },
  { name: 'Hyperion Bio', symbol: '◈' },
  { name: 'Strata Wealth', symbol: '⬡' },
  { name: 'Aether Labs', symbol: '✦' },
  { name: 'Zenith Global', symbol: '■' },
  { name: 'Chronos Digital', symbol: '●' }
];

export const STATS_DATA = [
  { value: '140+', label: 'Digital Products Launched', detail: 'Across 16 countries' },
  { value: '98.6%', label: 'Client Retention Rate', detail: 'Long-term strategic partners' },
  { value: '14x', label: 'Average Client ROI', detail: 'Measured within 12 months' },
  { value: '12+', label: 'Design & Tech Honors', detail: 'Awwwards, CSSDA, FWA' }
];
