"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Programming from '@/components/Programming';
import Contact from '@/components/Contact';
import CursorTrail from '@/components/CursorTrail';
import BackgroundEffects from '@/components/BackgroundEffects';
import MoodSwitcher from '@/components/MoodSwitcher';
import AmbientAudio from '@/components/AmbientAudio';
import PortalTransition from '@/components/PortalTransition';
import { MadeWithVizoxStudio } from "@/components/made-with-vizoxstudio";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black flex items-center justify-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl font-black tracking-[0.5em] text-cyan-500"
            >
              INITIALIZING...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <PortalTransition />
      <CursorTrail />
      <BackgroundEffects />
      <MoodSwitcher />
      <AmbientAudio />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[1000]"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 left-0 right-0 p-8 flex justify-between items-center z-50 mix-blend-difference">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-black tracking-tighter cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          PR.
        </motion.span>
        <div className="flex gap-8 text-xs font-mono tracking-widest uppercase text-gray-400">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
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
              <a href="https://github.com" target="_blank" className="text-gray-500 hover:text-white transition-colors text-sm font-mono">GITHUB</a>
              <a href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-white transition-colors text-sm font-mono">LINKEDIN</a>
              <a href="https://twitter.com" target="_blank" className="text-gray-500 hover:text-white transition-colors text-sm font-mono">TWITTER</a>
            </div>
          </div>
          <MadeWithVizoxStudio />
        </footer>
      </div>
    </main>
  );
};

export default Index;