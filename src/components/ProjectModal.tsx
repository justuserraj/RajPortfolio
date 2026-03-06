"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  // Helper to determine if the URL is a YouTube/Vimeo embed or a direct video file
  const isEmbed = project.videoUrl?.includes('youtube.com') || project.videoUrl?.includes('vimeo.com') || project.videoUrl?.includes('player.');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl glass-panel rounded-3xl overflow-hidden shadow-2xl border-white/10"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all"
            >
              <X size={20} />
            </button>

            <div className="grid lg:grid-cols-5 h-full max-h-[90vh] overflow-y-auto">
              {/* Video/Media Section */}
              <div className="lg:col-span-3 relative bg-black flex items-center justify-center min-h-[300px]">
                {project.videoUrl ? (
                  isEmbed ? (
                    <iframe
                      src={project.videoUrl}
                      className="w-full h-full aspect-video"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video 
                      src={project.videoUrl} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-contain"
                    />
                  )
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="lg:col-span-2 p-8 md:p-12 flex flex-col bg-[#0a0a0a]">
                <span className="text-cyan-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">
                  {project.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter">
                  {project.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                  {project.description || "A deep dive into the technical architecture and creative vision behind this project. Built with precision and a focus on high-performance user experiences."}
                </p>

                <div className="space-y-4 mb-12">
                  <div className="flex items-center gap-4 text-sm font-mono text-gray-500">
                    <span className="w-24">TECH STACK:</span>
                    <span className="text-white">{project.tech || "React, GSAP, Three.js"}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-mono text-gray-500">
                    <span className="w-24">TIMELINE:</span>
                    <span className="text-white">2024</span>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-4">
                  <button className="flex-1 px-6 py-3 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors">
                    LIVE DEMO <ExternalLink size={18} />
                  </button>
                  <button className="flex-1 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                    SOURCE <Github size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;