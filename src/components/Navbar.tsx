import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    hidden: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  };

  const linkVariants = {
    hover: {
      y: -2,
      transition: { duration: 0.2, ease: 'easeInOut' }
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 py-5 px-8 md:px-12 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#121212]/80 backdrop-blur'
          : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-xl font-bold text-black dark:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Takshil Pandya
        </motion.div>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8 items-center">
            {[ 'About', 'Work', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-wider text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                variants={linkVariants}
                whileHover="hover"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="focus:outline-none text-black dark:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
