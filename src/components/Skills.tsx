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
  const competencies = [
    {
      id: "COMP_01",
      title: "System Architecture",
      icon: Icons.Cpu,
      description: "Designing scalable and maintainable frontend architectures. I focus on component modularity, state management, and efficient data flow.",
      tags: ["React 19", "TypeScript", "Next.js", "Redux", "Zustand", "SWR"],
      span: "md:col-span-8",
      level: 90
    },
    {
      id: "COMP_02",
      title: "Interface Design",
      icon: Icons.Layout,
      description: "Crafting pixel-perfect interfaces with a focus on usability and aesthetic clarity.",
      items: ["Figma", "Tailwind CSS", "Design Systems"],
      span: "md:col-span-4",
      level: 85
    },
    {
      id: "COMP_03",
      title: "Motion Engineering",
      icon: Icons.Activity,
      description: "Bringing interfaces to life with purposeful animations and smooth transitions using GSAP and Framer Motion.",
      span: "md:col-span-6",
      level: 80
    },
    {
      id: "COMP_04",
      title: "Cloud Infrastructure",
      icon: Icons.Cloud,
      description: "Deploying and managing modern web applications with Vercel, Firebase, and CI/CD pipelines.",
      span: "md:col-span-6",
      level: 75
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden grid-lines">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">02 — Competencies</span>
              <span className="w-12 h-px bg-accent" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold mb-8 text-white tracking-tighter"
            >
              Technical <br /> <span className="text-accent italic font-serif">Infrastructure</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {competencies.map((comp, index) => (
            <motion.div 
              key={comp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ 
                backgroundColor: "rgba(20, 20, 20, 1)",
                boxShadow: "inset 0 0 40px rgba(230, 57, 70, 0.05)"
              }}
              className={`${comp.span} bg-primary p-12 group relative overflow-hidden transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-12">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-accent"
                >
                  <comp.icon size={48} />
                </motion.div>
                <span className="text-[10px] font-mono text-slate-600">{comp.id}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-accent transition-colors duration-300">{comp.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-12">
                {comp.description}
              </p>
              
              {/* Skill Bar */}
              <div className="w-full h-1 bg-white/5 mb-12 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${comp.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                  className="h-full bg-accent"
                />
              </div>

              {comp.tags && (
                <div className="flex flex-wrap gap-4">
                  {comp.tags.map((tag, i) => (
                    <motion.span 
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.6 + (i * 0.05) }}
                      className="px-4 py-2 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-accent hover:border-accent transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              )}

              {comp.items && (
                <div className="space-y-4">
                  {comp.items.map((item, i) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.6 + (i * 0.1) }}
                      className="flex items-center justify-between py-2 border-b border-white/5"
                    >
                      <span className="text-sm text-slate-400">{item}</span>
                      <Icons.Check size={14} className="text-accent" />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
