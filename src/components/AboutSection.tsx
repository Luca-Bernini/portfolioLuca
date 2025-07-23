'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-8">
            About Me
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-text-secondary text-lg sm:text-xl leading-relaxed mb-6"
            >
              I'm a passionate full-stack developer with a keen eye for design and a love for creating 
              seamless user experiences. With expertise in modern web technologies, I transform ideas 
              into elegant, performant applications that make a difference.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="text-text-secondary text-lg sm:text-xl leading-relaxed"
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I believe in writing clean, 
              maintainable code and following best practices to deliver exceptional results.
            </motion.p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            'React', 'Next.js', 'TypeScript', 'Node.js',
            'Python', 'PostgreSQL', 'AWS', 'Docker'
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-lg p-4 text-center hover:border-accent-500 hover:bg-primary-700/50 transition-all duration-300"
            >
              <span className="text-text-primary font-medium">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection