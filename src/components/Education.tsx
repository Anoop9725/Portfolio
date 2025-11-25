import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Pranveer Singh Institute of Technology, Kanpur',
      duration: '2024 – 2026',
      grade: 'SGPA 8.39',
      status: 'Current',
      description: 'Specializing in advanced computer applications, software development, and emerging technologies.'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Maharana Pratap College of Professional Studies, Kanpur',
      duration: '2021 – 2024',
      grade: 'CGPA 8.01',
      status: 'Completed',
      description: 'Comprehensive study of computer applications, programming languages, and database management systems.'
    },
    {
      degree:'XII th',
      institution: 'RPS Inter College,Rasulabad Kanpur Dehat',
      duration: 'Apr 2020 - Apr 2021',
      grade: 'Percentage 82.20%',
      status: 'Completed',
      description: 'i have completed my class 12-high school education at RPS Inter College Rasulabad where I studied Science.'
    },
    {
      degree: 'X th',
      institution:'RPS Inter College Rasulabad Kanpur Dehat',
      durataion: 'Apr 2017 - Apr 2018',
      grade: 'Percentage 79.83%',
      status:'Completed',
      description:'I have completed my 10 education at JNVM IC vikas nagar kanpur, where i studied Science with English.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My academic journey and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-16 md:pl-0`}>
                  <motion.div
                    className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        edu.status === 'Current' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {edu.status}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <FiCalendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>

                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <FiMapPin className="w-4 h-4 mr-2" />
                      <span>{edu.institution}</span>
                    </div>

                    <div className="flex items-center text-blue-600 dark:text-blue-400 mb-4">
                      <FiAward className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{edu.grade}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Academic Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Current SGPA', 
                value: '8.39', 
                description: 'MCA Program Performance',
                color: 'from-green-400 to-blue-500'
              },
              { 
                title: 'Overall CGPA', 
                value: '8.01', 
                description: 'BCA Program Completion',
                color: 'from-purple-400 to-pink-500'
              },
              { 
                title: 'Academic Years', 
                value: '5+', 
                description: 'Years of Higher Education',
                color: 'from-yellow-400 to-orange-500'
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                  {achievement.value}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
