import React, { useState } from 'react';
import { 
  Code2, 
  RotateCw, 
  Search, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Globe, 
  Database,
  Layers,
  Filter
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillFlipCard } from './SkillFlipCard';
import { sound } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'languages' | 'dsa' | 'web' | 'core_cs'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Skills', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'languages', label: 'C / C++ / Python / Java', icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'dsa', label: 'DSA & Problem Solving', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'web', label: 'Website Development', icon: <Globe className="w-3.5 h-3.5" /> },
    { id: 'core_cs', label: 'DBMS, OS & Core CS', icon: <Database className="w-3.5 h-3.5" /> },
  ] as const;

  const filteredSkills = SKILLS_DATA.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.details.coreConcepts.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (cat: 'all' | 'languages' | 'dsa' | 'web' | 'core_cs') => {
    sound.playClick();
    setSelectedCategory(cat);
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive 3D Flip Cards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical Arsenal & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Core Engineering Skills
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Click on any card or the flip button to rotate in 3D and explore production-grade code templates, 
            memory architecture insights, and problem-solving benchmarks.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-900/60 p-3 rounded-2xl border border-white/10 backdrop-blur-md">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`skill-filter-${cat.id}`}
                  onClick={() => handleCategoryChange(cat.id)}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts or skills..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950/70 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors font-sans"
            />
          </div>
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillFlipCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>

        {/* Empty state if search has no match */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-white/10">
            <p className="text-slate-400 text-sm">No skills matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
