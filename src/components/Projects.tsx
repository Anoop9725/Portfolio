import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCalendar, FiCode } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Free Fire Tournament Website',
      description:
        'A dynamic and engaging Free Fire tournament platform featuring smooth UI, responsive layout, player information section, and easy registration with real-time updates.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Modern UI'],
      date: 'Nov 2025',
      features: [
        'Tournament registration system',
        'Responsive and mobile-friendly layout',
        'Clean and modern gaming UI',
        'Player information & match details',
        'Fast loading and optimized performance'
      ],
      link: 'https://free-fire-tournament-registration-w.vercel.app/',
      repo: 'https://github.com/Anoop9725/Free-Fire-tournament-registration-website',
      image: '/freefire.jpg'
    },
    {
      title: 'Radhe – Web-Based Virtual Assistant',
      description:
        'An intelligent web-based virtual assistant built with modern web technologies, featuring voice recognition, natural language processing, and interactive responses.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Web APIs', 'Speech Recognition'],
      date: '2024',
      features: [
        'Voice command recognition',
        'Interactive user interface',
        'Real-time responses',
        'Modern design patterns'
      ],
      link: 'https://radhe-a-web-based-virtual-assistant.vercel.app/',
      repo: 'https://github.com/Anoop9725/Radhe-A-Web-Based-Virtual-Assistant',
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Rock Paper Scissor Game',
      description:
        'Interactive web-based game with sleek animations, score tracking, and responsive design.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
      date: '2024',
      features: [
        'Score tracking system',
        'Smooth animations',
        'Responsive design',
        'Interactive gameplay'
      ],
      link: 'https://rock-paper2.netlify.app/',
      repo: 'https://github.com/Anoop9725/Project2--Rock-Paper-Scissors.git',
      image:
        'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Animated Landing Page',
      description:
        'Dynamic landing page showcasing GSAP animations, smooth scrolling effects, and modern UI.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'ScrollTrigger'],
      date: '2023',
      features: [
        'Advanced GSAP animations',
        'Smooth scroll effects',
        'Timeline animations',
        'Performance optimized'
      ],
      link: '',        // 🔹 safe empty link
      repo: '',        // 🔹 safe empty repo
      image:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Fully Responsive Website',
      description:
        'Modern responsive website with mobile-first design and animated hamburger menu.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'CSS Grid'],
      date: '2023',
      features: [
        'Mobile-first approach',
        'Animated hamburger menu',
        'Cross-browser compatibility',
        'SEO optimized'
      ],
      link: 'https://fully-responsive-website-three.vercel.app/',
      repo: 'https://github.com/Anoop9725/Fully-Responsive-Website.git',
      image:
        'https://images.pexels.com/photos/326513/pexels-photo-326513.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const hasUrl = (url) => typeof url === 'string' && url.trim().length > 0;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-sm flex items-center gap-1">
                  <FiCalendar size={14} />
                  {project.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
