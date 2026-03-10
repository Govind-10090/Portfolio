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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 py-24 border-b border-white/10"
    >
      {/* Project Meta */}
      <div className="lg:col-span-4">
        <div className="sticky top-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono text-slate-600">ARCHIVE_0{index + 1}</span>
            <span className="w-8 h-px bg-white/10" />
          </div>
          <h3 className="text-5xl font-bold text-white mb-8 tracking-tighter leading-none">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-12">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 border border-white/10 px-3 py-1.5 rounded-sm">
                {tech}
              </span>
            ))}
          </div>
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-accent hover:text-white transition-colors group/link"
          >
            Explore Case Study
            <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Project Visual */}
      <div className="lg:col-span-8 relative">
        <div className="aspect-[16/9] overflow-hidden bg-secondary border border-white/5 relative rounded-sm">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-1000" />
          
          {/* Overlay Info */}
          <div className="absolute bottom-0 left-0 w-full p-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]">
            <div className="glass p-8 rounded-sm max-w-md border-white/10">
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
