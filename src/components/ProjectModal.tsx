"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, PlayCircle } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  // Helper to determine if the URL is a YouTube/Vimeo embed or a direct video file
  const isEmbed = project.videoUrl?.includes('youtube.com') || project.videoUrl?.includes('vimeo.com');

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
            className="relative w-full max-w-6xl glass-panel rounded-[2rem] overflow-hidden shadow-2xl border-white/10 flex flex-col md:flex-row max-h-[90vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all border border-white/10"
            >
              <X size={20} />
            </button>

            {/* Media Section */}
            <div className="w-full md:w-3/5 bg-black relative flex items-center justify-center overflow-hidden">
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
                  className="w-full h-full object-cover opacity-60"
                />
              )}
            </div>

            {/* Content Section */}
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col overflow-y-auto bg-[#0a0a0a]">
              <div className="mb-auto">
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-cyan-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
                >
                  {project.category}
                </motion.span>
                <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter leading-tight">
                  {project.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8 text-lg font-light">
                  {project.description || "A sophisticated digital solution pushing the boundaries of modern interaction design and technical implementation."}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-12">
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Tech Stack</p>
                    <p className="text-sm text-white font-medium">{project.tech || "React, Tailwind, GSAP"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Role</p>
                    <p className="text-sm text-white font-medium">Lead Creator</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
                <a 
                  href={project.liveUrl || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all active:scale-95"
                >
                  LIVE DEMO <ExternalLink size={18} />
                </a>
                <a 
                  href={project.githubUrl || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-95"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;