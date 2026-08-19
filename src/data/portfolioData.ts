import { SkillItem, ProjectItem, EducationMilestone, DsaTopic } from '../types';

export const PERSONAL_INFO = {
  name: 'Krishnendu Muhuri',
  role: 'BCA 2nd Year Student & Software Developer',
  tagline: 'Crafting High-Performance Algorithms & Ultra-Fast Modern Web Architectures',
  subheading: 'Passionate about Data Structures, Algorithmic Optimization (C / C++ / Java / Python), and Building Scalable, Human-Centric Full-Stack Web Applications.',
  email: 'krishnendumuhuri89@gmail.com',
  location: 'Kolkata / India',
  academicStatus: 'Bachelor of Computer Applications (BCA) - 2nd Year (Semester 3/4)',
  availableForHire: true,
  stats: {
    dsaSolved: 480,
    githubRepos: 28,
    certifications: 6,
    cgpa: '9.2 / 10',
    yearsCoding: '3+',
  },
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    leetcode: 'https://leetcode.com',
    codeforces: 'https://codeforces.com',
    email: 'mailto:krishnendumuhuri89@gmail.com'
  }
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'c-lang',
    name: 'C Programming',
    category: 'languages',
    icon: 'Terminal',
    level: 92,
    badge: 'Core Foundation',
    color: '#38bdf8',
    accentGradient: 'from-sky-500/20 via-cyan-500/10 to-transparent',
    shortDesc: 'Low-level memory management, pointers arithmetic, struct serialization, and system architecture fundamentals.',
    details: {
      coreConcepts: [
        'Dynamic Memory Allocation (malloc, calloc, realloc, free)',
        'Pointers, Double Pointers & Function Pointers',
        'Bitwise Operations & Struct Memory Alignment',
        'Custom Data Structures (Linked Lists, Binary Trees from scratch)',
        'File I/O Streams & POSIX standard library'
      ],
      useCases: ['Systems Programming', 'Embedded Logic', 'DSA from ground up', 'Memory Optimization'],
      snippetLang: 'c',
      codeSnippet: `#include <stdio.h>
#include <stdlib.h>

// Generic Dynamic Int Array in C
typedef struct {
    int *data;
    size_t size;
    size_t capacity;
} Vector;

Vector* create_vector(size_t cap) {
    Vector *v = (Vector*)malloc(sizeof(Vector));
    v->data = (int*)malloc(cap * sizeof(int));
    v->size = 0;
    v->capacity = cap;
    return v;
}`,
      solvedProblemsCount: 120,
      experienceTime: '2.5 Years'
    }
  },
  {
    id: 'cpp-lang',
    name: 'C++ & STL',
    category: 'languages',
    icon: 'Cpu',
    level: 94,
    badge: 'Competitive Edge',
    color: '#0284c7',
    accentGradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    shortDesc: 'Modern C++ (C++17/20), STL containers, RAII, templates, object-oriented paradigms, and competitive programming speed.',
    details: {
      coreConcepts: [
        'STL Mastery (Vectors, Maps, Sets, Priority Queues, Deque)',
        'OOPs: Inheritance, Polymorphism, Virtual Tables, Encapsulation',
        'Templates, Iterators & Custom Hash Functors',
        'Move Semantics (std::move, rvalue references)',
        'Fast I/O & Memory-optimized Big-O algorithmic solutions'
      ],
      useCases: ['Competitive Programming (LeetCode/Codeforces)', 'High-Performance Computing', 'Game/Engine Subsystems'],
      snippetLang: 'cpp',
      codeSnippet: `#include <iostream>
#include <vector>
#include <queue>

// Dijkstra Shortest Path Template in C++ STL
using pii = std::pair<int, int>;

std::vector<int> dijkstra(int n, int src, const std::vector<std::vector<pii>>& adj) {
    std::vector<int> dist(n, 1e9);
    std::priority_queue<pii, std::vector<pii>, std::greater<pii>> pq;
    dist[src] = 0;
    pq.push({0, src});
    while(!pq.empty()){
        auto [d, u] = pq.top(); pq.pop();
        if (d > dist[u]) continue;
        for (auto &[v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}`,
      solvedProblemsCount: 260,
      experienceTime: '2+ Years'
    }
  },
  {
    id: 'dsa-core',
    name: 'Data Structures & Algorithms',
    category: 'dsa',
    icon: 'Boxes',
    level: 95,
    badge: 'Core Problem Solver',
    color: '#10b981',
    accentGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    shortDesc: 'Deep theoretical & practical mastery in Graph theory, Dynamic Programming, Segment Trees, Trees, and Sorting analysis.',
    details: {
      coreConcepts: [
        'Graph Algorithms (BFS/DFS, Dijkstra, Bellman-Ford, Kruskal, Topological Sort)',
        'Dynamic Programming (1D/2D DP, Memoization, Tabulation, Knapsack, LCS)',
        'Trees (Binary Trees, BST, AVL Trees, Segment Trees, Trie)',
        'Two Pointers, Sliding Window, Monotonic Stacks, Binary Search',
        'Time & Space Complexity Proofs & Big-O Rigor'
      ],
      useCases: ['Technical Coding Rounds', 'System Efficiency', 'Graph Modeling', 'Real-time Search Queries'],
      snippetLang: 'cpp',
      codeSnippet: `// Kadane's Algorithm for Maximum Subarray Sum (O(N) time, O(1) space)
int maxSubArray(const std::vector<int>& nums) {
    int maxSoFar = nums[0];
    int currMax = nums[0];
    for (size_t i = 1; i < nums.size(); ++i) {
        currMax = std::max(nums[i], currMax + nums[i]);
        maxSoFar = std::max(maxSoFar, currMax);
    }
    return maxSoFar;
}`,
      solvedProblemsCount: 480,
      experienceTime: 'Active Daily'
    }
  },
  {
    id: 'python-lang',
    name: 'Python',
    category: 'languages',
    icon: 'Sparkles',
    level: 88,
    badge: 'Versatile & Clean',
    color: '#eab308',
    accentGradient: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    shortDesc: 'Automation, scripting, rapid prototyping, backend API microservices, data manipulation, and algorithmic experimentation.',
    details: {
      coreConcepts: [
        'List Comprehensions, Generators, Decorators & Context Managers',
        'Data Analysis with NumPy, Pandas basics & Math operations',
        'Web Scraping (BeautifulSoup, Requests, Scrapy)',
        'REST APIs with FastAPI & Flask',
        'Object-Oriented Python & Functional toolsets (map/filter/reduce)'
      ],
      useCases: ['Automation Scripts', 'Fast Backend Services', 'Algorithmic Prototyping', 'Data Pipelines'],
      snippetLang: 'python',
      codeSnippet: `import time
from functools import lru_cache

# LRU Cache Memoized Fibonacci & Performance Metric
@lru_cache(maxsize=None)
def fibonacci(n: int) -> int:
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

if __name__ == "__main__":
    t0 = time.perf_counter()
    res = fibonacci(100)
    print(f"Fib(100) calculated in {time.perf_counter() - t0:.6f}s")`,
      solvedProblemsCount: 95,
      experienceTime: '2 Years'
    }
  },
  {
    id: 'java-lang',
    name: 'Java & OOPs',
    category: 'languages',
    icon: 'Code2',
    level: 90,
    badge: 'Enterprise Architecture',
    color: '#f97316',
    accentGradient: 'from-orange-500/20 via-amber-500/10 to-transparent',
    shortDesc: 'Robust Object-Oriented Design, Java Collections Framework, Exception handling, Multi-threading, and JVM memory model.',
    details: {
      coreConcepts: [
        'Core OOPs: Abstract Classes, Interfaces, Diamond Problem resolution',
        'Java Collections: HashMap collision handling, ArrayList, PriorityQueue',
        'Streams API & Lambda Expressions (Java 8+)',
        'Multithreading (Runnable, Synchronized blocks, ExecutorService)',
        'JDBC, Hibernate basics, and Clean Modular Architecture'
      ],
      useCases: ['Enterprise Software', 'BCA Academic Systems', 'Scalable Backend Microservices', 'Android / Java Core'],
      snippetLang: 'java',
      codeSnippet: `import java.util.*;

public class LRUCache<K, V> {
    private final int capacity;
    private final Map<K, V> map;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new LinkedHashMap<>(capacity, 0.75f, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
                return size() > LRUCache.this.capacity;
            }
        };
    }
    public synchronized V get(K key) { return map.get(key); }
    public synchronized void put(K key, V value) { map.put(key, value); }
}`,
      solvedProblemsCount: 140,
      experienceTime: '2 Years'
    }
  },
  {
    id: 'web-dev',
    name: 'Website Development',
    category: 'web',
    icon: 'Globe',
    level: 93,
    badge: 'Full-Stack Modern Web',
    color: '#06b6d4',
    accentGradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    shortDesc: 'Modern responsive SPAs & full-stack apps with React, TypeScript, Node.js, Express, Tailwind CSS, REST APIs & state engines.',
    details: {
      coreConcepts: [
        'React 18/19 (Hooks, Context, Memo, Suspense, Custom Hooks)',
        'TypeScript (Strict Type-safety, Generics, Discriminated Unions)',
        'Tailwind CSS & Responsive Layout Architecture (Mobile-first, Glassmorphism)',
        'Node.js & Express.js (REST APIs, Middlewares, JWT Auth, CORS)',
        'State Management, Web Audio API, Canvas 2D, Framer Motion transitions'
      ],
      useCases: ['High-Definition SPAs', 'Interactive Web Tools', 'E-Commerce Portals', 'Real-Time Dashboards'],
      snippetLang: 'typescript',
      codeSnippet: `import React, { useState, useEffect } from 'react';

// Custom Typed Hook with Local Storage Sync
export function usePersistedState<T>(key: string, initial: T) {
  const [val, setVal] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [key, val]);

  return [val, setVal] as const;
}`,
      solvedProblemsCount: 15,
      experienceTime: '2+ Years'
    }
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving & Logic',
    category: 'dsa',
    icon: 'Lightbulb',
    level: 94,
    badge: 'Analytical Mindset',
    color: '#8b5cf6',
    accentGradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
    shortDesc: 'Mathematical modeling, time-space trade-offs, edge-case hardening, recursive backtracking, and system decomposition.',
    details: {
      coreConcepts: [
        'Divide and Conquer & Greedy Strategies',
        'Combinatorics, Modular Arithmetic & Number Theory',
        'State Space Search & Backtracking (N-Queens, Sudoku Solver)',
        'Bit Manipulation (Bitmask DP, XOR properties, subset generation)',
        'Robust Edge Case Validation & Stress Testing'
      ],
      useCases: ['Competitive Programming', 'System Optimization', 'Algorithm Architecture', 'Coding Contests'],
      snippetLang: 'cpp',
      codeSnippet: `// Fast Exponentiation (O(log N) Time)
long long power(long long base, long long exp, long long mod) {
    long long res = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1) res = (res * base) % mod;
        base = (base * base) % mod;
        exp >>= 1;
    }
    return res;
}`,
      solvedProblemsCount: 480,
      experienceTime: 'Daily Practice'
    }
  },
  {
    id: 'core-cs',
    name: 'DBMS, OS & Networks',
    category: 'core_cs',
    icon: 'Database',
    level: 89,
    badge: 'Computer Science Core',
    color: '#ec4899',
    accentGradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
    shortDesc: 'Relational database design, SQL querying, indexing, ACID transactions, process scheduling, concurrency, and TCP/IP.',
    details: {
      coreConcepts: [
        'Database Management: SQL, 3NF Normalization, Indexing (B+ Trees), Transactions',
        'Operating Systems: Process Management, Threads, Deadlocks, Virtual Memory, Paging',
        'Computer Networks: OSI & TCP/IP Model, HTTP/HTTPS, DNS, WebSockets, Sockets',
        'System Design Principles: Separation of Concerns, RESTful API constraints'
      ],
      useCases: ['Academic Excellence (BCA)', 'Technical Interviews', 'Full-Stack Scalability', 'Backend Architecture'],
      snippetLang: 'sql',
      codeSnippet: `-- Complex Relational Query with Window Functions
SELECT 
    student_id, 
    subject_code, 
    marks,
    RANK() OVER (PARTITION BY subject_code ORDER BY marks DESC) as subject_rank,
    AVG(marks) OVER (PARTITION BY student_id) as student_avg_gpa
FROM exam_records
WHERE semester = 3;`,
      solvedProblemsCount: 45,
      experienceTime: 'BCA 2nd Year Curriculum'
    }
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'algo-visualizer',
    title: 'AlgoVision - Dynamic Algorithm & Pathfinding Lab',
    tagline: 'Interactive visual benchmark and step-by-step simulator for sorting and graph traversals with real-time sound feedback.',
    category: 'DSA / Algorithms',
    description: 'An interactive algorithmic laboratory built to visualize Pathfinding (Dijkstra, A*, BFS, DFS) and Sorting Algorithms (QuickSort, MergeSort, HeapSort, BubbleSort) with variable speeds, step-by-step audio synthesis, and custom obstacle grids.',
    detailedOverview: 'Engineered from scratch to deepen intuition on complex DSA topics. Allows students and developers to construct custom mazes, trigger weighted path calculations, and visualize recursion trees while listening to synthesized audio frequencies proportional to array element comparisons.',
    image: 'https://images.unsplash.com/photo-1516116211229-5d3065853332?q=80&w=1200&auto=format&fit=crop',
    tags: ['C++', 'TypeScript', 'React', 'DSA', 'Web Audio API', 'Algorithms'],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Web Audio API', 'Canvas / Grid Engine'],
    metrics: [
      { label: 'Algorithms Supported', value: '10+' },
      { label: 'Audio Latency', value: '< 2ms' },
      { label: 'Frame Rate', value: '60 FPS Smooth' }
    ],
    features: [
      'Interactive Dijkstra & A* pathfinding on custom interactive 2D grid',
      'Step-by-step sorting array comparisons with live swap counters',
      'Harmonic acoustic feedback reflecting element height during execution',
      'Complexity breakdown showing Big-O for Worst, Average & Best cases',
      'Custom array generator (Random, Nearly Sorted, Reversed, Few Unique)'
    ],
    githubUrl: 'https://github.com/krishnendumuhuri/algovision-lab',
    liveUrl: '#dsa',
    architectureHighlights: [
      'Pure asynchronous generator pipeline for step pause/resume without thread blocking',
      'Zero-allocation render loop using SVG and CSS transform matrix',
      'Dynamic heuristic weight tuning for A* Euclidean vs Manhattan distance'
    ],
    featured: true
  },
  {
    id: 'nexus-store',
    title: 'Nexus Commerce - High-Performance Next-Gen Storefront',
    tagline: 'Nike & Amazon inspired modern e-commerce experience with 3D product cards, instant search, dynamic cart and checkout.',
    category: 'Web Dev',
    description: 'A realistic, human-crafted e-commerce platform boasting fluid micro-interactions, responsive 3D tilt product showcases, instant faceted filtering, persistent cart state, and an intuitive checkout flow.',
    detailedOverview: 'Built to emulate the ultra-refined user experience of top-tier consumer brands like Nike and Apple. Features rich product galleries, size/color selectors, instant coupon code calculations, and crisp interactive sound triggers on user actions.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'E-Commerce', 'UI/UX'],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Motion Animations', 'Local Persistence'],
    metrics: [
      { label: 'Lighthouse Score', value: '98 / 100' },
      { label: 'Interaction Delay', value: 'Instant' },
      { label: 'Responsiveness', value: '100% Mobile Ready' }
    ],
    features: [
      'Interactive 3D hover cards with dynamic glare and optical depth',
      'Instant search and multi-category filters (Price, Category, Rating)',
      'Flyout slide-over cart drawer with live subtotal and tax calculation',
      'Interactive product modal with zoom inspection and reviews simulation',
      'Realistic checkout flow with order tracking generator'
    ],
    githubUrl: 'https://github.com/krishnendumuhuri/nexus-commerce',
    liveUrl: 'https://github.com/krishnendumuhuri/nexus-commerce',
    architectureHighlights: [
      'Optimistic UI state updates for immediate feedback on cart actions',
      'Tailwind CSS layout math avoiding layout shift (CLS: 0.00)',
      'Custom React reducer pattern for complex order state management'
    ],
    featured: true
  },
  {
    id: 'datasphere-bca',
    title: 'DataSphere - BCA Student Academic & CGPA Intelligence Portal',
    tagline: 'Comprehensive academic dashboard for BCA students with semester syllabus tracking, CGPA projections, and attendance analytics.',
    category: 'Full-Stack',
    description: 'A dedicated academic portal designed for BCA students to monitor coursework across 6 semesters, calculate credit-weighted SGPA/CGPA, log daily lecture attendance with 75% threshold warnings, and organize revision notes.',
    detailedOverview: 'Born out of real academic needs in 2nd year BCA. Features complete course outlines for C, Data Structures, DBMS, Java, Operating Systems, Mathematics, and Computer Architecture with built-in timetable management.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop',
    tags: ['Java', 'React', 'TypeScript', 'SQL', 'Academic Tool', 'Analytics'],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'IndexedDB / LocalStorage', 'Charts Engine'],
    metrics: [
      { label: 'Semesters Mapped', value: 'Sem 1 to 6' },
      { label: 'Calculation Accuracy', value: '100% (Credit Weighted)' },
      { label: 'Active BCA Modules', value: '24+ Subjects' }
    ],
    features: [
      'Interactive SGPA / CGPA Target Projection Calculator',
      'BCA Semester 1-6 Subject Syllabus breakdown & Progress Tracker',
      'Attendance tracker with intelligent "Bunk or Attend" threshold predictor',
      'Formula cheat sheets for Discrete Math, DSA, and DBMS SQL Queries',
      'Exportable academic performance summary report'
    ],
    githubUrl: 'https://github.com/krishnendumuhuri/datasphere-bca-portal',
    liveUrl: 'https://github.com/krishnendumuhuri/datasphere-bca-portal',
    architectureHighlights: [
      'Strict TypeScript interfaces for academic credit calculation formulas',
      'Responsive data tables with sorting and live search',
      'Zero-latency offline-first architecture with instant backup & restore'
    ],
    featured: true
  },
  {
    id: 'memory-master',
    title: 'MemoryMaster - C/C++ Virtual Pointer & Heap Inspector',
    tagline: 'Visual educational tool explaining pointer dereferencing, stack frames, heap allocation (malloc/free), and memory leaks.',
    category: 'Systems & C++',
    description: 'An interactive simulator built for CS students to visualize how the C runtime manages memory segments (Code, Data, Heap, Stack). Users can trigger malloc, free, pointer arithmetic, and watch memory addresses update in real-time.',
    detailedOverview: 'Demystifies low-level memory operations in C and C++. Allows users to inspect pointer referencing (`&x`), value dereferencing (`*ptr`), dangling pointers, double-free faults, and buffer overflow risks with graphic diagnostics.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    tags: ['C', 'C++', 'Memory Architecture', 'Pointers', 'Educational', 'DSA'],
    techStack: ['C/C++ Logic', 'TypeScript', 'React', 'Canvas Grid', 'Tailwind CSS'],
    metrics: [
      { label: 'Memory Segments', value: 'Heap, Stack, Data' },
      { label: 'Fault Detectors', value: 'Leaks & Dangling Pointers' },
      { label: 'Target Audience', value: 'BCA & BTech Students' }
    ],
    features: [
      'Interactive Stack Frame expansion on function calls',
      'Dynamic Heap block allocation with simulated hex addresses (e.g. 0x7ffd2a)',
      'Visual pointer arrows showing direct and double pointer referencing',
      'Memory leak warnings when free() is omitted before function return',
      'C Code Sandbox that parses allocation commands step-by-step'
    ],
    githubUrl: 'https://github.com/krishnendumuhuri/memory-master-cpp',
    liveUrl: 'https://github.com/krishnendumuhuri/memory-master-cpp',
    architectureHighlights: [
      'Custom stateful memory virtual machine modeling 64-bit address spaces',
      'High-contrast visual memory block fragmentation indicators',
      'Interactive debugger step-forward and step-backward controls'
    ],
    featured: false
  },
  {
    id: 'algoarena',
    title: 'AlgoArena - Curated DSA Challenge & LeetCode Tracker',
    tagline: 'Platform to practice, track and conquer top 450 DSA problems across all data structures with optimal solutions in C++, Java & Python.',
    category: 'DSA / Algorithms',
    description: 'A comprehensive competitive programming workspace containing curated problem sets (Love Babbar 450, Striver SDE Sheet, NeetCode), revision spaced repetition, notes, and complexity breakdowns.',
    detailedOverview: 'Built to streamline personal competitive programming practice. Includes code editors, solution diffs in C++, Java, and Python, time-complexity tags, and personal bookmarks for hard problems.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop',
    tags: ['DSA', 'C++', 'Java', 'Python', 'Problem Solving', 'React'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Prism Code Highlighter', 'Local Storage'],
    metrics: [
      { label: 'Curated Questions', value: '450+ Problems' },
      { label: 'Solution Languages', value: 'C++, Java, Python' },
      { label: 'Revision Tracker', value: 'Spaced Repetition' }
    ],
    features: [
      'Categorized roadmap: Arrays, Strings, Linked Lists, Trees, Graphs, DP',
      'Filter by difficulty (Easy, Medium, Hard) & company tags',
      'Multi-language solution tabs (C++ STL, Java Collections, Pythonic)',
      'Personal progress ring with solved vs remaining analytics',
      'Quick code scratchpad with syntax highlighting'
    ],
    githubUrl: 'https://github.com/krishnendumuhuri/algoarena-tracker',
    liveUrl: 'https://github.com/krishnendumuhuri/algoarena-tracker',
    architectureHighlights: [
      'Fast client-side indexing with fuzzy search over 450+ problem entries',
      'Exportable progress JSON for cross-device backup',
      'Clean keyboard shortcuts for rapid navigation (J/K, Mark Done)'
    ],
    featured: false
  }
];

export const EDUCATION_DATA: EducationMilestone[] = [
  {
    period: '2024 - 2027 (Expected)',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'University Department / College of Computer Applications',
    grade: 'Current CGPA: 9.2 / 10 (Dean\'s Honor List)',
    status: 'Current',
    highlights: [
      'Currently in 2nd Year (Semester 3/4)',
      'Top rank in Programming in C, Object Oriented Programming with C++/Java, and Data Structures',
      'Active Leader in College Coding Club: Mentoring 1st-year juniors in DSA fundamentals',
      'Completed academic projects in DBMS SQL normalization, OS Process scheduling simulators, and Web applications'
    ],
    courses: [
      'Data Structures & Algorithms (C & C++)',
      'Object-Oriented Programming (Java / C++)',
      'Database Management Systems (SQL & Relational Design)',
      'Operating Systems & System Calls',
      'Computer Organization & Architecture',
      'Discrete Mathematics & Numerical Methods',
      'Web Technology & Internet Applications'
    ]
  },
  {
    period: '2022 - 2024',
    title: 'Higher Secondary Education (Class XII) - Science / Computer Science',
    institution: 'Higher Secondary School',
    grade: 'Score: 91.4% (Computer Science: 97/100)',
    status: 'Completed',
    highlights: [
      'Secured Distinction with specialized focus in Mathematics, Physics, and Computer Science',
      'School coding award for developing an automated Library Management System in Python & C++'
    ],
    courses: [
      'Computer Science (Python & C++ Fundamentals)',
      'Mathematics (Calculus, Probability, Vectors, Matrices)',
      'Physics',
      'Chemistry'
    ]
  }
];

export const DSA_TOPICS_STATS: DsaTopic[] = [
  { name: 'Arrays & Strings', solved: 110, total: 120, color: '#38bdf8', icon: 'Array' },
  { name: 'Two Pointers & Sliding Window', solved: 45, total: 50, color: '#0284c7', icon: 'MoveHorizontal' },
  { name: 'Linked Lists & Stacks/Queues', solved: 60, total: 65, color: '#10b981', icon: 'Layers' },
  { name: 'Trees & Binary Search Trees', solved: 75, total: 85, color: '#8b5cf6', icon: 'GitFork' },
  { name: 'Graphs & BFS/DFS/Dijkstra', solved: 55, total: 70, color: '#ec4899', icon: 'Share2' },
  { name: 'Dynamic Programming (DP)', solved: 65, total: 80, color: '#f59e0b', icon: 'Boxes' },
  { name: 'Recursion & Backtracking', solved: 40, total: 45, color: '#f97316', icon: 'RotateCcw' },
  { name: 'Bit Manipulation & Math', solved: 30, total: 35, color: '#14b8a6', icon: 'Binary' }
];

export const TERMINAL_COMMANDS_HELP = [
  { cmd: 'help', desc: 'Lists all available interactive terminal commands' },
  { cmd: 'whoami', desc: 'Displays Krishnendu\'s profile, education & current status' },
  { cmd: 'skills', desc: 'Displays all technical skills: C, C++, Python, Java, DSA, Web Dev' },
  { cmd: 'projects', desc: 'Lists full project showcase with tech stacks and links' },
  { cmd: 'dsa', desc: 'Shows detailed competitive programming and DSA metrics' },
  { cmd: 'bca', desc: 'Outputs BCA 2nd year course details, subjects, and CGPA' },
  { cmd: 'contact', desc: 'Shows email, GitHub, LinkedIn, and messaging options' },
  { cmd: 'cat resume.txt', desc: 'Outputs summarized text resume directly in console' },
  { cmd: 'clear', desc: 'Clears the terminal screen buffer' }
];
