
import React from 'react';
import { motion } from 'framer-motion';
import { data as profileData } from '../data/profile';

export const Hero = () => {
  const { basics } = profileData;

  const hexClipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
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
          <h3 className="text-2xl md:text-4xl text-gray-400 font-light mb-8 max-w-2xl mx-auto md:mx-0">
            {`[`}
            {basics.label.map((label, index) => (
              <>
                <p key={index} className="text-yellow">
                  &nbsp;&nbsp;{label}{index < basics.label.length - 1 ? ',' : ''}
                </p>
              </>
            ))}
            {`]`}
          </h3>

          <p className="text-base md:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed mx-auto md:mx-0">
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

        {/* Hexagonal Avatar Section */}
        <motion.div
          className="relative flex-1 flex justify-center items-center w-full max-w-[500px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Hexagons - Asymmetrical Arrangement */}
          {/* Cyan Hex - Top Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute top-0 left-10 md:left-0 w-24 h-24 bg-cyan/20 z-0"
            style={{ clipPath: hexClipPath }}
          />
          {/* Magenta Hex - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-10 right-10 md:right-0 w-32 h-32 bg-magenta/20 z-0"
            style={{ clipPath: hexClipPath }}
          />
          {/* Yellow Hex - Center Left (Behind) */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="absolute top-1/2 -translate-y-1/2 -left-4 w-16 h-16 bg-yellow/20 z-0"
            style={{ clipPath: hexClipPath }}
          />

          {/* Main Avatar Hexagon Frame */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 box-border p-1 bg-gradient-to-br from-cyan via-magenta to-yellow" style={{ clipPath: hexClipPath }}>
            <div className="w-full h-full bg-black/90" style={{ clipPath: hexClipPath }}>
              <img
                src={basics.image}
                alt={basics.name}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                style={{ clipPath: hexClipPath }}
              />
            </div>
          </div>
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
