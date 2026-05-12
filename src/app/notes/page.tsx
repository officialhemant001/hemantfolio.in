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
  <title>My Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a simple paragraph.</p>
</body>
</html>`
  },
  {
    id: "css",
    title: "CSS",
    icon: Layout,
    definition: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML.",
    explanation: "If HTML is the skeleton, CSS is the skin, clothes, and makeup. It dictates colors, layouts, fonts, and animations to make the web page visually appealing.",
    keyConcepts: ["Selectors & Specificity", "Box Model", "Flexbox & Grid", "Responsive Design"],
    useCases: ["Styling web pages", "Creating responsive layouts", "Adding UI animations"],
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  color: white;
  padding: 2rem;
  border-radius: 8px;
}`
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: FileJson,
    definition: "A high-level, often just-in-time compiled language that conforms to the ECMAScript standard.",
    explanation: "JavaScript is the brain and muscles of the web page. It makes the page interactive, handles user input, fetches data from servers, and updates the UI dynamically.",
    keyConcepts: ["Variables & Scope", "Functions & Closures", "Promises & Async/Await", "DOM Manipulation"],
    useCases: ["Interactive UIs", "Web applications", "Backend development (Node.js)"],
    code: `// Fetching user data asynchronously
async function getUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}`
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: FileJson,
    definition: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    explanation: "TypeScript is like JavaScript with a safety net. It catches errors before you even run the code by ensuring you pass the correct types of data (like strings or numbers) around.",
    keyConcepts: ["Static Typing", "Interfaces & Types", "Generics", "Utility Types"],
    useCases: ["Large scale applications", "Enterprise software", "Libraries and packages"],
    code: `// Defining a strongly typed interface
interface User {
  id: number;
  name: string;
  role?: 'admin' | 'user'; // Optional property
}

function greet(user: User) {
  console.log(\`Hello \${user.name}\`);
}`
  },
  {
    id: "react",
    title: "React.js",
    icon: Code2,
    definition: "A JavaScript library for building user interfaces based on components.",
    explanation: "React lets you build complex UIs by breaking them down into small, reusable pieces called components. It only updates the parts of the page that actually change, making it very fast.",
    keyConcepts: ["Components & Props", "State (useState)", "Effects (useEffect)", "Virtual DOM"],
    useCases: ["Single Page Applications (SPAs)", "Complex interactive dashboards", "Mobile apps (React Native)"],
    code: `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`
  },
  {
    id: "python",
    title: "Python",
    icon: Terminal,
    definition: "A high-level, general-purpose programming language known for its readability and simplicity.",
    explanation: "Python reads almost like English. It's incredibly versatile and is the go-to language for AI, data science, and quick backend scripting.",
    keyConcepts: ["Indentation & Syntax", "Lists & Dictionaries", "Decorators", "Generators"],
    useCases: ["AI & Machine Learning", "Data Analysis", "Backend web APIs", "Automation scripts"],
    code: `def calculate_average(numbers: list[int]) -> float:
    if not numbers:
        return 0.0
    return sum(numbers) / len(numbers)

scores = [85, 90, 92, 78]
print(f"Average score: {calculate_average(scores)}")`
  },
  {
    id: "django",
    title: "Django",
    icon: Server,
    definition: "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    explanation: "Django comes with 'batteries included'. It provides almost everything you need to build a secure, database-driven website right out of the box, including an admin panel.",
    keyConcepts: ["MTV Architecture", "ORM (Object-Relational Mapping)", "Admin Interface", "Migrations"],
    useCases: ["Content Management Systems", "E-commerce sites", "Secure enterprise web apps"],
    code: `from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title`
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    icon: Database,
    definition: "A powerful, open-source object-relational database system with a strong reputation for reliability.",
    explanation: "Postgres is a highly advanced spreadsheet that allows multiple programs to safely store, search, and connect massive amounts of data instantly using SQL.",
    keyConcepts: ["Relational Data", "ACID Compliance", "Indexes", "Joins"],
    useCases: ["Primary database for web apps", "Geospatial data storage", "Data warehousing"],
    code: `-- Creating a table and inserting data
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (email) VALUES ('hello@example.com');`
  },
  {
    id: "git",
    title: "Git",
    icon: Terminal,
    definition: "A distributed version control system that tracks changes in any set of computer files.",
    explanation: "Git is like a 'save game' system for your code. If you make a mistake, you can rewind time to a previous save. It also lets multiple developers work on the same code without overwriting each other.",
    keyConcepts: ["Commits", "Branches", "Merging & Rebasing", "Remotes"],
    useCases: ["Source code management", "Team collaboration", "CI/CD pipelines"],
    code: `# Create a new branch
git checkout -b feature/new-login

# Stage changes and commit
git add .
git commit -m "Add new login form"

# Push to remote repository
git push origin feature/new-login`
  }
];

export default function NotesPage() {
  const [activeNoteId, setActiveNoteId] = useState(NOTES_DATA[0].id);

  const activeNote = NOTES_DATA.find(note => note.id === activeNoteId)!;

  return (
    <main className="min-h-dvh flex flex-col gap-0 relative pb-20">
      <section className="pt-8 pb-10">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="size-6 text-foreground" />
              <h1 className="text-2xl font-bold text-foreground">Tech Notes</h1>
            </div>
            <p className="text-muted-foreground text-sm">
              A collection of fundamental concepts, mental models, and code snippets for my core tech stack.
            </p>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-col md:flex-row gap-6 mt-8">
              
              {/* Sidebar Tabs */}
              <div className="md:w-48 flex-none flex flex-row md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                {NOTES_DATA.map((note) => {
                  const isActive = activeNoteId === note.id;
                  const Icon = note.icon;
                  return (
                    <button
                      key={note.id}
                      onClick={() => setActiveNoteId(note.id)}
                      className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap md:whitespace-normal text-left ${
                        isActive 
                          ? "bg-foreground text-background shadow-sm" 
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Icon className="size-4 flex-none" />
                      {note.title}
                    </button>
                  );
                })}
              </div>

              {/* Note Content */}
              <div className="flex-1 min-w-0">
                <div key={activeNote.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h2 className="text-xl font-bold text-foreground mb-4">{activeNote.title}</h2>
                  
                  <div className="space-y-6">
                    {/* Definition */}
                    <div className="p-4 rounded-xl border border-border/50 bg-muted/20">
                      <p className="text-sm font-medium text-foreground leading-relaxed">
                        {activeNote.definition}
                      </p>
                    </div>

                    {/* Beginner Explanation */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">ELI5</h3>
                      <p className="text-[15px] text-foreground/90 leading-relaxed">
                        {activeNote.explanation}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Key Concepts */}
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Key Concepts</h3>
                        <ul className="space-y-1.5">
                          {activeNote.keyConcepts.map(concept => (
                            <li key={concept} className="text-sm text-foreground/80 flex items-center gap-2">
                              <span className="size-1 rounded-full bg-primary" />
                              {concept}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Use Cases</h3>
                        <ul className="space-y-1.5">
                          {activeNote.useCases.map(useCase => (
                            <li key={useCase} className="text-sm text-foreground/80 flex items-center gap-2">
                              <span className="size-1 rounded-full bg-primary" />
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Code Snippet */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Example</h3>
                      <div className="relative rounded-xl overflow-hidden border border-border/50 bg-zinc-950 dark:bg-zinc-900/50">
                        <pre className="p-4 overflow-x-auto text-sm text-zinc-50 font-mono leading-relaxed">
                          <code>{activeNote.code}</code>
                        </pre>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </BlurFade>

        </div>
      </section>
    </main>
  );
}
