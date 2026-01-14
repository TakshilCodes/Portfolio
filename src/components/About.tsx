import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, CalendarDays, Code2, User } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const skills = ['React', 'TypeScript', 'Next.js','Node.js','Express.js','PostgreSQL','Prisma','Firebase', 'TailwindCSS'];
  const services = ['Web Application Development', 'Frontend & Backend Integration', 'API & Database Work', 'Internal Tools & Automation'];

  const statCards = [
    { label: 'Professional Level', value: 'Junior' },
    { label: 'Projects Completed', value: '5+' },
    { label: 'Happy Clients', value: 'Open for Clients' },
    { label: 'Countries Reached', value: 'Global Ready' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-white dark:bg-[#0c0c0c] text-black dark:text-white px-8 md:px-12 py-32 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left mb-10"
        >
          <p className="uppercase text-xs tracking-widest text-gray-600 dark:text-gray-400 mb-2">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-red-600 dark:text-red-500">Takshil Pandya</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 mb-6">
              <li className="flex items-center gap-3"><MapPin size={16} /> Based in India</li>
              <li className="flex items-center gap-3"><User size={16} /> Web Developer</li>
              <li className="flex items-center gap-3"><Code2 size={16} /> Frontend & Backend Development</li>
              <li className="flex items-center gap-3"><CalendarDays size={16} /> Learning & building consistently</li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I work on web applications, handling frontend, backend, and data.
              I focus on writing clear code and building things that actually work in real use.
            </p>

            <div className="flex gap-4 flex-wrap">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-red-600 dark:bg-red-500 text-white px-6 py-2 text-sm rounded hover:bg-red-500 dark:hover:bg-red-400 transition"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#work"
                className="border border-black dark:border-white px-6 py-2 text-sm rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Key Skills</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-200 dark:bg-[#1a1a1a] text-xs px-3 py-1 rounded-full text-black dark:text-white"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-red-600 dark:text-red-500">→</span> {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
            hidden: {}
          }}
        >
          {statCards.map((item, index) => (
            <motion.div
              key={index}
              className="bg-transparent border border-red-500 text-center py-6 rounded-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-500 mb-1">{item.value}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default About;
