import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  Cpu, 
  Code2,
  Maximize2
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { sound } from '../utils/audio';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'DSA / Algorithms', 'Web Dev', 'Full-Stack', 'Systems & C++'];

  const filteredProjects = PROJECTS_DATA.filter(p => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  const handleOpenProject = (project: ProjectItem) => {
    sound.playClick();
    setActiveProject(project);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold">
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Production-Grade Showcases</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Systems & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Web Architectures
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Engineered with modern algorithms, clean state models, and high-performance design principles.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    sound.playClick();
                    setSelectedCategory(cat);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative rounded-3xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:-translate-y-1.5"
            >
              {/* Image Preview Container */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c101a] via-transparent to-black/30" />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Quick inspect button */}
                <button
                  onClick={() => handleOpenProject(project)}
                  onMouseEnter={() => sound.playHover()}
                  title="Quick View Details"
                  className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-200 border border-white/10"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-slate-900/60 border border-white/5 text-center">
                      <div className="text-xs font-mono font-bold text-cyan-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-800/80 text-slate-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenProject(project)}
                    onMouseEnter={() => sound.playHover()}
                    className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      title="GitHub Source"
                      className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
