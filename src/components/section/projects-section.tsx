import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-10">
            <div className="flex min-h-0 flex-col gap-y-12">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full max-w-lg mx-auto">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
                        <div className="border border-primary/20 bg-primary/10 shadow-[0_0_15px_rgba(var(--primary),0.2)] z-10 rounded-full px-6 py-1.5 backdrop-blur-sm">
                            <span className="text-foreground text-sm font-bold tracking-wider uppercase">
                                My Projects
                            </span>
                        </div>
                        <div className="flex-1 h-px bg-linear-to-l from-transparent via-primary/50 to-transparent" />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/60">
                            Featured Work
                        </h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance max-w-2xl">
                            From AI-powered crop disease detection to smart document
                            analysis — here are some projects I&apos;ve built to solve
                            real-world problems.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
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
    );
}
