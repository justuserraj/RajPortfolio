"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Video Reels', 'Brand Design', 'Web Apps', 'Programming'];

const projects = [
  { id: 1, title: 'Cyberpunk Reel', category: 'Video Reels', image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800', color: 'cyan' },
  { id: 2, title: 'Neo-Bank UI', category: 'Web Apps', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', color: 'blue' },
  { id: 3, title: 'Quantum Brand', category: 'Brand Design', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800', color: 'magenta' },
  { id: 4, title: 'AI Engine', category: 'Programming', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', color: 'green' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="group relative aspect-video rounded-3xl overflow-hidden glass-panel"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                  <span className="text-cyan-400 text-xs font-mono mb-2 uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                
                {/* Hidden Complexity: Interactive Tilt Effect (Simulated with CSS) */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-cyan-500/10 to-transparent" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;