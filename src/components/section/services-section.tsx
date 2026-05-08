"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { MonitorSmartphone, BrainCircuit, Database } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    description: "Building scalable, responsive, and performance-optimized web applications from frontend to backend using React.js and Django.",
    icon: MonitorSmartphone,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500"
  },
  {
    title: "AI & ML Integration",
    description: "Designing intelligent systems, AI agents, RAG pipelines, and integrating LLMs to automate tasks and provide smart insights.",
    icon: BrainCircuit,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500"
  },
  {
    title: "API & Backend Architecture",
    description: "Developing robust REST APIs, optimizing database queries (PostgreSQL/MongoDB), and setting up secure, scalable microservices.",
    icon: Database,
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500"
  }
];

export default function ServicesSection() {
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <BlurFade delay={0.04 * 14}>
        <h2 className="text-xl font-bold">Services & Expertise</h2>
      </BlurFade>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
        {services.map((service, idx) => (
          <BlurFade key={service.title} delay={0.04 * (15 + idx)}>
            <div className="flex flex-col p-6 border rounded-xl bg-card/20 backdrop-blur-sm shadow-sm relative overflow-hidden group hover:border-primary/50 transition-all h-full">
              <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="mb-4 p-3 rounded-lg bg-background/50 w-fit group-hover:scale-110 transition-transform shadow-sm">
                <service.icon className={`size-6 ${service.iconColor}`} />
              </div>
              
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {service.description}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
