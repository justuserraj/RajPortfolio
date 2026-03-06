"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MousePointer2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-cyan-500 font-mono tracking-[0.3em] text-sm mb-4 block uppercase"
        >
          Digital Architect & Creator
        </motion.span>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          PRATIK RAJ
        </h1>
        
        <p className="text-gray-400 max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12">
          Crafting immersive digital experiences where <span className="text-white font-medium">simplicity</span> meets <span className="text-cyan-400 font-medium">complexity</span>.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              EXPLORE UNIVERSE
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div 
              className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            />
          </motion.button>
          
          <a 
            href="#contact"
            className="text-xs font-mono tracking-widest uppercase text-gray-500 hover:text-white transition-colors"
          >
            Initiate Contact
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">Scroll to Navigate</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
      </motion.div>

      {/* Floating Geometric Forms */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-cyan-500/5 rounded-[40%]"
        />
      </div>
    </section>
  );
};

export default Hero;