import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Boxes, 
  Sparkles, 
  Code2, 
  Globe, 
  Lightbulb, 
  Database,
  RotateCw, 
  Copy, 
  Check, 
  Flame, 
  Clock, 
  Layers
} from 'lucide-react';
import { SkillItem } from '../types';
import { sound } from '../utils/audio';

interface SkillFlipCardProps {
  skill: SkillItem;
  index: number;
}

export const SkillFlipCard: React.FC<SkillFlipCardProps> = ({ skill, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Terminal': return <Terminal className="w-6 h-6 text-sky-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'Boxes': return <Boxes className="w-6 h-6 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-orange-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-purple-400" />;
      case 'Database': return <Database className="w-6 h-6 text-pink-400" />;
      default: return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleFlip = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sound.playFlip();
    setIsFlipped(!isFlipped);
  };

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    navigator.clipboard.writeText(skill.details.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id={`skill-card-container-${skill.id}`}
      className="perspective-1000 w-full h-[420px] sm:h-[400px] group"
    >
      <div 
        className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* ================= FRONT FACE ================= */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl glass-card p-6 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.85) 0%, rgba(9, 11, 16, 0.95) 100%)'
          }}
        >
          {/* Subtle Accent Glow Corner */}
          <div 
            className="absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl opacity-25 pointer-events-none"
            style={{ background: skill.color }}
          />

          <div>
            {/* Header: Icon, Category & Flip Trigger */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 shadow-inner"
                  style={{ background: `radial-gradient(circle, ${skill.color}20 0%, rgba(15,23,42,0.6) 100%)` }}
                >
                  {getIcon(skill.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                    {skill.name}
                  </h3>
                  <span 
                    className="inline-block text-[11px] font-mono font-medium px-2 py-0.5 rounded-md border mt-0.5"
                    style={{ 
                      borderColor: `${skill.color}40`,
                      color: skill.color,
                      backgroundColor: `${skill.color}15`
                    }}
                  >
                    {skill.badge}
                  </span>
                </div>
              </div>

              {/* 3D Flip Quick Action Button */}
              <button
                id={`flip-btn-${skill.id}`}
                onClick={handleFlip}
                onMouseEnter={() => sound.playHover()}
                title="Flip card for code & deep breakdown"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all duration-200 group/flip cursor-pointer"
              >
                <RotateCw className="w-4 h-4 group-hover/flip:rotate-180 transition-transform duration-500 text-cyan-400" />
              </button>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              {skill.shortDesc}
            </p>

            {/* Mastery Meter */}
            <div className="space-y-1.5 mb-4">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-400" /> Mastery Level
                </span>
                <span className="font-bold text-slate-200">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-[1px] border border-white/5">
                <div 
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}, #38bdf8)`
                  }}
                />
              </div>
            </div>

            {/* Quick Badges / Core Concepts Preview */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <Layers className="w-3 h-3 text-cyan-400" /> Highlights:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {skill.details.coreConcepts.slice(0, 3).map((concept, idx) => (
                  <span 
                    key={idx}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/50 text-slate-300 font-sans"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> {skill.details.experienceTime}
              </span>
              {skill.details.solvedProblemsCount && (
                <span className="text-emerald-400 font-semibold">
                  {skill.details.solvedProblemsCount}+ Problems
                </span>
              )}
            </div>

            <button
              onClick={handleFlip}
              onMouseEnter={() => sound.playHover()}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform cursor-pointer"
            >
              <span>Inspect Code</span>
              <RotateCw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* ================= BACK FACE (3D ROTATED 180) ================= */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl glass-card p-5 flex flex-col justify-between border border-cyan-500/40 shadow-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(11, 15, 25, 0.96) 0%, rgba(6, 9, 14, 0.98) 100%)'
          }}
        >
          {/* Header on Back */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                {skill.name} • Architecture & Code
              </h4>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                id={`copy-code-${skill.id}`}
                onClick={handleCopyCode}
                title="Copy code snippet"
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={handleFlip}
                title="Flip back to front"
                className="p-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-500/30 transition-colors cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Code Window */}
          <div className="relative my-2 flex-1 rounded-xl bg-[#07090e] border border-white/10 p-3 overflow-y-auto font-mono text-[11px] text-slate-300 leading-relaxed">
            <div className="absolute top-2 right-2 text-[10px] text-slate-400 uppercase tracking-widest bg-slate-800/60 px-1.5 py-0.5 rounded">
              {skill.details.snippetLang}
            </div>
            <pre className="overflow-x-auto whitespace-pre font-mono">
              <code>{skill.details.codeSnippet}</code>
            </pre>
          </div>

          {/* Key Topics Checklist */}
          <div className="space-y-1">
            <p className="text-[11px] font-mono text-cyan-400 font-semibold">
              Deep-Dive Topics Mastered:
            </p>
            <div className="grid grid-cols-1 gap-1 text-[11px] text-slate-300">
              {skill.details.coreConcepts.slice(0, 3).map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Flip Back Footer */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-400">
              Used in: {skill.details.useCases.slice(0, 2).join(', ')}
            </span>
            <button
              onClick={handleFlip}
              className="text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
            >
              <span>Flip Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
