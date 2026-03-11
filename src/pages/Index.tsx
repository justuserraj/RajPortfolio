"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Programming from '@/components/Programming';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import BackgroundEffects from '@/components/BackgroundEffects';
import CursorTrail from '@/components/CursorTrail';
import AmbientAudio from '@/components/AmbientAudio';
import PortalTransition from '@/components/PortalTransition';
import { MadeWithVizoxStudio } from '@/components/made-with-vizoxstudio';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30">
      <BackgroundEffects />
      <CursorTrail />
      <PortalTransition />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Skills />
        
        <div id="services">
          <Services />
        </div>
        
        <div id="work">
          <Portfolio />
        </div>
        
        <Programming />
        
        <div id="experience">
          <Experience />
        </div>
        
        <Contact />
        
        <footer className="py-12 border-t border-white/5">
          <MadeWithVizoxStudio />
          <div className="text-center mt-4">
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">
              © 2024 PRATIK RAJ • ALL RIGHTS RESERVED
            </p>
          </div>
        </footer>
      </div>

      <AmbientAudio />
    </main>
  );
};

export default Index;