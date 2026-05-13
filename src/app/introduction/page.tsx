"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { hrQuestions, technicalCategories, projectQuestions, codingProblems, roadmap } from "@/data/interview-data";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import {
  BadgeCheck, ArrowLeft, Target, Mic, Clock, Timer,
  Sparkles, Code2, Briefcase, GraduationCap, Rocket,
  Brain, Server, Globe, Layers, Shield, TrendingUp,
  ChevronRight, ChevronDown, Zap, Award, BookOpen,
  MessageSquare, Terminal, CalendarDays, HelpCircle
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

/* ── Accordion Component ───────────────────────────────────── */
function Accordion({ title, icon: Icon, children, defaultOpen = false }: {
  title: string; icon: React.ElementType; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border/50 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-muted/30 transition-colors">
        <div className="flex items-center gap-2">
          <Icon className="size-4 text-muted-foreground" />
          <span className="font-semibold text-sm text-foreground">{title}</span>
        </div>
        <ChevronDown className={`size-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-4 pb-4 border-t border-border/30">{children}</div>}
    </div>
  );
}

/* ── QA Card ───────────────────────────────────────────────── */
function QACard({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/20 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-2 py-3 text-left group">
        <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground">{q}</span>
        <ChevronRight className={`size-3.5 text-muted-foreground flex-none mt-1 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>
      {open && <p className="text-sm text-muted-foreground leading-relaxed pb-3 pl-1 whitespace-pre-line">{a}</p>}
    </div>
  );
}

/* ── Introduction Versions ─────────────────────────────────── */
const introVersions = [
  { id: "30s", label: "30 Seconds", icon: Timer, badge: "Quick Pitch",
    text: `Hi, I'm Hemant Sonkar — a Full Stack Developer and AI Engineer based in Lucknow, India. I'm currently pursuing my B.Tech in Computer Science at KMCLU and working as a Full Stack Developer Intern at Techpile. I specialize in building production-grade applications using Python, Django, and React.js, and I've built AI-powered platforms including a multi-agent Research OS with RAG architecture and an AI crop disease detection system using CNN and ResNet. I'm passionate about creating scalable, intelligent systems that solve real-world problems.` },
  { id: "1min", label: "1 Minute", icon: Clock, badge: "Professional",
    text: `Good morning. I'm Hemant Sonkar, a Full Stack Web Developer and AI Engineer currently in my final years of B.Tech in Computer Science & Engineering at KMCLU, Lucknow.\n\nI specialize in end-to-end web applications using Python, Django, and React.js, with expertise in REST APIs, PostgreSQL, MongoDB, and Docker.\n\nCurrently at Techpile as a Full Stack Developer Intern, I build Django backend modules, responsive frontends, and handle frontend-backend integration.\n\nI've built AI-ROS — a SaaS platform with multi-agent AI (LangChain/CrewAI), RAG intelligence (ChromaDB), WebSockets, and Redis/Celery. Also AgroIntel AI — crop disease detection using CNN/ResNet.\n\nI'm looking for opportunities to contribute to impactful engineering teams.` },
  { id: "2min", label: "2 Minutes", icon: Mic, badge: "Technical Deep-Dive",
    text: `Hello, I'm Hemant Sonkar — a Full Stack Developer and AI Engineer from Lucknow. I'm completing my B.Tech in CS at KMCLU while interning at Techpile.\n\nMy stack: Python, Django, React.js, PostgreSQL, MongoDB, Docker, Git + GitHub Actions.\n\nProject 1 — AI-ROS: Production-grade SaaS with Django REST + JWT auth backend, React.js + TypeScript frontend. Multi-agent AI via LangChain/CrewAI. RAG document intelligence with ChromaDB vector DB. Real-time WebSockets, Redis/Celery for async tasks. Docker deployment.\n\nProject 2 — AgroIntel AI: Crop disease detection using CNN/ResNet deep learning. Django REST API for real-time prediction. React.js frontend for image upload & diagnostics. Data augmentation + Adam optimizer for accuracy. NLP integration via NLTK, spaCy, and TF-IDF.\n\nI'm passionate about AI automation and RAG, exploring advanced architectures, scalable microservices, and frontend performance. Looking for roles where I can build products that create real impact.` },
];

const strengths = [
  { icon: Layers, title: "Full Stack Proficiency", desc: "Python/Django + React.js — end-to-end capability" },
  { icon: Brain, title: "AI/ML Integration", desc: "CNN, ResNet, NLP, RAG, LangChain — rare combo" },
  { icon: Server, title: "Production Architecture", desc: "WebSockets, Redis, Celery, Docker" },
  { icon: Shield, title: "Database Versatility", desc: "PostgreSQL + MongoDB + ORMs" },
  { icon: Zap, title: "Modern DevOps", desc: "Docker, Git, GitHub Actions, CI/CD" },
  { icon: Sparkles, title: "Cutting-Edge AI", desc: "RAG, AI Agents, LLM Tooling, MCP" },
];

const techDomains = [
  { title: "Backend", items: ["Python", "Django", "DRF", "JWT", "Celery", "Redis"], color: "from-emerald-500/20 to-emerald-500/5" },
  { title: "Frontend", items: ["React.js", "TypeScript", "Tailwind", "JS ES6+", "HTML5", "CSS3"], color: "from-blue-500/20 to-blue-500/5" },
  { title: "AI & ML", items: ["CNN/ResNet", "LangChain", "CrewAI", "ChromaDB", "NLP", "TF-IDF"], color: "from-purple-500/20 to-purple-500/5" },
  { title: "DB & DevOps", items: ["PostgreSQL", "MongoDB", "Docker", "Git", "GitHub Actions", "CI/CD"], color: "from-amber-500/20 to-amber-500/5" },
];

const projectHighlights = [
  { title: "AI-ROS", subtitle: "AI Autonomous Research OS", desc: "Production-grade SaaS with multi-agent AI, RAG, WebSockets, Google Drive integration.", tech: ["React.js", "Django REST", "LangChain", "CrewAI", "ChromaDB", "Redis", "Celery", "Docker"], icon: Rocket },
  { title: "AgroIntel AI", subtitle: "Crop Disease Detection", desc: "Deep learning CNN/ResNet for real-time plant disease prediction via Django REST API.", tech: ["Python", "CNN/ResNet", "Django REST", "React.js", "NLP", "TF-IDF"], icon: Brain },
];

export default function IntroductionPage() {
  const [activeIntro, setActiveIntro] = useState("30s");
  const currentIntro = introVersions.find((v) => v.id === activeIntro)!;
  const [activeTechCat, setActiveTechCat] = useState(technicalCategories[0].category);

  return (
    <main className="min-h-dvh flex flex-col gap-0 relative pb-20">
      <section className="pt-8 pb-10">
        <div className="mx-auto w-full max-w-2xl space-y-8">

          <BlurFade delay={BLUR_FADE_DELAY}>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 group">
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
          </BlurFade>

          {/* Header */}
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex items-center gap-4">
              <Avatar className="size-16 border-2 border-border/30 rounded-full shadow-md">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2 text-foreground">
                  {DATA.name} <BadgeCheck className="size-5 text-blue-500 fill-blue-500 stroke-white" />
                </h1>
                <p className="text-muted-foreground text-sm mt-1">Full Stack Developer &bull; AI Engineer &bull; B.Tech CSE</p>
              </div>
            </div>
          </BlurFade>

          <div className="space-y-14 pt-6">

            {/* ═══ Professional Introduction ═══ */}
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2"><Mic className="size-5 text-muted-foreground" /> Professional Introduction</h2>
                <p className="text-sm text-muted-foreground">Three versions for different interview contexts.</p>
                <div className="flex gap-2">
                  {introVersions.map((v) => { const Icon = v.icon; return (
                    <button key={v.id} onClick={() => setActiveIntro(v.id)} className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg transition-all ${activeIntro === v.id ? "bg-foreground text-background shadow-sm" : "text-muted-foreground hover:bg-muted border border-border/50"}`}>
                      <Icon className="size-3.5" />{v.label}
                    </button>); })}
                </div>
                <div key={currentIntro.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300 rounded-xl border border-border/50 bg-muted/20 p-5 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{currentIntro.badge}</span>
                  <div className="text-[15px] leading-relaxed text-foreground/90 whitespace-pre-line">{currentIntro.text}</div>
                </div>
              </div>
            </BlurFade>

            {/* ═══ Tell Me About Yourself ═══ */}
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2"><Target className="size-5 text-muted-foreground" /> &ldquo;Tell Me About Yourself&rdquo;</h2>
                <div className="rounded-xl border border-border/50 bg-muted/20 p-5 text-[15px] leading-relaxed text-foreground/90 space-y-4">
                  <p>I&apos;m Hemant Sonkar, a Full Stack Developer and AI Engineer pursuing B.Tech in CS at KMCLU, Lucknow. I work at the intersection of web engineering and artificial intelligence.</p>
                  <p>My journey started with Python and quickly progressed to full-stack apps with Django and React.js. What sets me apart — I architect production-grade systems. My project <strong>AI-ROS</strong> is a complete SaaS platform with multi-agent AI (LangChain/CrewAI), RAG semantic search (ChromaDB), real-time WebSocket collaboration, and Redis/Celery — all containerized with Docker.</p>
                  <p>I also built <strong>AgroIntel AI</strong>, applying deep learning (CNN/ResNet) to detect crop diseases from images in real time through a Django REST API.</p>
                  <p>Currently interning at <strong>Techpile</strong> as a Full Stack Developer, building Django backend modules and responsive frontends with production-level debugging.</p>
                  <p>I&apos;m looking for opportunities to contribute my full-stack and AI skills to build meaningful, scalable products.</p>
                </div>
              </div>
            </BlurFade>

            {/* ═══ Core Strengths ═══ */}
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2"><Award className="size-5 text-muted-foreground" /> Core Strengths</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {strengths.map((s) => { const Icon = s.icon; return (
                    <div key={s.title} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all">
                      <div className="size-9 rounded-lg bg-foreground/5 border border-border/30 flex items-center justify-center flex-none"><Icon className="size-4 text-foreground/70" /></div>
                      <div><h3 className="text-sm font-semibold">{s.title}</h3><p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p></div>
                    </div>); })}
                </div>
              </div>
            </BlurFade>

            {/* ═══ Technical Domains ═══ */}
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2"><Code2 className="size-5 text-muted-foreground" /> Technical Domains</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {techDomains.map((d) => (
                    <div key={d.title} className={`rounded-xl border border-border/50 p-5 bg-gradient-to-br ${d.color} space-y-3`}>
                      <h3 className="font-semibold text-sm">{d.title}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {d.items.map((item) => (
                          <span key={item} className="inline-flex items-center gap-1.5 rounded-md bg-background/80 dark:bg-background/40 border border-border/30 px-2 py-1 text-xs font-medium"><span className="size-1.5 rounded-full bg-primary" />{item}</span>
                        ))}
                      </div>
                    </div>))}
                </div>
              </div>
            </BlurFade>

            {/* ═══ Career Journey ═══ */}
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2"><Briefcase className="size-5 text-muted-foreground" /> Career Journey</h2>
                <div className="rounded-xl border border-border/50 bg-muted/20 p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div><h3 className="font-semibold flex items-center gap-2">Techpile <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Current</span></h3><p className="text-sm text-muted-foreground">Full Stack Developer Intern</p></div>
                    <span className="text-xs text-muted-foreground font-medium">Mar 2025 — Present</span>
                  </div>
                  <ul className="space-y-2">
                    {["Built Django backend modules for production apps", "Created responsive frontends with HTML, CSS, JavaScript", "Improved debugging and performance optimization skills", "Collaborated on frontend-backend integration"].map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-foreground/80"><ChevronRight className="size-3.5 text-muted-foreground mt-0.5 flex-none" />{t}</li>))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border/50 bg-muted/20 p-5">
                  <div className="flex items-start gap-3">
                    <div className="size-9 rounded-lg bg-foreground/5 border border-border/30 flex items-center justify-center flex-none"><GraduationCap className="size-4 text-foreground/70" /></div>
                    <div className="flex-1"><div className="flex justify-between"><div><h3 className="font-semibold text-sm">KMCLU</h3><p className="text-sm text-muted-foreground">B.Tech in Computer Science & Engineering</p></div><span className="text-xs text-muted-foreground font-medium flex-none">2022 — Present</span></div></div>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* ═══ Flagship Projects ═══ */}
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2"><Rocket className="size-5 text-muted-foreground" /> Flagship Projects</h2>
                {projectHighlights.map((p) => { const Icon = p.icon; return (
                  <div key={p.title} className="rounded-xl border border-border/50 bg-muted/20 p-5 space-y-3">
                    <div className="flex items-center gap-3"><div className="size-10 rounded-lg bg-foreground/5 border border-border/30 flex items-center justify-center"><Icon className="size-5 text-foreground/70" /></div><div><h3 className="font-semibold">{p.title}</h3><p className="text-xs text-muted-foreground">{p.subtitle}</p></div></div>
                    <p className="text-sm text-foreground/80 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">{p.tech.map((t) => (<span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-muted/80 dark:bg-muted/50 border border-border/30 px-2.5 py-1 text-xs font-medium"><span className="size-1.5 rounded-full bg-primary" />{t}</span>))}</div>
                  </div>); })}
              </div>
            </BlurFade>

            {/* ═══ Goals & Vision ═══ */}
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2"><TrendingUp className="size-5 text-muted-foreground" /> Goals & Vision</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border/50 bg-muted/20 p-5 space-y-2"><h3 className="font-semibold text-sm flex items-center gap-2"><Sparkles className="size-4 text-amber-500" />Current Focus</h3><p className="text-sm text-muted-foreground leading-relaxed">Scalable microservices, advanced RAG architectures, AWS cloud deployment, and frontend performance optimization.</p></div>
                  <div className="rounded-xl border border-border/50 bg-muted/20 p-5 space-y-2"><h3 className="font-semibold text-sm flex items-center gap-2"><Globe className="size-4 text-blue-500" />5-Year Vision</h3><p className="text-sm text-muted-foreground leading-relaxed">Senior Full Stack / AI Engineering Lead. Building AI-focused SaaS products and leading high-impact engineering teams.</p></div>
                </div>
              </div>
            </BlurFade>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* ═══ INTERVIEW PREPARATION SECTIONS ═══════════════════ */}
            {/* ═══════════════════════════════════════════════════════ */}

            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="border-t border-border/30 pt-8 space-y-2">
                <h2 className="text-2xl font-bold text-foreground">Interview Preparation Hub</h2>
                <p className="text-sm text-muted-foreground">Complete interview prep — HR, Technical, Projects, Coding & Roadmap. Click to expand each section.</p>
              </div>
            </BlurFade>

            {/* ═══ HR Interview Q&A ═══ */}
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="space-y-3">
                <h2 className="text-lg font-bold flex items-center gap-2"><MessageSquare className="size-5 text-muted-foreground" /> HR Interview Questions</h2>
                <div className="space-y-2">
                  {hrQuestions.map((qa, i) => (
                    <Accordion key={i} title={qa.q} icon={HelpCircle}>
                      <p className="text-sm text-muted-foreground leading-relaxed pt-3 whitespace-pre-line">{qa.a}</p>
                    </Accordion>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* ═══ Technical Q&A ═══ */}
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="space-y-4">
                <h2 className="text-lg font-bold flex items-center gap-2"><Code2 className="size-5 text-muted-foreground" /> Technical Interview Questions</h2>
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2">
                  {technicalCategories.map((cat) => (
                    <button key={cat.category} onClick={() => setActiveTechCat(cat.category)} className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${activeTechCat === cat.category ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted border border-border/50"}`}>
                      {cat.icon} {cat.category}
                    </button>
                  ))}
                </div>
                {/* Active Category Questions */}
                {technicalCategories.filter(c => c.category === activeTechCat).map((cat) => (
                  <div key={cat.category} className="animate-in fade-in duration-200 rounded-xl border border-border/50 bg-muted/20 p-4">
                    {cat.questions.map((qa, i) => <QACard key={i} q={qa.q} a={qa.a} />)}
                  </div>
                ))}
              </div>
            </BlurFade>

            {/* ═══ Project Deep-Dive Q&A ═══ */}
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="space-y-3">
                <h2 className="text-lg font-bold flex items-center gap-2"><Rocket className="size-5 text-muted-foreground" /> Project Interview Questions</h2>
                {projectQuestions.map((proj) => (
                  <Accordion key={proj.project} title={`${proj.project} — ${proj.subtitle}`} icon={Brain}>
                    <div className="pt-3 space-y-0">
                      {proj.questions.map((qa, i) => <QACard key={i} q={qa.q} a={qa.a} />)}
                    </div>
                  </Accordion>
                ))}
              </div>
            </BlurFade>

            {/* ═══ Coding Problems ═══ */}
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <div className="space-y-3">
                <h2 className="text-lg font-bold flex items-center gap-2"><Terminal className="size-5 text-muted-foreground" /> Coding Round Problems</h2>
                {codingProblems.map((p, i) => (
                  <Accordion key={i} title={p.title} icon={Code2}>
                    <div className="pt-3 rounded-xl overflow-hidden border border-border/50 bg-zinc-950 dark:bg-zinc-900/50 mt-1">
                      <div className="px-3 py-1.5 border-b border-zinc-800 text-[10px] uppercase tracking-wider text-zinc-500 font-medium">{p.language}</div>
                      <pre className="p-4 overflow-x-auto text-sm text-zinc-50 font-mono leading-relaxed"><code>{p.code}</code></pre>
                    </div>
                  </Accordion>
                ))}
              </div>
            </BlurFade>

            {/* ═══ 7-Day Roadmap ═══ */}
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <div className="space-y-4">
                <h2 className="text-lg font-bold flex items-center gap-2"><CalendarDays className="size-5 text-muted-foreground" /> 7-Day Preparation Roadmap</h2>
                <div className="space-y-3">
                  {roadmap.map((day) => (
                    <Accordion key={day.day} title={`${day.day}: ${day.title}`} icon={CalendarDays}>
                      <ul className="pt-3 space-y-2">
                        {day.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="size-4 rounded border border-border/50 flex-none mt-0.5" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </Accordion>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* ═══ Connect ═══ */}
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-4 border-t border-border/30 pt-8">
                <h2 className="text-xl font-bold flex items-center gap-2"><BookOpen className="size-5 text-muted-foreground" /> Let&apos;s Connect</h2>
                <p className="text-[15px] leading-relaxed text-foreground/90">Open to discussing projects, ideas, or opportunities. Let&apos;s build something meaningful together.</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link href={`mailto:${DATA.contact.email}`} className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition-all">Get in Touch</Link>
                  {Object.entries(DATA.contact.social).filter(([_, s]) => s.navbar).map(([name, social]) => (
                    <Link key={name} href={social.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-muted transition-all">
                      <social.icon className="size-4" />{name}
                    </Link>
                  ))}
                </div>
              </div>
            </BlurFade>

          </div>
        </div>
      </section>
    </main>
  );
}
