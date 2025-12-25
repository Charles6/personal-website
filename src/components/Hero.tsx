
import React from 'react';
import { motion } from 'framer-motion';
import { data as profileData } from '../data/profile';

export const Hero = () => {
  const { basics } = profileData;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="container relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-body text-cyan mb-4 tracking-widest uppercase">
            Hello, World. I am
          </h2>
          <h1 className="text-5xl md:text-8xl font-heading font-bold mb-6 text-white tracking-tighter mix-blend-overlay">
            {basics.name}
          </h1>
          <p className="text-3xl md:text-4xl font-heading font-bold mb-6 text-magenta tracking-tighter mix-blend-overlay">
            {basics.furiganaName}
          </p>
          <h3 className="text-2xl md:text-4xl text-gray-400 font-light mb-8 max-w-2xl">
            {`[`}
            {basics.label.map(label => (
              <p className="text-yellow">&nbsp;&nbsp;{label},</p>
            ))}
            {`]`}
          </h3>

          <p className="text-base md:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
            {basics.summary}
          </p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 border border-magenta text-magenta font-semibold tracking-wider hover:bg-magenta hover:text-white transition-all duration-300 uppercase text-sm"
            >
              Contact Me
            </a>
            <a
              href={basics.profiles.find(p => p.network === "GitHub")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-cyan text-cyan font-semibold tracking-wider hover:bg-cyan hover:text-black transition-all duration-300 uppercase text-sm"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-cyan rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};
