import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiGlobe, FiDatabase, FiTool } from 'react-icons/fi';

type Skill = {
  name: string;
  level?: number; // optional: some skills (like Programming Languages) may not provide a level
};

type SkillCategory = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: Skill[];
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: FiCode,
      title: 'Programming Languages',
      skills: [{ name: 'Python' }, { name: 'C++' }, { name: 'C' }, { name: 'Java' }],
    },
    {
      icon: FiGlobe,
      title: 'Web Development',
      skills: [
        { name: 'HTML5' },
        { name: 'CSS3'},
        { name: 'JavaScript' },
        { name: 'React.js' },
      ],
    },
    {
      icon: FiDatabase,
      title: 'Databases',
      skills: [{ name: 'MySQL' }, { name: 'Oracle' }, { name: 'MongoDB' }],
    },
    {
      icon: FiTool,
      title: 'Tools & Other Skills',
      skills: [
        { name: 'Git & GitHub' },
        {name: 'VS Code'},
        { name: 'MS Office'},
        { name: 'Basic DSA'},
        { name: 'OOP' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills &amp; Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const level = skill.level ?? null;
                    return (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {level !== null ? `${level}%` : <span className="italic">—</span>}
                          </span>
                        </div>

                        {/* Progress bar: show only if level exists, otherwise show a subtle placeholder */}
                        {level !== null ? (
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${level}%` }}
                              transition={{
                                duration: 1,
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              }}
                              viewport={{ once: true }}
                              aria-valuenow={level}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              role="progressbar"
                            />
                          </div>
                        ) : (
                          <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                            <div className="w-0 h-2" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Badges */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'GSAP',
              'Framer Motion',
              'TailwindCSS',
              'Bootstrap',
              'Node.js',
              'Express.js',
              'REST APIs',
              'Responsive Design',
              'Version Control',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
