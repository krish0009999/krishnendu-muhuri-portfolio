import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Code2, 
  FolderGit2, 
  Cpu, 
  GraduationCap, 
  Mail, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  FileText,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { sound } from '../utils/audio';
import { NavSection } from '../types';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenResume }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.setEnabled(next);
    if (next) {
      sound.playSuccess();
    }
  };

  const navItems: { id: NavSection; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills & 3D Cards', icon: <Code2 className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'dsa', label: 'DSA Studio', icon: <Cpu className="w-4 h-4" /> },
    { id: 'academic', label: 'BCA 2nd Year', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'terminal', label: 'Terminal', icon: <Terminal className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const handleItemClick = (id: NavSection) => {
    sound.playClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#090b10]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <button
            id="nav-logo-btn"
            onClick={() => handleItemClick('home')}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-emerald-500 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                <span className="font-mono text-base font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  KM
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 text-sm sm:text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                  Krishnendu Muhuri
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold font-mono uppercase tracking-wider rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  BCA 2nd Yr
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden md:block">
                C • C++ • Java • Python • DSA • Web
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  onMouseEnter={() => sound.playHover()}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <span className={isActive ? 'text-cyan-400' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse ml-0.5" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Utilities: Sound Toggle & Resume CTA */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle with Equalizer */}
            <button
              id="toggle-audio-btn"
              onClick={toggleSound}
              onMouseEnter={() => sound.playHover()}
              title={soundEnabled ? 'Audio Enabled (Click to Mute)' : 'Audio Muted (Click to Enable)'}
              className={`p-2 rounded-xl border transition-all duration-200 flex items-center gap-2 text-xs focus:outline-none ${
                soundEnabled
                  ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/50'
                  : 'bg-slate-900/60 border-slate-700/50 text-slate-500 hover:text-slate-300'
              }`}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-cyan-400" />
                  <span className="hidden sm:flex items-center gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-cyan-400 animate-pulse" />
                    <span className="w-0.5 h-3 bg-cyan-300 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span className="w-0.5 h-1.5 bg-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </span>
                </>
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Resume Button */}
            <button
              id="nav-resume-btn"
              onClick={() => {
                sound.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => sound.playHover()}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white font-medium text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-80" />
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0f19]/95 border-b border-white/10 backdrop-blur-2xl px-4 py-4 space-y-2 mt-2 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? 'text-cyan-400' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
              </button>
            );
          })}
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View Krishnendu's Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
