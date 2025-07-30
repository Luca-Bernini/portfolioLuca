'use client'

import { useEffect } from 'react'
import { useMagneticScroll } from '@/contexts/MagneticScrollContext'

interface ScrollControllerProps {
  isScrolling: boolean
  setIsScrolling: (value: boolean) => void
}

const ScrollController: React.FC<ScrollControllerProps> = ({ isScrolling, setIsScrolling }) => {
  const { isMagneticScrollEnabled } = useMagneticScroll()
  
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout
    let lastScrollTime = 0
    const scrollCooldown = 150  // Increased cooldown
    let isSnapping = false
    let ticking = false

    const snapToSection = () => {
      if (isSnapping || !isMagneticScrollEnabled) return
      
      const sections = document.querySelectorAll('.snap-section')
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      let closestSection: Element | null = null
      let minDistance = Infinity
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = scrollPosition + rect.top
        const sectionCenter = sectionTop + rect.height / 2
        const viewportCenter = scrollPosition + windowHeight / 2
        const distance = Math.abs(sectionCenter - viewportCenter)
        
        if (distance < minDistance) {
          minDistance = distance
          closestSection = section
        }
      })
      
      if (closestSection) {
        isSnapping = true
        const rect = (closestSection as Element).getBoundingClientRect()
        const sectionTop = scrollPosition + rect.top
        
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        })
        
        setTimeout(() => {
          isSnapping = false
        }, 1000)
      }
    }

    const handleScroll = () => {
      if (ticking) return
      
      const now = Date.now()
      
      if (now - lastScrollTime < scrollCooldown && isScrolling) {
        return
      }
      
      ticking = true
      requestAnimationFrame(() => {
        lastScrollTime = now
        setIsScrolling(true)
        
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false)
          if (isMagneticScrollEnabled) {
            setTimeout(snapToSection, 100)
          }
        }, 200)  // Increased timeout
        
        ticking = false
      })
    }

    // Optimized CSS injection
    const addScrollSnapCSS = () => {
      const existingStyle = document.getElementById('magnetic-scroll-styles')
      if (existingStyle) {
        existingStyle.remove()
      }
      
      const style = document.createElement('style')
      style.id = 'magnetic-scroll-styles'
      style.textContent = isMagneticScrollEnabled ? `
        html {
          scroll-snap-type: y proximity;
        }
        .snap-section {
          scroll-snap-align: start;
        }
      ` : `
        html {
          scroll-snap-type: none;
        }
        .snap-section {
          scroll-snap-align: none;
        }
      `
      
      document.head.appendChild(style)
      return style
    }

    const styleElement = addScrollSnapCSS()
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement)
      }
    }
  }, [isScrolling, setIsScrolling, isMagneticScrollEnabled])

  return null
}

export default ScrollController