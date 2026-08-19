import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AmbientBackground } from './components/AmbientBackground';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { StatsShowcase } from './components/StatsShowcase';
import { ProjectsSection } from './components/ProjectsSection';
import { DsaVisualizer } from './components/DsaVisualizer';
import { AcademicTimeline } from './components/AcademicTimeline';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { NavSection } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090b10] text-[#f1f5f9] font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Dynamic Ambient Background Canvas & Glow Matrix */}
      <AmbientBackground />

      {/* Floating Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 3D Skills Flip Cards Section */}
        <SkillsSection />

        {/* DSA & LeetCode Stats Banner */}
        <StatsShowcase />

        {/* Live Interactive DSA Studio & Visualizer */}
        <DsaVisualizer />

        {/* Featured Projects & Case Studies */}
        <ProjectsSection />

        {/* BCA 2nd Year Academic Journey */}
        <AcademicTimeline />

        {/* Interactive Developer Terminal */}
        <InteractiveTerminal />

        {/* Contact & Direct Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
