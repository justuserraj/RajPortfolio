"use client";

import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Programming from '@/components/Programming';
import Contact from '@/components/Contact';
import CursorTrail from '@/components/CursorTrail';
import BackgroundEffects from '@/components/BackgroundEffects';
import MoodSwitcher from '@/components/MoodSwitcher';
import { MadeWithVizoxStudio } from "@/components/made-with-vizoxstudio";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Easter Egg: Jarvis Trigger
  useEffect(() => {
    let keys = '';
    const handleKeyDown = (e: KeyboardEvent) => {
      keys += e.key.toLowerCase();
      if (keys.includes('jarvis')) {
        alert('System Override: Welcome, Pratik.');
        keys = '';
      }
      if (keys.length > 10) keys = keys.slice(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="relative bg-[#0a0a0a] min-h-screen selection:bg-cyan-500/30">
      <CursorTrail />
      <BackgroundEffects />
      <MoodSwitcher />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[1000]"
        style={{ scaleX }}
      />

      {/* Navigation (Minimal) */}
      <nav className="fixed top-0 left-0 right-0 p-8 flex justify-between items-center z-50 mix-blend-difference">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-black tracking-tighter"
        >
          PR.
        </motion.span>
        <div className="flex gap-8 text-xs font-mono tracking-widest uppercase text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <div className="relative z-10">
        <Hero />
        <Skills />
        <Portfolio />
        <Programming />
        <Contact />
        
        <footer className="py-12 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gray-500 text-sm font-mono">© 2026 PRATIK RAJ. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-mono">GITHUB</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-mono">LINKEDIN</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-mono">TWITTER</a>
            </div>
          </div>
          <MadeWithVizoxStudio />
        </footer>
      </div>
    </main>
  );
};

export default Index;