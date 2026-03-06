"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const categories = ['All', 'Video Reels', 'Brand Design', 'Web Apps', 'Programming'];

const projects = [
  { 
    id: 1, 
    title: 'Cyberpunk Cinematic', 
    category: 'Video Reels', 
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800', 
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video link
    description: 'A high-octane cinematic reel exploring futuristic cityscapes and neon aesthetics.',
    tech: 'After Effects, Premiere Pro, Blender'
  },
  { 
    id: 2, 
    title: 'Neo-Bank Interface', 
    category: 'Web Apps', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 
    description: 'A minimalist banking dashboard with real-time data visualization and biometric security.',
    tech: 'React, TypeScript, Recharts'
  },
  { 
    id: 3, 
    title: 'Quantum Identity', 
    category: 'Brand Design', 
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800', 
    description: 'Complete brand overhaul for a quantum computing startup, focusing on abstract geometry.',
    tech: 'Illustrator, Figma, Cinema 4D'
  },
  { 
    id: 4, 
    title: 'Neural Engine V2', 
    category: 'Programming', 
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', 
    description: 'A distributed machine learning engine optimized for low-latency edge computing.',
    tech: 'Rust, WebAssembly, Python'
  },
  { 
    id: 5, 
    title: 'Abstract Motion', 
    category: 'Video Reels', 
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800', 
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Experimental motion graphics piece focusing on fluid dynamics and light refraction.',
    tech: 'Houdini, Redshift, Nuke'
  },
  { 
    id: 6, 
    title: 'E-Commerce 3.0', 
    category: 'Web Apps', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', 
    description: 'Next-generation shopping experience with AR product previews and instant checkout.',
    tech: 'Next.js, Three.js, Stripe'
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-32 px-6" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">SELECTED WORKS</h2>
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Archive 2024-2026</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all border ${
                  activeCategory === cat 
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                    : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -12 }}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-panel cursor-pointer border-white/5 hover:border-white/20 transition-all duration-500"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-cyan-400 text-[10px] font-mono mb-3 block uppercase tracking-[0.3em]">{project.category}</span>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition-colors leading-tight">{project.title}</h3>
                    
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase">
                        View Project <ArrowUpRight size={14} className="text-cyan-400" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {project.videoUrl && (
                  <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    <PlayCircle size={28} className="text-cyan-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Portfolio;