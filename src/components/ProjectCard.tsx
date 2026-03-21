import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../constants';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15, 
        ease: [0.25, 1, 0.5, 1] 
      }}
      whileHover={{ y: -8 }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 py-24 border-b border-white/10 transition-colors duration-500 hover:border-accent/30"
    >
      {/* Project Meta */}
      <div className="lg:col-span-4">
        <div className="sticky top-32">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 + 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-[10px] font-mono text-slate-600">WORK_0{index + 1}</span>
            <span className="w-8 h-px bg-white/10" />
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.4 }}
            className="text-5xl font-bold text-white mb-8 tracking-tighter leading-none group-hover:text-accent transition-colors duration-300"
          >
            {project.title}
          </motion.h3>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.techStack.map((tech, i) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 + 0.5 + (i * 0.1) }}
                className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 border border-white/10 px-3 py-1.5 rounded-sm hover:border-accent/50 hover:text-white transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-accent hover:text-white transition-colors group/link"
          >
            Execute Case Study
            <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Project Visual */}
      <div className="lg:col-span-8 relative">
        <div className="aspect-[16/9] overflow-hidden bg-secondary border border-white/5 relative rounded-sm">
          {project.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          )}
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-30 transition-opacity duration-400" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-1000" />
          
          {/* Overlay Info */}
          <div className="absolute bottom-0 left-0 w-full p-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-sm max-w-md border-white/10"
            >
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
