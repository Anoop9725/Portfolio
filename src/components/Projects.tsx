import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCalendar, FiCode } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Free Fire Tournament Website',
      description:
        'A dynamic tournament platform with registration, player info, and modern UI.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      date: 'Nov 2025',
      link: 'https://free-fire-tournament-registration-w.vercel.app/',
      repo: 'https://github.com/Anoop9725/Free-Fire-tournament-registration-website',
      image: '/freefire.jpg'
    },
    {
      title: 'Radhe – Virtual Assistant',
      description:
        'Web-based virtual assistant using speech recognition and interactive UI.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Web APIs'],
      date: '2024',
      link: 'https://radhe-a-web-based-virtual-assistant.vercel.app/',
      repo: 'https://github.com/Anoop9725/Radhe-A-Web-Based-Virtual-Assistant',
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    }
  ];

  const hasUrl = (url) => typeof url === 'string' && url.trim() !== '';

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border dark:border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-sm flex items-center gap-1">
                  <FiCalendar size={14} />
                  {project.date}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {hasUrl(project.repo) && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 rounded-lg flex items-center justify-center gap-2"
                    >
                      <FiGithub /> Code
                    </a>
                  )}

                  {hasUrl(project.link) && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-blue-600 text-blue-600 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white"
                    >
                      <FiExternalLink /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
