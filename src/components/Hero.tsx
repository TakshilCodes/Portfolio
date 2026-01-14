import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import BackgroundText from './BackgroundText';

const Hero: React.FC = () => {
  const paragraphBlock = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paragraphBlock.current) {
      gsap.fromTo(
        paragraphBlock.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 1.3 }
      );
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white dark:bg-black text-black dark:text-white">
      <BackgroundText />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <div className="max-w-5xl w-full">
          <motion.p
            className="text-xs md:text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Building full-stack web applications
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build clean, scalable web applications end-to-end.
          </motion.h1>

          <div ref={paragraphBlock}>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10">
              I’m Takshil Pandya, a web developer currently working on full-stack projects.
              I build user interfaces, write backend APIs, design databases, and connect third-party services to real products.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <motion.a
                href="#work"
                className="bg-white text-black dark:bg-white dark:text-black px-6 py-2 rounded-md font-medium text-sm border hover:bg-gray-100 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-2 text-sm font-medium border rounded-md transition
                          bg-transparent text-black border-black 
                          dark:text-white dark:border-white
                          hover:bg-black hover:text-white
                          dark:hover:bg-white dark:hover:text-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>

            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-xs text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <p className="uppercase tracking-widest mb-2">Scroll</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
