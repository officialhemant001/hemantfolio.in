"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

// Import SVG components
import { Html5 } from "@/components/ui/svgs/html5";
import { Css3 } from "@/components/ui/svgs/css3";
import { Javascript } from "@/components/ui/svgs/javascript";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Python } from "@/components/ui/svgs/python";
import { Django } from "@/components/ui/svgs/django";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Docker } from "@/components/ui/svgs/docker";
import { Git } from "@/components/ui/svgs/git";
import { Postman } from "@/components/ui/svgs/postman";
import { Bootstrap } from "@/components/ui/svgs/bootstrap";

const BLUR_FADE_DELAY = 0.04;

// Icon map for skills
const skillIconMap: Record<string, React.ComponentType<any>> = {
  "HTML5": Html5,
  "CSS3": Css3,
  "JavaScript": Javascript,
  "TypeScript": Icons.typescript,
  "React": ReactLight,
  "React.js": ReactLight,
  "Next.js": Icons.nextjs,
  "Tailwind CSS": Icons.tailwindcss,
  "Bootstrap": Bootstrap,
  "Python": Python,
  "Django": Django,
  "PostgreSQL": Postgresql,
  "MongoDB": MongoDB,
  "Docker": Docker,
  "Git": Git,
  "GitHub": Icons.github,
  "Postman": Postman,
  "OpenAI": Icons.openai,
};

// Colors mapping for category cards to make them pop
const categoryCardStyles: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  "Frontend": {
    bg: "bg-blue-500/5 hover:bg-blue-500/[0.08] dark:bg-blue-500/[0.02] dark:hover:bg-blue-500/[0.05]",
    border: "border-blue-500/10 hover:border-blue-500/20 dark:border-blue-500/10 dark:hover:border-blue-500/20",
    text: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
  },
  "Backend": {
    bg: "bg-emerald-500/5 hover:bg-emerald-500/[0.08] dark:bg-emerald-500/[0.02] dark:hover:bg-emerald-500/[0.05]",
    border: "border-emerald-500/10 hover:border-emerald-500/20 dark:border-emerald-500/10 dark:hover:border-emerald-500/20",
    text: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
  },
  "Database": {
    bg: "bg-indigo-500/5 hover:bg-indigo-500/[0.08] dark:bg-indigo-500/[0.02] dark:hover:bg-indigo-500/[0.05]",
    border: "border-indigo-500/10 hover:border-indigo-500/20 dark:border-indigo-500/10 dark:hover:border-indigo-500/20",
    text: "text-indigo-600 dark:text-indigo-400",
    iconBg: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400",
  },
  "AI & Machine Learning": {
    bg: "bg-purple-500/5 hover:bg-purple-500/[0.08] dark:bg-purple-500/[0.02] dark:hover:bg-purple-500/[0.05]",
    border: "border-purple-500/10 hover:border-purple-500/20 dark:border-purple-500/10 dark:hover:border-purple-500/20",
    text: "text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
  },
  "Tools & DevOps": {
    bg: "bg-orange-500/5 hover:bg-orange-500/[0.08] dark:bg-orange-500/[0.02] dark:hover:bg-orange-500/[0.05]",
    border: "border-orange-500/10 hover:border-orange-500/20 dark:border-orange-500/10 dark:hover:border-orange-500/20",
    text: "text-orange-600 dark:text-orange-400",
    iconBg: "bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
  },
};

const defaultCardStyle = {
  bg: "bg-muted/30 hover:bg-muted/40",
  border: "border-border/60 hover:border-border",
  text: "text-foreground",
  iconBg: "bg-muted text-foreground",
};

export default function SkillsSection() {
  return (
    <section id="skills-detailed" className="relative">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col gap-y-6">
          {/* Header */}
          <div className="space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Expertise</p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Technical Skills</h2>
            <p className="text-muted-foreground text-sm">
              My technical stack grouped by specializations. Hover on pills to see details.
            </p>
          </div>

          {/* Grid Layout for Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DATA.skillCategories.map((cat, catIdx) => {
              const style = categoryCardStyles[cat.category] || defaultCardStyle;
              
              return (
                <BlurFade key={cat.category} delay={BLUR_FADE_DELAY * (catIdx + 2)}>
                  <div
                    className={cn(
                      "flex flex-col h-full p-5 rounded-2xl border bg-card/40 backdrop-blur-xs transition-all duration-300 shadow-xs hover:shadow-md",
                      style.bg,
                      style.border
                    )}
                  >
                    {/* Category Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={cn("flex items-center justify-center size-8 rounded-lg font-bold text-sm shrink-0", style.iconBg)}>
                        {cat.icon || "💻"}
                      </span>
                      <h3 className="font-bold text-[15px] tracking-tight text-foreground">
                        {cat.category}
                      </h3>
                    </div>

                    {/* Skill Items */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {cat.items.map((skill) => {
                        const IconComponent = skillIconMap[skill];
                        
                        return (
                          <span
                            key={skill}
                            className="skill-pill inline-flex items-center gap-2 rounded-lg border border-border/40 bg-background/80 hover:bg-background px-2.5 py-1.5 text-xs font-semibold text-foreground/80 hover:text-foreground shadow-xs transition-all cursor-default select-none"
                          >
                            {IconComponent ? (
                              <IconComponent className="size-4 shrink-0 text-current" />
                            ) : (
                              <span className="size-1.5 rounded-full bg-primary shrink-0 animate-pulse" />
                            )}
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
