'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { HeroSection, AboutSection, ProjectsSection, Footer } from '@/components/sections'
import { Header } from '@/components/ui'
import { ParallaxBackground, ProgressBar, ScrollController } from '@/components/client'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <>
      <div 
        ref={containerRef}
        className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"
      >
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        
        {/* Parallax Sections */}
        <motion.div 
          className="snap-section relative z-10"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroSection />
        </motion.div>
        
        <motion.div 
          className="snap-section relative z-10"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <AboutSection />
        </motion.div>
        
        <motion.div 
          className="snap-section relative z-10"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ProjectsSection />
        </motion.div>
        
        {/* Footer Section - Adjusted height */}
        <motion.div 
          className="snap-section relative z-10"
          style={{
            minHeight: 'auto', // Changed from '100vh' to 'auto'
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'stretch'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Footer />
        </motion.div>
        
        {/* Parallax Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {[1, 2, 3, 4, 5].map((i) => {
            const yOffset = useTransform(
              scrollYProgress,
              [0, 1],
              [0, (50 + i * 20) * (i % 2 === 0 ? 1 : -1)]
            )
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full opacity-5"
                style={{
                  width: `${60 + i * 20}px`,
                  height: `${60 + i * 20}px`,
                  background: `radial-gradient(circle, rgba(255,0,0,${0.1 + i * 0.05}) 0%, rgba(51,51,51,${0.05 + i * 0.02}) 100%)`,
                  left: `${5 + i * 18}%`,
                  top: `${10 + i * 15}%`,
                  y: yOffset
                }}
                transition={{
                  type: "spring",
                  stiffness: 100 - i * 10,
                  damping: 20 + i * 5
                }}
              />
            )
          })}
        </div>
      </div>
      
      <ProgressBar />
      <ScrollController isScrolling={isScrolling} setIsScrolling={setIsScrolling} />
    </>
  )
}