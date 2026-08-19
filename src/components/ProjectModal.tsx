import React from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Sparkles, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { ProjectItem } from '../types';
import { sound } from '../utils/audio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => {
          sound.playClick();
          onClose();
        }}
      />

      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c101a] border border-cyan-500/40 rounded-3xl shadow-2xl overflow-y-auto z-10 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner with Overlay */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c101a] via-[#0c101a]/60 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500 text-black shadow-md">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Key Metrics Row */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-slate-900/70 border border-white/10 text-center">
                <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">
                  {metric.value}
                </div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Deep Overview */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" /> Architectural Overview
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.detailedOverview}
            </p>
          </div>

          {/* Core Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/40 border border-white/5 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" /> Engineering Depth
            </h4>
            <div className="space-y-2">
              {project.architectureHighlights.map((arch, i) => (
                <div key={i} className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-slate-300 font-mono">
                  {arch}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Technology Stack:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-800 border border-white/10 text-xs font-mono text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source Repository</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                onClick={() => sound.playClick()}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
              >
                <span>Launch Project Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
