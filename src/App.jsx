import React from 'react';
import { motion } from 'framer-motion';

// Import your sections (Make sure these paths match your folder structure!)
import Navbar from './components/Navbar'; 
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import RecentWorks from './sections/RecentWorks';
import Contact from './sections/Contact';

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.2 }}
      className="relative w-full min-h-screen bg-[#121212] selection:bg-[#E5B05C]/30 selection:text-[#E5B05C]"
    >
      
      {/* 
        GLOBAL MINIMALIST ANIMATED BACKGROUND 
        This stays fixed behind all sections and slowly drifts to create a "glory" effect
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        
        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Animated Gold Glow (Drifts Top-Left to Center) */}
        <motion.div
          animate={{ 
            x: [0, 100, -50, 0], 
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50rem] h-[50rem] bg-[#E5B05C]/[0.07] rounded-full blur-[150px]"
        />

        {/* Animated Silver/White Glow (Drifts Bottom-Right to Center) */}
        <motion.div
          animate={{ 
            x: [0, -120, 60, 0], 
            y: [0, 120, -60, 0],
            scale: [1, 0.8, 1.1, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -right-[10%] w-[45rem] h-[45rem] bg-white/[0.03] rounded-full blur-[150px]"
        />
      </div>

      {/* PORTFOLIO CONTENT (Sits above the animated background) */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <RecentWorks />
          <Contact />
        </main>
      </div>

    </motion.div>
  );
}