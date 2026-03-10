import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-slate-100 relative">
        <div className="fixed inset-0 noise-bg z-[9999] pointer-events-none" />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<CaseStudy />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
