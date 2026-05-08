/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import SkillsSection from "@/components/section/skills-section";
import { ArrowUpRight, Download, BadgeCheck } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative">
                <Avatar className="size-16 md:size-20 border-2 border-primary/10 rounded-full shadow-lg">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
                {/* Premium India Flag Overlay */}
                <div 
                  className="absolute -top-2 -right-3 w-9 h-6 z-10 hover:scale-110 transition-transform duration-300 drop-shadow-md rounded-sm overflow-hidden"
                  title="From India"
                >
                  <svg viewBox="0 0 900 600" className="w-full h-full block">
                    <rect width="900" height="200" fill="#FF9933"/>
                    <rect y="200" width="900" height="200" fill="#FFFFFF"/>
                    <rect y="400" width="900" height="200" fill="#138808"/>
                    <circle cx="450" cy="300" r="90" stroke="#000080" strokeWidth="15" fill="none"/>
                    {Array.from({ length: 24 }).map((_, i) => (
                      <line key={i} x1="450" y1="300" x2={450 + 90 * Math.cos(i * 15 * Math.PI / 180)} y2={300 + 90 * Math.sin(i * 15 * Math.PI / 180)} stroke="#000080" strokeWidth="5" />
                    ))}
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  {DATA.name} <BadgeCheck className="size-5 text-blue-500" />
                </h1>
                <p className="text-muted-foreground text-sm md:text-base">
                  Full Stack Web Developer & AI Engineer
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="relative border border-border/30 rounded-2xl p-6 md:p-8 bg-card/20 backdrop-blur-sm shadow-sm overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-orange-500/5 pointer-events-none" />
              <div className="prose max-w-full text-pretty font-sans text-base md:text-[1.05rem] leading-relaxed text-slate-900 dark:text-slate-100 font-medium relative z-10 [&>p>strong]:text-transparent [&>p>strong]:bg-clip-text [&>p>strong]:bg-linear-to-r [&>p>strong]:from-blue-500 [&>p>strong]:to-purple-600 [&>p>strong]:font-bold [&>p>code]:text-primary [&>p>code]:bg-primary/10 [&>p>code]:px-1.5 [&>p>code]:py-0.5 [&>p>code]:rounded-md [&>p>code]:font-medium [&>p>a]:text-blue-500 [&>p>a]:underline-offset-4 hover:[&>p>a]:text-blue-400">
                <Markdown>
                  {DATA.summary}
                </Markdown>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-wrap gap-2 mt-4">
              <Link
                href="/typs.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-muted transition-colors"
              >
                Resume / CV
              </Link>
              {Object.entries(DATA.contact.social).filter(([_, social]) => social.navbar).map(([name, social]) => (
                <Link
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-muted transition-colors"
                >
                  <social.icon className="size-4" />
                </Link>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Work Experience Section ─────────────────────────────────── */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      {/* ── Education Section ───────────────────────────────────────── */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group hover:bg-muted/50 p-2 -mx-2 rounded-lg transition-colors duration-200"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center text-xs font-bold text-muted-foreground">
                        🎓
                      </div>
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills (Icon Chips) ─────────────────────────────────────── */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 rounded-lg h-9 w-fit px-4 flex items-center gap-2 shadow-sm hover:shadow-md cursor-default">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Detailed Skills (Categorized) ──────────────────────────── */}
      <section id="skills-detailed">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <SkillsSection />
        </BlurFade>
      </section>

      {/* ── Projects Section ────────────────────────────────────────── */}
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <ProjectsSection />
        </BlurFade>
      </section>

      {/* ── Contact Section ─────────────────────────────────────────── */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
