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
              Let's <br /> <span className="text-accent">Build</span> <br /> Something <br /> Iconic.
            </h2>
            <p className="text-slate-400 text-xl mx-auto mb-16">
              Have a project in mind? Or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Email Me</div>
                  <div className="text-xl font-bold text-white">govindburhan@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                  <MapPin size={24} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Location</div>
                  <div className="text-xl font-bold text-white">Remote / Worldwide</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8 mt-16">
              <a 
                href="https://www.linkedin.com/in/govind-burhan-a66aba241/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-500"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Govind-10090" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-500"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
