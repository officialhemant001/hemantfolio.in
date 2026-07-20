import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FolderOpen } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Html5 } from "@/components/ui/svgs/html5";
import { Css3 } from "@/components/ui/svgs/css3";
import { Django } from "@/components/ui/svgs/django";
import { Bootstrap } from "@/components/ui/svgs/bootstrap";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Git } from "@/components/ui/svgs/git";
import { Postman } from "@/components/ui/svgs/postman";

// ====================================================================
// 📝 HEMANT SONKAR — PERSONAL DATA
// To update your portfolio, edit the fields below.
// ====================================================================

export type Hackathon = {
  title: string;
  dates: string;
  location?: string;
  description?: string;
  image?: string;
  links?: readonly { title: string; icon: React.ReactNode; href: string }[];
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  pdfUrl: string;
  gradient: string;
  iconColor: string;
  hoverBorder: string;
};

export type ProjectStatus = "Completed" | "Live" | "In Progress";

export type Project = {
  title: string;
  slug: string;
  href: string;
  dates: string;
  active: boolean;
  status: ProjectStatus;
  featured: boolean;
  category: string;
  description: string;
  longDescription?: string;
  role?: string;
  teamSize?: string;
  technologies: readonly string[];
  features?: readonly string[];
  challenges?: string;
  solutions?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  image?: string;
  video?: string;
};

// ── Centralized Social Links ─────────────────────────────────────────
// Single source of truth for all social URLs. Used across:
// Hero, Footer, Contact, About, Resume, Projects, Certificate,
// SEO, JSON-LD, Open Graph, Twitter Cards, Structured Data
export const SOCIAL_LINKS = {
  github: "https://github.com/officialhemant001",
  linkedin: "https://www.linkedin.com/in/hemantsonkar001",
  facebook: "https://www.facebook.com/hemantsonkar001",
  instagram: "https://www.instagram.com/hemant_.112",
  twitter: "https://x.com/Hemantsonkar001",
  portfolio: "https://hemantfolio-in.vercel.app",
  email: "officialhemant112@gmail.com",
  phone: "+916201501329",
} as const;

export const DATA = {
  // ── Personal Info ──────────────────────────────────────────────────
  name: "Hemant Sonkar",
  initials: "HS",
  url: SOCIAL_LINKS.portfolio,
  location: "Lucknow, India",
  locationLink: "https://www.google.com/maps/place/lucknow",
  description:
    "Full Stack Web Developer & AI Engineer. Building scalable web apps and intelligent systems with Python, Django & React.",
  summary:
    "I'm a **Computer Science Engineering** student at [Khwaja Moinuddin Chishti Language University, Lucknow](https://kmclu.ac.in/) with hands-on experience building production-grade web applications. I specialize in `Python`, `Django`, and `React.js`, with a strong focus on building REST APIs, AI-powered solutions, and database-driven systems. Currently working as a **Full Stack Developer Intern**, I'm passionate about frontend-backend integration, performance optimization, and solving real-world problems through technology.",
  avatarUrl: "/me.jpeg",

  // ── Technical Skills (displayed as icon chips) ─────────────────────
  skills: [
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: Javascript },
    { name: "React.js", icon: ReactLight },
    { name: "Django", icon: Django },
    { name: "HTML5", icon: Html5 },
    { name: "CSS3", icon: Css3 },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: MongoDB },
    { name: "Docker", icon: Docker },
    { name: "Git", icon: Git },
    { name: "Postman", icon: Postman },
  ],

  // ── Navigation Bar Links ───────────────────────────────────────────
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderOpen, label: "Projects" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  // ── Contact & Social Links ─────────────────────────────────────────
  contact: {
    email: SOCIAL_LINKS.email,
    tel: SOCIAL_LINKS.phone,
    social: {
      GitHub: {
        name: "GitHub",
        url: SOCIAL_LINKS.github,
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: SOCIAL_LINKS.linkedin,
        icon: Icons.linkedin,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: SOCIAL_LINKS.facebook,
        icon: Icons.facebook,
        navbar: false,
      },
      Instagram: {
        name: "Instagram",
        url: SOCIAL_LINKS.instagram,
        icon: Icons.instagram,
        navbar: true,
      },
      X: {
        name: "X",
        url: SOCIAL_LINKS.twitter,
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: `mailto:${SOCIAL_LINKS.email}`,
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // ── Work Experience ────────────────────────────────────────────────
  work: [
    {
      company: "Techpile",
      href: "#",
      badges: ["Current"],
      location: "Lucknow, India",
      title: "Full Stack Developer Intern",
      logoUrl: "",
      start: "March 2025",
      end: "Present",
      description:
        "Developed backend modules using Django framework. Built responsive frontend interfaces using HTML, CSS, and JavaScript. Worked on real-world projects, improving debugging and optimization skills. Collaborated on seamless frontend-backend integration.",
      technologies: ["Django", "Python", "JavaScript", "HTML", "CSS"],
    },
  ],

  // ── Education ──────────────────────────────────────────────────────
  education: [
    {
      school: "Khwaja Moinuddin Chishti Language University",
      href: "https://kmclu.ac.in/",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      logoUrl: "",
      start: "2022",
      end: "Present",
    },
  ],

  // ── Projects ──────────────────────────────────────────────────────
  // featured: true = shown on homepage (only first 3 featured)
  // featured: false = shown on /projects page only
  projects: [
    // ── FEATURED PROJECTS (Homepage) ──────────────────────────────
    {
      title: "Nexus AI",
      slug: "nexus-ai",
      href: "#",
      dates: "2025 — Present",
      active: true,
      status: "In Progress" as ProjectStatus,
      featured: true,
      category: "AI Desktop Voice Assistant",
      description:
        "Production-grade AI Desktop Voice Assistant with Voice Commands, Wake Word Detection, ChromaDB Memory, Faster Whisper, Browser Automation, PC Automation, and DeepSeek/OpenAI Compatible APIs.",
      longDescription:
        "Nexus AI is a production-grade AI desktop voice assistant that redefines how users interact with their computers. It features real-time wake word detection, advanced speech recognition powered by Faster Whisper, and intelligent browser/PC automation capabilities. The assistant maintains persistent memory using ChromaDB vector database, enabling context-aware conversations across sessions. Built with modular architecture supporting DeepSeek, OpenAI, and other compatible LLM APIs.",
      role: "Solo Developer",
      teamSize: "1",
      features: [
        "Wake Word Detection for hands-free activation",
        "Faster Whisper for high-accuracy speech-to-text",
        "ChromaDB vector memory for persistent context",
        "Browser automation with intelligent navigation",
        "PC automation — file management, app control",
        "DeepSeek & OpenAI API compatible",
        "Edge TTS for natural voice responses",
        "PyAutoGUI for system-level automation",
      ],
      challenges:
        "Achieving low-latency voice recognition while maintaining system responsiveness during PC automation tasks. Managing persistent memory across sessions without performance degradation.",
      solutions:
        "Implemented async processing pipeline with Faster Whisper for near real-time transcription. Used ChromaDB with intelligent retrieval strategies to keep memory lookups under 50ms.",
      technologies: [
        "Python",
        "FastAPI",
        "Whisper",
        "Edge TTS",
        "ChromaDB",
        "PyAutoGUI",
        "DeepSeek API",
        "OpenAI API",
      ],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1000&auto=format&fit=crop",
      video: "",
    },
    {
      title: "Lead Generation Platform",
      slug: "lead-generation-platform",
      href: "#",
      dates: "2025",
      active: true,
      status: "Completed" as ProjectStatus,
      featured: true,
      category: "AI SaaS Dashboard",
      description:
        "Real-Time Hiring & Lead Intelligence Dashboard powered by AI. Features LinkedIn Scraping, Resume Upload, AI Hiring Analysis, Vacancy Detection, HR Detection, JWT Authentication, and Excel Export.",
      longDescription:
        "An enterprise-grade AI-powered lead generation platform designed for recruiters and sales teams. The platform aggregates real-time hiring signals from LinkedIn, analyzes company vacancy patterns using AI, and identifies decision-makers. Users can upload resumes for AI-powered compatibility scoring and export qualified leads directly to Excel for CRM integration.",
      role: "Full Stack Developer",
      teamSize: "1",
      features: [
        "LinkedIn profile scraping & data aggregation",
        "AI-powered hiring intent analysis",
        "Resume upload with AI compatibility scoring",
        "Vacancy detection & trend analysis",
        "HR & decision-maker identification",
        "JWT authentication with role-based access",
        "Real-time dashboard with live data",
        "AI score engine for lead ranking",
        "Excel export for CRM integration",
        "Full-text search engine",
      ],
      challenges:
        "Building reliable LinkedIn data extraction while handling rate limits and anti-scraping measures. Creating an accurate AI scoring system that ranks leads meaningfully.",
      solutions:
        "Implemented intelligent request throttling and proxy rotation. Built a weighted AI scoring algorithm combining vacancy signals, company growth metrics, and hiring patterns.",
      technologies: [
        "React",
        "Django",
        "PostgreSQL",
        "JWT",
        "Django REST Framework",
        "AI Analysis",
        "Celery",
        "Redis",
      ],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      video: "",
    },
    {
      title: "Next Generation Weather Platform",
      slug: "next-gen-weather-platform",
      href: "#",
      dates: "2025",
      active: true,
      status: "Completed" as ProjectStatus,
      featured: true,
      category: "Enterprise AI Platform",
      description:
        "Enterprise AI Weather Platform featuring Current Weather, Forecast, Radar, AQI monitoring, AI Weather Assistant, Real-time Alerts, Dark Mode, and WebSocket-powered live updates.",
      longDescription:
        "A next-generation weather intelligence platform built for enterprise use cases. Combines real-time meteorological data with AI-powered natural language querying, letting users ask questions like 'Is it safe to fly tomorrow?' and receive contextual, data-backed answers. Features a live radar visualization, air quality index monitoring, and WebSocket-powered real-time weather alerts.",
      role: "Full Stack Developer",
      teamSize: "1",
      features: [
        "Real-time weather data with WebSocket updates",
        "7-day & hourly forecast visualization",
        "Interactive radar map with live overlays",
        "Air Quality Index (AQI) monitoring",
        "AI Weather Assistant with natural language queries",
        "Smart weather alerts & push notifications",
        "Dark mode with smooth theme transitions",
        "Celery + Redis for background data sync",
        "Multi-location support with search",
      ],
      challenges:
        "Delivering truly real-time weather updates without excessive API calls. Building an AI weather assistant that can interpret meteorological data meaningfully.",
      solutions:
        "Used WebSockets with intelligent polling fallback. Integrated LLM with structured weather data context for accurate, interpretable AI weather responses.",
      technologies: [
        "React",
        "Django",
        "Redis",
        "Celery",
        "PostgreSQL",
        "WebSocket",
        "OpenAI API",
        "REST APIs",
      ],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "/assets/weather.png",
      video: "",
    },

    // ── ALL PROJECTS (shown on /projects page) ─────────────────────
    {
      title: "AI Autonomous Research OS (AI-ROS)",
      slug: "ai-ros",
      href: "https://github.com/officialhemant001/AI-ROS",
      dates: "2025 — Present",
      active: true,
      status: "In Progress" as ProjectStatus,
      featured: false,
      category: "AI SaaS Platform",
      description:
        "Production-grade AI-powered SaaS platform featuring multi-agent AI architecture, RAG-based document intelligence, workflow automation, real-time collaboration using WebSockets, and Google Drive integration.",
      longDescription:
        "AI-ROS is a production-grade SaaS platform with multi-agent AI architecture. Features RAG document intelligence with ChromaDB, real-time WebSocket collaboration, Redis/Celery async tasks, and Google Drive integration. Enables AI-generated reports, semantic search, and autonomous task execution.",
      role: "Solo Developer",
      teamSize: "1",
      features: [
        "Multi-agent AI with LangChain/CrewAI",
        "RAG document intelligence with ChromaDB",
        "Real-time WebSocket collaboration",
        "Google Drive integration",
        "AI-generated reports & semantic search",
        "Redis/Celery for async task processing",
        "Docker containerization",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN",
        "Django REST",
        "PostgreSQL",
        "Redis",
        "Celery",
        "LangChain",
        "CrewAI",
        "OpenAI API",
        "ChromaDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/officialhemant001/AI-ROS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
      video: "",
    },
    {
      title: "AgroIntel AI",
      slug: "agrointel-ai",
      href: "https://github.com/officialhemant001/AgroIntel-AI",
      dates: "2025 — Present",
      active: true,
      status: "Completed" as ProjectStatus,
      featured: false,
      category: "AI / Computer Vision",
      description:
        "AI-based crop disease detection system using deep learning (CNN & ResNet). Built a Django REST API for real-time prediction and a React.js frontend for image upload & instant diagnostics.",
      technologies: [
        "Python",
        "CNN / ResNet",
        "Django REST API",
        "React.js",
        "NLP (NLTK/spaCy)",
        "TF-IDF",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/officialhemant001/AgroIntel-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop",
      video: "",
    },
    {
      title: "ARC Intelligence",
      slug: "arc-intelligence",
      href: "https://github.com/officialhemant001/ARC-Intelligence",
      dates: "2025",
      active: false,
      status: "Completed" as ProjectStatus,
      featured: false,
      category: "NLP / Document AI",
      description:
        "Smart document analysis & summarization system built with Python NLP — no external APIs. Extracts text from multi-page PDFs, applies rule-based and extractive summarization.",
      technologies: [
        "Python",
        "NLP",
        "Django",
        "React.js",
        "PDF Processing",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/officialhemant001/ARC-Intelligence",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      video: "",
    },
    {
      title: "AI Repairing Vision",
      slug: "ai-repairing-vision",
      href: "#",
      dates: "2025",
      active: true,
      status: "Completed" as ProjectStatus,
      featured: false,
      category: "Computer Vision / AI",
      description:
        "An intelligent AI-powered application that helps users repair electronic devices. Users upload an image of a damaged device, and the system analyzes the issue using AI, providing a step-by-step repair guide.",
      technologies: [
        "React.js",
        "Django",
        "Django REST Framework",
        "AI Processing",
      ],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ai_repair.png",
      video: "",
    },
    {
      title: "AI-Powered E-Commerce",
      slug: "ai-powered-ecommerce",
      href: "#",
      dates: "2025",
      active: true,
      status: "Completed" as ProjectStatus,
      featured: false,
      category: "E-Commerce / AI",
      description:
        "A smart e-commerce platform integrated with AI features. Users can browse products and interact with an AI chatbot to get product recommendations and personalized suggestions.",
      technologies: [
        "React.js",
        "Django",
        "Django REST Framework",
        "AI Chat System",
      ],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ai_ecommerce.png",
      video: "",
    },
  ] as Project[],

  // ── Skill Categories ────────────────────────────────────────────────
  skillCategories: [
    {
      category: "Languages",
      icon: "💻",
      items: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
    },
    {
      category: "Frontend",
      icon: "🎨",
      items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "ShadCN UI"],
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: ["Django", "Django REST Framework", "FastAPI", "Node.js", "Celery", "WebSocket"],
    },
    {
      category: "Database",
      icon: "🗄️",
      items: ["PostgreSQL", "MongoDB", "SQLite", "Redis", "ChromaDB"],
    },
    {
      category: "AI & Machine Learning",
      icon: "🧠",
      items: ["OpenAI API", "Gemini API", "LangChain", "CrewAI", "RAG", "CNN / ResNet", "NLP (NLTK/spaCy)", "TF-IDF", "Prompt Engineering", "LLM"],
    },
    {
      category: "Tools & DevOps",
      icon: "🔧",
      items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Linux", "Vercel", "REST APIs", "JWT"],
    },
  ],

  // ── Hackathons ─────────────────────────────────────────────────────
  hackathons: [] as Hackathon[],

  // ── Certifications ──────────────────────────────────────────────────
  certifications: [
    {
      id: "postman-api",
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "2024",
      pdfUrl: "/certificates/crt1.pdf",
      gradient: "from-orange-500/20 via-rose-500/20 to-transparent",
      iconColor: "text-orange-500",
      hoverBorder: "hover:border-orange-500/50",
    },
    {
      id: "techpile-fullstack",
      title: "Full Stack Web Development",
      issuer: "Techpile",
      date: "2024",
      pdfUrl: "/certificates/crt1.pdf",
      gradient: "from-blue-500/20 via-cyan-500/20 to-transparent",
      iconColor: "text-blue-500",
      hoverBorder: "hover:border-blue-500/50",
    },
    {
      id: "hackerrank-python",
      title: "Python & Data Structures",
      issuer: "HackerRank",
      date: "2023",
      pdfUrl: "/certificates/crt1.pdf",
      gradient: "from-green-500/20 via-emerald-500/20 to-transparent",
      iconColor: "text-green-500",
      hoverBorder: "hover:border-green-500/50",
    },
  ] as readonly Certification[],
} as const;
