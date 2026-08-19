import React from 'react';
import { 
  Heart, 
  ArrowUp, 
  Terminal, 
  Sparkles, 
  Code2, 
  Github, 
  Linkedin, 
  Mail,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#06080d] pt-14 pb-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          
          {/* Identity & Bio */}
          <div className="md:col-span-2 space-y-3 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-white text-xs">
                KM
              </div>
              <span className="font-bold text-slate-200 text-sm">
                Krishnendu Muhuri
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                BCA 2nd Year
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              C, C++, Java, Python, DSA, and Full-Stack Modern Web Developer. 
              Focused on crafting high-precision software architectures with optimal asymptotic complexity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5 text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block">
              Direct Sections
            </span>
            <ul className="space-y-1.5 text-xs font-mono">
              <li>
                <a href="#skills" onClick={() => sound.playClick()} className="hover:text-cyan-400 transition-colors">
                  → 3D Skill Cards
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => sound.playClick()} className="hover:text-cyan-400 transition-colors">
                  → Projects & Systems
                </a>
              </li>
              <li>
                <a href="#dsa" onClick={() => sound.playClick()} className="hover:text-cyan-400 transition-colors">
                  → DSA Real-time Lab
                </a>
              </li>
              <li>
                <a href="#academic" onClick={() => sound.playClick()} className="hover:text-cyan-400 transition-colors">
                  → BCA 2nd Year Journey
                </a>
              </li>
              <li>
                <a href="#terminal" onClick={() => sound.playClick()} className="hover:text-cyan-400 transition-colors">
                  → Developer Console
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-2.5 text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block">
              Connect
            </span>
            <div className="flex flex-col space-y-2 font-mono text-xs">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                onClick={() => sound.playClick()}
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>krishnendumuhuri89@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                </a>
                <button
                  onClick={scrollToTop}
                  onMouseEnter={() => sound.playHover()}
                  title="Scroll to Top"
                  className="p-2 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/30 ml-auto cursor-pointer"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Krishnendu Muhuri. Crafted with Human Precision & Modern Web Architecture.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Designed for Peak Immersion</span>
            <span>•</span>
            <span className="text-cyan-400">BCA 2nd Year Portfolio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
