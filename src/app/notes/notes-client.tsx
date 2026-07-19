"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { ArrowLeft, BookOpen, Terminal, Code2, Database, Layout, FileJson, Server } from "lucide-react";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

const NOTES_DATA = [
  {
    id: "html",
    title: "HTML",
    icon: Layout,
    definition: "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    explanation: "Think of HTML as the skeleton of a web page. It tells the browser what the content is (e.g., 'this is a heading', 'this is a paragraph', 'this is an image') without caring about how it looks.",
    keyConcepts: ["Elements & Tags", "Attributes", "Semantic HTML", "DOM Structure"],
    useCases: ["Building web page structure", "Creating accessible content", "SEO optimization"],
    code: `<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>This is semantic HTML.</p>
</body>
</html>`
  },
  {
    id: "css",
    title: "CSS",
    icon: Layout,
    definition: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language.",
    explanation: "If HTML is the skeleton, CSS is the skin, clothes, and makeup. It controls the colors, fonts, spacing, layout, and animations of the web page.",
    keyConcepts: ["Selectors & Specificity", "Box Model", "Flexbox & Grid", "Transitions & Keyframes"],
    useCases: ["Styling responsive layouts", "Creating animations", "Theme customization"],
    code: `.card {
  padding: 1.5rem;
  border-radius: 0.75rem;
  background-color: var(--card);
  transition: all 0.2s ease-in-out;
}
.card:hover {
  transform: translateY(-4px);
}`
  },
  {
    id: "js",
    title: "JavaScript",
    icon: Code2,
    definition: "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript specification.",
    explanation: "JavaScript is the nervous system. It makes the static skeleton (HTML) and skin (CSS) interactive—handling clicks, fetching data, updating content without reloading.",
    keyConcepts: ["Async / Await & Promises", "ES6+ Array Methods", "DOM Manipulation", "Event Loop & Closures"],
    useCases: ["Dynamic UI updates", "API data fetching", "State management"],
    code: `async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}`
  },
  {
    id: "ts",
    title: "TypeScript",
    icon: Code2,
    definition: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    explanation: "TypeScript acts as a blueprint and a quality checker. It forces you to define types for your data, catching spelling mistakes and type mismatches before they run.",
    keyConcepts: ["Interfaces & Types", "Generics", "Type Inference", "Union & Intersection Types"],
    useCases: ["Enterprise codebases", "Type safety validation", "Better IDE autocomplete"],
    code: `interface User {
  id: string;
  name: string;
  email: string;
  isAdmin?: boolean;
}

function greetUser(user: User): string {
  return \`Hello, \${user.name}!\`;
}`
  },
  {
    id: "django",
    title: "Django",
    icon: Server,
    definition: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    explanation: "Django is a fully equipped workshop. It has 'batteries included'—meaning it comes with built-in tools for databases (ORM), admin panel, user authorization, and form validation.",
    keyConcepts: ["MVT Architecture", "Django ORM & Migrations", "Django Admin Panel", "Middleware & Decorators"],
    useCases: ["Backend REST APIs", "Database administration panel", "Secure user auth systems"],
    code: `# views.py
from django.http import JsonResponse
from .models import Project

def project_list(request):
    projects = Project.objects.all().values()
    return JsonResponse(list(projects), safe=False)`
  },
  {
    id: "drf",
    title: "Django REST Framework",
    icon: FileJson,
    definition: "Django REST Framework is a powerful and flexible toolkit for building Web APIs.",
    explanation: "DRF sits on top of Django to turn database records into JSON format (Serialization) that React or other frontends can easily request and send back (REST APIs).",
    keyConcepts: ["Serializers", "APIView & ViewSets", "Authentication & Permissions", "Throttling & Pagination"],
    useCases: ["Building endpoints for React", "Mobile backend APIs", "Third-party developer integrations"],
    code: `# serializers.py
from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'status']`
  },
  {
    id: "react",
    title: "React",
    icon: Code2,
    definition: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    explanation: "React is like LEGO bricks for websites. You build reusable parts (components) that automatically update and render when the underlying data (state) changes.",
    keyConcepts: ["Components & Props", "useState & useEffect", "Virtual DOM", "Context API"],
    useCases: ["Single Page Applications", "Interactive dashboards", "Reusable component libraries"],
    code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: Code2,
    definition: "Next.js is a flexible React framework that gives you building blocks to create fast web applications.",
    explanation: "Next.js wraps around React and adds superpowers like automatic routing, image optimization, Server Side Rendering (SSR) for fast load times, and SEO optimization.",
    keyConcepts: ["App Router & Routing", "SSR vs SSG vs ISR", "Server Components", "API Routes"],
    useCases: ["Production SEO-rich websites", "Static blogs", "E-commerce frontends"],
    code: `// app/page.tsx
export default async function Page() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  
  return (
    <main>
      <h1>Server rendered: {data.title}</h1>
    </main>
  );
}`
  },
  {
    id: "database",
    title: "Databases (SQL & NoSQL)",
    icon: Database,
    definition: "A database is an organized collection of structured information, or data, stored electronically.",
    explanation: "SQL (PostgreSQL/MySQL) stores data in tables linked by relations (like spreadsheets). NoSQL (MongoDB) stores data in documents (like flexible JSON files).",
    keyConcepts: ["PostgreSQL (Relational)", "MongoDB (NoSQL/Document)", "ChromaDB (Vector database)", "Migrations & Schema Design"],
    useCases: ["User profile storage", "AI context vector memory", "Transactional commerce records"],
    code: `-- SQL Query
SELECT * FROM users 
WHERE created_at >= '2025-01-01' 
ORDER BY name ASC;

// MongoDB Query
db.users.find({ 
  createdAt: { $gte: ISODate("2025-01-01") } 
}).sort({ name: 1 });`
  },
];

export default function NotesClient() {
  const [activeTopic, setActiveTopic] = useState("html");

  const activeData = NOTES_DATA.find((topic) => topic.id === activeTopic) || NOTES_DATA[0];
  const IconComponent = activeData.icon;

  return (
    <main className="min-h-dvh flex flex-col relative pb-20">
      <div className="mx-auto w-full max-w-2xl pt-6 space-y-6">

        {/* Back to Home */}
        <div className="flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <BookOpen className="size-5 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Technical Notes</h1>
          </div>
          <p className="text-sm text-muted-foreground font-semibold">
            Concise explanations, key concepts, and common snippets of modern technologies.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Left Column: Navigation Sidebar */}
          <div className="flex md:flex-col gap-1.5 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-none border-b md:border-b-0 md:border-r border-border/40 pr-0 md:pr-4">
            {NOTES_DATA.map((topic) => {
              const TopicIcon = topic.icon;
              const isActive = activeTopic === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopic(topic.id)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 text-xs font-bold rounded-xl transition-all shrink-0 md:w-full text-left cursor-pointer ${
                    isActive
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  <TopicIcon className="size-4" />
                  {topic.title}
                </button>
              );
            })}
          </div>

          {/* Right Column: Content Card */}
          <div className="md:col-span-2 space-y-6">
            <BlurFade key={activeTopic} delay={BLUR_FADE_DELAY}>
              <div className="space-y-6">
                {/* Definition Header */}
                <div className="p-5 border rounded-2xl bg-card/30 backdrop-blur-xs space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="p-2 border rounded-xl bg-background shadow-xs">
                      <IconComponent className="size-5 text-primary" />
                    </span>
                    <h2 className="text-lg font-bold text-foreground">{activeData.title}</h2>
                  </div>
                  <p className="text-sm text-foreground font-medium leading-relaxed">
                    {activeData.definition}
                  </p>
                </div>

                {/* Plain English Explanation */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    In Plain English
                  </h3>
                  <div className="p-5 border border-dashed rounded-2xl bg-muted/10">
                    <p className="text-sm text-muted-foreground font-semibold leading-relaxed">
                      {activeData.explanation}
                    </p>
                  </div>
                </div>

                {/* Key Concepts & Use Cases */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 border rounded-2xl bg-card/20 space-y-3">
                    <h4 className="text-xs font-bold text-foreground/80 uppercase tracking-widest">
                      Key Concepts
                    </h4>
                    <ul className="space-y-2">
                      {activeData.keyConcepts.map((concept) => (
                        <li key={concept} className="flex items-center gap-2 text-xs text-muted-foreground font-semibold">
                          <span className="size-1.5 rounded-full bg-primary shrink-0" />
                          {concept}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 border rounded-2xl bg-card/20 space-y-3">
                    <h4 className="text-xs font-bold text-foreground/80 uppercase tracking-widest">
                      Typical Use Cases
                    </h4>
                    <ul className="space-y-2">
                      {activeData.useCases.map((useCase) => (
                        <li key={useCase} className="flex items-center gap-2 text-xs text-muted-foreground font-semibold">
                          <span className="size-1.5 rounded-full bg-primary shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Code Snippet */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal className="size-4" />
                    Interactive Snippet
                  </h3>
                  <div className="rounded-2xl border bg-muted/40 p-4 font-mono text-[11px] leading-relaxed text-foreground overflow-x-auto shadow-inner whitespace-pre">
                    <code>{activeData.code}</code>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </main>
  );
}
