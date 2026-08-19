import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  ExternalLink, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  Sparkles,
  MapPin,
  Flame
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    sound.playClick();
    const resumeText = `
KRISHNENDU MUHURI
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
Role: ${PERSONAL_INFO.role}
Academic: Bachelor of Computer Applications (BCA) - 2nd Year (CGPA: 9.2/10)

TECHNICAL SKILLS:
- Languages: C, C++, Python, Java
- Core CS: Data Structures & Algorithms (480+ Solved), Object-Oriented Programming, DBMS (SQL), Operating Systems, Computer Networks
- Web Development: React, TypeScript, Node.js, Express, Tailwind CSS, REST APIs, HTML5/CSS3
- Tools: Git, GitHub, Linux/Bash, VS Code, Postman, Vite

FEATURED PROJECTS:
1. AlgoVision - Algorithm & Pathfinding Lab (C++, TypeScript, React, Web Audio)
2. Nexus Commerce - Next-Gen Storefront (React, TypeScript, Tailwind, Node.js)
3. DataSphere - BCA Academic & CGPA Intelligence Portal (Java, SQL, React)
4. MemoryMaster - C/C++ Virtual Pointer & Heap Inspector (C/C++, Systems)

EDUCATION:
- Bachelor of Computer Applications (BCA) | CGPA: 9.2 / 10 | Current 2nd Year
- Higher Secondary (XII - Science / Computer Science) | 91.4% (CS: 97/100)

ACHIEVEMENTS:
- 480+ DSA questions solved across LeetCode and GFG
- Lead Mentor at College Coding Club
`.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={() => {
          sound.playClick();
          onClose();
        }}
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0b0f19] border border-cyan-500/40 rounded-3xl shadow-2xl overflow-y-auto z-10 text-left p-6 sm:p-10 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-base sm:text-lg font-mono font-bold text-white uppercase tracking-wider">
              Official Curriculum Vitae
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              title="Copy Plaintext Resume"
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              title="Print or Save PDF"
              className="px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-mono text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-cyan-600/30"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="mt-8 p-6 sm:p-8 bg-[#07090e] rounded-2xl border border-white/10 space-y-8 print:bg-white print:text-black">
          
          {/* Header Identity */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-mono text-cyan-300 font-semibold">
              {PERSONAL_INFO.role} • 2nd Year Undergrad
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" /> {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <GraduationCap className="w-3.5 h-3.5" /> CGPA: 9.2 / 10.0
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Academic Background
            </h2>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between items-baseline text-xs sm:text-sm">
                    <span className="font-bold text-white">{edu.title}</span>
                    <span className="font-mono text-xs text-slate-400">{edu.period}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>{edu.institution}</span>
                    <span className="font-mono text-emerald-400 font-semibold">{edu.grade}</span>
                  </div>
                  <p className="text-xs text-slate-300 pt-1">{edu.highlights[0]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Technical Skills Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <span className="font-mono font-bold text-slate-200">Programming Languages:</span>
                <p className="text-slate-300">C, C++ (C++20 & STL), Python 3, Java (Core & OOPs)</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <span className="font-mono font-bold text-slate-200">Data Structures & Algorithms:</span>
                <p className="text-slate-300">Graph Theory (Dijkstra, BFS/DFS), 1D/2D DP, Segment Trees, 480+ Solved</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <span className="font-mono font-bold text-slate-200">Web Development:</span>
                <p className="text-slate-300">React 19, TypeScript, Node.js, Express, Tailwind CSS, REST APIs</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <span className="font-mono font-bold text-slate-200">Core Computer Science:</span>
                <p className="text-slate-300">DBMS (SQL, Normalization), Operating Systems, Concurrency, Git/Linux</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Selected Key Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.slice(0, 3).map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white text-xs sm:text-sm">{proj.title}</span>
                    <span className="text-[11px] font-mono text-cyan-300">[{proj.techStack.slice(0, 3).join(', ')}]</span>
                  </div>
                  <p className="text-xs text-slate-300">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Mentorship */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              Leadership & Honors:
            </h2>
            <p className="text-xs text-slate-300">
              • Lead DSA Instructor & Mentor at College Coding Club: conducted hands-on coding sessions for 40+ juniors.<br />
              • Top Academic Rank across Semesters 1 & 2 in BCA Program with 9.2 Cumulative GPA.
            </p>
          </div>

        </div>

        {/* Footer Contact Trigger */}
        <div className="mt-6 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">Available for 2026 Summer Internships & Part-time / Remote roles.</span>
          <a
            href="mailto:krishnendumuhuri89@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
          >
            <span>Email Krishnendu</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
