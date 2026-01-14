import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCalendar, FiCode } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  date: string;
  features: string[];
  link: string;
  repo: string;
  image: string;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Free Fire Tournament Website",
      description:
        "A dynamic Free Fire tournament platform featuring smooth UI, responsive layout, player information section, and easy registration.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      date: "Nov 2025",
      features: [
        "Tournament registration system",
        "Responsive & mobile-friendly UI",
        "Player information section",
        "Fast loading performance",
      ],
      link: "",
      repo: "",
      image: "/freefire.jpg",
    },
    {
      title: "Radhe – Web-Based Virtual Assistant",
      description:
        "An intelligent virtual assistant built using modern web technologies with voice recognition and interactive responses.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Web APIs"],
      date: "2024",
      features: [
        "Voice command recognition",
        "Interactive UI",
        "Real-time responses",
        "Modern design patterns",
      ],
      link: "",
      repo: "",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    },
    {
      title: "Rock Paper Scissors Game",
      description:
        "Interactive web-based game with smooth animations, score tracking, and responsive design.",
      techStack: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
      date: "2024",
      features: [
        "Score tracking",
        "Smooth animations",
        "Responsive design",
        "Interactive gameplay",
      ],
      link: "",
      repo: "",
      image:
        "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg",
    },
    {
      title: "Animated Landing Page",
      description:
        "Landing page showcasing GSAP animations, smooth scrolling effects, and modern UI principles.",
      techStack: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      date: "2023",
      features: [
        "Advanced GSAP animations",
        "Smooth scrolling",
        "Timeline animations",
        "Optimized performance",
      ],
      link: "",
      repo: "",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    },
    {
      title: "Fully Responsive Website",
      description:
        "Modern responsive website with animated hamburger menu and mobile-first design.",
      techStack: ["HTML5", "CSS3", "JavaScript", "CSS Grid"],
      date: "2023",
      features: [
        "Mobile-first layout",
        "Animated hamburger menu",
        "Cross-browser compatibility",
        "SEO friendly structure",
      ],
      link: "",
      repo: "",
      image:
        "https://images.pexels.com/photos/326513/pexels-photo-326513.jpeg",
    },
  ];

  const hasUrl = (url: string) => url && url.trim() !== "";

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Some of my recent work and personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="flex items-center text-sm text-gray-500">
                    <FiCalendar className="mr-1" />
                    {project.date}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                    <FiCode /> Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300 mb-5">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={hasUrl(project.repo) ? project.repo : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={hasUrl(project.link) ? project.link : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm"
                  >
                    <FiExternalLink /> Demo
                  </a>
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
