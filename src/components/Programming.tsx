"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap } from 'lucide-react';

const Programming = () => {
  return (
    <section className="py-32 px-6 bg-black/40">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel rounded-3xl overflow-hidden border-white/5">
          <div className="bg-white/5 px-6 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <span className="text-xs font-mono text-gray-500 ml-4">pratik-raj --version 2.0.4</span>
          </div>
          
          <div className="p-8 font-mono text-sm md:text-base leading-relaxed">
            <div className="flex gap-4 mb-6">
              <span className="text-green-400">➜</span>
              <span className="text-cyan-400">~/projects</span>
              <span className="text-white">ls -la</span>
            </div>
            
            <div className="space-y-4 text-gray-400">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors"
              >
                <Cpu className="w-4 h-4 text-cyan-500" />
                <span>drwxr-xr-x  neural-engine-v1</span>
                <span className="text-xs bg-white/5 px-2 py-0.5 rounded ml-auto">Active</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors"
              >
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>drwxr-xr-x  distributed-ledger</span>
                <span className="text-xs bg-white/5 px-2 py-0.5 rounded ml-auto">Completed</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors"
              >
                <Terminal className="w-4 h-4 text-magenta-500" />
                <span>drwxr-xr-x  quantum-sim-js</span>
                <span className="text-xs bg-white/5 px-2 py-0.5 rounded ml-auto">Experimental</span>
              </motion.div>
            </div>

            <div className="mt-12 flex gap-4">
              <span className="text-green-400">➜</span>
              <span className="text-cyan-400">~/projects</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-2 h-5 bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programming;