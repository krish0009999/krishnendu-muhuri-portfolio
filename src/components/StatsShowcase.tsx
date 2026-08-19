import React from 'react';
import { 
  Flame, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  Cpu, 
  Layers, 
  Trophy, 
  ExternalLink,
  Target
} from 'lucide-react';
import { DSA_TOPICS_STATS } from '../data/portfolioData';
import { sound } from '../utils/audio';

export const StatsShowcase: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Algorithmic Rigor</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            DSA Problem Solving & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              LeetCode Track Record
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            Over 480+ problems solved across data structures with emphasis on asymptotic time & space optimizations.
          </p>
        </div>

        {/* Global Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          <div className="p-5 rounded-2xl glass-card border border-white/10 text-center space-y-1">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Total Questions Solved</div>
            <div className="text-3xl font-extrabold font-mono text-cyan-400">480+</div>
            <div className="text-[11px] text-emerald-400 font-mono">LeetCode • GFG • Codeforces</div>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-white/10 text-center space-y-1">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Easy Difficulty</div>
            <div className="text-3xl font-extrabold font-mono text-emerald-400">185</div>
            <div className="text-[11px] text-slate-400 font-mono">Speed & Core Mechanics</div>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-white/10 text-center space-y-1">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Medium Difficulty</div>
            <div className="text-3xl font-extrabold font-mono text-amber-400">235</div>
            <div className="text-[11px] text-slate-400 font-mono">Core Interviews & DP/Graphs</div>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-white/10 text-center space-y-1">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Hard Difficulty</div>
            <div className="text-3xl font-extrabold font-mono text-rose-400">60</div>
            <div className="text-[11px] text-slate-400 font-mono">Advanced Segment Trees & DP</div>
          </div>

        </div>

        {/* Topic Wise Breakdown Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DSA_TOPICS_STATS.map((topic, idx) => {
            const percentage = Math.round((topic.solved / topic.total) * 100);
            return (
              <div
                key={idx}
                onMouseEnter={() => sound.playHover()}
                className="p-5 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white tracking-tight truncate pr-2">
                    {topic.name}
                  </span>
                  <span className="text-xs font-mono font-bold" style={{ color: topic.color }}>
                    {topic.solved}/{topic.total}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-[1px]">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: topic.color
                    }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Accuracy: {percentage}%</span>
                  <span className="text-emerald-400 font-semibold">Mastered</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
