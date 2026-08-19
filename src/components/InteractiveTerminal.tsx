import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  CornerDownLeft, 
  Trash2, 
  Maximize2, 
  Sparkles, 
  Copy, 
  Check 
} from 'lucide-react';
import { sound } from '../utils/audio';
import { PERSONAL_INFO, TERMINAL_COMMANDS_HELP, SKILLS_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'whoami',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">➜ Krishnendu Muhuri | BCA 2nd Year Student & Software Developer</p>
          <p className="text-xs">Location: Kolkata, India • Email: krishnendumuhuri89@gmail.com</p>
          <p className="text-xs text-slate-400">Current Academic Standing: CGPA 9.2/10 • DSA Solved: 480+ Problems</p>
          <p className="text-xs text-emerald-400">Type 'help' to see full command palette.</p>
        </div>
      ),
      timestamp: '21:30:00'
    }
  ]);

  const [commandHistory, setCommandHistory] = useState<string[]>(['whoami']);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    sound.playKeystroke();

    if (!cmd) return;

    setCommandHistory(prev => [...prev, rawCmd]);
    setHistoryIdx(-1);

    const now = new Date().toLocaleTimeString();

    if (cmd === 'clear') {
      sound.playClick();
      setHistory([]);
      setInputVal('');
      return;
    }

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 py-1">
            <p className="text-cyan-400 font-bold">Available System Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-mono">
              {TERMINAL_COMMANDS_HELP.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-emerald-400 font-semibold">{item.cmd}</span>
                  <span className="text-slate-400">- {item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="space-y-1 py-1">
            <p className="text-cyan-300 font-bold">{PERSONAL_INFO.name} ({PERSONAL_INFO.role})</p>
            <p className="text-xs text-slate-300">{PERSONAL_INFO.tagline}</p>
            <p className="text-xs text-slate-400">Academic: {PERSONAL_INFO.academicStatus}</p>
            <p className="text-xs text-emerald-400">Contact: {PERSONAL_INFO.email}</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 py-1">
            <p className="text-cyan-400 font-bold">Technical Skills & Mastery Score:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILLS_DATA.map((skill) => (
                <div key={skill.id} className="p-2 rounded-lg bg-slate-900/60 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-200">{skill.name}</span>
                    <span className="block text-[10px] text-slate-400 font-mono">{skill.badge}</span>
                  </div>
                  <span className="text-cyan-400 font-mono font-bold">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 py-1">
            <p className="text-cyan-400 font-bold">Featured Projects Repository:</p>
            <div className="space-y-2 text-xs">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-400">{p.title}</span>
                    <span className="text-[10px] font-mono text-cyan-300 px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px] mt-1">{p.tagline}</p>
                  <p className="text-[10px] font-mono text-slate-400 mt-1">Stack: {p.techStack.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'dsa':
        outputNode = (
          <div className="space-y-1.5 py-1 text-xs">
            <p className="text-emerald-400 font-bold">DSA Problem Solving Telemetry:</p>
            <p className="text-slate-300">Total Solved: <span className="font-bold text-white">480+ Problems</span> across LeetCode, Codeforces & GFG.</p>
            <p className="text-slate-300">Primary Languages: <span className="text-cyan-300 font-bold">C++ STL, Java & Python</span></p>
            <p className="text-slate-400">Core Specialties: Graphs (Dijkstra, BFS/DFS), Dynamic Programming (1D/2D), Trees, Segment Trees, Trie, Binary Search.</p>
          </div>
        );
        break;

      case 'bca':
        outputNode = (
          <div className="space-y-1.5 py-1 text-xs">
            <p className="text-indigo-400 font-bold">Bachelor of Computer Applications (BCA) - 2nd Year</p>
            <p className="text-slate-300">Academic Standing: <span className="text-emerald-400 font-bold">CGPA 9.2 / 10.0</span></p>
            <p className="text-slate-300">Key Subjects: Data Structures (C/C++), OOPs (Java), DBMS (SQL), Operating Systems, Web Technologies.</p>
            <p className="text-slate-400">Role: College Coding Club Core Lead & Junior Mentor.</p>
          </div>
        );
        break;

      case 'cat resume.txt':
      case 'resume':
        outputNode = (
          <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 space-y-2">
            <p className="text-cyan-400 font-bold">================== KRISHNENDU MUHURI RESUME ==================</p>
            <p>NAME: Krishnendu Muhuri | ROLE: BCA 2nd Year Student & Software Developer</p>
            <p>EMAIL: krishnendumuhuri89@gmail.com</p>
            <p>SKILLS: C, C++, Python, Java, Data Structures & Algorithms, Problem Solving, Web Development (React/TS/Node)</p>
            <p>EDUCATION: Bachelor of Computer Applications (CGPA: 9.2/10)</p>
            <p>DSA RECORD: 480+ Questions Solved • Active Competitive Programmer</p>
            <p className="text-emerald-400">STATUS: Open to Summer Internships & Software Engineering Roles</p>
            <p className="text-cyan-400">===============================================================</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 py-1 text-xs">
            <p className="text-cyan-300 font-bold">Reach Out to Krishnendu:</p>
            <p className="text-slate-300">Email: <a href="mailto:krishnendumuhuri89@gmail.com" className="text-cyan-400 hover:underline">krishnendumuhuri89@gmail.com</a></p>
            <p className="text-slate-300">GitHub: <a href="https://github.com" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">github.com/krishnendumuhuri</a></p>
            <p className="text-slate-300">LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">linkedin.com/in/krishnendumuhuri</a></p>
          </div>
        );
        break;

      default:
        outputNode = (
          <p className="text-rose-400 text-xs font-mono">
            zsh: command not found: {rawCmd}. Type <span className="text-cyan-400 font-bold underline cursor-pointer" onClick={() => handleCommand('help')}>'help'</span> for valid commands.
          </p>
        );
        break;
    }

    setHistory(prev => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: rawCmd,
        output: outputNode,
        timestamp: now
      }
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIdx === -1 ? commandHistory.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(commandHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === -1) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryIdx(-1);
        setInputVal('');
      } else {
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else {
      sound.playKeystroke();
    }
  };

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-cyan-300 text-xs font-mono">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Developer Shell</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terminal & System Console
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Query skills, execute commands, or inspect resume directly via the interactive command line.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-2xl glass-card border border-white/10 shadow-2xl overflow-hidden font-mono text-left">
          
          {/* Top Window Bar */}
          <div className="px-4 py-3 bg-[#0a0d14] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-slate-400 ml-2 font-mono">
                krishnendu@arch-portfolio: ~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  sound.playClick();
                  setHistory([]);
                }}
                title="Clear screen"
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick command suggestion pills */}
          <div className="px-4 py-2 bg-[#07090e] border-b border-white/5 flex items-center gap-2 overflow-x-auto text-[11px]">
            <span className="text-slate-400 text-[10px] uppercase font-bold">Quick:</span>
            {['whoami', 'skills', 'projects', 'dsa', 'bca', 'cat resume.txt', 'help', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                onMouseEnter={() => sound.playHover()}
                className="px-2.5 py-0.5 rounded-md bg-slate-900 hover:bg-cyan-950/80 border border-white/10 hover:border-cyan-500/40 text-cyan-300 hover:text-cyan-200 transition-colors cursor-pointer whitespace-nowrap"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Console Buffer */}
          <div 
            className="p-5 bg-[#05070c] min-h-[280px] max-h-[420px] overflow-y-auto space-y-4 text-xs font-mono leading-relaxed"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item) => (
              <div key={item.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">krishnendu@portfolio</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-slate-500">$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                  <span className="text-[10px] text-slate-400 ml-auto">{item.timestamp}</span>
                </div>
                <div className="pl-4 border-l-2 border-slate-800">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Current Active Input Prompt */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400 font-bold">krishnendu@portfolio</span>
              <span className="text-slate-500">:</span>
              <span className="text-cyan-400">~</span>
              <span className="text-slate-500">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type command (e.g. 'skills', 'dsa', 'bca', 'help')..."
                className="flex-1 bg-transparent text-cyan-300 outline-none text-xs font-mono placeholder-slate-400"
                autoFocus
              />
              <CornerDownLeft className="w-3.5 h-3.5 text-slate-400 opacity-60" />
            </div>

            <div ref={bottomRef} />
          </div>

        </div>

      </div>
    </section>
  );
};
