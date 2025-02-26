import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    'Technical Skills': ['Machine Learning', 'Data Science', 'TensorFlow', 'PyTorch', 'Computer Vision'],
    'Web Development': ['Python', 'React.js', 'JavaScript', 'CSS', 'HTML', 'Django', 'Node.js', 'Flask'],
    'Database': ['MongoDB', 'MySQL', 'PostgreSQL'],
    'Version Control': ['Git', 'Github'],
    'Soft Skills': ['Leadership', 'Communication', 'Adaptability', 'Problem-Solving']
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
      scale: 1.05,
      backgroundColor: "rgba(99, 102, 241, 0.2)",
      color: "#e2e2e2",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-heading"
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
                boxShadow: "0 8px 30px rgba(99, 102, 241, 0.2)",
                translateY: -5,
                borderColor: "rgba(99, 102, 241, 0.3)"
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
