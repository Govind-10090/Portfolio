import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="min-h-screen bg-primary text-slate-100 relative selection:bg-accent selection:text-white">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
          style={{ scaleX }}
        />

        <div className="fixed inset-0 noise-bg z-[9999] pointer-events-none" />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<CaseStudy />} />
          </Routes>
        </main>

        {/* Global Scroll Arrow (Micro-interaction) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="fixed bottom-8 right-8 z-40 hidden md:block"
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, backgroundColor: "#E63946" }}
            className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 hover:border-accent group transition-colors"
          >
            <ChevronDown className="rotate-180 group-hover:text-white transition-colors" size={20} />
          </motion.button>
        </motion.div>
      </div>
    </Router>
  );
}
