import React, { useState } from 'react';
import { 
  Sparkles, 
  Terminal, 
  ArrowRight, 
  Code2, 
  Cpu, 
  FileText, 
  CheckCircle2, 
  Play, 
  Copy, 
  Check, 
  GraduationCap,
  Flame,
  Globe,
  Share2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { NavSection } from '../types';

interface HeroSectionProps {
  onNavigate: (section: NavSection) => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenResume }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'cpp' | 'java' | 'python' | 'web'>('cpp');
  const [copied, setCopied] = useState(false);
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [outputConsole, setOutputConsole] = useState<string | null>(null);

  const codeSnippets = {
    cpp: {
      lang: 'C++ 20 / STL',
      filename: 'dijkstra_shortest_path.cpp',
      code: `// Modern C++ Optimal Pathfinding
#include <iostream>
#include <vector>
#include <queue>

using namespace std;
using pii = pair<int, int>;

int shortestPath(int n, int src, int target, vector<vector<pii>>& adj) {
    vector<int> dist(n, 1e9);
    priority_queue<pii, vector<pii>, greater<pii>> pq;
    dist[src] = 0;
    pq.push({0, src});
    
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (u == target) return d;
        for (auto& [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist[target];
}`,
      output: `[GCC 13.2.0] Compilation Success (0.012s)
Target Node Reached: Minimum Weight = 14
Memory Overhead: 1.4 MB | Big-O: O((V + E) log V)`
    },
    java: {
      lang: 'Java 17',
      filename: 'BinaryTreeLCA.java',
      code: `// Java Lowest Common Ancestor (LCA)
public class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) return root;
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        
        if (left != null && right != null) return root;
        return left != null ? left : right;
    }
}`,
      output: `[OpenJDK 17] Test Suite Passed (100% Testcases)
Time Complexity: O(N) | Auxiliary Space: O(H)`
    },
    python: {
      lang: 'Python 3.12',
      filename: 'lru_cache_engine.py',
      code: `# Pythonic LRU Cache with O(1) Operations
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head, self.tail = Node(), Node()
        self.head.next, self.tail.prev = self.tail, self.head

    def get(self, key: int) -> int:
        if key in self.cache:
            self._remove(self.cache[key])
            self._insert(self.cache[key])
            return self.cache[key].val
        return -1`,
      output: `[Python 3.12.2] Unit Tests: 42/42 Passed
Benchmark: 1,000,000 queries processed in 0.048s`
    },
    web: {
      lang: 'TypeScript / React',
      filename: 'useAlgorithmEngine.ts',
      code: `// High-Performance React Hook with Web Audio
export function useAlgorithmEngine<T>(initialData: T[]) {
  const [state, setState] = useState<T[]>(initialData);
  const [isSorting, setIsSorting] = useState(false);

  const runQuickSort = async () => {
    setIsSorting(true);
    // Asynchronous step-by-step visual engine
    await executePartitionStep(state);
    setIsSorting(false);
  };

  return { state, isSorting, runQuickSort };
}`,
      output: `[Vite Engine] Fast Refresh Active
Render Time: 1.2ms | 60 FPS Visual Sync Active`
    }
  };

  const handleTabSwitch = (tab: 'cpp' | 'java' | 'python' | 'web') => {
    sound.playClick();
    setActiveCodeTab(tab);
    setOutputConsole(null);
  };

  const handleCopyCode = () => {
    sound.playClick();
    navigator.clipboard.writeText(codeSnippets[activeCodeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    sound.playClick();
    setIsRunningCode(true);
    setOutputConsole(null);
    setTimeout(() => {
      setIsRunningCode(false);
      setOutputConsole(codeSnippets[activeCodeTab].output);
      sound.playSuccess();
    }, 700);
  };

  return (
    <section 
      id="hero-section" 
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Bio, Status & Action CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium shadow-sm shadow-emerald-500/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for Internship & Roles</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-cyan-300 text-xs font-mono">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>BCA 2nd Year • CGPA 9.2</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-200 tracking-tight">
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Pitch & Philosophy */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Specialized in high-performance <strong className="text-cyan-300 font-semibold">Data Structures & Algorithms (C / C++ / Java / Python)</strong>, 
              robust problem-solving, and crafting fluid, human-centric <strong className="text-indigo-300 font-semibold">Full-Stack Web Applications</strong> with 
              production-grade responsiveness.
            </p>

            {/* Interactive Core Skills Pills */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2.5">
                Core Competencies & Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'C / C++', color: 'text-sky-400 bg-sky-950/40 border-sky-500/30' },
                  { name: 'Python', color: 'text-amber-400 bg-amber-950/40 border-amber-500/30' },
                  { name: 'Java & OOPs', color: 'text-orange-400 bg-orange-950/40 border-orange-500/30' },
                  { name: 'DSA & LeetCode (480+)', color: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30' },
                  { name: 'Website Development', color: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30' },
                  { name: 'React & TypeScript', color: 'text-indigo-400 bg-indigo-950/40 border-indigo-500/30' },
                  { name: 'DBMS & SQL', color: 'text-pink-400 bg-pink-950/40 border-pink-500/30' },
                ].map((item, idx) => (
                  <span
                    key={idx}
                    onMouseEnter={() => sound.playHover()}
                    className={`text-xs font-mono font-medium px-3 py-1 rounded-lg border ${item.color} shadow-sm hover:scale-105 transition-all cursor-default`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <button
                id="hero-cta-skills"
                onClick={() => {
                  sound.playClick();
                  onNavigate('skills');
                }}
                onMouseEnter={() => sound.playHover()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore 3D Skill Cards</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-dsa"
                onClick={() => {
                  sound.playClick();
                  onNavigate('dsa');
                }}
                onMouseEnter={() => sound.playHover()}
                className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 font-medium text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Launch DSA Studio</span>
              </button>

              <button
                id="hero-cta-resume"
                onClick={() => {
                  sound.playClick();
                  onOpenResume();
                }}
                onMouseEnter={() => sound.playHover()}
                className="px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-white/10 font-medium text-sm transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Fast Stats Metric Banner */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/10">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                  {PERSONAL_INFO.stats.dsaSolved}+
                </div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                  DSA Solved (LeetCode/GFG)
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                  {PERSONAL_INFO.stats.cgpa}
                </div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                  BCA Academic CGPA
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-400">
                  {PERSONAL_INFO.stats.githubRepos}+
                </div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                  Git Repos & Projects
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400">
                  2nd Year
                </div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                  BCA Milestone
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Interactive Code & Compilation Playground */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-card border border-cyan-500/30 shadow-2xl overflow-hidden">
              
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-[#0c101a] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    {codeSnippets[activeCodeTab].filename}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyCode}
                    title="Copy snippet"
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    id="hero-run-code-btn"
                    onClick={handleRunCode}
                    disabled={isRunningCode}
                    title="Execute code simulation"
                    className="px-2.5 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs flex items-center gap-1.5 shadow-md shadow-cyan-600/30 disabled:opacity-50 cursor-pointer"
                  >
                    {isRunningCode ? (
                      <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Play className="w-3 h-3 fill-current" />
                    )}
                    <span>{isRunningCode ? 'Compiling...' : 'Run'}</span>
                  </button>
                </div>
              </div>

              {/* Language Switcher Tabs */}
              <div className="px-4 pt-2.5 bg-[#090d16] border-b border-white/5 flex gap-1.5 overflow-x-auto">
                {(['cpp', 'java', 'python', 'web'] as const).map((tab) => {
                  const isActive = activeCodeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => handleTabSwitch(tab)}
                      onMouseEnter={() => sound.playHover()}
                      className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-all ${
                        isActive
                          ? 'bg-[#0f172a] text-cyan-300 border-t-2 border-cyan-400 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {codeSnippets[tab].lang}
                    </button>
                  );
                })}
              </div>

              {/* Code Box */}
              <div className="p-4 bg-[#07090e] font-mono text-xs text-slate-300 overflow-x-auto max-h-[300px] leading-relaxed">
                <pre className="whitespace-pre">
                  <code>{codeSnippets[activeCodeTab].code}</code>
                </pre>
              </div>

              {/* Console Output Pane */}
              {outputConsole && (
                <div className="p-3.5 bg-[#040609] border-t border-emerald-500/30 font-mono text-[11px] text-emerald-400">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1 text-[10px] uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Live Execution Output</span>
                  </div>
                  <pre className="whitespace-pre-wrap">{outputConsole}</pre>
                </div>
              )}

              {/* Footer status bar */}
              <div className="px-4 py-2 bg-[#090d16] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Interactive Engine Ready</span>
                </div>
                <span>BCA 2nd Year Portfolio</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
