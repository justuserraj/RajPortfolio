"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">INITIATE CONTACT</h2>
          <p className="text-gray-500">Ready to build the future together?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-3xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Identification</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Signal Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Transmission</label>
                  <textarea 
                    rows={4}
                    placeholder="Your message..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  />
                </div>
                <button className="w-full py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 group">
                  SEND SIGNAL
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            {[
              { icon: Instagram, label: 'Instagram', value: '@userpratikraj', color: 'text-pink-500' },
              { icon: Mail, label: 'Email', value: 'hello@pratikraj.com', color: 'text-cyan-500' },
              { icon: MessageSquare, label: 'WhatsApp', value: '+91 8271757978', color: 'text-green-500' },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href="#"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:border-white/20 transition-all"
              >
                <div className={`p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform ${social.color}`}>
                  <social.icon size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase">{social.label}</p>
                  <p className="font-medium">{social.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Hidden Complexity: Floating Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default Contact;