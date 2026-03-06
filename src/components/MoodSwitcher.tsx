"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Moon } from 'lucide-react';

const MoodSwitcher = () => {
  const [mode, setMode] = useState<'create' | 'calm'>('create');

  useEffect(() => {
    if (mode === 'calm') {
      document.documentElement.style.setProperty('--primary', '199 89% 48%');
      // Add more subtle shifts here
    } else {
      document.documentElement.style.setProperty('--primary', '199 89% 48%');
    }
  }, [mode]);

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      <div className="glass-panel p-1 rounded-full flex items-center gap-1">
        <button
          onClick={() => setMode('create')}
          className={`p-3 rounded-full transition-all ${mode === 'create' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
        >
          <Zap size={18} />
        </button>
        <button
          onClick={() => setMode('calm')}
          className={`p-3 rounded-full transition-all ${mode === 'calm' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
        >
          <Moon size={18} />
        </button>
      </div>
    </div>
  );
};

export default MoodSwitcher;