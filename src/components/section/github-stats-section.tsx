"use client";

import { GitHubCalendar } from 'react-github-calendar';
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { Icons } from "@/components/icons";
import { useState, useEffect } from "react";

export default function GithubStatsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const username = "officialhemant001"; // Pulled from DATA.contact.social.GitHub.url could also work, but hardcoding for react-github-calendar is safer

  return (
    <div className="flex flex-col gap-y-6">
      <BlurFade delay={0.04 * 10}>
        <h2 className="text-xl font-bold">Developer Stats</h2>
      </BlurFade>

      <BlurFade delay={0.04 * 11}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center justify-center p-6 border rounded-xl bg-card/20 backdrop-blur-sm shadow-sm relative overflow-hidden group hover:border-primary/50 transition-all">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 pointer-events-none group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors" />
            <Icons.github className="size-8 mb-2 text-foreground" />
            <h3 className="text-3xl font-bold tracking-tight">40+</h3>
            <p className="text-sm text-muted-foreground font-medium">Total Repositories</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 border rounded-xl bg-card/20 backdrop-blur-sm shadow-sm relative overflow-hidden group hover:border-primary/50 transition-all">
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-red-500/5 pointer-events-none group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-colors" />
            <div className="flex gap-2 mb-2">
              <span className="text-2xl font-bold text-foreground">Python</span>
              <span className="text-2xl font-bold text-foreground">React</span>
            </div>
            <h3 className="text-lg font-bold tracking-tight text-center">Django, TS, JS</h3>
            <p className="text-sm text-muted-foreground font-medium">Top Languages</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 border rounded-xl bg-card/20 backdrop-blur-sm shadow-sm relative overflow-hidden group hover:border-primary/50 transition-all">
            <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-emerald-500/5 pointer-events-none group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-colors" />
            <h3 className="text-3xl font-bold tracking-tight text-green-500">100+</h3>
            <p className="text-sm text-muted-foreground font-medium mb-2">Days Coding Streak</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              Active Contributor
            </div>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.04 * 12}>
        <div className="border rounded-xl p-4 md:p-8 bg-card/10 backdrop-blur-sm shadow-sm overflow-hidden flex flex-col items-center justify-center w-full">
          <h3 className="text-lg font-bold mb-6 w-full text-left">GitHub Contributions</h3>
          <div className="w-full flex justify-center pb-2 overflow-hidden">
            <div className="min-w-max scale-90 sm:scale-100 origin-center">
              {mounted ? (
                <GitHubCalendar 
                  username={username} 
                  colorScheme="dark"
                  fontSize={14}
                  blockSize={12}
                  blockMargin={5}
                  theme={{
                    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                    dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                  }}
                />
              ) : (
                <div className="h-[120px] w-full" />
              )}
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
