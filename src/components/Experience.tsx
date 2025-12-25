
import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data/profile';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-yellow">Experience</span> Log
        </motion.h2>

        <div className="space-y-12">
          {data.work.map((job, index) => (
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

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-yellow/50 transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-50 text-end">
                  <span className="text-xs font-mono text-yellow block">{job.location}</span>
                  <span className="text-xs font-mono text-yellow block">{job.startDate} — {job.endDate}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow transition-colors mt-8 md:mt-0">{job.position}</h3>
                <a
                  href={job.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="text-xl text-gray-400 mb-4">{job.company}</h4>
                </a>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {job.summary}
                </p>

                <ul className="space-y-2">
                  {job.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start text-sm text-gray-400">
                      <span className="text-yellow mr-2">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
