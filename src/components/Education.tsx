
import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data/profile';

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-magenta">Education</span> History
        </motion.h2>

        <div className="space-y-12">
          {data.education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-8 md:pl-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline Line (Hidden on mobile, stylized on desktop) */}
              <div className="hidden md:block absolute left-[-2rem] top-0 bottom-0 w-px bg-white/10"></div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-magenta/50 transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-50 text-end">
                  <span className="text-xs font-mono text-magenta block">{edu.location}</span>
                  <span className="text-xs font-mono text-magenta block">{edu.startDate} — {edu.endDate}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-magenta transition-colors">
                  {edu.studyType} in {edu.area}
                </h3>
                <h4 className="text-xl text-gray-400 mb-4">{edu.institution}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
