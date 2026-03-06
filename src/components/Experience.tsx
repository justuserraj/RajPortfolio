"use client";

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: "2024 - Present",
    role: "Lead Creative Technologist",
    company: "Vizox Studio",
    desc: "Spearheading the development of next-gen web experiences and interactive brand identities."
  },
  {
    year: "2022 - 2024",
    role: "Senior Full-Stack Developer",
    company: "Nexus Digital",
    desc: "Architected scalable SaaS platforms and optimized cloud infrastructure for high-traffic applications."
  },
  {
    year: "2020 - 2022",
    role: "UI/UX Designer & Motion Artist",
    company: "Freelance",
    desc: "Collaborated with global startups to create immersive digital products and cinematic marketing reels."
  }
];

const Experience = () => {
  return (
    <section className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black tracking-tighter mb-20 text-center">CHRONOLOGY</h2>
        
        <div className="space-y-12 relative before:absolute before:left-[17px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0a0a0a] border-4 border-cyan-500 z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
              
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-2 block">{exp.year}</span>
                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                <p className="text-gray-400 font-medium mb-4">{exp.company}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{exp.desc}</p>
              </div>
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;