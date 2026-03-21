import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation: fade in and slide up with letter stagger
      gsap.fromTo(".char", 
        { 
          y: 100, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.05, 
          duration: 0.8, 
          ease: "power4.out",
          delay: 0.2
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const name = "Govind";

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 grid-lines">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-transparent to-primary" />
        
        {/* Animated Geometric Accents */}
        <motion.div 
          initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
          animate={{ opacity: 0.1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 border border-accent rounded-full"
        />
        <motion.div 
          initial={{ opacity: 0, rotate: 45, scale: 0.5 }}
          animate={{ opacity: 0.05, rotate: 0, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] border border-white/20"
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 flex items-center gap-4"
          >
            <span className="w-12 h-px bg-accent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">The Art of Interface</span>
          </motion.div>

          <h1 ref={titleRef} className="text-8xl md:text-[14rem] font-bold leading-[0.8] mb-12 text-white tracking-tighter flex flex-wrap">
            {name.split("").map((char, i) => (
              <span key={i} className="char inline-block">{char}</span>
            ))}
            <span className="char inline-block text-accent">.</span>
          </h1>

          <div ref={subRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:col-span-7"
            >
              <p className="text-3xl md:text-5xl font-serif italic text-slate-300 mb-8 leading-tight">
                Crafting digital systems with <span className="text-white">mathematical precision</span> and <span className="text-white">human intuition</span>.
              </p>
            </motion.div>
            <div className="lg:col-span-5">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-500 text-lg max-w-md leading-relaxed mb-8 border-l border-white/10 pl-8"
              >
                A fresh perspective on digital craftsmanship. I build interfaces that bridge the gap between complex logic and human experience through modern engineering.
              </motion.p>
              <div ref={btnRef} className="flex gap-4">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(230,57,70,0.3)" }}
                  onClick={scrollToProjects}
                  className="px-10 py-5 bg-white text-primary font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-300"
                >
                  View Archive
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#0A0A0A" }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 border border-white/20 text-white font-bold text-[10px] uppercase tracking-[0.2em] hover:text-primary transition-all duration-300"
                >
                  Inquire
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Vertical Rail Text */}
      <div className="absolute right-12 bottom-12 hidden xl:block">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-4 origin-right rotate-90 translate-y-full"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-600">EST. MMXXIV</span>
          <span className="w-24 h-px bg-slate-800" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
