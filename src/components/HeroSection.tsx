'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight"
        >
          Luca
          <span className="block text-accent-500">Developer</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto"
        >
          Crafting modern, performant web experiences with passion and precision
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center group cursor-pointer"
        aria-label="Scroll to About section"
      >
        <span className="text-text-secondary text-sm mb-2 group-hover:text-accent-500 transition-colors">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-6 text-accent-500 group-hover:text-accent-600 transition-colors"
        >
          <ChevronDownIcon className="w-full h-full" />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default HeroSection