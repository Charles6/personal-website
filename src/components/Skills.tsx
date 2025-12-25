
import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data/profile';

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    }
  })
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Technical <span className="text-magenta">Arsenal</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={skillVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan group-hover:text-white transition-colors">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.keywords.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-black/50 rounded-full text-sm text-gray-300 border border-white/5 group-hover:border-cyan/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
