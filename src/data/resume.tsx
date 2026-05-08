import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
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

export const DATA = {
  // ── Personal Info ──────────────────────────────────────────────────
  name: "Hemant Sonkar",
  initials: "HS",
  url: "https://hemantsonkar.dev",
  location: "Lucknow, India",
  locationLink: "https://www.google.com/maps/place/lucknow",
  description:
    "Full Stack Web Developer & AI Engineer. Building scalable web apps and intelligent systems with Python, Django & React.",
  summary:
    "I'm a **Computer Science Engineering** student at [Khwaja Moinuddin Chishti Language University, Lucknow](https://kmclu.ac.in/) with hands-on experience building production-grade web applications. I specialize in `Python`, `Django`, and `React.js`, with a strong focus on building REST APIs, AI-powered solutions, and database-driven systems. Currently working as a **Full Stack Developer Intern**, I'm passionate about frontend-backend integration, performance optimization, and solving real-world problems through technology.",
  avatarUrl: "/me.jpeg",

  // ── Technical Skills (displayed as icon chips) ─────────────────────
  // Add or remove skills here. Each needs a `name` and an `icon` component.
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
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  // ── Contact & Social Links ─────────────────────────────────────────
  // Update URLs to your actual profiles.
  contact: {
    email: "oficialhemant112@gmail.com",
    tel: "+916201501329",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/officialhemant001",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/hemant-sonkar-developer",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Hemantsonkar001",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:oficialhemant112@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // ── Work Experience ────────────────────────────────────────────────
  // Add new entries at the top (most recent first).
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

  // Add your projects here with technologies and links.
  projects: [
    {
      title: "AI Autonomous Research OS (AI-ROS)",
      href: "https://github.com/officialhemant001/AI-ROS",
      dates: "2025 — Present",
      active: true,
      description:
        "Production-grade AI-powered SaaS platform featuring multi-agent AI architecture, RAG-based document intelligence, workflow automation, real-time collaboration using WebSockets, and Google Drive integration. Enables AI-generated reports, semantic search, and autonomous task execution with a modern scalable architecture.",
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
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
      video: "",
    },
    {
      title: "AgroIntel AI",
      href: "https://github.com/officialhemant001/AgroIntel-AI",
      dates: "2025 — Present",
      active: true,
      description:
        "AI-based crop disease detection system using deep learning (CNN & ResNet). Built a Django REST API for real-time prediction and a React.js frontend for image upload & instant diagnostics. Applied data augmentation and Adam optimizer for improved accuracy.",
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
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop",
      video: "",
    },
    {
      title: "ARC Intelligence",
      href: "https://github.com/officialhemant001/ARC-Intelligence",
      dates: "2025",
      active: false,
      description:
        "Smart document analysis & summarization system built with Python NLP — no external APIs. Extracts text from multi-page PDFs, applies rule-based and extractive summarization, and presents structured results via a Django backend and React.js frontend.",
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      video: "",
    },
    {
      title: "AI Repairing Version",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "An intelligent AI-powered application that helps users repair electronic devices. Users can upload an image of a damaged or non-working device, and the system analyzes the issue using AI. It then provides a **step-by-step repair guide** to fix the problem efficiently. This project is designed to simplify troubleshooting and reduce dependency on technicians.",
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
      href: "#",
      dates: "2025",
      active: true,
      description:
        "A smart e-commerce platform integrated with AI features. Users can browse products and also interact with an **AI chatbot** to ask questions, get product recommendations, and receive personalized suggestions. The AI enhances the shopping experience by making it more interactive and user-friendly.",
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
  ],

  // ── Additional Skills (displayed in a dedicated section) ───────────
  // Grouped by category for the enhanced skills section.
  skillCategories: [
    {
      category: "Languages",
      items: ["HTML", "CSS", "JavaScript", "Python"],
    },
    {
      category: "Web Technologies",
      items: ["React.js", "Bootstrap", "Django"],
    },
    {
      category: "DevOps & Infra",
      items: ["Postman", "Docker", "Git", "GitHub", "GitHub Actions"],
    },
    {
      category: "Databases & ORMs",
      items: ["PostgreSQL", "MongoDB", "Prisma", "Drizzle ORM"],
    },
    {
      category: "AI & Systems",
      items: ["RAG Systems", "AI Agents", "LLM Tooling", "MCP Servers"],
    },
  ],

  // ── Hackathons (kept for template compatibility, empty for now) ────
  // Add hackathon entries here if you participate in any.
  hackathons: [] as Hackathon[],
} as const;
