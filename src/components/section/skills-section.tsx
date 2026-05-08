import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function SkillsSection() {
  return (
    <section id="skills-detailed" className="py-10 relative overflow-hidden">
      {/* Soft gradient background behind the whole section */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="flex min-h-0 flex-col gap-y-8 relative z-10">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-primary/30 via-95% to-transparent" />
            <div className="border border-primary/30 bg-primary/10 z-10 rounded-xl px-4 py-1 shadow-[0_0_15px_rgba(var(--primary),0.2)] backdrop-blur-sm">
              <span className="text-foreground text-sm font-bold tracking-wide uppercase">
                Technical Skills
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-primary/30 via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground drop-shadow-sm">
              My Tech Stack
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-2xl font-medium">
              Technologies and tools I use to bring ideas to life — from
              frontend frameworks to AI systems and DevOps pipelines.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto w-full">
          {DATA.skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="group relative border border-border/40 rounded-2xl p-6 flex flex-col gap-4 bg-card/40 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_10px_40px_rgba(168,85,247,0.25)] overflow-hidden cursor-default"
            >
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <h3 className="font-bold text-lg text-foreground tracking-tight relative z-10 drop-shadow-sm">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="text-xs font-semibold border-border/60 bg-background/50 hover:bg-primary/10 hover:border-primary/40 transition-colors h-7 px-3 rounded-md shadow-sm"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
