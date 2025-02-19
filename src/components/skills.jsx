import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    'Frontend': ['HTML5', 'CSS3', 'JavaScript', 'React'],
    'Backend': ['Node.js', 'Express', 'Python'],
    'Database': ['MongoDB', 'MySQL'],
    'Tools': ['Git', 'Docker', 'VS Code']
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Object.entries(skills).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              className="skill-category"
              variants={categoryVariants}
              whileHover={{
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                translateY: -5
              }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {category}
              </motion.h3>
              <motion.div 
                className="skill-list"
                variants={containerVariants}
              >
                {categorySkills.map(skill => (
                  <motion.span
                    key={skill}
                    className="skill-item"
                    variants={skillItemVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
