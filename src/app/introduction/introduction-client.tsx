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
  title: string;
  icon: any;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border rounded-2xl bg-card/30 backdrop-blur-xs overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left font-bold text-base hover:bg-muted/30 transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className="p-2 border rounded-xl bg-background shadow-xs shrink-0">
            <Icon className="size-4 text-primary" />
          </span>
          <span className="text-foreground text-sm sm:text-base">{title}</span>
        </div>
        <ChevronDown className={`size-4 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="p-5 pt-0 border-t border-border/40 bg-muted/5 animate-in fade-in duration-300">
          {children}
        </div>
      )}
    </div>
  );
}

export default function IntroductionClient() {
  const [activeTab, setActiveTab] = useState<"intro" | "qa" | "tech" | "coding" | "roadmap">("intro");

  const menuItems = [
    { id: "intro", label: "Introduction", icon: Target },
    { id: "qa", label: "Q&A Interview", icon: MessageSquare },
    { id: "tech", label: "Deep Dives", icon: Terminal },
    { id: "coding", label: "Coding Logic", icon: Code2 },
    { id: "roadmap", label: "Roadmap", icon: CalendarDays },
  ] as const;

  return (
    <main className="min-h-dvh flex flex-col relative pb-20">
      <div className="mx-auto w-full max-w-2xl pt-6 space-y-6">

        {/* Back to Home */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <span className="text-xs font-bold px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary shadow-xs">
            Interview Mode 🎙️
          </span>
        </div>

        {/* Tabs Bar */}
        <div className="flex items-center gap-1.5 p-1 border rounded-xl bg-muted/30 overflow-x-auto scrollbar-none">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all shrink-0 cursor-pointer ${
                  active
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                <Icon className="size-3.5" />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* ── Tab Content ────────────────────────────────────────── */}
        <div className="space-y-6">
          {/* TAB 1: INTRODUCTION */}
          {activeTab === "intro" && (
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left p-6 border rounded-2xl bg-card/30 backdrop-blur-xs shadow-xs">
                  <div className="relative shrink-0">
                    <Avatar className="size-20 md:size-24 border-2 border-border/50 shadow-sm rounded-full">
                      <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                      <AvatarFallback>{DATA.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-2xl font-bold flex items-center justify-center sm:justify-start gap-2 text-foreground">
                      {DATA.name}
                      <BadgeCheck className="size-5 text-blue-500 fill-blue-500 stroke-white shrink-0" />
                    </h1>
                    <p className="text-sm font-semibold text-muted-foreground max-w-md leading-relaxed">
                      B.Tech CSE student specializing in Django web backends, React interfaces, and customized AI RAG integrations.
                    </p>
                  </div>
                </div>

                <div className="border rounded-2xl p-6 bg-card/20 backdrop-blur-xs space-y-4">
                  <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                    <Sparkles className="size-4.5 text-amber-500 animate-pulse" />
                    Elevator Pitch
                  </h3>
                  <div className="prose dark:prose-invert text-sm leading-relaxed text-muted-foreground font-medium">
                    <p>
                      Hello! I&apos;m a Full Stack Developer & AI Engineer based in India. I focus on making apps that are not just beautiful, but robust, fast, and intelligent.
                    </p>
                    <p>
                      By pairing standard backend architectures (Python & Django REST framework) with modern rendering libraries (React & Next.js), I build software that scales easily.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 border rounded-2xl bg-card/30 space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="size-4.5 text-primary" />
                      <h4 className="font-bold text-sm text-foreground">Short Term Goal</h4>
                    </div>
                    <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                      Securing a software development role where I can build and optimize enterprise backend applications and REST APIs.
                    </p>
                  </div>

                  <div className="p-5 border rounded-2xl bg-card/30 space-y-3">
                    <div className="flex items-center gap-2">
                      <Target className="size-4.5 text-primary" />
                      <h4 className="font-bold text-sm text-foreground">Long Term Goal</h4>
                    </div>
                    <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                      Designing distributed architectures and AI-agent infrastructure to automate workflow integrations at scale.
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
          )}

          {/* TAB 2: HR Q&A */}
          {activeTab === "qa" && (
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="space-y-4">
                <div className="p-4 border rounded-xl bg-card/45">
                  <h3 className="font-bold text-base text-foreground mb-1">Behavioral Q&A</h3>
                  <p className="text-xs text-muted-foreground font-semibold">
                    My answers to typical behavioral questions asked by HR recruiters.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {hrQuestions.map((q, idx) => (
                    <Accordion key={idx} title={q.q} icon={HelpCircle}>
                      <div className="text-sm text-muted-foreground leading-relaxed font-semibold space-y-3">
                        <p className="whitespace-pre-line">{q.a}</p>
                      </div>
                    </Accordion>
                  ))}
                </div>
              </div>
            </BlurFade>
          )}

          {/* TAB 3: TECHNICAL DEEP DIVES */}
          {activeTab === "tech" && (
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="space-y-4">
                <div className="p-4 border rounded-xl bg-card/45">
                  <h3 className="font-bold text-base text-foreground mb-1">Technical Deep Dives</h3>
                  <p className="text-xs text-muted-foreground font-semibold">
                    Explanations of key architecture choices and technical specializations.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {technicalCategories.map((cat, idx) => (
                    <Accordion key={idx} title={`${cat.icon} ${cat.category}`} icon={Terminal}>
                      <div className="space-y-5">
                        {cat.questions.map((t, tIdx) => (
                          <div key={tIdx} className="space-y-1.5">
                            <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                              <span className="size-1.5 rounded-full bg-primary shrink-0" />
                              {t.q}
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed font-semibold pl-3">
                              {t.a}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Accordion>
                  ))}

                  {projectQuestions.map((p, idx) => (
                    <Accordion key={`proj-${idx}`} title={`Project: ${p.project}`} icon={Briefcase}>
                      <div className="space-y-4">
                        <p className="text-xs font-semibold text-primary/80 italic">{p.subtitle}</p>
                        <div className="space-y-5">
                          {p.questions.map((pq, pqIdx) => (
                            <div key={pqIdx} className="space-y-1.5">
                              <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                                <span className="size-1.5 rounded-full bg-primary shrink-0" />
                                {pq.q}
                              </h4>
                              <p className="text-xs font-semibold text-muted-foreground leading-relaxed pl-3">
                                {pq.a}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Accordion>
                  ))}
                </div>
              </div>
            </BlurFade>
          )}

          {/* TAB 4: CODING LOGIC */}
          {activeTab === "coding" && (
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="space-y-4">
                <div className="p-4 border rounded-xl bg-card/45">
                  <h3 className="font-bold text-base text-foreground mb-1">Coding Logic & Patterns</h3>
                  <p className="text-xs text-muted-foreground font-semibold">
                    My approach to algorithmic thinking, data structures, and optimal complexity.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {codingProblems.map((p, idx) => (
                    <Accordion key={idx} title={p.title} icon={Code2}>
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Language</h4>
                          <p className="text-xs font-semibold text-primary">{p.language}</p>
                        </div>
                        <div className="rounded-2xl border bg-muted/40 p-4 font-mono text-[11px] leading-relaxed text-foreground overflow-x-auto shadow-inner whitespace-pre">
                          <code>{p.code}</code>
                        </div>
                      </div>
                    </Accordion>
                  ))}
                </div>
              </div>
            </BlurFade>
          )}

          {/* TAB 5: ROADMAP */}
          {activeTab === "roadmap" && (
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="space-y-4">
                <div className="p-4 border rounded-xl bg-card/45">
                  <h3 className="font-bold text-base text-foreground mb-1">7-Day Interview Roadmap</h3>
                  <p className="text-xs text-muted-foreground font-semibold">
                    My structured preparation plan for technical capability and personal growth.
                  </p>
                </div>

                <div className="relative pl-6 border-l border-border/80 ml-4 py-2 space-y-6">
                  {roadmap.map((step, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] top-1 flex items-center justify-center size-4 rounded-full border border-border bg-background group-hover:border-primary transition-colors duration-300">
                        <span className="size-1.5 rounded-full bg-primary" />
                      </span>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{step.day}</span>
                        </div>
                        <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h4>
                        <ul className="space-y-1.5 pl-1">
                          {step.tasks.map((task, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2 text-xs text-muted-foreground font-semibold leading-relaxed">
                              <span className="size-1 rounded-full bg-muted-foreground/50 mt-1.5 shrink-0" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          )}
        </div>
      </div>
    </main>
  );
}
