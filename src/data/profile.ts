import type {
  ExperienceItem,
  SkillCategory,
  CertificationItem,
  EducationItem,
  LanguageItem,
  CareerPillar,
  EvolutionStage,
} from '../types';

export const personalInfo = {
  name: 'Amit Halder',
  initials: 'AH',
  headline: 'GenAI Developer / Machine Learning Engineer',
  tagline: 'Bridging AI systems with real-world business operations.',
  summary:
    'Results-driven Generative AI Developer, Machine Learning Engineer, and AI Automation professional with 2+ years of experience, combined with 6+ years in Printing Production Operations and Data Analysis. Specialized in LLM integration, prompt engineering, and AI workflow automation, with a strong ability to bridge business operations and advanced AI systems to improve efficiency and decision-making.',
  location: 'Kolkata, West Bengal, India',
  phone: '(+91) 7003660883',
  phoneRaw: '+917003660883',
  email: 'askfor.amithalder@gmail.com',
  linkedin: 'https://linkedin.com/in/amit-halder',
  linkedinDisplay: 'linkedin.com/in/amit-halder',
  resumeUrl: '/Amit_Halder_Resume.pdf',
  experienceYearsAI: '2+',
  experienceYearsOps: '6+',
};

export const careerPillars: CareerPillar[] = [
  {
    id: 'genai',
    title: 'Generative AI & LLMs',
    subtitle: 'Prompt Architecture & Fine-tuning',
    description:
      'Designing few-shot/zero-shot prompt strategies, fine-tuning language models, and engineering intelligent conversational agents with robust safety guardrails.',
    icon: 'Brain',
    tags: ['LLMs', 'Prompt Engineering', 'Fine-tuning', 'Chatbots', 'Evaluation'],
  },
  {
    id: 'ml',
    title: 'Machine Learning & NLP',
    subtitle: 'Predictive Modeling & Text Processing',
    description:
      'Applying statistical machine learning and natural language processing pipelines to transform unstructured textual and operational data into automated intelligence.',
    icon: 'Cpu',
    tags: ['Supervised ML', 'NLP', 'Model Optimization', 'Feature Engineering'],
  },
  {
    id: 'automation',
    title: 'AI Workflow Automation',
    subtitle: 'API Integration & Orchestration',
    description:
      'Integrating external LLM APIs and modern no-code/low-code workflow tools (like n8n) to create scalable end-to-end automated pipelines that eliminate manual bottlenecks.',
    icon: 'Workflow',
    tags: ['API Integration', 'n8n', 'Workflow Pipelines', 'System Connectors'],
  },
  {
    id: 'data',
    title: 'Data & Business Analytics',
    subtitle: 'Data Modeling & Business Intelligence',
    description:
      'Harnessing SQL, Excel, and Power BI dashboards to translate complex operational records into actionable executive insights and real-time operational clarity.',
    icon: 'BarChart3',
    tags: ['SQL', 'Power BI', 'Excel Modeling', 'BI Dashboards', 'KPIs'],
  },
  {
    id: 'operations',
    title: 'Enterprise Operations & ERP',
    subtitle: 'Industrial Planning & WIP Management',
    description:
      'Over 6 years directing Material Requirements Planning (MRP), Work-in-Progress (WIP) tracking, and ERP data fidelity in industrial print production facilities.',
    icon: 'Factory',
    tags: ['ERP Systems', 'MRP', 'Production Planning', 'WIP Tracking', 'Quality Control'],
  },
];

export const evolutionStages: EvolutionStage[] = [
  {
    step: '01',
    title: 'Industrial Production & WIP Management',
    domain: 'Operations Core',
    timeframe: '2020 – 2023',
    description:
      'Orchestrated Work-in-Progress tracking, material allocation, and multi-stage shop floor scheduling across high-throughput production units.',
    capabilities: ['WIP Tracking', 'Material Allocation', 'Operational Logging', 'Shopfloor Coordination'],
  },
  {
    step: '02',
    title: 'ERP Systems, MRP & Logistics Control',
    domain: 'Data & Systems Integration',
    timeframe: '2023 – 2025',
    description:
      'Executed Material Requirements Planning (MRP), dispatch documentation, ERP data accuracy, and quality executive governance.',
    capabilities: ['ERP Administration', 'MRP Scheduling', 'Dispatch Logistics', 'Quality Governance'],
  },
  {
    step: '03',
    title: 'Workflow Automation & Operational Analytics',
    domain: 'Operational Optimization & R&D',
    timeframe: '2025',
    description:
      'Led R&D initiatives implementing ERP inventory tracking, conducting operational data analysis, and streamlining production workflows.',
    capabilities: ['Workflow Optimization', 'Inventory Analytics', 'R&D Exploration', 'Data Modeling'],
  },
  {
    step: '04',
    title: 'Generative AI & LLM Systems Development',
    domain: 'GenAI & Applied ML',
    timeframe: '2025 – 2026',
    description:
      'Architected few-shot/zero-shot prompt engineering frameworks, built chatbot workflows with LLMs at Mphasis, and created scalable AI workflows at Intuit.',
    capabilities: ['Prompt Engineering', 'LLM Chatbots', 'API Integration', 'Ethical AI Compliance'],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'GenAI Developer',
    company: 'Intuit',
    period: 'Jan 2026 – Apr 2026',
    isRemote: true,
    category: 'genai',
    responsibilities: [
      'Engineered prompt strategies including few-shot and zero-shot prompting techniques to enhance output accuracy.',
      'Integrated APIs to augment AI model functionality and connect LLM responses with business data sources.',
      'Built scalable AI-driven workflows tailored for mission-critical business applications.',
      'Ensured ethical AI implementation and strict regulatory/corporate compliance standards.',
    ],
    skills: ['Prompt Engineering', 'API Integration', 'Scalable AI Workflows', 'Ethical AI', 'LLMs'],
    impactSummary: 'Built production-grade AI workflows with advanced prompt architectures and enterprise compliance.',
  },
  {
    id: 'exp-2',
    role: 'GenAI Intern',
    company: 'Mphasis',
    period: 'Nov 2025 – Dec 2025',
    isRemote: true,
    category: 'genai',
    responsibilities: [
      'Built conversational chatbot workflows powered by Large Language Models (LLMs).',
      'Improved NLP model performance through systematic prompt optimization and response evaluation.',
      'Assisted the engineering group in conceptualizing and testing AI solutions for enterprise use cases.',
    ],
    skills: ['LLMs', 'Chatbot Workflows', 'NLP Optimization', 'Prompt Tuning', 'AI Solutions'],
    impactSummary: 'Enhanced LLM chatbot performance through prompt optimization and conversational design.',
  },
  {
    id: 'exp-3',
    role: 'Assistant PPC Manager / Research and Development companion',
    company: 'Pioneer Mega Printers',
    period: 'Jun 2025 – Nov 2025',
    category: 'operations',
    responsibilities: [
      'Implemented ERP systems for end-to-end inventory tracking across plant operations.',
      'Improved production efficiency and drove workflow automation across production stages.',
      'Conducted operational data analysis to identify bottlenecks and elevate throughput.',
    ],
    skills: ['ERP Systems', 'Inventory Tracking', 'Workflow Automation', 'Operational Data Analysis', 'R&D'],
    impactSummary: 'Spearheaded ERP deployment and data analysis to accelerate production efficiency.',
  },
  {
    id: 'exp-4',
    role: 'Production Supervisor / Quality Executive',
    company: 'Jay Boxes',
    period: 'Mar 2024 – May 2025',
    category: 'operations',
    responsibilities: [
      'Managed end-to-end production lines, rigorous quality control checkpoints, and outbound logistics.',
      'Improved ERP data accuracy, audit readiness, and managerial operational reporting.',
    ],
    skills: ['Production Management', 'Quality Control', 'Logistics', 'ERP Data Integrity', 'Reporting'],
    impactSummary: 'Elevated quality control standards and bolstered ERP operational reporting reliability.',
  },
  {
    id: 'exp-5',
    role: 'PPC Assistant / Dispatch Coordinator',
    company: 'York Print Pvt. Ltd. Unit- IV',
    location: 'Ahmedabad',
    period: 'Mar 2023 – Feb 2024',
    category: 'operations',
    responsibilities: [
      'Assisted in production planning and control (PPC) to ensure smooth, uninterrupted workflow execution.',
      'Prepared and managed job cards, commercial invoices, and comprehensive dispatch documentation.',
      'Tracked real-time order status and delivery schedules, improving on-time delivery performance.',
      'Supported Material Requirements Planning (MRP) for tight production alignment with customer demands.',
      'Ensured adherence to strict quality standards and statutory dispatch procedures.',
    ],
    skills: ['PPC', 'Job Cards & Invoicing', 'Dispatch Coordination', 'MRP Alignment', 'Quality Standards'],
    impactSummary: 'Boosted on-time order delivery and maintained meticulous MRP dispatch alignment.',
  },
  {
    id: 'exp-6',
    role: 'PPC Executive / WIP Management',
    company: 'York Print Pvt. Ltd. Unit- VI',
    location: 'Assam',
    period: 'Mar 2020 – Feb 2023',
    category: 'operations',
    responsibilities: [
      'Managed Work-in-Progress (WIP) across multiple manufacturing stages to guarantee seamless workflow.',
      'Monitored and tracked WIP status across production phases for real-time plant visibility.',
      'Maintained accurate, auditable WIP reports and operational documentation.',
      'Ensured proper raw material availability and optimal machine allocation during shifts.',
    ],
    skills: ['WIP Tracking', 'Material Allocation', 'Production Visibility', 'Operations Reporting', 'PPC'],
    impactSummary: 'Controlled plant-wide WIP visibility and optimized raw material allocation over 3 years.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'genai',
    name: 'Generative AI & LLMs',
    icon: 'Sparkles',
    description: 'Specialized architectures for foundation models, prompt engineering, and fine-tuning.',
    skills: [
      { name: 'Large Language Models (LLMs)', highlight: true },
      { name: 'Prompt Engineering (Zero-shot, Few-shot)', highlight: true },
      { name: 'Model Fine-tuning', highlight: true },
      { name: 'GANs (Generative Adversarial Networks)' },
      { name: 'Synthetic Data Generation' },
      { name: 'Chatbot Workflow Systems' },
    ],
  },
  {
    id: 'ml_nlp',
    name: 'Machine Learning & NLP',
    icon: 'Binary',
    description: 'Core ML algorithms, natural language understanding, and statistical learning.',
    skills: [
      { name: 'Machine Learning Fundamentals', highlight: true },
      { name: 'Natural Language Processing (NLP)', highlight: true },
      { name: 'Model Optimization & Evaluation' },
      { name: 'Python for Data Science' },
      { name: 'Data Preprocessing & Feature Engineering' },
    ],
  },
  {
    id: 'automation_apis',
    name: 'AI Automation & Integration',
    icon: 'Cpu',
    description: 'System connections, API orchestration, and low-code AI pipeline builders.',
    skills: [
      { name: 'AI Workflow Automation', highlight: true },
      { name: 'REST API Integration' },
      { name: 'n8n Automation (No-code AI builder)', highlight: true },
      { name: 'Scalable Automation Pipelines' },
      { name: 'Ethical AI Implementation & Compliance' },
    ],
  },
  {
    id: 'data_bi',
    name: 'Data Analysis & BI',
    icon: 'Database',
    description: 'Data querying, reporting models, and executive business intelligence dashboards.',
    skills: [
      { name: 'Data Analysis (Excel, SQL, Power BI)', highlight: true },
      { name: 'SQL Querying & Data Extraction' },
      { name: 'Power BI Dashboarding', highlight: true },
      { name: 'Advanced Excel & Analytical Modeling' },
      { name: 'Business Intelligence & KPI Tracking' },
    ],
  },
  {
    id: 'operations_erp',
    name: 'ERP & Production Systems',
    icon: 'Layers',
    description: 'Production Planning & Control, inventory systems, and operational logistics.',
    skills: [
      { name: 'ERP Systems Implementation', highlight: true },
      { name: 'Production Planning & Control (PPC)' },
      { name: 'Material Requirements Planning (MRP)' },
      { name: 'Work-in-Progress (WIP) Management' },
      { name: 'Inventory Tracking & Quality Control' },
    ],
  },
  {
    id: 'creative_digital',
    name: 'Digital, Design & Media',
    icon: 'Palette',
    description: 'Interface fundamentals, video post-production, and digital content strategies.',
    skills: [
      { name: 'UI/UX Fundamentals' },
      { name: 'Video Editing (DaVinci Resolve)' },
      { name: 'SEO & Content Strategy' },
      { name: 'Time & Workflow Management' },
    ],
  },
];

export const techOrbit = [
  { name: 'LLMs', category: 'AI', level: 'Core' },
  { name: 'Prompt Engineering', category: 'AI', level: 'Core' },
  { name: 'Python', category: 'Code', level: 'Core' },
  { name: 'Machine Learning', category: 'AI', level: 'Core' },
  { name: 'NLP', category: 'AI', level: 'Core' },
  { name: 'Fine-tuning', category: 'AI', level: 'Advanced' },
  { name: 'API Integration', category: 'Eng', level: 'Core' },
  { name: 'n8n Automation', category: 'Automation', level: 'Core' },
  { name: 'GANs', category: 'AI', level: 'Specialized' },
  { name: 'Synthetic Data', category: 'AI', level: 'Specialized' },
  { name: 'SQL', category: 'Data', level: 'Core' },
  { name: 'Power BI', category: 'Data', level: 'Core' },
  { name: 'Excel Modeling', category: 'Data', level: 'Core' },
  { name: 'ERP Systems', category: 'Operations', level: 'Core' },
  { name: 'MRP', category: 'Operations', level: 'Core' },
  { name: 'DaVinci Resolve', category: 'Media', level: 'Applied' },
];

export const certifications: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Australia Data Analytics Job Simulation',
    provider: 'Deloitte',
    category: 'Data & Analytics',
  },
  {
    id: 'cert-2',
    title: 'Prompt Engineering',
    provider: 'IBM',
    category: 'AI & GenAI',
  },
  {
    id: 'cert-3',
    title: 'Python 101 for Data Science',
    provider: 'IBM',
    category: 'Data & Analytics',
  },
  {
    id: 'cert-4',
    title: 'Machine Learning Engineering',
    provider: 'Udemy',
    category: 'AI & GenAI',
  },
  {
    id: 'cert-5',
    title: 'GenAI Developer',
    provider: 'Udemy',
    category: 'AI & GenAI',
  },
  {
    id: 'cert-6',
    title: 'Generative AI',
    provider: 'Tutedude',
    category: 'AI & GenAI',
  },
  {
    id: 'cert-7',
    title: 'n8n Automation—no-code AI builder',
    provider: 'Simplilearn',
    category: 'Automation & Dev',
  },
  {
    id: 'cert-8',
    title: 'UI/UX Designing',
    provider: 'Tutedude',
    category: 'Automation & Dev',
  },
  {
    id: 'cert-9',
    title: 'Davinci Resolve',
    provider: 'Tutedude',
    category: 'Automation & Dev',
  },
  {
    id: 'cert-10',
    title: 'Advance Spoken English',
    provider: 'Simplilearn',
    category: 'Productivity & Languages',
  },
  {
    id: 'cert-11',
    title: 'Spoken English Certification',
    provider: 'Great Learning',
    category: 'Productivity & Languages',
  },
  {
    id: 'cert-12',
    title: 'Time Management',
    provider: 'LearnTube.AI',
    category: 'Productivity & Languages',
  },
  {
    id: 'cert-13',
    title: 'Japanese Language',
    provider: 'Udemy',
    category: 'Productivity & Languages',
  },
];

export const education: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Arts (B.A.)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    period: '2026 – 2029',
    status: 'Pursuing',
    type: 'degree',
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary (Arts)',
    institution: 'West Bengal Council of Higher Secondary Education (WBCHSE)',
    field: 'Arts Curriculum',
    type: 'school',
  },
  {
    id: 'edu-3',
    degree: 'French Language Learning',
    institution: 'Henry Harvin Education',
    period: '2026 – 2028',
    status: 'Pursuing',
    type: 'language',
  },
];

export const languages: LanguageItem[] = [
  {
    language: 'Bengali',
    proficiency: 'Native Proficiency',
    levelCode: 'Native',
    nativeName: 'বাংলা',
  },
  {
    language: 'English',
    proficiency: 'Professional Proficiency',
    levelCode: 'C1 / Professional',
    nativeName: 'English',
  },
  {
    language: 'Hindi',
    proficiency: 'Professional Proficiency',
    levelCode: 'Professional',
    nativeName: 'हिन्दी',
  },
  {
    language: 'Assamese',
    proficiency: 'Basic Proficiency',
    levelCode: 'A2 / Elementary',
    nativeName: 'অসমীয়া',
  },
  {
    language: 'French',
    proficiency: 'Elementary Proficiency',
    levelCode: 'A1 / Pursuing',
    nativeName: 'Français',
  },
  {
    language: 'Japanese',
    proficiency: 'Elementary Proficiency',
    levelCode: 'N5 / Elementary',
    nativeName: '日本語',
  },
];
