import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    
    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch {
      // Ignore
    }

    setIsSubmitted(true);

    // Also open mailto link with filled fields
    const mailtoUri = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoUri;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Direct Inquiries & Connect</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in discussing an internship opportunity, full-stack web project, or competitive programming? 
            Reach out directly or send a message below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Primary Email Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/30 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => sound.playHover()}
                  title="Copy email address"
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">
                  Direct Email Address
                </span>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onClick={() => sound.playClick()}
                  className="text-base sm:text-lg font-bold font-mono text-cyan-300 hover:text-cyan-200 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Response Time: Typically within 12 hours</span>
              </div>
            </div>

            {/* Location & Academic Status Card */}
            <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Location & Timezone
                  </span>
                  <p className="text-sm font-bold text-white">
                    {PERSONAL_INFO.location} (IST / UTC+5:30)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Professional Profiles
              </span>
              
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 text-xs font-mono flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 text-xs font-mono flex items-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 text-xs font-mono flex items-center gap-2 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 text-left shadow-2xl">
              
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" /> Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill in your requirements and your default email client will launch with everything pre-filled.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Prepared & Launched!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you! Your mail application has been initialized. Krishnendu will review your inquiry shortly.
                  </p>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-slate-800 text-xs font-mono text-slate-300 hover:text-white"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Subject / Role Purpose *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineering Internship / Web Dev Project"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Message Content *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, team requirements, or coding discussion topic..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    onMouseEnter={() => sound.playHover()}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Krishnendu</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
