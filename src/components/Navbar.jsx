import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/ef93a9d0-272b-4753-ad46-a22194d44de1.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Recent Works', href: '#recent-works', id: 'recent-works' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#121212]/90 backdrop-blur-md border-b border-white/10 px-6 py-3 flex justify-between items-center select-none">
      
      <a 
        href="#hero" 
        aria-label="Home"
        className={`group flex items-center justify-center p-1.5 bg-[#1E1E1E] border rounded-2xl transition-all duration-300 shadow-md hover:scale-105 ${
          activeSection === 'hero' ? 'border-[#E5B05C] shadow-[0_0_12px_rgba(229,176,92,0.3)]' : 'border-white/10 hover:border-[#E5B05C]'
        }`}
      >
        <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-800">
          <img 
            src={profileImg} 
            alt="Cheshani Dananjana Home" 
            className={`w-full h-full object-cover object-top transition-all duration-300 ${
              activeSection === 'hero' ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
            }`}
          />
        </div>
      </a>

      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wider font-medium text-gray-300">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.name}
              href={link.href}
              className={`relative py-1 transition-colors duration-200 ${
                isActive ? 'text-[#E5B05C] font-semibold' : 'hover:text-[#E5B05C]'
              }`}
            >
              {link.name}
              
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#E5B05C] rounded-full shadow-[0_0_8px_#E5B05C]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-300 hover:text-white focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#121212] border-b border-white/10 flex flex-col items-center py-6 space-y-4 md:hidden">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`relative text-lg uppercase tracking-wider transition-colors duration-200 flex items-center gap-2 ${
                  isActive ? 'text-[#E5B05C] font-bold' : 'text-gray-300 hover:text-[#E5B05C]'
                }`}
              >
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#E5B05C] shadow-[0_0_8px_#E5B05C]" />
                )}
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}