import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(".char", {
        y: 100,
        opacity: 0,
        stagger: 0.02,
        duration: 1.2,
        ease: 'expo.out',
      })
      .from(subRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      }, "-=0.8")
      .from(btnRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, "-=0.6");
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
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
            <div className="lg:col-span-7">
              <p className="text-3xl md:text-5xl font-serif italic text-slate-300 mb-8 leading-tight">
                Crafting digital systems with <span className="text-white">mathematical precision</span> and <span className="text-white">human intuition</span>.
              </p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-500 text-lg max-w-md leading-relaxed mb-8 border-l border-white/10 pl-8">
                A fresh perspective on digital craftsmanship. I build interfaces that bridge the gap between complex logic and human experience through modern engineering.
              </p>
              <div ref={btnRef} className="flex gap-4">
                <button
                  onClick={scrollToProjects}
                  className="px-10 py-5 bg-white text-primary font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-500"
                >
                  View Archive
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 border border-white/20 text-white font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-500"
                >
                  Inquire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute right-12 bottom-12 hidden xl:block">
        <div className="flex items-center gap-4 origin-right rotate-90 translate-y-full">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-600">EST. MMXXIV</span>
          <span className="w-24 h-px bg-slate-800" />
        </div>
      </div>
    </section>
  );
}
