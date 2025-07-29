'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMagneticScroll } from '@/contexts/MagneticScrollContext'

const ProgressiveHeader = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showAboutButton, setShowAboutButton] = useState(false)
  const [showProjectsButton, setShowProjectsButton] = useState(false)
  const { isMagneticScrollEnabled, toggleMagneticScroll } = useMagneticScroll()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      // Trigger when 80% through hero section
      const shouldShow = scrollY > windowHeight * 0.8
      
      // Check section positions for button visibility
      const aboutSection = document.getElementById('about')
      const projectsSection = document.getElementById('projects')
      
      if (aboutSection && projectsSection) {
        const aboutTop = aboutSection.offsetTop
        const projectsTop = projectsSection.offsetTop
        
        setShowAboutButton(scrollY > aboutTop + 125)
        setShowProjectsButton(scrollY > projectsTop + 125)
      }
      
      // Smooth visibility toggle without delay
      setIsVisible(shouldShow)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Enhanced animation variants
  const headerVariants = {
    hidden: {
      y: -80,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(10px)'
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.8,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      y: -80,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(10px)',
      transition: {
        duration: 0.4,
        ease: [0.55, 0.06, 0.68, 0.19]
      }
    }
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
        delay: 0.2
      }
    },
    exit: {
      opacity: 0,
      x: -30,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  }

  const rightButtonVariants = {
    hidden: {
      opacity: 0,
      x: 30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
        delay: 0.2
      }
    },
    exit: {
      opacity: 0,
      x: 30,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  }

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 25,
        delay: 0.1
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.header
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-0 left-0 right-0 z-50 bg-primary-900/95 backdrop-blur-md border-b border-primary-700/50 shadow-lg shadow-primary-900/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 relative">
              {/* Left side - About and Projects buttons */}
              <div className="flex-1 flex items-center space-x-6">
                <AnimatePresence>
                  {showAboutButton && (
                    <motion.a
                      variants={buttonVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      href="#about"
                      className="text-text-secondary/80 hover:text-text-primary transition-all duration-300 font-medium hover:scale-105 inline-block"
                      whileHover={{
                        scale: 1.05,
                        color: '#ffffff',
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      About
                    </motion.a>
                  )}
                </AnimatePresence>
                
                <AnimatePresence>
                  {showProjectsButton && (
                    <motion.a
                      variants={buttonVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      href="#projects"
                      className="text-text-secondary/80 hover:text-text-primary transition-all duration-300 font-medium hover:scale-105 inline-block"
                      whileHover={{
                        scale: 1.05,
                        color: '#ffffff',
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Projects
                    </motion.a>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Center - Logo/Name */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <motion.button
                  variants={logoVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToTop}
                  className="text-xl font-semibold text-text-primary/90 hover:text-text-primary transition-all duration-300 cursor-pointer relative"
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{
                      textShadow: '0 0 20px rgba(255, 0, 0, 0.5)'
                    }}
                  >
                    Luca
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-lg -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                      scale: 1.2, 
                      opacity: 1,
                      transition: { duration: 0.2 }
                    }}
                  />
                </motion.button>
              </div>
            
              {/* Right side - Magnetic Scroll Toggle */}
              <div className="flex-1 flex justify-end">
                <motion.button
                  variants={rightButtonVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={toggleMagneticScroll}
                  className={`relative inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isMagneticScrollEnabled 
                      ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30' 
                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  } hover:scale-105`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={`Magnetic scrolling is ${isMagneticScrollEnabled ? 'enabled' : 'disabled'}`}
                >
                  <motion.div
                    className={`w-2 h-2 rounded-full mr-2 ${
                      isMagneticScrollEnabled ? 'bg-accent-500' : 'bg-gray-500'
                    }`}
                    animate={{
                      scale: isMagneticScrollEnabled ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: isMagneticScrollEnabled ? Infinity : 0,
                      repeatDelay: 2
                    }}
                  />
                  {isMagneticScrollEnabled ? 'Magnetic' : 'Free Scroll'}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

export default ProgressiveHeader