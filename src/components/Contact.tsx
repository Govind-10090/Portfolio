import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-7xl md:text-9xl font-bold mb-10 leading-[0.8] tracking-tighter">
              Let's <br /> <span className="text-accent italic font-serif">Build</span> <br /> Something <br /> Iconic.
            </h2>
            <p className="text-slate-400 text-xl mx-auto mb-16 max-w-xl">
              Have a project in mind? Or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>

            {/* Primary CTA Button with Pulse Effect */}
            <motion.button
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(230, 57, 70, 0.4)",
                backgroundColor: "#E63946",
                color: "#FFFFFF"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white text-primary font-bold text-xs uppercase tracking-[0.4em] rounded-sm mb-24 transition-all duration-300"
            >
              Start a Project
            </motion.button>

            {/* Contact Form with Micro-interactions */}
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-2xl mx-auto mb-32 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-white/10 py-4 px-2 text-white outline-none focus:border-accent transition-all duration-300 peer"
                  />
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileFocus={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left transition-transform duration-300"
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/10 py-4 px-2 text-white outline-none focus:border-accent transition-all duration-300 peer"
                  />
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileFocus={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="relative group">
                <textarea 
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-4 px-2 text-white outline-none focus:border-accent transition-all duration-300 peer resize-none"
                />
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileFocus={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left transition-transform duration-300"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 border border-white/10 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-primary transition-all duration-300"
              >
                Send Message
              </motion.button>
            </motion.form>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <motion.a 
                href="mailto:govindburhan@gmail.com"
                className="flex items-center gap-6 group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300"
                >
                  <Mail size={24} />
                </motion.div>
                <div className="text-left relative">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Email Me</div>
                  <div className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    govindburhan@gmail.com
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                  </div>
                </div>
              </motion.a>

              <div className="flex items-center gap-6 group cursor-pointer">
                <motion.div 
                  whileHover={{ rotate: -15, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300"
                >
                  <MapPin size={24} />
                </motion.div>
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Location</div>
                  <div className="text-xl font-bold text-white">Remote / Worldwide</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8 mt-16">
              <motion.a 
                whileHover={{ y: -5, scale: 1.1, rotate: 10 }}
                href="https://www.linkedin.com/in/govind-burhan-a66aba241/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-500"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1, rotate: -10 }}
                href="https://github.com/Govind-10090" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-500"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
