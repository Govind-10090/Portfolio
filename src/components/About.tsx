import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  const heading = "The Craft of Invisible Design";
  const bodyParagraphs = [
    "Design is not a coat of paint; it is the skeleton. I am developing a philosophy that prioritizes clarity over decoration and purpose over trend.",
    "My approach is rooted in the Swiss International Style—objective, functional, and mathematically sound. I believe that the best interface is the one that disappears, leaving only the user and their intent."
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden grid-lines">
      {/* Continuous Rotating Geometric Shapes */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-0 right-0 w-[40rem] h-[40rem] border border-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 glass p-6 rounded-sm border-white/10 hidden md:block"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-2">Signature Style</div>
              <div className="text-sm font-serif italic text-white">Reductionist. Functional. Timeless.</div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-12">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500"
              >
                01 — Philosophy
              </motion.span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex-1 h-px bg-white/10 origin-left" 
              />
            </div>

            <h2 className="text-6xl md:text-8xl font-bold mb-12 leading-[0.9] tracking-tighter flex flex-wrap">
              {heading.split(" ").map((word, i) => (
                <span key={i} className="mr-4 flex overflow-hidden">
                  {word.split("").map((char, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (i * 0.1) + (j * 0.03) }}
                      className={`inline-block ${word === "Craft" ? "text-accent italic font-serif" : ""}`}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h2>
            
            <div className="space-y-8 text-slate-400 text-xl leading-relaxed font-light">
              {bodyParagraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + (i * 0.2) }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 pt-20 border-t border-white/10">
              <div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-4"
                >
                  Principles
                </motion.div>
                <ul className="space-y-3 text-sm text-slate-500">
                  {["Grid-based Hierarchy", "Typographic Precision", "Functional Minimalism"].map((principle, i) => (
                    <motion.li 
                      key={principle}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + (i * 0.1), type: "spring" }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      {principle}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-4"
                >
                  Vision
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="text-sm text-slate-500 leading-relaxed"
                >
                  As a new generation engineer, I am dedicated to championing the user's cognitive ease through modern standards and emerging technologies.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
