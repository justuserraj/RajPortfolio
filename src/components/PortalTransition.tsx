"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PortalTransition = () => {
  return (
    <motion.div
      initial={{ scale: 1.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 pointer-events-none z-[2000]"
    >
      <motion.div 
        className="absolute inset-0 border-[100px] border-black"
        animate={{ borderWidth: [100, 0] }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div 
        className="absolute inset-0 bg-cyan-500/10"
        animate={{ opacity: [0.5, 0] }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </motion.div>
  );
};

export default PortalTransition;