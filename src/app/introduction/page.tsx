import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck, ArrowLeft, Terminal, Code2, Globe, Heart, Sparkles, User, Briefcase, GraduationCap, Github, Mail } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function IntroductionPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-0 relative pb-20">
      <section className="pt-8 pb-10">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 group">
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Avatar className="size-16 border-2 border-border/30 rounded-full shadow-md">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold flex items-center gap-2 text-foreground">
                    {DATA.name}
                    <BadgeCheck className="size-5 text-blue-500 fill-blue-500 stroke-white" />
                  </h1>
                  <p className="text-muted-foreground text-sm mt-1">{DATA.description}</p>
                </div>
              </div>
            </div>
          </BlurFade>

          <div className="space-y-12 pt-6">
            
            {/* About Me */}
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <User className="size-5 text-muted-foreground" />
                  About Me
                </h2>
                <div className="prose prose-neutral dark:prose-invert text-foreground/90 text-[15px] leading-relaxed">
                  <p>
                    I am a passionate software developer dedicated to building production-grade web applications and innovative AI systems. I thrive at the intersection of clean design and complex engineering, turning ideas into scalable realities.
                  </p>
                  <p className="mt-4">
                    My approach to development is rooted in simplicity and performance. Whether I am crafting a robust backend architecture or a pixel-perfect user interface, I focus on delivering exceptional user experiences and maintainable code.
                  </p>
                </div>
              </div>
            </BlurFade>

            {/* AI Automation Interests */}
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Sparkles className="size-5 text-muted-foreground" />
                  AI Automation & RAG
                </h2>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  I have a deep enthusiasm for Artificial Intelligence, specifically in the domains of <strong>AI Automation</strong> and <strong>Retrieval-Augmented Generation (RAG)</strong>. I am constantly exploring how AI can streamline workflows, enhance decision-making, and create more intelligent, context-aware applications.
                </p>
              </div>
            </BlurFade>

            {/* Skills Overview */}
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Code2 className="size-5 text-muted-foreground" />
                  Tech Stack & Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {DATA.skills.map((skill, id) => (
                    <span
                      key={id}
                      className="inline-flex items-center gap-1.5 rounded-md bg-muted/80 dark:bg-muted/50 border border-border/40 px-3 py-1 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      <skill.icon className="size-3" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Open Source & Learning Goals */}
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 p-5 rounded-xl border border-border/50 bg-muted/20">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Github className="size-4" />
                    Open Source
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Active contributor to the developer community. I believe in building tools that help others learn, build, and scale faster.
                  </p>
                </div>
                <div className="space-y-3 p-5 rounded-xl border border-border/50 bg-muted/20">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Terminal className="size-4" />
                    Current Focus
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Deepening my expertise in scalable microservices, advanced RAG architectures, and refining modern frontend performance.
                  </p>
                </div>
              </div>
            </BlurFade>

            {/* Contact Information */}
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <div className="space-y-4 border-t border-border/30 pt-8">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Globe className="size-5 text-muted-foreground" />
                  Let's Connect
                </h2>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition-all duration-200"
                  >
                    <Mail className="size-4" />
                    Email Me
                  </Link>
                  {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar)
                    .map(([name, social]) => (
                      <Link
                        key={name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-muted transition-all duration-200"
                      >
                        <social.icon className="size-4" />
                        {name}
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
