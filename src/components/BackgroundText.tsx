// components/BackgroundText.tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const keywords = [
  'React', 'Tailwind', 'JavaScript', 'TypeScript',
  'Framer Motion', 'Next.js', 'UI/UX', 'Web Design',
  'Animations', 'GSAP', 'Frontend'
];

const BackgroundText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.floating-text') || [];

    elements.forEach((el, i) => {
      gsap.fromTo(el, {
        y: 0,
        opacity: 0.05,
      }, {
        y: i % 2 === 0 ? -50 : 50,
        scrollTrigger: {
          trigger: el,
          scrub: 1,
        },
        ease: 'none',
        duration: 1,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {keywords.map((word, i) => (
        <div
          key={i}
          className="floating-text absolute text-[9vw] font-bold text-white opacity-5 whitespace-nowrap select-none"
          style={{
            left: `${(i % 4) * 25 + 5}%`,
            top: `${Math.floor(i / 4) * 30 + 5}%`,
            transform: `rotate(${Math.random() * 10 - 5}deg)`,
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default BackgroundText;
