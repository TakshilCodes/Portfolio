import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Github, Linkedin, Instagram, Twitter, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 4000);
        form.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
      });
  };

  const socials = [
    {
      name: 'Email',
      icon: <Mail size={18} />,
      url: 'mailto:takshilcodes@gmail.com',
    },
    {
      name: 'GitHub',
      icon: <Github size={18} />,
      url: 'https://github.com/TakshilCodes',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      url: 'https://www.linkedin.com/in/takshil-pandya-534261361/',
    },
    {
      name: 'Instagram',
      icon: <Instagram size={18} />,
      url: 'https://www.instagram.com/imtakshil/',
    },
    {
      name: 'X (Twitter)',
      icon: <Twitter size={18} />,
      url: 'https://x.com/TakshilDev',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-white dark:bg-[#0c0c0c] text-black dark:text-white px-6 md:px-12 py-32 transition-colors duration-500"
    >
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-md flex items-center gap-2 shadow-lg z-[1000]">
          <CheckCircle size={18} /> Message sent successfully!
        </div>
      )}

      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.h2
          className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.h3
          className="text-4xl md:text-5xl font-semibold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let's Create Something Together
        </motion.h3>
        <motion.p
          className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind? Let's bring your ideas to life. I'm currently available for freelance projects and collaborations.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left - Socials */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-transparent border border-[#333] p-6 rounded-xl flex items-center space-x-4">
            <div className="bg-[#1a1a1a] p-3 rounded-full text-red-500">
              <Mail size={20} />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">takshilcodes@gmail.com</p>
              <p className="text-xs text-gray-500 mt-1">Response time: Within 24 hours</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Connect with me</p>
            <div className="flex gap-3 flex-wrap">
              {socials.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#333] rounded-md inline-flex items-center bg-transparent hover:bg-[#f0f0f0] dark:hover:bg-white/10 
                  transition-colors duration-300"

                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Name*"
            className="w-full px-4 py-3 bg-[#f4f4f5] dark:bg-[#1a1a1a] border border-[#ccc] dark:border-[#333] rounded-md"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email*"
            className="w-full px-4 py-3 bg-[#f4f4f5] dark:bg-[#1a1a1a] border border-[#ccc] dark:border-[#333] rounded-md"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            rows={5}
            className="w-full px-4 py-3 bg-[#f4f4f5] dark:bg-[#1a1a1a] border border-[#ccc] dark:border-[#333] rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition"
          >
            Send Message →
          </button>
        </motion.form>
      </div>

      <div className="max-w-7xl mx-auto pt-32 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-16">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Github size={14} />
        </div>
        <p>&copy; {new Date().getFullYear()} Takshil Pandya. All rights reserved.</p>
        <a href="#top" className="hover:text-white">Back to Top ↑</a>
      </div>
    </section>
  );
};

export default Contact;
