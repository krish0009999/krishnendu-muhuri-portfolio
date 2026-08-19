import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Flame, 
  Users,
  Layers
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { sound } from '../utils/audio';

export const AcademicTimeline: React.FC = () => {
  return (
    <section id="academic" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            BCA 2nd Year Journey & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Academic Excellence
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Pursuing Bachelor of Computer Applications with rigorous focus on Computer Science foundations, 
            algorithmic theory, database systems, and full-stack software development.
          </p>
        </div>

        {/* Milestone Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main BCA Timeline Card */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {EDUCATION_DATA.map((milestone, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl glass-card border border-white/10 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{milestone.period}</span>
                  </span>

                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                    {milestone.grade}
                  </span>
                </div>

                {/* Title & Institution */}
                <div className="space-y-1 mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium">
                    {milestone.institution}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> Key Academic Achievements:
                  </h4>
                  <div className="space-y-2">
                    {milestone.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Courses Studied */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" /> Curriculum & Subject Focus:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {milestone.courses.map((course, i) => (
                      <span
                        key={i}
                        onMouseEnter={() => sound.playHover()}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Right Column: BCA 2nd Year Stats & Club Leadership */}
          <div className="lg:col-span-4 space-y-6 text-left">
            
            {/* Student Leadership Card */}
            <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Coding Club Lead & Mentor
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Leading weekly DSA problem-solving sessions and C/C++ workshops for 1st-year juniors. 
                Mentored 40+ students on recursion, linked lists, and time complexity proofs.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Active Campus Leader</span>
              </div>
            </div>

            {/* Semester 1-4 Highlights */}
            <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-3.5">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" /> BCA Coursework Matrix
              </h3>
              
              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300">Sem 1: C Programming & Math</span>
                  <span className="text-emerald-400 font-bold">9.1 SGPA</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300">Sem 2: Data Structures & OOPs</span>
                  <span className="text-emerald-400 font-bold">9.3 SGPA</span>
                </div>
                <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                  <span className="text-cyan-300 font-semibold">Sem 3 (Current): DBMS & Java</span>
                  <span className="text-cyan-400 font-bold">In Progress</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/40 border border-white/5 flex items-center justify-between opacity-70">
                  <span className="text-slate-400">Sem 4: OS, Networks & Web Tech</span>
                  <span className="text-slate-400">Upcoming</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
