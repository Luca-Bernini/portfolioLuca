'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { HeroSection, AboutSection, CertificationsSection, ProjectsSection, Footer } from '@/components/sections'
import { ParallaxBackground, ProgressBar, ScrollController } from '@/components/client'
import Particles from '@/components/animations/Particles'

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
        {/* Reduced particle count for better performance */}
        <div className="fixed inset-0 z-0">
          <Particles 
            particleCount={300}  // Reduced from 400
            particleSpread={20}
            speed={0.02}  // Reduced speed
            particleColors={["#FF0000", "#FFFFFF", "#CC0000", "#FF3333", "#FF6666"]}
            moveParticlesOnHover={true}  // Disabled for performance
            particleHoverFactor={0.3}
            alphaParticles={true}
            particleBaseSize={55}  // Reduced size
            sizeRandomness={1.5}
            cameraDistance={30}
            disableRotation={false}
          />
        </div>
        
        {/* Hero Section - no animation to prevent conflicts */}
        <div className="snap-section relative z-10" style={{ minHeight: '100vh' }}>
          <HeroSection />
        </div>
        
        {/* Other sections with optimized animations */}
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
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}  // Changed to once: true
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
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}  // Changed to once: true
        >
          <CertificationsSection />
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
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}  // Changed to once: true
        >
          <ProjectsSection />
        </motion.div>
        
        {/* Footer Section */}
        <motion.div 
          className="snap-section relative z-10"
          style={{
            minHeight: 'auto',
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'stretch'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}  // Changed to once: true
        >
          <Footer />
        </motion.div>
      </div>
      
      <ProgressBar />
      <ScrollController isScrolling={isScrolling} setIsScrolling={setIsScrolling} />
    </>
  )
}