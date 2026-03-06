"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import ProjectModal from './ProjectModal';

const categories = ['All', 'Video Reels', 'Brand Design', 'Web Apps', 'Programming'];

const projects = [
  { 
    id: 1, 
    title: 'Cyberpunk Reel', 
    category: 'Video Reels', 
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800', 
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video link
    description: 'A high-energy motion graphics reel exploring futuristic aesthetics and glitch effects.',
    tech: 'After Effects, Premiere Pro'
  },
  { 
    id: 2, 
    title: 'Neo-Bank UI', 
    category: 'Web Apps', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 
    videoUrl: '', // Leave empty if no video
    description: 'A minimalist banking dashboard with real-time data visualization and glassmorphism.',
    tech: 'React, Tailwind, Recharts'
  },
  { 
    id: 3, 
    title: 'Quantum Brand', 
    category: 'Brand Design', 
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800', 
    videoUrl: '',
    description: 'Complete brand identity for a quantum computing startup, focusing on abstract geometry.',
    tech: 'Illustrator, Figma'
  },
  { 
    id: 4, 
    title: 'AI Engine', 
    category: 'Programming', 
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', 
    videoUrl: '',
    description: 'A distributed neural network architecture designed for low-latency edge computing.',
    tech: 'Python, TensorFlow, Rust'
  },
  { 
    id: 5, 
    title: 'Motion Graphics', 
    category: 'Video Reels', 
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800', 
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Experimental 3D animations focusing on light refraction and liquid physics.',
    tech: 'Cinema 4D, Octane Render'
  },
  { 
    id: 6, 
    title: 'E-Commerce 3.0', 
    category: 'Web Apps', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', 
    videoUrl: '',
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass-panel cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-cyan-400 text-xs font-mono mb-2 uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm mt-4 line-clamp-2">
                      {project.description}
                    </p>
                  </motion.div>
                </div>
                
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={20} className="text-white" />
                </div>
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