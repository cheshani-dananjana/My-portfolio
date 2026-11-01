import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

// Custom inline GitHub SVG Icon
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

// Custom inline LinkedIn SVG Icon
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '795ed65a-a23f-41a2-ac9f-b771fb37e43c',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Direct Message',
          message: formData.message,
          from_name: `${formData.name} via Portfolio`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 px-6 bg-[#121212] text-white flex flex-col justify-between select-none overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute right-0 bottom-0 w-[35rem] h-[35rem] bg-[#E5B05C]/5 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto w-full z-10 my-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="text-[#E5B05C] font-mono text-xs sm:text-sm tracking-widest uppercase">// 04. GET IN TOUCH</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mt-1 tracking-tight">
              LET'S BUILD SOMETHING TOGETHER
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-gray-400">
            Open for software opportunities
          </p>
        </motion.div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4 text-gray-300 font-light text-base leading-relaxed">
              <p>
                Whether you have a software project, mobile application idea, tech collaboration, or just want to connect—feel free to drop a message.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4">
              
              <a 
                href="mailto:cdananjana04@gmail.com" 
                className="flex items-center gap-4 p-4 bg-[#1E1E1E]/60 border border-white/10 rounded-2xl hover:border-[#E5B05C]/60 hover:bg-[#1E1E1E] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-[#E5B05C] group-hover:scale-110 transition-transform shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">Email Address</p>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover:text-[#E5B05C] transition-colors">
                    cdananjana04@gmail.com
                  </p>
                </div>
              </a>

              <a 
                href="tel:0715294320" 
                className="flex items-center gap-4 p-4 bg-[#1E1E1E]/60 border border-white/10 rounded-2xl hover:border-[#E5B05C]/60 hover:bg-[#1E1E1E] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-[#E5B05C] group-hover:scale-110 transition-transform shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">Contact Number</p>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover:text-[#E5B05C] transition-colors">
                    +94 71 529 4320
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-[#1E1E1E]/60 border border-white/10 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-[#E5B05C] shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">Location</p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>

            </div>

            {/* Social Network Buttons */}
            <div className="pt-2 space-y-3">
              <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">Connect via Socials</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/cheshani-dananjana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-between px-4 py-3 bg-[#1E1E1E]/80 border border-white/10 rounded-xl hover:border-[#E5B05C] hover:text-[#E5B05C] transition-all text-xs font-mono group"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon size={16} />
                    GitHub
                  </span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://linkedin.com/in/cheshani-dananjana-5b6665356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-between px-4 py-3 bg-[#1E1E1E]/80 border border-white/10 rounded-xl hover:border-[#E5B05C] hover:text-[#E5B05C] transition-all text-xs font-mono group"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon size={16} />
                    LinkedIn
                  </span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Direct Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#1E1E1E]/80 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dananji Chesh"
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E5B05C] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="cheshanidananjana@outlook.com"
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E5B05C] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity"
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E5B05C] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Cheshani..."
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E5B05C] transition-colors resize-none"
                />
              </div>

              {/* Dynamic Animated Action Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 shadow-lg ${
                  status === 'success'
                    ? 'bg-emerald-500 text-white'
                    : status === 'error'
                    ? 'bg-rose-500 text-white'
                    : 'bg-[#E5B05C] text-[#121212] hover:bg-white'
                }`}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={18} />
                    <span>Failed to Send. Try Again</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>

      {/* Modern Minimalist Footer */}
      <div className="w-full max-w-6xl mx-auto border-t border-white/10 pt-6 mt-16 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-gray-400 gap-3 z-10">
        <p>© 2026 Cheshani Dananjana. All rights reserved.</p>
        <p>Built with React, Tailwind CSS & Framer Motion</p>
      </div>

    </section>
  );
}