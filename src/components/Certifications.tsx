import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Google Python Course',
      provider: 'Google (Coursera)',
      date: '2024',
      description:
        'Comprehensive Python programming course covering fundamentals, data structures, and advanced concepts.',
      skills: ['Python Programming', 'Data Structures', 'Algorithms', 'Problem Solving'],
      logo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=100',
      color: 'from-blue-500 to-green-500',
      link: 'https://coursera.org/share/d56bfcf603951a2196a8dd5c59387e99' // 🔗 Add your real link here
    },
    {
      title: 'Learn Java Programming',
      provider: 'Udemy',
      date: '2023',
      description:
        'Complete Java programming course from basics to advanced topics including OOP principles and frameworks.',
      skills: ['Java Programming', 'Object-Oriented Programming', 'Collections', 'Exception Handling'],
      logo: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=100',
      color: 'from-orange-500 to-red-500',
      link: 'https://www.udemy.com/certificate/UC-e1772ee8-6eec-41ae-b7b5-069263bf30c7/'
 // 🔗 Add your real link here
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Professional development and continuous learning
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${cert.color} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <FiAward className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                      <p className="text-white/90 text-sm">{cert.provider}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-white/90">
                    <FiCalendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Learned */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Skills Learned
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* View Certificate Button */}
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </motion.button>
                  </a>
                ) : (
                  <button className="w-full px-4 py-3 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 font-medium rounded-lg cursor-not-allowed">
                    Certificate Not Available
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Stats Section */}
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Learning Journey
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '2+',
                label: 'Certifications Earned',
                description: 'Professional development courses',
                icon: FiAward
              },
              {
                number: '50+',
                label: 'Hours of Learning',
                description: 'Continuous skill development',
                icon: FiCalendar
              },
              {
                number: '10+',
                label: 'Skills Acquired',
                description: 'Programming & development',
                icon: FiExternalLink
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
