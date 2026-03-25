"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="contact">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">INITIATE CONTACT</h2>
          <p className="text-gray-500 font-medium">Ready to build the future together? Reach out through any of these channels.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              icon: Instagram, 
              label: 'Instagram', 
              value: '@userpratikraj', 
              color: 'text-pink-500', 
              href: 'https://instagram.com',
              description: 'Follow for daily updates'
            },
            { 
              icon: Mail, 
              label: 'Email', 
              value: 'justuserraj@gmail.com', 
              color: 'text-cyan-500', 
              href: 'mailto:justuserraj@gmail.com',
              description: 'For formal inquiries'
            },
            { 
              icon: MessageSquare, 
              label: 'WhatsApp', 
              value: '+91 8271757978', 
              color: 'text-green-500', 
              href: 'https://wa.me/918271757978',
              description: 'Quick chat & support'
            },
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center gap-6 group hover:border-white/20 transition-all hover:-translate-y-1"
            >
              <div className={`p-4 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-500 ${social.color}`}>
                <social.icon size={32} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-2">{social.label}</p>
                <p className="text-lg font-bold mb-1">{social.value}</p>
                <p className="text-xs text-gray-500">{social.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default Contact;