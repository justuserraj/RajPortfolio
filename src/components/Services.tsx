"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layers, Zap, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Digital Strategy",
    desc: "Architecting high-level roadmaps for complex digital ecosystems.",
    icon: ShieldCheck,
    color: "text-blue-400"
  },
  {
    title: "UI/UX Engineering",
    desc: "Building interfaces that feel like second nature to the user.",
    icon: Monitor,
    color: "text-cyan-400"
  },
  {
    title: "Full-Stack Dev",
    desc: "Scalable, secure, and lightning-fast backend architectures.",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    title: "Motion Design",
    desc: "Bringing static designs to life with cinematic transitions.",
    icon: Layers,
    color: "text-magenta-400"
  }
];

const Services = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-black tracking-tighter mb-4">CORE CAPABILITIES</h2>
          <div className="w-20 h-1 bg-cyan-500" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-[2rem] group hover:bg-white/10 transition-all duration-500"
            >
              <div className={`mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;