import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiGlobe, FiTarget } from "react-icons/fi";

const About: React.FC = () => {
  const values = [
    {
      icon: FiCode,
      title: "Innovation",
      description: "Passionate about cutting-edge technology and creative solutions",
    },
    {
      icon: FiTarget,
      title: "Excellence",
      description: "Committed to delivering high-quality work and continuous improvement",
    },
    {
      icon: FiGlobe,
      title: "Collaboration",
      description: "Thriving in team environments and open-source contributions",
    },
    {
      icon: FiDatabase,
      title: "Learning",
      description: "Constantly updating skills with latest industry trends",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative w-72 h-72 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-5xl font-bold text-gray-600 dark:text-gray-300">
                  ANOOP
                </span>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-300 dark:bg-blue-800 rounded-full opacity-40" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-purple-300 dark:bg-purple-800 rounded-full opacity-30" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              MCA Student & Aspiring IT Professional
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a dedicated MCA student at Pranveer Singh Institute of Technology,
              Kanpur, with a strong foundation in programming, web development, and
              database management.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I enjoy building real-world projects, learning modern frameworks, and
              continuously improving my technical and problem-solving skills.
            </p>

            {/* Values */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Core Values & Interests
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white">
                          {value.title}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
