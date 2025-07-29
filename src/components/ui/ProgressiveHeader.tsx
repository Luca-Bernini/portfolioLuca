'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProgressiveHeader = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [showAboutButton, setShowAboutButton] = useState(false)
  const [showProjectsButton, setShowProjectsButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const shouldShow = scrollY > 50
      
      // Check section positions
      const aboutSection = document.getElementById('about')
      const projectsSection = document.getElementById('projects')
      
      if (aboutSection && projectsSection) {
        const aboutTop = aboutSection.offsetTop
        const projectsTop = projectsSection.offsetTop
        
        setShowAboutButton(scrollY > aboutTop + 125)
        setShowProjectsButton(scrollY > projectsTop + 125)
      }
      
      if (shouldShow && !animationComplete) {
        setTimeout(() => {
          setAnimationComplete(true)
          setIsVisible(true)
        }, 500)
      } else if (shouldShow && animationComplete) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        if (scrollY <= 50) {
          setAnimationComplete(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [animationComplete])

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
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-primary-900/95 backdrop-blur-md border-b border-primary-700/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 relative">
              {/* Left side - About button */}
              <div className="flex-1">
                <AnimatePresence>
                  {showAboutButton && (
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      href="#about"
                      className="text-text-secondary/80 hover:text-text-primary transition-colors font-medium"
                    >
                      About
                    </motion.a>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Center - Logo/Name */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToTop}
                  className="text-xl font-semibold text-text-primary/90 hover:text-text-primary transition-colors cursor-pointer"
                >
                  Luca
                </motion.button>
              </div>
            
              {/* Right side - Projects button */}
               <div className="flex-1 flex justify-end">
                 <AnimatePresence>
                   {showProjectsButton && (
                     <motion.a
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, x: 20 }}
                       transition={{ duration: 0.3 }}
                       href="#projects"
                       className="text-text-secondary/80 hover:text-text-primary transition-colors font-medium"
                     >
                       Projects
                     </motion.a>
                   )}
                 </AnimatePresence>
               </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

export default ProgressiveHeader