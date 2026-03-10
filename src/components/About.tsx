import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden grid-lines">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden relative group border border-white/10">
              <img
                src="https://picsum.photos/seed/architect/800/1000"
                alt="Govind"
                className="w-full h-full object-cover grayscale transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
            
            {/* Floating Detail */}
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-sm border-white/10 hidden md:block">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-2">Signature Style</div>
              <div className="text-sm font-serif italic text-white">Reductionist. Functional. Timeless.</div>
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">01 — Philosophy</span>
                <span className="flex-1 h-px bg-white/10" />
              </div>

              <h2 className="text-6xl md:text-8xl font-bold mb-12 leading-[0.9] tracking-tighter">
                The <span className="text-accent italic font-serif">Craft</span> of <br /> Invisible Design
              </h2>
              
              <div className="space-y-8 text-slate-400 text-xl leading-relaxed font-light">
                <p>
                  Design is not a coat of paint; it is the skeleton. I am developing a philosophy that prioritizes <span className="text-white font-medium">clarity over decoration</span> and <span className="text-white font-medium">purpose over trend</span>.
                </p>
                <p>
                  My approach is rooted in the Swiss International Style—objective, functional, and mathematically sound. I believe that the best interface is the one that disappears, leaving only the user and their intent.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 pt-20 border-t border-white/10">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-4">Principles</div>
                  <ul className="space-y-3 text-sm text-slate-500">
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      Grid-based Hierarchy
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      Typographic Precision
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      Functional Minimalism
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-4">Vision</div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    As a new generation engineer, I am dedicated to championing the user's cognitive ease through modern standards and emerging technologies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
