// ====================================================================
// 📝 INTERVIEW PREPARATION DATA — Hemant Sonkar
// ====================================================================

export interface QA {
  q: string;
  a: string;
}

export interface CodingProblem {
  title: string;
  language: string;
  code: string;
}

/* ── HR Interview Questions ─────────────────────────────────── */
export const hrQuestions: QA[] = [
  {
    q: "Tell me about yourself.",
    a: `I'm Hemant Sonkar, a Full Stack Developer and AI Engineer pursuing B.Tech in CS at KMCLU, Lucknow. I specialize in Python, Django, and React.js. I've built production-grade platforms like AI-ROS (multi-agent SaaS with RAG, WebSockets, Redis/Celery) and AgroIntel AI (crop disease detection using CNN/ResNet). Currently interning at Techpile as a Full Stack Developer, I'm looking for roles where I can apply my full-stack and AI skills to build impactful products.`,
  },
  {
    q: "Why should we hire you?",
    a: `I bring a rare combination of full-stack development and AI engineering skills. I can build end-to-end — from database schema to AI agent orchestration to responsive UI. My AI-ROS project proves I can architect complex, production-grade systems. I'm currently gaining real-world experience at Techpile, and I deliver results with ownership and speed.`,
  },
  {
    q: "What are your strengths?",
    a: `1) Full-stack capability — I independently build from database to UI. 2) AI/ML integration — I integrate deep learning and RAG systems into web apps. 3) Quick learning — I taught myself LangChain, CrewAI, and ChromaDB to build AI-ROS. 4) Problem-solving — I debug systematically using logs, isolation, and methodical testing.`,
  },
  {
    q: "What are your weaknesses?",
    a: `I tend to over-engineer solutions. For AI-ROS, I initially designed an overly complex microservice architecture when a monolith would've sufficed for the MVP. I've since learned to ship a working version first and iterate. I now follow: "make it work, make it right, make it fast."`,
  },
  {
    q: "Where do you see yourself in 5 years?",
    a: `As a Senior Full Stack Engineer or AI Engineering Lead, architecting systems that serve thousands of users. I want to deepen expertise in distributed systems, AI infrastructure, and cloud-native architectures. Long-term, I want to lead an engineering team or build my own AI-focused SaaS product.`,
  },
  {
    q: "What is your biggest achievement?",
    a: `Building AI-ROS from scratch — a production-grade SaaS platform with multi-agent AI, RAG document intelligence, real-time WebSocket collaboration, and Docker deployment. It pushed me to learn LangChain, CrewAI, ChromaDB, Redis, and Celery within a tight timeline.`,
  },
  {
    q: "Describe a challenge you overcame.",
    a: `My initial CNN model for AgroIntel AI had ~65% accuracy. I overcame this by implementing data augmentation (rotation, flipping, zoom), switching to a pre-trained ResNet with transfer learning, and using Adam optimizer with LR scheduling. This significantly improved accuracy. Lesson: data quality matters as much as model architecture.`,
  },
  {
    q: "How do you handle pressure?",
    a: `I break tasks into smaller deliverables, prioritize the critical path, and communicate proactively about delays. At Techpile, tight deadlines taught me to focus on core functionality first, test it, deploy it, then polish. Pressure sharpens my focus.`,
  },
  {
    q: "Why do you want this role?",
    a: `This role aligns with my technical strengths. I've spent the last year building production-grade projects in this exact stack. I want to apply these skills in a professional environment, solve real problems at scale, learn from experienced engineers, and contribute meaningfully.`,
  },
  {
    q: "What makes you different from other candidates?",
    a: `Most candidates at my level have either web dev OR AI skills — I have both. I can build a complete SaaS from database design to AI agent orchestration to responsive UI. My AI-ROS project proves I can architect complex systems. I also bring internship experience and genuine passion for intelligent systems.`,
  },
  {
    q: "How do you stay updated with technology?",
    a: `GitHub trending repos, Django/React official blogs, YouTube for system design, and X/Twitter for AI research. I learn by building — every project incorporates at least one new technology. For example, I learned LangChain and CrewAI specifically for AI-ROS.`,
  },
  {
    q: "Do you prefer working alone or in a team?",
    a: `Both. For deep technical work like training ML models or debugging complex issues, I prefer focused solo time. For architecture decisions, code reviews, and feature planning, I thrive collaboratively. At Techpile, diverse perspectives lead to better solutions.`,
  },
];

/* ── Technical Questions by Category ───────────────────────── */
export const technicalCategories = [
  {
    category: "Python",
    icon: "🐍",
    questions: [
      { q: "What are the four pillars of OOP?", a: "Encapsulation (bundling data & methods), Inheritance (child inherits parent), Polymorphism (same method, different behavior), Abstraction (hiding complexity via abc module). In AgroIntel AI, I used inheritance for base model classes that CNN architectures extended." },
      { q: "Explain decorators with a real example.", a: "A decorator wraps a function to add behavior. @login_required, @api_view in Django are decorators. I use them for logging, auth, and permission checks across all my Django APIs." },
      { q: "What are generators? Why use them?", a: "Generators use 'yield' to produce values lazily — saving memory. Ideal for large datasets. In AgroIntel AI, I used generators for batch-loading training images to avoid loading the entire dataset into RAM." },
      { q: "Explain the GIL. How does it affect multithreading?", a: "The GIL ensures only one thread executes Python bytecode at a time. CPU-bound multithreading is ineffective. Solutions: multiprocessing for CPU tasks, threading for I/O, asyncio for concurrent I/O. In AI-ROS, Celery spawns separate processes to bypass the GIL." },
      { q: "How does Python manage memory?", a: "Reference counting (each object tracks references) plus cyclic garbage collector for circular refs. Memory allocated from private heap. del decrements count; at 0, memory freed." },
      { q: "List comprehension vs generator expression?", a: "[x**2 for x in range(1000)] creates entire list in memory. (x**2 for x in range(1000)) yields lazily. Use generators for large datasets, lists for indexing or multiple iterations." },
    ],
  },
  {
    category: "Django",
    icon: "🌿",
    questions: [
      { q: "Explain Django's MVT architecture.", a: "Model — data structure (ORM maps to DB tables). View — business logic, processes requests. Template — HTML presentation. URL dispatcher routes to views. Django's View is like MVC's Controller." },
      { q: "How does Django ORM work?", a: "Maps Python classes to DB tables, instances to rows. Advantages: DB-agnostic code, SQL injection prevention, migration system, Pythonic queries. Example: Article.objects.filter(author__name='Hemant').select_related('author')." },
      { q: "Explain JWT authentication in Django.", a: "Using simplejwt: user sends credentials → server returns access (15min) + refresh (7day) tokens. Access token in 'Authorization: Bearer' header. Refresh token obtains new access tokens. I use this in AI-ROS for all API + WebSocket auth." },
      { q: "What is Django middleware?", a: "Hook into request/response processing. Each middleware processes every request before the view and every response after. Order matters. I've written custom middleware for request logging and API rate limiting." },
      { q: "How do you optimize database queries?", a: "1) select_related() for FK joins, 2) prefetch_related() for M2M, 3) .only()/.defer() to limit columns, 4) DB indexing, 5) django-debug-toolbar for N+1 queries, 6) raw SQL for complex aggregations, 7) Redis caching." },
      { q: "How do you deploy Django?", a: "Gunicorn (WSGI) → Nginx (reverse proxy) → PostgreSQL → Redis → Docker containers → Docker Compose. collectstatic for static files. Environment variables via .env. This is exactly how AI-ROS is deployed." },
    ],
  },
  {
    category: "React.js",
    icon: "⚛️",
    questions: [
      { q: "Explain useState and useEffect.", a: "useState manages local state — returns [value, setter]. useEffect handles side effects (API calls, subscriptions) — runs after render. Dependency array controls re-runs. Empty array = mount only." },
      { q: "What is the Virtual DOM?", a: "Lightweight JS representation of real DOM. On state change, React creates new VDOM, diffs with previous (reconciliation), updates only changed real DOM nodes. Minimizes expensive DOM operations." },
      { q: "Props vs State?", a: "Props — passed parent to child, read-only, for configuration. State — managed within component, mutable via setter, triggers re-render. Props flow down; state is local." },
      { q: "Explain Context API.", a: "Avoids prop drilling by providing data to deeply nested components. createContext() → Provider wraps app → useContext() consumes. I use it in AI-ROS for auth state and theme management." },
      { q: "How do you optimize React performance?", a: "React.memo() prevents unnecessary re-renders, useMemo() for expensive calculations, useCallback() for stable refs, React.lazy() + Suspense for code splitting, virtualization for long lists." },
      { q: "Controlled vs uncontrolled components?", a: "Controlled: React manages value via state (onChange + value). Uncontrolled: DOM manages value, accessed via useRef. Controlled is preferred for form validation and conditional logic." },
    ],
  },
  {
    category: "JavaScript",
    icon: "📜",
    questions: [
      { q: "Explain closures.", a: "A closure is a function that remembers variables from its outer scope even after the outer function returns. Used for data privacy, callbacks, and factory functions." },
      { q: "What is hoisting?", a: "JS moves declarations to top of scope before execution. var is hoisted + initialized to undefined. let/const are hoisted but in Temporal Dead Zone until declaration — accessing them throws ReferenceError." },
      { q: "Explain the event loop.", a: "JS is single-threaded. Event loop manages: Call Stack (sync code), Microtask Queue (Promises), Macrotask Queue (setTimeout, I/O). Stack empties → microtasks first → one macrotask → repeat." },
      { q: "Promises vs async/await?", a: "Promises use .then()/.catch() chaining. async/await is syntactic sugar making async code look synchronous — easier to read and debug. Both handle asynchronous operations." },
      { q: "Key ES6+ features?", a: "Arrow functions, template literals, destructuring, spread/rest, let/const, classes, modules, Promise, Map/Set, optional chaining (?.), nullish coalescing (??), Array.from(), Object.entries()." },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    questions: [
      { q: "SQL JOIN types?", a: "INNER — matching rows only. LEFT — all left + matching right. RIGHT — all right + matching left. FULL OUTER — all rows from both. CROSS — cartesian product." },
      { q: "What is database indexing?", a: "Data structure (B-tree/hash) speeding up queries by avoiding full scans. Tradeoff: faster reads, slower writes, extra storage. Index frequently queried columns." },
      { q: "Explain normalization.", a: "Organizing data to reduce redundancy. 1NF: atomic values. 2NF: no partial dependencies. 3NF: no transitive dependencies. Denormalize strategically for read-heavy workloads." },
      { q: "PostgreSQL vs MongoDB?", a: "PostgreSQL: structured data, complex queries, ACID, JOINs. MongoDB: flexible schemas, document-based, rapid prototyping. In AI-ROS, I use PostgreSQL for relational data and ChromaDB for vectors." },
    ],
  },
  {
    category: "AI / ML",
    icon: "🧠",
    questions: [
      { q: "Explain CNN architecture.", a: "Convolutional layers (feature extraction via filters), pooling layers (dimensionality reduction), fully connected layers (classification). In AgroIntel AI, CNN extracts leaf texture, color, spot patterns to classify diseases." },
      { q: "Why ResNet? What problem does it solve?", a: "ResNet solves vanishing gradients using skip connections — allowing gradients to flow through shortcuts. Enables 100+ layer networks. I used ResNet-50 pretrained backbone in AgroIntel AI for transfer learning." },
      { q: "What is RAG?", a: "Retrieval-Augmented Generation: 1) Documents chunked + embedded into vectors, 2) Stored in vector DB (ChromaDB), 3) User query embedded, 4) Similar chunks retrieved, 5) Context + query sent to LLM for grounded response. Implemented in AI-ROS." },
      { q: "How does TF-IDF work?", a: "TF = term frequency in document. IDF = log(total docs / docs with term). TF×IDF = high score means term is important in that document. Used in AgroIntel AI for text-based disease info retrieval." },
      { q: "What is transfer learning?", a: "Using a model pretrained on large dataset (ImageNet) and fine-tuning on your task. Saves time, needs less data. I froze early ResNet layers and fine-tuned final layers on crop disease images." },
    ],
  },
];

/* ── Project Deep-Dive Q&A ─────────────────────────────────── */
export const projectQuestions = [
  {
    project: "AI-ROS",
    subtitle: "AI Autonomous Research Operating System",
    questions: [
      { q: "Explain the multi-agent AI workflow.", a: "Uses CrewAI to orchestrate specialized agents: Research Agent (searches via RAG), Writer Agent (generates reports), Reviewer Agent (validates content). Agents communicate through shared task pipeline with defined roles, goals, and tools." },
      { q: "Why Django for the backend?", a: "Batteries included (ORM, admin, auth, migrations), DRF for REST APIs, Python ecosystem compatibility with AI libraries (LangChain, ChromaDB), built-in security (CSRF, XSS, SQL injection protection)." },
      { q: "How does ChromaDB work in your RAG pipeline?", a: "Documents uploaded → chunked (512 tokens, 50-token overlap) → embedded via OpenAI → stored in ChromaDB. User query embedded → cosine similarity search → top-K chunks retrieved → injected into LLM prompt for grounded response." },
      { q: "Explain the Redis/Celery setup.", a: "Redis as message broker + cache. Celery handles async tasks: document embedding (30+ sec), AI agent execution, report generation, notifications. Separate workers with concurrency=4, retry with exponential backoff." },
      { q: "How did you implement WebSockets?", a: "Django Channels + Redis channel layer. AsyncWebsocketConsumer authenticates via JWT, joins user-specific groups. Celery workers push real-time updates (task progress, agent responses) to connected clients." },
      { q: "Describe the SaaS architecture.", a: "Multi-tenant: separate ChromaDB collections per user, row-level filtering. Subscription tiers with middleware rate limiting. Stateless Django (horizontally scalable), Docker Compose orchestration for all services." },
    ],
  },
  {
    project: "AgroIntel AI",
    subtitle: "Crop Disease Detection System",
    questions: [
      { q: "Why did you build this?", a: "Agriculture is India's backbone. Crop diseases cause massive yield losses. Most farmers lack expert access. I wanted an accessible AI solution — photograph a leaf, get instant diagnosis with treatment recommendations." },
      { q: "Walk me through the architecture.", a: "Frontend (React.js) for image upload → Backend (Django REST) receives, preprocesses, predicts → ML Pipeline (ResNet-50 on TensorFlow) trained on PlantVillage dataset (38 classes). NLP module (NLTK/spaCy + TF-IDF) for text-based disease retrieval." },
      { q: "How did you optimize accuracy?", a: "Transfer learning (freeze early ResNet layers, fine-tune last 3 blocks), data augmentation (6 types), Adam optimizer + ReduceLROnPlateau, dropout 0.3–0.5, early stopping, batch normalization, confusion matrix analysis." },
      { q: "What challenges did you face?", a: "1) Lab images vs real-world photos — added background noise augmentation. 2) Model size (~100MB) — used quantization, loaded once at startup. 3) Combining CV + NLP — designed unified response pipeline where CV results trigger TF-IDF document retrieval." },
    ],
  },
];

/* ── Coding Problems ───────────────────────────────────────── */
export const codingProblems: CodingProblem[] = [
  {
    title: "Two Sum — O(n) with hash map",
    language: "python",
    code: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

print(two_sum([2, 7, 11, 15], 9))  # [0, 1]`,
  },
  {
    title: "Valid Parentheses — Stack",
    language: "python",
    code: `def is_valid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            if not stack or stack[-1] != mapping[char]:
                return False
            stack.pop()
        else:
            stack.append(char)
    return len(stack) == 0

print(is_valid("({[]})"))  # True`,
  },
  {
    title: "Fibonacci with Memoization",
    language: "python",
    code: `from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(50))  # 12586269025 — instant`,
  },
  {
    title: "Debounce Function",
    language: "javascript",
    code: `function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(
      () => func.apply(this, args),
      delay
    );
  };
}
// Usage: search input
const search = debounce((q) => {
  fetch(\`/api/search?q=\${q}\`);
}, 300);`,
  },
  {
    title: "Django REST API Endpoint",
    language: "python",
    code: `# models.py
class Task(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

# serializers.py
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

# views.py
class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]`,
  },
  {
    title: "SQL — Second Highest Salary",
    language: "sql",
    code: `SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;`,
  },
];

/* ── 7-Day Roadmap ─────────────────────────────────────────── */
export const roadmap = [
  { day: "Day 1", title: "Foundation & Self-Introduction", tasks: ["Memorize all 3 intro versions (practice aloud 5×)", "Perfect 'Tell Me About Yourself' answer", "Review every line of your resume", "Prepare 3 STAR method stories", "Research 3 target companies"] },
  { day: "Day 2", title: "Python & Django Deep Dive", tasks: ["Review all Python technical questions", "Review all Django technical questions", "Write models, serializers, views from memory", "Build a mini REST API (30 min)", "Review ORM optimization techniques"] },
  { day: "Day 3", title: "React.js & JavaScript Mastery", tasks: ["Review all React questions", "Review all JavaScript questions", "Build a React component with hooks from scratch", "Practice explaining Virtual DOM, closures, event loop", "Review async/await patterns"] },
  { day: "Day 4", title: "Project Deep Dive", tasks: ["Whiteboard AI-ROS architecture", "Explain CNN/ResNet pipeline for AgroIntel", "Practice RAG architecture step-by-step", "Prepare 'challenges faced' answers", "Review internship stories"] },
  { day: "Day 5", title: "DSA & Coding Practice", tasks: ["Solve 5 Python coding problems", "Solve 3 JavaScript problems", "Solve 5 SQL queries", "Practice binary search, hash maps, two pointers", "Time yourself — 15 min per problem"] },
  { day: "Day 6", title: "HR & Behavioral Prep", tasks: ["Review all 50+ HR questions", "Practice 10 HR questions aloud with timer", "Prepare salary negotiation points", "Prepare 5 questions to ask the interviewer", "Mock interview with a friend or record yourself"] },
  { day: "Day 7", title: "Final Review & Mock Round", tasks: ["Quick review all sections (skim key points)", "Run through one complete mock round", "Review weak areas from the week", "Prepare outfit and setup (video calls)", "Rest well — sleep is preparation too"] },
];
