import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

export default function SkillsSection() {
  return (
    <section id="skills-detailed">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Technical Skills
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              My Tech Stack
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Technologies and tools I use to bring ideas to life — from
              frontend frameworks to AI systems and DevOps pipelines.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DATA.skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="border border-border rounded-xl p-5 flex flex-col gap-3 bg-card/50 hover:bg-card/80 transition-colors"
            >
              <h3 className="font-semibold text-sm text-foreground tracking-tight">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="text-[11px] font-medium border border-border h-6 w-fit px-2"
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
