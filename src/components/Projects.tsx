import React from 'react';
import project1 from '../assets/projects/airbnbclone.png';
import project2 from '../assets/projects/zerodhaclone.png';

const projectData = [
  {
    title: 'AirBnB Frontend Clone',
    year: 2024,
    category: 'Frontend',
    description:
      'Cloned Airbnb’s homepage with responsive layout, scrollable categories, image grid, filters, and clean UI design.',
    tech: ['React', 'Tailwind CSS'],
    image: project1,
    link: 'https://takshil-airbnb-clone.vercel.app/',
    reverse: false,
  },
  {
    title: 'Zerodha Frontend Clone',
    year: 2024,
    category: 'Frontend',
    description:
      'Cloned Zerodha’s landing page with responsive design, clean layout, smooth navigation, and structured content sections.',
    tech: ['React', 'Tailwind CSS'],
    image: project2,
    link: 'https://zerodha-frontend-clone-two.vercel.app/',
    reverse: true,
  },
];

const Projects: React.FC = () => {
  return (
    <section id='work' className="min-h-screen bg-white dark:bg-[#0c0c0c] text-black dark:text-white px-6 md:px-12 py-32 space-y-32 transition-colors duration-500">
      {projectData.map((project, index) => (
        <div
          key={index}
          className={`max-w-7xl mx-auto flex flex-col ${
            project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
          } items-center gap-12`}
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6 relative">
            <p className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400">
              {project.category} <span className="text-red-500">•</span> {project.year}
            </p>
            <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
              {project.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 max-w-md">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 dark:bg-[#1a1a1a] text-xs px-4 py-1 rounded-full dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white dark:bg-white dark:text-black text-sm font-medium px-6 py-3 rounded-md mt-4 hover:opacity-90 transition"
            >
              View Project →
            </a>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
