import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple section tracking
      const sections = ['projects', 'skills', 'about', 'contact'];
      let current = 'Home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section.charAt(0).toUpperCase() + section.slice(1);
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, name: string) => {
    setIsOpen(false);
    setActiveSection(name);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-primary/90 backdrop-blur-md border-b border-white/5 py-6 shadow-2xl'
          : 'bg-transparent py-10'
      )}
    >
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-[0.3em] text-white group relative overflow-hidden">
          <motion.span
            initial={{ y: 0 }}
            whileHover={{ y: -30 }}
            transition={{ duration: 0.3 }}
            className="block"
          >
            GOVIND<span className="text-accent">.</span>
          </motion.span>
          <motion.span
            initial={{ y: 30 }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 text-accent"
          >
            GOVIND<span className="text-white">.</span>
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => handleNavClick(item.href, item.name)}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.4em] transition-colors relative group py-2",
                activeSection === item.name ? "text-white" : "text-slate-500 hover:text-white"
              )}
            >
              {item.name}
              {/* Underline animation from center outward */}
              <span className="absolute bottom-0 left-1/2 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0" />
              
              {/* Active indicator */}
              {activeSection === item.name && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('/#contact', 'Contact')}
            className="px-8 py-3 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-accent/20"
          >
            Inquire
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => handleNavClick(item.href, item.name)}
                    className={cn(
                      "text-2xl font-bold uppercase tracking-[0.2em] transition-colors",
                      activeSection === item.name ? "text-accent" : "text-slate-400"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => handleNavClick('/#contact', 'Contact')}
                className="w-full py-5 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.4em]"
              >
                Inquire
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
