"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveMouse);
    return () => window.removeEventListener('mousemove', moveMouse);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-500/50 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-sm" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
      />
    </>
  );
};

export default CursorTrail;