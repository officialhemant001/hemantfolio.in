/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Globe, Github } from "lucide-react";
import { Icons } from "@/components/icons";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

// Map tech names to colored icon dots
const techColorMap: Record<string, string> = {
  "React.js": "#61DAFB",
  "React": "#61DAFB",
  "TypeScript": "#3178C6",
  "Python": "#3776AB",
  "Django": "#092E20",
  "Django REST": "#092E20",
  "Django REST Framework": "#092E20",
  "Django REST API": "#092E20",
  "Next.js": "#000000",
  "PostgreSQL": "#4169E1",
  "MongoDB": "#47A248",
  "Node.js": "#339933",
  "JavaScript": "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  "Redis": "#DC382D",
  "Docker": "#2496ED",
  "AWS": "#FF9900",
  "HTML": "#E34F26",
  "HTML5": "#E34F26",
  "CSS": "#1572B6",
  "CSS3": "#1572B6",
  "LangChain": "#1C3C3C",
  "CrewAI": "#FF6B35",
  "OpenAI API": "#412991",
  "ChromaDB": "#FF6B6B",
  "Celery": "#37814A",
  "ShadCN": "#000000",
  "Git": "#F05032",
  "NLP": "#8B5CF6",
  "NLP (NLTK/spaCy)": "#8B5CF6",
  "TF-IDF": "#8B5CF6",
  "CNN / ResNet": "#FF6F00",
  "PDF Processing": "#DC2626",
  "AI Processing": "#8B5CF6",
  "AI Chat System": "#8B5CF6",
};

export function DevfolioProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const [imageError, setImageError] = useState(false);

  const liveLink =
    links?.find((l) => l.type.toLowerCase() === "website")?.href || (href && href !== "#" ? href : undefined);
  const sourceLink = links?.find((l) => l.type.toLowerCase() === "source")?.href;

  return (
    <div
      className={cn(
        "group flex flex-col h-full bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-border transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="relative shrink-0 h-48 w-full overflow-hidden bg-muted">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : image && !imageError ? (
          <img
            src={image}
            alt={title}
            onError={() => setImageError(true)}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900" />
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Title + Links */}
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-foreground leading-tight">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            {liveLink && (
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="size-4" />
              </Link>
            )}
            {sourceLink && sourceLink !== "#" && (
              <Link
                href={sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icons.github className="size-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description.replace(/\*\*/g, "")}
        </p>

        {/* Technologies */}
        <div className="mt-auto pt-3">
          <p className="text-xs font-medium text-muted-foreground mb-2">Technologies</p>
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 6).map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1.5 rounded-full bg-muted/80 dark:bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground border border-border/30"
              >
                <span
                  className="size-2 rounded-full shrink-0"
                  style={{ backgroundColor: techColorMap[tag] || "#6B7280" }}
                />
                {tag}
              </div>
            ))}
            {tags.length > 6 && (
              <div className="flex items-center rounded-full bg-muted/80 dark:bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground border border-border/30">
                +{tags.length - 6}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
