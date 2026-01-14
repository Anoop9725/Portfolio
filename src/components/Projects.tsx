import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCalendar, FiCode } from "react-icons/fi";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Free Fire Tournament Website",
      description:
        "A dynamic Free Fire tournament platform with smooth UI and responsive design.",
      techStack: ["HTML", "CSS", "JavaScript"],
      date: "2025",
      features: [
        "Tournament registration system",
        "Responsive layout",
        "Modern gaming UI",
      ],
      link: "",
      repo: "",
      image: "/freefire.jpg",
    },
    {
      title: "Radhe – Virtual Assistant",
      description:
        "Web-based virtual assistant using speech recognition and web APIs.",
      techStack: ["HTML", "CSS", "JavaScript"],
      date: "2024",
      features: [
        "Voice commands",
        "Interactive UI",
        "Real-time responses",
      ],
      link: "",
      repo: "",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    },
  ];

  const hasUrl = (url?: string) => !!url && url.trim() !== "";

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 flex items-center">
                    <FiCalendar className="mr-1" /> {project.date}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300 mb-4">
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
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm"
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
