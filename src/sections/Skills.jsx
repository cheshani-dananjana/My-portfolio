import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Flutter', percentage: 85, category: 'Mobile Dev' },
  { name: 'Dart', percentage: 80, category: 'Mobile Dev' },
  { name: 'React.js', percentage: 82, category: 'Frontend' },
  { name: 'Tailwind CSS', percentage: 88, category: 'Frontend' },
  { name: 'JavaScript (ES6+)', percentage: 80, category: 'Frontend' },
  { name: 'HTML5 & CSS3', percentage: 90, category: 'Frontend' },
  { name: 'Figma (UI/UX)', percentage: 85, category: 'Design' },
  { name: 'Git & GitHub', percentage: 85, category: 'Tools' },
  { name: 'QA & API Testing', percentage: 78, category: 'Testing' },
  { name: 'Java & Python', percentage: 75, category: 'Languages' },
  { name: 'Project & Team Leadership', percentage: 85, category: 'Leadership' },
  { name: 'Public Speaking & Mentoring', percentage: 87, category: 'Communication' },
];

export default function Skills() {
  // Smaller ring radius & circumference for a sleek, compact fit
  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="skills" className="relative h-screen min-h-[620px] max-h-[1080px] pt-20 pb-6 px-6 bg-[#121212] text-white flex flex-col justify-between items-center select-none overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute right-0 top-1/3 w-[26rem] h-[26rem] bg-[#E5B05C]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto w-full z-10 my-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 border-b border-white/10 pb-3 flex flex-row items-end justify-between"
        >
          <div>
            <span className="text-[#E5B05C] font-mono text-xs tracking-widest uppercase">02. TECHNICAL & LEADERSHIP SKILLS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mt-1 tracking-tight">
              PROFICIENCY & TOOLSTACK
            </h2>
          </div>
          <p className="hidden sm:block text-xs font-mono text-gray-400">
            Interactive skill breakdown
          </p>
        </motion.div>

        {/* Compact Grid (Fits inside screen height without vertical scrolling) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {skills.map((skill, index) => {
            const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group relative p-3.5 bg-[#1E1E1E]/50 border border-white/10 rounded-xl hover:border-[#E5B05C]/60 hover:bg-[#1E1E1E] transition-all duration-300 flex flex-col items-center text-center backdrop-blur-sm"
              >
                {/* Smaller SVG Progress Ring */}
                <div className="relative w-16 h-16 mb-2 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 70 70">
                    <circle
                      cx="35"
                      cy="35"
                      r={radius}
                      className="stroke-white/10"
                      strokeWidth="4.5"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="35"
                      cy="35"
                      r={radius}
                      className="stroke-[#E5B05C]"
                      strokeWidth="4.5"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 + index * 0.03, ease: "easeOut" }}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>

                  {/* Centered Percentage */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-bold font-mono text-white group-hover:text-[#E5B05C] transition-colors">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>

                {/* Skill Name & Subtext */}
                <h3 className="font-bold text-xs sm:text-sm text-white group-hover:text-[#E5B05C] transition-colors leading-tight line-clamp-2">
                  {skill.name}
                </h3>
                <span className="text-[10px] font-mono text-gray-400 mt-1 uppercase tracking-wider">
                  {skill.category}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}