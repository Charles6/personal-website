
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { data } from '../data/profile';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-magenta/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In <span className="text-magenta">Touch</span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
{/*          <a
            href={`mailto:${data.basics.email}`}
            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-magenta hover:text-white hover:border-magenta transition-all duration-300 group"
          >
            <Mail className="w-5 h-5" />
            <span>Say Hello</span>
          </a>*/}

          {data.basics.profiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan/50 hover:text-cyan transition-all duration-300"
            >
              {profile.network === 'GitHub' && <Github className="w-5 h-5" />}
              {profile.network === 'LinkedIn' && <Linkedin className="w-5 h-5" />}
              {profile.network === 'Instagram' && <Instagram className="w-5 h-5" />}
              <span>{profile.network}</span>
            </a>
          ))}
        </motion.div>

        <footer className="mt-32 text-gray-500 text-sm">
          <p>Designed & Built by {data.basics.name}</p>
        </footer>
      </div>
    </section>
  );
};
