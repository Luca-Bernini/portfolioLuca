'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

const ProgressBar = () => {
  const { scrollYProgress } = useScroll()
  
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  })

  return (
    <motion.div 
      className="fixed bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-accent-600 z-50"
      style={{
        scaleX: progressScale,
        transformOrigin: 'center',
        boxShadow: '0 0 15px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.3)'
      }}
    />
  )
}

export default ProgressBar