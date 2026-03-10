import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-accent hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-primary"
    >
      <div className="fixed inset-0 noise-bg z-[9999] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-12 pt-48 pb-32">
        {/* Header Section */}
        <div className="mb-32">
          <Link
            to="/"
            className="inline-flex items-center gap-4 text-slate-500 hover:text-white transition-colors mb-20 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Back to Archive</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-6 block">Case Study — {project.id}</span>
              <h1 className="text-6xl md:text-9xl font-bold text-white mb-12 leading-[0.85] tracking-tighter">
                {project.title}
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
                {project.description}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6 lg:items-end">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-64 px-8 py-4 border border-accent text-accent text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-accent hover:text-primary transition-all duration-500 text-center"
              >
                Live Deployment
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-64 px-8 py-4 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-primary transition-all duration-500 text-center"
              >
                Source Repository
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="aspect-[21/9] overflow-hidden mb-32 relative grid-lines border border-white/5"
        >
          {project.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          )}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-32">
          <div className="lg:col-span-8 space-y-32">
            {/* Overview */}
            <section>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">01 — The Challenge</span>
                <span className="flex-1 h-px bg-white/10" />
              </div>
              <p className="text-slate-400 text-xl leading-relaxed font-light">
                {project.longDescription}
              </p>
            </section>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-20">
              <section className="border-l border-white/10 pl-10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-8">The Problem</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-light">
                  {project.problem}
                </p>
              </section>
              <section className="border-l border-accent/20 pl-10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8">The Solution</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-light">
                  {project.solution}
                </p>
              </section>
            </div>

            {/* Key Features */}
            <section>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">02 — Architecture</span>
                <span className="flex-1 h-px bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {project.keyFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="text-accent mb-6 text-sm font-mono">[{String(i + 1).padStart(2, '0')}]</div>
                    <p className="text-white text-lg font-light leading-relaxed group-hover:text-accent transition-colors">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-48 space-y-16">
              <div className="border-t border-white/10 pt-12">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-10">Technical Stack</h3>
                <div className="flex flex-col gap-4">
                  {project.techStack.map((tech) => (
                    <div key={tech} className="flex items-center justify-between group">
                      <span className="text-sm text-slate-500 group-hover:text-white transition-colors">{tech}</span>
                      <span className="h-px flex-1 bg-white/5 mx-4" />
                      <span className="text-[10px] font-mono text-slate-700">v.1.0</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-12">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-8">Project Role</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Lead Interface Architect responsible for system design, component engineering, and performance optimization.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}
