import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiGlobe, FiTarget } from 'react-icons/fi';

const About: React.FC = () => {
  const values = [
    { icon: FiCode, title: 'Innovation', description: 'Passionate about cutting-edge technology and creative solutions' },
    { icon: FiTarget, title: 'Excellence', description: 'Committed to delivering high-quality work and continuous improvement' },
    { icon: FiGlobe, title: 'Collaboration', description: 'Thriving in team environments and open-source contributions' },
    { icon: FiDatabase, title: 'Learning', description: 'Constantly updating skills with latest industry trends' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-1">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-600 dark:text-gray-300">AR</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-30"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              MCA Student & Aspiring IT Professional
            </h3>
            
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a dedicated MCA student at Pranveer Singh Institute of Technology, Kanpur, 
                with a strong academic record  and a passion for technology and innovation. 
                My journey in computer applications has equipped me with a solid foundation in programming, 
                web development, and database management.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With hands-on experience in various programming languages and development frameworks, 
                I strive to create impactful solutions that bridge the gap between technology and 
                user needs. My goal is to contribute to the IT industry through innovative projects 
                and continuous learning.
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Core Values & Interests
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white">
                          {value.title}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
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
