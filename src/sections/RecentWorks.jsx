import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ArrowUpRight } from 'lucide-react';

// IMPORT YOUR CUSTOM PAWLY IMAGE HERE
import pawlyImg from '../assets/pawly.jpg';

const GithubIcon = ({ size = 16, className = "" }) => (
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

const githubProjects = [
  {
    id: 'quantimite-web',
    name: 'Quantimite Web Platform',
    repoName: 'Quantimite/Quantimite-Web',
    description: 'A modern, high-performance web platform built for scalable enterprise digital experiences.',
    topics: ['TypeScript', 'React', 'Web Development'],
    html_url: 'https://github.com/Quantimite/Quantimite-Web',
    stargazers_count: 3,
    forks_count: 1,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pawly-mobile-app',
    name: 'PAWLY Mobile App',
    repoName: 'cheshani-dananjana/PAWLY-Mobile-App',
    description: 'A feature-rich cross-platform mobile application developed using Flutter and Dart, implementing custom animal post creation screens, image picking, and smooth animations.',
    topics: ['Flutter', 'Dart', 'Mobile UI', 'Animations'],
    html_url: 'https://github.com/cheshani-dananjana/PAWLY-Mobile-App.git',
    stargazers_count: 2,
    forks_count: 0,
    image: pawlyImg,
  },
  {
    id: 'university-erp-system',
    name: 'University ERP System',
    repoName: 'unnadivibhavi-dot/University---ERP---System',
    description: 'ERP System engineered using HTML, CSS, and JavaScript for streamlined institutional management.',
    topics: ['JavaScript', 'HTML5 / CSS3', 'ERP System'],
    html_url: 'https://github.com/unnadivibhavi-dot/University---ERP---System',
    stargazers_count: 2,
    forks_count: 1,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'unimatelk',
    name: 'UniMate LK',
    repoName: 'kavisara-samarakoon/unimatelk',
    description: 'Academic group project for the a module, including full source code implementation and system architecture documentation.',
    topics: ['Java', 'Software Architecture', 'Academic Project'],
    html_url: 'https://github.com/kavisara-samarakoon/unimatelk',
    stargazers_count: 5,
    forks_count: 3,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pizza-website',
    name: 'Pizza Ordering Web App',
    repoName: 'parzival707/pizza_website',
    description: 'A dynamic online food ordering application featuring interactive product menus and backend order management.',
    topics: ['PHP', 'MySQL', 'Web Engineering'],
    html_url: 'https://github.com/parzival707/pizza_website',
    stargazers_count: 2,
    forks_count: 1,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
  },
];

export default function RecentWorks() {
  return (
    <section id="recent-works" className="relative py-24 px-6 bg-[#121212] text-white select-none">
      
      {/* Background Ambient Glow */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[40rem] h-[40rem] bg-[#E5B05C]/5 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto w-full z-10 relative">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="text-[#E5B05C] font-mono text-xs sm:text-sm tracking-widest uppercase">03. CONTRIBUTED PROJECTS</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mt-1 tracking-tight">
              RECENT WORKS
            </h2>
          </div>
          <a
            href="https://github.com/cheshani-dananjana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#E5B05C] hover:text-white transition-colors"
          >
            <span>View GitHub Profile</span>
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* 
          JAMES WILLIAMS STACKING CARDS 
          Flex column creates the scroll space. Outer div sticks. Inner div animates. 
        */}
        <div className="flex flex-col gap-12 sm:gap-24 pb-32">
          {githubProjects.map((project, index) => {
            const stickyOffset = 110 + index * 20; // Stacks them 20px apart

            return (
              <div
                key={project.id}
                className="sticky w-full"
                style={{
                  top: `${stickyOffset}px`,
                  zIndex: index + 1,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_-15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-colors duration-300 group hover:border-[#E5B05C]/50"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    
                    <div className="space-y-6 lg:max-w-xl">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#E5B05C] tracking-widest uppercase">
                          PROJECT 0{index + 1}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span className="text-xs font-mono text-gray-400 font-mono truncate max-w-[240px]">
                          {project.repoName}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-white capitalize tracking-tight group-hover:text-[#E5B05C] transition-colors">
                        {project.name}
                      </h3>

                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 rounded-full bg-[#121212] border border-white/10 text-xs font-mono text-gray-300"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                        <a
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E5B05C] text-[#121212] font-bold text-xs tracking-wider uppercase rounded-full hover:bg-white transition-all duration-300 shadow-md"
                        >
                          <GithubIcon size={16} />
                          <span>Repository</span>
                        </a>

                        <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                          <span className="flex items-center gap-1.5 hover:text-[#E5B05C] transition-colors">
                            <Star size={14} className="text-[#E5B05C]" />
                            {project.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1.5 hover:text-[#E5B05C] transition-colors">
                            <GitFork size={14} className="text-[#E5B05C]" />
                            {project.forks_count}
                          </span>
                        </div>
                      </div>

                    </div>

                    <div className="w-full lg:w-80 aspect-video lg:aspect-[4/3] bg-[#121212] border border-white/10 rounded-2xl overflow-hidden relative group-hover:border-[#E5B05C]/50 transition-all shrink-0 shadow-lg">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent opacity-60" />
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}