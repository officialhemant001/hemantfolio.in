"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Search, X } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { CompactProjectCard } from "@/components/premium-featured-card";
import { DATA } from "@/data/resume";
import type { ProjectStatus } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

const STATUS_FILTERS: { label: string; value: ProjectStatus | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Live", value: "Live" },
  { label: "Completed", value: "Completed" },
  { label: "In Progress", value: "In Progress" },
];

export default function ProjectsClient() {
  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState<ProjectStatus | "All">("All");

  const allProjects = DATA.projects;

  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.technologies.some((t) =>
          t.toLowerCase().includes(search.toLowerCase())
        );
      const matchesStatus =
        activeStatus === "All" || p.status === activeStatus;
      return matchesSearch && matchesStatus;
    });
  }, [allProjects, search, activeStatus]);

  return (
    <main className="min-h-dvh flex flex-col gap-0 relative pb-24">
      <section className="pt-6 pb-10">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          {/* Back */}
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </BlurFade>

          {/* Header */}
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Portfolio
              </p>
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight">All Projects</h1>
              <p className="text-muted-foreground text-sm">
                {allProjects.length} projects across AI, web development, and systems engineering.
              </p>
            </div>
          </BlurFade>

          {/* Search + Filter */}
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects or technologies..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-9 py-2 text-sm border border-border rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  aria-label="Search projects"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>

              {/* Status filter */}
              <div className="flex gap-1.5 flex-wrap">
                {STATUS_FILTERS.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActiveStatus(f.value)}
                    className={`px-3 py-2 text-xs font-bold rounded-lg transition-all border cursor-pointer ${
                      activeStatus === f.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                    aria-pressed={activeStatus === f.value}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {filteredProjects.map((project, idx) => (
                <BlurFade
                  key={project.slug}
                  delay={BLUR_FADE_DELAY * 4 + idx * 0.04}
                  className="h-full"
                >
                  <CompactProjectCard project={project} />
                </BlurFade>
              ))}
            </div>
          ) : (
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-base font-semibold text-foreground mb-1">No projects found</h3>
                <p className="text-sm text-muted-foreground">
                  Try a different search term or filter.
                </p>
                <button
                  onClick={() => { setSearch(""); setActiveStatus("All"); }}
                  className="mt-4 text-sm font-medium text-foreground underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            </BlurFade>
          )}
        </div>
      </section>
    </main>
  );
}
