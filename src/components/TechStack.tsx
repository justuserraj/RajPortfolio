"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Layout, 
  Cpu, 
  Palette, 
  Video, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

const techSkills = [
  { name: 'Python', icon: Code2, color: 'text-blue-400' },
  { name: 'Web Development', icon: Globe, color: 'text-cyan-400' },
  { name: 'UI/UX Design', icon: Layout, color: 'text-indigo-400' },
  { name: 'AI Integration', icon: Cpu, color: 'text-purple-400' },
  { name: 'Graphic Design', icon: Palette, color: 'text-pink-400' },
  { name: 'Video Editing', icon: Video, color: 'text-red-400' },
  { name: 'Cyber Security', icon: ShieldCheck, color: 'text-emerald-400' },
  { name: 'Automation', icon: Zap, color: 'text-yellow-400' },
];

const TechStack = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="tech-stack">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            TECH STACK
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.05,
                duration: 0.5,
                ease: "easeOut"
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
              whileHover={{ 
                scale: 1.05,
                y: -15,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="glass-panel p-8 rounded-[2rem] flex flex-col items-center justify-center text-center border-white/5 group-hover:border-cyan-500/50 transition-all duration-500 h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-cyan-500/10 -z-10" />
                
                <div className={`mb-4 p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all duration-500 ${skill.color}`}>
                  <skill.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;