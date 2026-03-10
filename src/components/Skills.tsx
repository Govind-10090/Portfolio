import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SKILLS } from '../constants';

interface SkillCardProps {
  name: string;
  iconName: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, iconName, index }) => {
  const Icon = (Icons as any)[iconName] || Icons.Code2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group hover:border-accent/50 transition-all duration-300"
    >
      <div className="p-4 rounded-xl bg-accent/5 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
        <Icon size={28} />
      </div>
      <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden grid-lines">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">02 — Competencies</span>
              <span className="w-12 h-px bg-accent" />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-bold mb-8 text-white tracking-tighter"
            >
              Technical <br /> <span className="text-accent italic font-serif">Infrastructure</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {/* Main Competency - Architecture */}
          <div className="md:col-span-8 bg-primary p-12 group">
            <div className="flex items-start justify-between mb-12">
              <Icons.Cpu size={48} className="text-accent" />
              <span className="text-[10px] font-mono text-slate-600">MOD_01</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">System Architecture</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-12">
              Designing robust, scalable frontend architectures using React and Next.js. Focus on modularity, state management, and performance optimization at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              {["React 19", "Next.js 15", "TypeScript", "Redux", "Zustand"].map(tag => (
                <span key={tag} className="px-4 py-2 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-accent hover:border-accent transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Competency - Interface Design */}
          <div className="md:col-span-4 bg-primary p-12 group">
            <div className="flex items-start justify-between mb-12">
              <Icons.Layout size={48} className="text-accent" />
              <span className="text-[10px] font-mono text-slate-600">MOD_02</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Interface Design</h3>
            <p className="text-slate-500 leading-relaxed mb-12">
              Precision-crafted UI systems built on strict typographic grids and functional color theory.
            </p>
            <div className="space-y-4">
              {["Figma", "Tailwind CSS", "Design Systems"].map(item => (
                <div key={item} className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-sm text-slate-400">{item}</span>
                  <Icons.Check size={14} className="text-accent" />
                </div>
              ))}
            </div>
          </div>

          {/* Competency - Animation */}
          <div className="md:col-span-6 bg-primary p-12 group">
            <div className="flex items-start justify-between mb-12">
              <Icons.Activity size={48} className="text-accent" />
              <span className="text-[10px] font-mono text-slate-600">MOD_03</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Motion Engineering</h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              Cinematic web experiences powered by GSAP and Framer Motion. Focus on physics-based interactions and meaningful transitions.
            </p>
          </div>

          {/* Competency - Backend/Cloud */}
          <div className="md:col-span-6 bg-primary p-12 group">
            <div className="flex items-start justify-between mb-12">
              <Icons.Database size={48} className="text-accent" />
              <span className="text-[10px] font-mono text-slate-600">MOD_04</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Cloud Infrastructure</h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              Serverless integration with Firebase and Node.js. Real-time data synchronization and secure authentication protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
