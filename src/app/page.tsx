/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { DevfolioProjectCard } from "@/components/devfolio-project-card";
import { HeroTypeAnimation } from "@/components/ui/type-animation";
import { BadgeCheck, FileText, Send, Globe, ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/icons";
import SkillsSection from "@/components/section/skills-section";
import CertificationsSection from "@/components/section/certifications-section";
import GithubStatsSection from "@/components/section/github-stats-section";

const BLUR_FADE_DELAY = 0.04;

// Tech badge config for inline bio display
const inlineTechBadges = [
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🌿" },
  { name: "React.js", icon: "⚛️" },
  { name: "PostgreSQL", icon: "🐘" },
];

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-0 relative">
      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section id="hero" className="pt-8 pb-10">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          {/* Avatar + Name */}
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="size-20 md:size-24 border-2 border-border/30 rounded-full shadow-lg">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
                {/* India Flag */}
                <div
                  className="absolute -top-1 -right-2 w-7 h-5 z-10 hover:scale-110 transition-transform duration-300 drop-shadow-md rounded-sm overflow-hidden"
                  title="From India 🇮🇳"
                >
                  <svg viewBox="0 0 900 600" className="w-full h-full block">
                    <rect width="900" height="200" fill="#FF9933" />
                    <rect y="200" width="900" height="200" fill="#FFFFFF" />
                    <rect y="400" width="900" height="200" fill="#138808" />
                    <circle cx="450" cy="300" r="60" stroke="#000080" strokeWidth="10" fill="none" />
                    {Array.from({ length: 24 }).map((_, i) => (
                      <line
                        key={i}
                        x1="450"
                        y1="300"
                        x2={450 + 60 * Math.cos((i * 15 * Math.PI) / 180)}
                        y2={300 + 60 * Math.sin((i * 15 * Math.PI) / 180)}
                        stroke="#000080"
                        strokeWidth="3"
                      />
                    ))}
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-foreground">
                  {DATA.name}
                  <BadgeCheck className="size-5 text-blue-500 fill-blue-500 stroke-white" />
                </h1>
                <div className="text-muted-foreground text-sm md:text-base h-6">
                  <HeroTypeAnimation />
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Bio with inline tech badges */}
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="text-[15px] md:text-base leading-relaxed text-foreground/90">
              <span>I build production-grade web apps and AI systems using </span>
              {inlineTechBadges.map((tech, idx) => (
                <span key={tech.name}>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-muted/80 dark:bg-muted/50 border border-border/40 px-2 py-0.5 text-sm font-medium text-foreground mx-0.5 align-middle">
                    <span className="size-2 rounded-full shrink-0 bg-primary" />
                    {tech.name}
                  </span>
                  {idx < inlineTechBadges.length - 2 && <span> , </span>}
                  {idx === inlineTechBadges.length - 2 && <span> and </span>}
                </span>
              ))}
              <span> . With a focus on </span>
              <span className="font-semibold text-foreground">AI Automation</span>
              <span> . Enthusiastic about </span>
              <span className="font-semibold text-foreground">RAG</span>
              <span> .</span>
            </div>
          </BlurFade>

          {/* CTA Buttons */}
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/typs.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-muted transition-all duration-200 hover:shadow-md"
              >
                <FileText className="size-4" />
                Resume / CV
              </Link>
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-4 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 transition-all duration-200 hover:shadow-md"
              >
                <Send className="size-4" />
                Get in touch
              </Link>
            </div>
          </BlurFade>

          {/* Social Icons */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex items-center gap-3 pt-1">
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social]) => (
                  <Link
                    key={name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-md hover:bg-muted/60"
                    title={name}
                  >
                    <social.icon className="size-5" />
                  </Link>
                ))}
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-md hover:bg-muted/60"
                title="Email"
              >
                <Icons.email className="size-5" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Detailed Skills Section ─────────────────────────────────── */}
      <section id="skills-detailed" className="py-10 border-t border-border/30">
        <div className="mx-auto w-full max-w-2xl">
          <SkillsSection />
        </div>
      </section>

      {/* ── Featured Projects ───────────────────────────────────────── */}
      <section id="projects" className="py-10 border-t border-border/30">
        <div className="mx-auto w-full max-w-2xl">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Portfolio</p>
            <h2 className="text-xl font-bold text-foreground mb-6">Featured Projects</h2>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                className="h-full"
              >
                <DevfolioProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Experience ─────────────────────────────────────── */}
      <section id="work" className="py-10 border-t border-border/30">
        <div className="mx-auto w-full max-w-2xl">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Career</p>
            <h2 className="text-xl font-bold text-foreground mb-6">Work Experience</h2>
          </BlurFade>

          <div className="flex flex-col gap-5">
            {DATA.work.map((work, idx) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 8 + idx * 0.05}>
                <div className="flex items-start gap-4 group">
                  {/* Company Logo */}
                  <div className="size-10 md:size-12 rounded-xl border border-border/50 bg-background shadow-sm flex items-center justify-center flex-none overflow-hidden">
                    {work.logoUrl ? (
                      <img
                        src={work.logoUrl}
                        alt={work.company}
                        className="size-full object-contain p-1.5"
                      />
                    ) : (
                      <span className="text-lg font-bold text-muted-foreground">
                        {work.company.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground text-sm md:text-base">
                            {work.company}
                          </h3>
                          <Globe className="size-3.5 text-muted-foreground" />
                          <ArrowUpRight className="size-3.5 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground">{work.title}</p>
                      </div>
                      <div className="text-right flex-none">
                        <p className="text-xs text-muted-foreground font-medium">
                          {work.start} - {work.end ?? "Present"}
                        </p>
                        <p className="text-xs text-muted-foreground">{work.location}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    {work.technologies && work.technologies.length > 0 && (
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-1.5">
                          {work.technologies.map((tag: string) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1.5 rounded-full bg-muted/80 dark:bg-muted/50 border border-border/30 px-2.5 py-1 text-xs font-medium text-foreground"
                            >
                              <span className="size-2 rounded-full shrink-0 bg-primary" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education Section ───────────────────────────────────────── */}
      <section id="education" className="py-10 border-t border-border/30">
        <div className="mx-auto w-full max-w-2xl">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Background</p>
            <h2 className="text-xl font-bold text-foreground mb-6">Education</h2>
          </BlurFade>

          <div className="flex flex-col gap-5">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 10 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group hover:bg-muted/30 p-3 -mx-3 rounded-xl transition-colors duration-200"
                >
                  <div className="size-10 md:size-12 rounded-xl border border-border/50 bg-background shadow-sm flex items-center justify-center flex-none">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-full object-contain p-1.5 rounded-xl"
                      />
                    ) : (
                      <span className="text-lg">🎓</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground text-sm md:text-base leading-tight">
                            {education.school}
                          </h3>
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">{education.degree}</p>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium flex-none">
                        {education.start} - {education.end}
                      </span>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications Section ──────────────────────────────────── */}
      <section id="certifications" className="py-10 border-t border-border/30">
        <div className="mx-auto w-full max-w-2xl">
          <CertificationsSection />
        </div>
      </section>

      {/* ── Developer Stats (GitHub Contributions) ──────────────────── */}
      <section id="stats" className="py-10 border-t border-border/30">
        <div className="mx-auto w-full max-w-2xl">
          <GithubStatsSection />
        </div>
      </section>

      {/* Bottom spacing for scroll */}
      <div className="h-20" />
    </main>
  );
}
