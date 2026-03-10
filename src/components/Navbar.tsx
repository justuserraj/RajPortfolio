"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] flex justify-center p-4 md:p-6 pointer-events-none">
        <motion.div
          initial={false}
          animate={{
            width: isScrolled ? 'auto' : '100%',
            backgroundColor: isScrolled ? 'rgba(74, 7, 7, 0.8)' : 'rgba(0, 0, 0, 0)',
            paddingLeft: isScrolled ? '2rem' : '1rem',
            paddingRight: isScrolled ? '2rem' : '1rem',
            paddingTop: isScrolled ? '0.75rem' : '1rem',
            paddingBottom: isScrolled ? '0.75rem' : '1rem',
            borderRadius: isScrolled ? '9999px' : '0px',
            boxShadow: isScrolled ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none',
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`
            pointer-events-auto flex items-center justify-between max-w-7xl w-full
            backdrop-blur-xl border border-transparent
            ${isScrolled ? 'border-white/10' : ''}
          `}
        >
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-serif text-2xl font-bold tracking-tighter text-white">
              AR<span className="text-[#4A0707] drop-shadow-[0_0_8px_rgba(74,7,7,0.8)]">.</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
          >
            <Menu size={24} />
          </button>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-[#4A0707]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-4 text-white hover:rotate-90 transition-transform duration-300"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-2xl font-black uppercase tracking-[0.4em] text-white hover:text-gray-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;