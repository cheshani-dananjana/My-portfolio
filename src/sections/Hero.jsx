import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import heroImg from '../assets/ef93a9d0-272b-4753-ad46-a22194d44de1.png';

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 px-6 bg-[#121212] text-white flex flex-col justify-between select-none overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      <div className="absolute left-1/4 top-1/3 w-[35rem] h-[35rem] bg-[#E5B05C]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <span className="text-[#E5B05C] font-mono text-sm tracking-widest uppercase block">  HELLO, WORLD. I AM</span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
                CHESHANI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#E5B05C]">
                  DANANJANA
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-mono tracking-widest text-[#E5B05C] uppercase pt-2">
                Software Engineering Undergraduate
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#recent-works"
                className="px-7 py-3.5 bg-[#E5B05C] text-[#121212] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full hover:bg-white transition-all duration-300 shadow-lg"
              >
                Explore Works
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 border border-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-full hover:border-[#E5B05C] hover:text-[#E5B05C] transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>

            <div className="flex items-center gap-4 pt-6 text-gray-400">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Connect:</span>
              <a href="https://github.com/cheshani-dananjana" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1E1E1E] border border-white/10 rounded-xl hover:text-[#E5B05C] hover:border-[#E5B05C] transition-colors">
                <GithubIcon size={18} />
              </a>
              <a href="https://linkedin.com/in/cheshani-dananjana-5b6665356" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1E1E1E] border border-white/10 rounded-xl hover:text-[#E5B05C] hover:border-[#E5B05C] transition-colors">
                <LinkedinIcon size={18} />
              </a>
              <a href="mailto:cdananjana04@gmail.com" className="p-2 bg-[#1E1E1E] border border-white/10 rounded-xl hover:text-[#E5B05C] hover:border-[#E5B05C] transition-colors">
                <Mail size={18} />
              </a>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-80 sm:w-96 md:w-[28rem] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-transparent shadow-2xl group"
            >
              <img
                src={heroImg}
                alt="Cheshani Dananjana"
                className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#121212_95%)] opacity-70" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-6xl mx-auto w-full pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-gray-400 gap-4 z-10"
      >
        <div className="flex items-center gap-2 text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#E5B05C] animate-pulse" />
          <span>Building intuitive digital experiences</span>
        </div>
        
        <a href="#about" className="inline-flex items-center gap-2 hover:text-[#E5B05C] transition-colors">
          <span>Scroll to explore</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>

        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1E1E1E]/90 border border-white/10 shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#E5B05C] animate-pulse" />
          <span className="text-[11px] font-mono tracking-wider text-gray-300 uppercase">
            Available for projects & collaboration
          </span>
        </div>
      </motion.div>

    </section>
  );
}