'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxBackgroundProps {
  children: React.ReactNode
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  return (
    <div ref={ref} className="relative">
      {/* Floating background elements */}
      {[1, 2, 3, 4, 5].map((i) => {
        const yOffset = useTransform(
          scrollYProgress,
          [0, 1],
          [0, (50 + i * 20) * (i % 2 === 0 ? 1 : -1)]
        )
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5 pointer-events-none"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              background: `radial-gradient(circle, rgba(255,0,0,${0.1 + i * 0.05}) 0%, rgba(51,51,51,${0.05 + i * 0.02}) 100%)`,
              left: `${5 + i * 18}%`,
              top: `${10 + i * 15}%`,
              y: yOffset
            }}
          />
        )
      })}
      {children}
    </div>
  )
}

export default ParallaxBackground