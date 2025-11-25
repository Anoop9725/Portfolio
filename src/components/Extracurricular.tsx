import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiHeart, FiCalendar } from 'react-icons/fi';

const Extracurricular: React.FC = () => {
  const activities = [
    {
      title: 'Farewell 2023 Coordinator',
      role: 'Event Coordinator',
      date: '2023',
      description: 'Led the organization and coordination of the college farewell event, managing logistics, vendor coordination, and ensuring a memorable experience for graduating students.',
      icon: FiUsers,
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Successfully coordinated farewell event for 200+ students',
        'Managed event budget and vendor relationships',
        'Led a team of 15 volunteers',
        'Received appreciation from college administration'
      ]
    },
    {
      title: 'BCA Cricket League Volunteer',
      role: 'Sports Volunteer',
      date: '2022-2023',
      description: 'Actively participated as a volunteer in organizing the BCA Cricket League, contributing to sports management, team coordination, and event logistics.',
      icon: FiAward,
      color: 'from-green-500 to-blue-500',
      achievements: [
        'Assisted in organizing inter-college cricket tournament',
        'Managed team registrations and schedules',
        'Coordinated with multiple colleges and teams',
        'Contributed to smooth execution of sporting events'
      ]
    }
  ];

  const skills = [
    'Leadership & Team Management',
    'Event Planning & Organization',
    'Communication & Public Speaking',
    'Problem Solving & Decision Making',
    'Time Management',
    'Coordination & Logistics'
  ];

  return (
    <section id="extracurricular" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Extracurricular Activities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Leadership roles and community involvement
          </p>
        </motion.div>

        {/* Activities */}
        <div className="space-y-8 mb-16">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className={`p-3 bg-gradient-to-r ${activity.color} rounded-xl`}>
                      <activity.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {activity.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {activity.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <FiCalendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">{activity.date}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {activity.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <FiHeart className="w-4 h-4 mr-2 text-red-500" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activity.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Developed */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills Developed Through Activities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                number: '200+', 
                label: 'Students Impacted',
                description: 'Through event coordination'
              },
              { 
                number: '15+', 
                label: 'Team Members Led',
                description: 'Across various activities'
              },
              { 
                number: '2+', 
                label: 'Years of Service',
                description: 'Active community involvement'
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extracurricular;