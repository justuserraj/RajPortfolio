"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Video, Palette, Globe, Code2 } from 'lucide-react';

const skills = [
  { name: 'Video Editing', icon: Video, color: 'text-blue-400', glow: 'shadow-blue-500/20' },
  { name: 'Brand Design', icon: Palette, color: 'text-magenta-400', glow: 'shadow-pink-500/20' },
  { name: 'Web Apps', icon: Globe, color: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
  { name: 'Programming', icon: Code2, color: 'text-green-400', glow: 'shadow-green-500/20' },
];

const Skills = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl glass-panel flex flex-col items-center justify-center text-center transition-all hover:border-white/20"
            >
              <div className={`mb-4 p-4 rounded-2xl bg-white/5 transition-all group-hover:scale-110 group-hover:bg-white/10 ${skill.color}`}>
                <skill.icon size={32} />
              </div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors">
                {skill.name}
              </h3>
              
              {/* Hidden Complexity: Hover Glow */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10 bg-gradient-to-br from-transparent via-white/5 to-transparent`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;