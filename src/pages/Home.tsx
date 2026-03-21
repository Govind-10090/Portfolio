import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import { PROJECTS } from '../constants';
import { motion } from 'motion/react';
import { useLocation, Link } from 'react-router-dom';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="relative">
      <div className="fixed inset-0 noise-bg z-[9999] pointer-events-none" />
      
      <Hero />
      
      {/* Structural Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-white/10 w-full" />
      </div>

      <section id="projects" className="py-32 grid-lines">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex items-center gap-4 mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">03 — Selected Works</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <div className="space-y-0">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Skills />
      <About />
      <Contact />

      <footer className="py-32 border-t border-white/10 bg-secondary relative overflow-hidden grid-lines">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
            <div className="md:col-span-6">
              <Link to="/" className="text-2xl font-bold tracking-[0.4em] text-white mb-10 block">
                GOVIND<span className="text-accent">.</span>
              </Link>
              <p className="text-slate-500 text-lg max-w-sm leading-relaxed font-light">
                A commitment to digital craftsmanship. Designing the future of human-computer interaction through timeless principles and modern technology.
              </p>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8">Connect</h4>
              <div className="flex flex-col gap-6">
                <a href="https://www.linkedin.com/in/govind-burhan-a66aba241/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-accent transition-colors">LinkedIn</a>
                <a href="https://github.com/Govind-10090" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-accent transition-colors">GitHub</a>
                <a href="#" className="text-sm text-slate-500 hover:text-accent transition-colors">Twitter</a>
              </div>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8">Location</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Available globally. <br />
                Operating from the digital frontier.
              </p>
            </div>
          </div>
          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">
              © {new Date().getFullYear()} Govind. All Rights Reserved.
            </p>
            <div className="flex gap-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">Privacy Policy</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
