import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, Smartphone, Layers, Terminal, GraduationCap, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-16 lg:py-0 px-6 bg-[#121212] text-white flex flex-col justify-center items-center overflow-hidden select-none">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute left-0 bottom-10 w-96 h-96 bg-[#E5B05C]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto w-full z-10 my-auto py-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 border-b border-white/10 pb-4 flex justify-between items-end"
        >
          <div>
            <span className="text-[#E5B05C] font-mono text-xs sm:text-sm tracking-widest uppercase">// 01. ABOUT ME</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mt-1 tracking-tight">
              The human behind the logic.
            </h2>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Main Description + Pillar Cards + Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                I am an undergraduate <strong className="text-white font-semibold">Software Engineering student</strong> who loves exploring technology, solving problems, and bringing ideas to life through code. I believe growth comes from staying curious, embracing challenges, and never stopping the learning process.
              </p>
              <p>
                Beyond academics, I embrace leadership, collaboration, and creativity. Through university clubs, student initiatives, and event coordination, I enjoy taking initiative, connecting with people, and turning opportunities into meaningful experiences.
              </p>
            </div>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              
              {/* Card 1: Mobile Dev */}
              <div className="p-4 bg-[#1E1E1E]/60 rounded-xl border border-white/10 hover:border-[#E5B05C]/50 hover:bg-[#1E1E1E] transition-all duration-300 group">
                <Smartphone className="text-[#E5B05C] group-hover:scale-110 transition-transform mb-2" size={22} />
                <h4 className="font-bold text-white text-sm">Mobile Dev</h4>
                <p className="text-xs text-gray-400 mt-1">Flutter & Dart Cross-platform Apps</p>
              </div>

              {/* Card 2: Full Stack Dev */}
              <div className="p-4 bg-[#1E1E1E]/60 rounded-xl border border-white/10 hover:border-[#E5B05C]/50 hover:bg-[#1E1E1E] transition-all duration-300 group">
                <Layers className="text-[#E5B05C] group-hover:scale-110 transition-transform mb-2" size={22} />
                <h4 className="font-bold text-white text-sm">Full Stack Dev</h4>
                <p className="text-xs text-gray-400 mt-1">React, Web & Backend Systems</p>
              </div>

              {/* Card 3: QA & Testing */}
              <div className="p-4 bg-[#1E1E1E]/60 rounded-xl border border-white/10 hover:border-[#E5B05C]/50 hover:bg-[#1E1E1E] transition-all duration-300 group">
                <Terminal className="text-[#E5B05C] group-hover:scale-110 transition-transform mb-2" size={22} />
                <h4 className="font-bold text-white text-sm">QA & Testing</h4>
                <p className="text-xs text-gray-400 mt-1">API Testing & Test Automation</p>
              </div>

            </div>

            {/* Download CV Action Area */}
            <div className="pt-3 flex flex-wrap gap-4 items-center">
              <a
                href="/cv.pdf"
                download="Cheshani_Dananjana_CV.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#E5B05C] text-[#121212] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full hover:bg-white transition-all duration-300 shadow-md hover:shadow-[#E5B05C]/20 group"
              >
                <span>Download CV</span>
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-full hover:border-[#E5B05C] hover:text-[#E5B05C] transition-all duration-300"
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Highlight Box / Education & Roles */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-[#1E1E1E]/80 border border-white/10 rounded-2xl p-6 sm:p-7 space-y-6 relative overflow-hidden backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#E5B05C]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-[#E5B05C] mb-1">
                <GraduationCap size={18} />
                <span className="text-xs font-mono tracking-widest uppercase">Education</span>
              </div>
              <h3 className="text-lg font-bold text-white">BSc (Hons) in Software Engineering</h3>
              <p className="text-xs text-gray-400 font-mono mt-0.5">NSBM Green University (2025 - Present)</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-[#E5B05C] mb-2">
                <Award size={18} />
                <span className="text-xs font-mono tracking-widest uppercase">Leadership & Roles</span>
              </div>

              <div className="bg-[#121212]/50 p-3 rounded-xl border border-white/5 space-y-1">
                <p className="text-[11px] text-[#E5B05C] font-mono uppercase tracking-wider">NFORCE CLUB</p>
                <p className="text-sm text-white font-semibold">Treasurer</p>
              </div>

              <div className="bg-[#121212]/50 p-3 rounded-xl border border-white/5 space-y-1">
                <p className="text-[11px] text-[#E5B05C] font-mono uppercase tracking-wider">IEEE NSBM STUDENT BRANCH</p>
                <p className="text-sm text-white font-semibold">Standing Committee Secretary Team</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}