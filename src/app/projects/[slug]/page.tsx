/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import Link from "next/link";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import {
  ArrowLeft, Github, Globe, CheckCircle2, Clock, Zap,
  Calendar, User, Users, Tag, Layers, Lightbulb,
  ShieldCheck, ArrowUpRight, ExternalLink
} from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

// Tech color map
const techColorMap: Record<string, string> = {
  "React": "#61DAFB", "React.js": "#61DAFB", "TypeScript": "#3178C6",
  "Python": "#3776AB", "Django": "#092E20", "FastAPI": "#009688",
  "Next.js": "#000000", "PostgreSQL": "#4169E1", "MongoDB": "#47A248",
  "JavaScript": "#F7DF1E", "Redis": "#DC382D", "Docker": "#2496ED",
  "LangChain": "#1C3C3C", "CrewAI": "#FF6B35", "OpenAI API": "#412991",
  "ChromaDB": "#FF6B6B", "Celery": "#37814A", "Git": "#F05032",
  "JWT": "#FB015B", "WebSocket": "#010101", "Whisper": "#412991",
  "PyAutoGUI": "#3776AB", "DeepSeek API": "#1a73e8",
};

// Status config
const statusConfig = {
  Live: { className: "status-live", icon: <Zap className="size-3 fill-current" />, label: "Live" },
  Completed: { className: "status-completed", icon: <CheckCircle2 className="size-3" />, label: "Completed" },
  "In Progress": { className: "status-inprogress", icon: <Clock className="size-3" />, label: "In Progress" },
};

// ── Generate metadata ─────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = DATA.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Hemant Sonkar`,
    description: project.description,
  };
}

// ── Generate static params ────────────────────────────────────────
export async function generateStaticParams() {
  return DATA.projects.map((p) => ({ slug: p.slug }));
}

// ── Page Component ────────────────────────────────────────────────
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = DATA.projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const sourceLink = project.links?.find((l) => l.type.toLowerCase() === "source")?.href;
  const liveLink = project.links?.find((l) => l.type.toLowerCase() === "website")?.href
    || (project.href && project.href !== "#" ? project.href : undefined);
  const status = statusConfig[project.status];

  return (
    <main className="min-h-dvh flex flex-col relative pb-24">
      <article className="pt-6">
        <div className="mx-auto w-full max-w-2xl space-y-10">

          {/* ── Back + Breadcrumb ─────────────────────────────────── */}
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                All Projects
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium truncate">{project.title}</span>
            </div>
          </BlurFade>

          {/* ── Hero Image ────────────────────────────────────────── */}
          {project.image && (
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-border/60 shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </BlurFade>
          )}

          {/* ── Title + Status ───────────────────────────────────── */}
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase ${status.className}`}
                >
                  {status.icon}
                  {status.label}
                </span>
                <span className="text-xs text-muted-foreground font-medium border border-border/60 rounded-full px-3 py-1 bg-muted/40">
                  {project.category}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                {project.title}
              </h1>

              <p className="text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                {sourceLink && sourceLink !== "#" && (
                  <Link
                    href={sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-muted/60 hover:shadow-md transition-all"
                    id="project-github-link"
                  >
                    <Github className="size-4" />
                    View on GitHub
                  </Link>
                )}
                {liveLink && (
                  <Link
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-4 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 hover:shadow-md transition-all"
                    id="project-live-link"
                  >
                    <Globe className="size-4" />
                    Live Demo
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </BlurFade>

          {/* ── Project Metadata ─────────────────────────────────── */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Calendar, label: "Timeline", value: project.dates },
                { icon: User, label: "Role", value: project.role || "Developer" },
                { icon: Users, label: "Team Size", value: project.teamSize || "1" },
                { icon: Tag, label: "Category", value: project.category },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1.5 p-4 rounded-xl border border-border/60 bg-card"
                >
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Icon className="size-3.5" />
                    <span className="text-[11px] font-medium uppercase tracking-wider">{label}</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground leading-tight">{value}</span>
                </div>
              ))}
            </div>
          </BlurFade>

          {/* ── Overview ─────────────────────────────────────────── */}
          {project.longDescription && (
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Layers className="size-4 text-muted-foreground" />
                  <h2 className="text-lg font-bold text-foreground">Project Overview</h2>
                </div>
                <div className="rounded-xl border border-border/60 bg-muted/20 p-5">
                  <p className="text-sm text-foreground/85 leading-relaxed whitespace-pre-line">
                    {project.longDescription}
                  </p>
                </div>
              </div>
            </BlurFade>
          )}

          {/* ── Technology Stack ─────────────────────────────────── */}
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Layers className="size-4 text-muted-foreground" />
                <h2 className="text-lg font-bold text-foreground">Technology Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="skill-pill inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground/80 shadow-sm"
                  >
                    <span
                      className="size-2 rounded-full shrink-0"
                      style={{ backgroundColor: techColorMap[tech] || "#6B7280" }}
                    />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* ── Key Features ─────────────────────────────────────── */}
          {project.features && project.features.length > 0 && (
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-muted-foreground" />
                  <h2 className="text-lg font-bold text-foreground">Key Features</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl border border-border/50 bg-card"
                    >
                      <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span className="text-sm text-foreground/85">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          )}

          {/* ── Challenges & Solutions ───────────────────────────── */}
          {(project.challenges || project.solutions) && (
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Lightbulb className="size-4 text-muted-foreground" />
                  <h2 className="text-lg font-bold text-foreground">Challenges & Solutions</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.challenges && (
                    <div className="rounded-xl border border-border/60 bg-amber-500/5 p-5 space-y-2">
                      <h3 className="text-sm font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-2">
                        <ShieldCheck className="size-4" />
                        Challenges
                      </h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{project.challenges}</p>
                    </div>
                  )}
                  {project.solutions && (
                    <div className="rounded-xl border border-border/60 bg-emerald-500/5 p-5 space-y-2">
                      <h3 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                        <CheckCircle2 className="size-4" />
                        Solutions
                      </h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{project.solutions}</p>
                    </div>
                  )}
                </div>
              </div>
            </BlurFade>
          )}

          {/* ── Footer Actions ───────────────────────────────────── */}
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                All Projects
              </Link>

              <div className="flex gap-3">
                {sourceLink && sourceLink !== "#" && (
                  <Link
                    href={sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted/60 transition-all"
                  >
                    <Github className="size-4" />
                    GitHub
                    <ExternalLink className="size-3 opacity-60" />
                  </Link>
                )}
                {liveLink && (
                  <Link
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-all"
                  >
                    <Globe className="size-4" />
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </BlurFade>

        </div>
      </article>
    </main>
  );
}
