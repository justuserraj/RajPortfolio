"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const AmbientAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.2;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser"));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleAudio}
        className="glass-panel p-4 rounded-full text-gray-400 hover:text-cyan-400 transition-colors"
      >
        {isPlaying ? (
          <div className="relative">
            <Volume2 size={20} />
            <motion.div 
              className="absolute -inset-1 rounded-full border border-cyan-500/50"
              animate={{ scale: [1, 1.5], opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        ) : (
          <VolumeX size={20} />
        )}
      </motion.button>
    </div>
  );
};

export default AmbientAudio;