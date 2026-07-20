/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { Github, Globe, ArrowUpRight, CheckCircle2, Clock, Zap } from "lucide-react";
import type { Project, ProjectStatus } from "@/data/resume";

// ── Tech color map ────────────────────────────────────────────────
const techColorMap: Record<string, string> = {
  "React": "#61DAFB",
  "React.js": "#61DAFB",
  "TypeScript": "#3178C6",
  "Python": "#3776AB",
  "Django": "#092E20",
  "Django REST": "#092E20",
  "Django REST Framework": "#092E20",
  "FastAPI": "#009688",
  "Next.js": "#000000",
  "PostgreSQL": "#4169E1",
  "MongoDB": "#47A248",
  "Node.js": "#339933",
  "JavaScript": "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  "Redis": "#DC382D",
  "Docker": "#2496ED",
  "AWS": "#FF9900",
  "HTML5": "#E34F26",
  "CSS3": "#1572B6",
  "LangChain": "#1C3C3C",
  "CrewAI": "#FF6B35",
  "OpenAI API": "#412991",
  "ChromaDB": "#FF6B6B",
  "Celery": "#37814A",
  "Git": "#F05032",
  "JWT": "#FB015B",
  "WebSocket": "#010101",
  "Whisper": "#412991",
  "Edge TTS": "#0078D4",
  "PyAutoGUI": "#3776AB",
  "DeepSeek API": "#1a73e8",
  "AI Analysis": "#8B5CF6",
  "REST APIs": "#FF6B6B",
};

// ── Status badge ──────────────────────────────────────────────────
function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = {
    Live: {
      className: "status-live",
      icon: <Zap className="size-2.5 fill-current" />,
      label: "Live",
    },
    Completed: {
      className: "status-completed",
      icon: <CheckCircle2 className="size-2.5" />,
      label: "Completed",
    },
    "In Progress": {
      className: "status-inprogress",
      icon: <Clock className="size-2.5" />,
      label: "In Progress",
    },
  }[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase",
        config.className
      )}
    >
      {config.icon}
      {config.label}
    </span>
  );
}

// ── Premium Featured Card ─────────────────────────────────────────
interface PremiumFeaturedCardProps {
  project: Project;
  className?: string;
  index?: number;
}

export function PremiumFeaturedCard({
  project,
  className,
  index = 0,
}: PremiumFeaturedCardProps) {
  const [imageError, setImageError] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const rippleId = useRef(0);

  const sourceLink = project.links?.find(
    (l) => l.type.toLowerCase() === "source"
  )?.href;
  const liveLink = project.links?.find(
    (l) => l.type.toLowerCase() === "website"
  )?.href || (project.href && project.href !== "#" ? project.href : undefined);

  const addRipple = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = rippleId.current++;
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);
  }, []);

  const visibleTags = project.technologies.slice(0, 5);
  const remainingCount = project.technologies.length - 5;

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative flex flex-col h-full rounded-2xl overflow-hidden border border-border/60 bg-card shadow-sm transition-all duration-300 ripple-container premium-card cursor-pointer",
        "hover:border-border hover:shadow-xl hover:shadow-foreground/5",
        className
      )}
      onClick={addRipple}
    >
      {/* Ripple effects */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple"
          style={{ left: r.x - 20, top: r.y - 20, width: 40, height: 40 }}
        />
      ))}

      {/* ── Image ─────────────────────────────────────────────── */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative block h-52 w-full overflow-hidden bg-muted flex-shrink-0"
        tabIndex={-1}
        aria-hidden="true"
      >
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : project.image && !imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index === 0}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/60" />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category chip over image */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-background/90 backdrop-blur-sm border border-border/50 px-2.5 py-1 text-[11px] font-medium text-foreground/80 shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center rounded-full bg-amber-500 text-white border border-amber-400 px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase shadow-sm">
              Featured
            </span>
          </div>
        )}
      </Link>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1.5">
            <Link
              href={`/projects/${project.slug}`}
              className="text-base font-bold text-foreground leading-tight hover:text-foreground/80 transition-colors"
            >
              {project.title}
            </Link>
            <StatusBadge status={project.status} />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-auto pt-3">
          <div className="flex flex-wrap gap-1.5">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="skill-pill inline-flex items-center gap-1.5 rounded-full bg-muted/80 border border-border/40 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
              >
                <span
                  className="size-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: techColorMap[tag] || "#6B7280" }}
                />
                {tag}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="inline-flex items-center rounded-full bg-muted/60 border border-border/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                +{remainingCount}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div className="mt-3 pt-3 border-t border-border/40 flex gap-2">
          {sourceLink && sourceLink !== "#" && (
            <Link
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border/60 bg-background/50 hover:bg-muted/80 px-2 py-1.5 text-xs font-semibold text-foreground/80 hover:text-foreground transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="size-3.5" />
              Code
            </Link>
          )}
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-2 py-1.5 text-xs font-semibold shadow-xs transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Globe className="size-3.5" />
              Demo
            </Link>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border/60 bg-background/50 hover:bg-muted/80 px-2 py-1.5 text-xs font-semibold text-foreground/80 hover:text-foreground transition-all duration-200"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Compact Project Card (for /projects page) ─────────────────────
interface CompactProjectCardProps {
  project: Project;
  className?: string;
}

export function CompactProjectCard({ project, className }: CompactProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  const sourceLink = project.links?.find(
    (l) => l.type.toLowerCase() === "source"
  )?.href;
  const liveLink = project.links?.find(
    (l) => l.type.toLowerCase() === "website"
  )?.href || (project.href && project.href !== "#" ? project.href : undefined);

  return (
    <div
      className={cn(
        "group flex flex-col h-full rounded-xl overflow-hidden border border-border/60 bg-card shadow-sm transition-all duration-300 premium-card hover:border-border hover:shadow-lg hover:shadow-foreground/4",
        className
      )}
    >
      {/* Image */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative block h-44 w-full overflow-hidden bg-muted flex-shrink-0"
        tabIndex={-1}
      >
        {project.image && !imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/60" />
        )}
        <div className="absolute top-2.5 left-2.5">
          <span className="inline-flex items-center rounded-full bg-background/90 backdrop-blur-sm border border-border/50 px-2 py-0.5 text-[10px] font-medium text-foreground/80">
            {project.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <div className="flex items-start justify-between gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-bold text-foreground hover:text-foreground/80 transition-colors leading-tight"
          >
            {project.title}
          </Link>
        </div>

        <StatusBadge status={project.status} />

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="mt-auto pt-2">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-muted/70 border border-border/40 px-2 py-0.5 text-[10px] font-medium text-foreground/75"
              >
                <span
                  className="size-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: techColorMap[tag] || "#6B7280" }}
                />
                {tag}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="inline-flex items-center rounded-full bg-muted/60 border border-border/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div className="mt-2 pt-2.5 border-t border-border/40 flex gap-1.5">
          {sourceLink && sourceLink !== "#" && (
            <Link
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-border/60 bg-background/50 hover:bg-muted/80 px-1.5 py-1 text-[10px] font-bold text-foreground/80 hover:text-foreground transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="size-3" />
              Code
            </Link>
          )}
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-1.5 py-1 text-[10px] font-bold shadow-xs transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Globe className="size-3" />
              Demo
            </Link>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-border/60 bg-background/50 hover:bg-muted/80 px-1.5 py-1 text-[10px] font-bold text-foreground/80 hover:text-foreground transition-all duration-200"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
