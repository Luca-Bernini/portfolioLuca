'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProgressiveHeader = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show header when user scrolls down more than 50px (reduced for easier testing)
      const scrollY = window.scrollY
      console.log('Scroll Y:', scrollY) // Debug log
      setIsVisible(scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50 bg-primary-800/95 backdrop-blur-md border-b border-accent-500/30 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.button
                onClick={scrollToTop}
                className="text-2xl font-bold text-text-primary hover:text-accent-500 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Luca
              </motion.button>
              
              {/* Optional: Add navigation links here */}
              <nav className="hidden md:flex space-x-8">
                <a 
                  href="#about" 
                  className="text-text-secondary hover:text-accent-500 transition-colors"
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  className="text-text-secondary hover:text-accent-500 transition-colors"
                >
                  Projects
                </a>
              </nav>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

export default ProgressiveHeader