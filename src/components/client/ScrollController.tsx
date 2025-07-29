'use client'

import { useEffect } from 'react'

interface ScrollControllerProps {
  isScrolling: boolean
  setIsScrolling: (value: boolean) => void
}

const ScrollController: React.FC<ScrollControllerProps> = ({ isScrolling, setIsScrolling }) => {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout
    let lastScrollTime = 0
    const scrollCooldown = 100
    let isSnapping = false

    const snapToSection = () => {
      if (isSnapping) return
      
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
        const rect = closestSection.getBoundingClientRect()
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
      const now = Date.now()
      
      if (now - lastScrollTime < scrollCooldown && isScrolling) {
        return
      }
      
      lastScrollTime = now
      setIsScrolling(true)
      
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
        // Add magnetic snap after scroll stops
        setTimeout(snapToSection, 100)
      }, 150)
    }

    // Add CSS scroll-snap behavior
    const addScrollSnapCSS = () => {
      const style = document.createElement('style')
      style.textContent = `
        html {
          scroll-snap-type: y mandatory;
        }
        .snap-section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
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
  }, [isScrolling, setIsScrolling])

  return null
}

export default ScrollController