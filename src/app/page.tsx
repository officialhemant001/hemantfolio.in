/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { HeroTypeAnimation } from "@/components/ui/type-animation";
import { BadgeCheck, FileText, Send, Globe, ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";
import { Icons } from "@/components/icons";
import SkillsSection from "@/components/section/skills-section";
import CertificationsSection from "@/components/section/certifications-section";
import GithubStatsSection from "@/components/section/github-stats-section";
import { HeroButtons } from "@/components/hero-buttons";
import { PremiumFeaturedCard } from "@/components/premium-featured-card";

const BLUR_FADE_DELAY = 0.04;

// Tech badge config for inline bio display
const inlineTechBadges = [
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🌿" },
  { name: "React.js", icon: "⚛️" },
  { name: "PostgreSQL", icon: "🐘" },
];

export default function Page() {
  // Only show 3 featured projects on homepage
  const featuredProjects = DATA.projects.filter((p) => p.featured).slice(0, 3);

  return (
    <main className="min-h-dvh flex flex-col gap-0 relative">
      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section id="hero" className="pt-10 pb-12 relative overflow-hidden">
        {/* Apple/Stripe-like ambient glow background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="mx-auto w-full max-w-2xl space-y-7">
          {/* Avatar + Name */}
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <div className="relative group shrink-0">
                {/* Premium pulse glow */}
                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-amber-500/20 to-primary/20 opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <Avatar className="size-20 md:size-24 border-2 border-border/40 rounded-full shadow-lg ring-4 ring-background relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
                {/* India Flag */}
                <div
                  className="absolute -top-1 -right-2 w-7 h-5 z-20 hover:scale-110 transition-transform duration-300 drop-shadow-md rounded-sm overflow-hidden"
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
              <div className="flex flex-col gap-1.5 justify-center">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center justify-center sm:justify-start gap-2 text-foreground">
                  <span className="gradient-text">{DATA.name}</span>
                  <BadgeCheck className="size-6 text-blue-500 fill-blue-500 stroke-white shrink-0" />
                </h1>
                <div className="text-muted-foreground text-base md:text-lg font-medium h-6">
                  <HeroTypeAnimation />
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Bio with inline tech badges */}
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="text-[15px] md:text-base leading-relaxed text-foreground/90 font-medium">
              <span>I build production-grade web apps and AI systems using </span>
              {inlineTechBadges.map((tech, idx) => (
                <span key={tech.name}>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-muted/80 dark:bg-muted/50 border border-border/40 px-2 py-0.5 text-sm font-semibold text-foreground mx-0.5 align-middle">
                    <span className="size-2 rounded-full shrink-0 bg-primary animate-pulse" />
                    {tech.name}
                  </span>
                  {idx < inlineTechBadges.length - 2 && <span>, </span>}
                  {idx === inlineTechBadges.length - 2 && <span> and </span>}
                </span>
              ))}
              <span>. With a focus on </span>
              <span className="font-bold text-foreground">AI Automation</span>
              <span>. Enthusiastic about </span>
              <span className="font-bold text-foreground">RAG</span>
              <span>.</span>
            </div>
          </BlurFade>

          {/* CTA Buttons */}
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex justify-center sm:justify-start">
              <HeroButtons />
            </div>
          </BlurFade>

          {/* Social Icons */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex items-center gap-3 pt-1 justify-center sm:justify-start">
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social]) => (
                  <Link
                    key={name}
                    id={`social-link-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative text-muted-foreground hover:text-foreground transition-all p-1.5 rounded-lg hover:bg-muted/70 hover:scale-110 active:scale-95 duration-200"
                    title={name}
                    aria-label={name}
                  >
                    <social.icon className="size-5" />
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-medium bg-foreground text-background rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap">
                      {name}
                    </span>
                  </Link>
                ))}
              <Link
                id="contact-email-link"
                href={`mailto:${DATA.contact.email}`}
                className="group relative text-muted-foreground hover:text-foreground transition-all p-1.5 rounded-lg hover:bg-muted/70 hover:scale-110 active:scale-95 duration-200"
                title="Email"
                aria-label="Send Email"
              >
                <Icons.email className="size-5" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-medium bg-foreground text-background rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap">
                  Email
                </span>
              </Link>
            </div>
          </BlurFade>

          {/* Scroll Indicator */}
          <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
            <div className="pt-6 flex justify-center animate-bounce hidden sm:flex pointer-events-none">
              <ChevronDown className="size-5 text-muted-foreground/40" />
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
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Portfolio</p>
                <h2 className="text-xl font-bold text-foreground">Featured Projects</h2>
              </div>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                View All Projects
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project, id) => (
              <BlurFade
                key={project.slug}
                delay={BLUR_FADE_DELAY * 6 + id * 0.06}
                className="h-full"
              >
                <PremiumFeaturedCard project={project} index={id} />
              </BlurFade>
            ))}
          </div>

          {/* View All CTA */}
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="mt-8 flex justify-center">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-muted/60 hover:border-border/80 hover:shadow-md transition-all duration-200"
              >
                View All Projects
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Work Experience ─────────────────────────────────────────── */}
      <section id="work" className="py-10 border-t border-border/30">
        <div className="mx-auto w-full max-w-2xl">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Career</p>
            <h2 className="text-xl font-bold text-foreground mb-6">Work Experience</h2>
          </BlurFade>

          <div className="relative flex flex-col gap-6 pl-2">
            {/* Timeline connector line */}
            <div className="absolute left-[28px] md:left-[32px] top-6 bottom-6 w-[2px] bg-linear-to-b from-border/80 via-border/40 to-transparent pointer-events-none" />

            {DATA.work.map((work, idx) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 8 + idx * 0.05}>
                <div className="flex items-start gap-4 group relative">
                  {/* Company Logo */}
                  <div className="relative z-10 size-10 md:size-12 rounded-xl border border-border bg-background shadow-xs flex items-center justify-center shrink-0 overflow-hidden group-hover:border-primary/45 group-hover:shadow-md transition-all duration-300">
                    {work.logoUrl ? (
                      <img
                        src={work.logoUrl}
                        alt={work.company}
                        className="size-full object-contain p-1.5"
                      />
                    ) : (
                      <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {work.company.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground text-sm md:text-base group-hover:text-primary transition-colors duration-350">
                            {work.company}
                          </h3>
                          <Globe className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                          <ArrowUpRight className="size-3.5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">{work.title}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs text-muted-foreground font-semibold">
                          {work.start} - {work.end ?? "Present"}
                        </p>
                        <p className="text-[11px] text-muted-foreground font-medium">{work.location}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    {work.technologies && work.technologies.length > 0 && (
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-1.5">
                          {work.technologies.map((tag: string) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1.5 rounded-full bg-muted/80 dark:bg-muted/50 border border-border/30 px-2.5 py-1 text-xs font-semibold text-foreground/80 hover:text-foreground hover:bg-muted transition-all duration-200 cursor-default select-none"
                            >
                              <span className="size-2 rounded-full shrink-0 bg-primary/70" />
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
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">Background</p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Education</h2>
          </BlurFade>

          <div className="relative flex flex-col gap-5 pl-2">
            {/* Timeline connector line */}
            <div className="absolute left-[28px] md:left-[32px] top-6 bottom-6 w-[2px] bg-linear-to-b from-border/80 via-border/40 to-transparent pointer-events-none" />

            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 10 + index * 0.05}
              >
                <Link
                  id={`education-link-${education.school.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group hover:bg-muted/30 p-3 -mx-3 rounded-xl transition-all duration-300 relative"
                >
                  <div className="relative z-10 size-10 md:size-12 rounded-xl border border-border bg-background shadow-xs flex items-center justify-center shrink-0 overflow-hidden group-hover:border-primary/45 group-hover:shadow-md transition-all duration-300">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-full object-contain p-1.5"
                      />
                    ) : (
                      <span className="text-lg group-hover:scale-110 transition-transform duration-300">🎓</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground text-sm md:text-base leading-tight group-hover:text-primary transition-colors duration-300">
                            {education.school}
                          </h3>
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5 font-medium">{education.degree}</p>
                      </div>
                      <span className="text-xs text-muted-foreground font-semibold shrink-0">
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
