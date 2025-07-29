'use client'

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  // State to control when to show the name and subtitle
  const [showName, setShowName] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)

  // Delay the name and subtitle appearance
  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setShowName(true)
    }, 500) // 0.5 seconds delay for name

    const subtitleTimer = setTimeout(() => {
      setShowSubtitle(true)
    }, 1500) // 1.5 seconds delay for subtitle

    return () => {
      clearTimeout(nameTimer)
      clearTimeout(subtitleTimer)
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-5xl mx-auto">
        <div className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-text-primary mb-6 leading-tight">
          {/* Name container with fade-in effect */}
          <div className="flex flex-wrap justify-center items-baseline gap-4 mb-2">
            <span 
              className={`transition-all duration-1000 ease-out transform ${
                showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } text-text-primary`}
            >
              Luca
            </span>
            <span 
              className={`transition-all duration-1000 ease-out transform delay-200 ${
                showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } text-red-600`}
            >
              Bernini
            </span>
          </div>
          
          {/* Subtitle in its own container to prevent layout shifts */}
          <div className="text-center">
            <span 
              className={`block text-gray-300 text-2xl sm:text-3xl lg:text-4xl transition-all duration-1000 ease-out transform ${
                showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              SecDevOps Student
            </span>
          </div>
        </div>
        
        {/* Buttons removed as requested */}
      </div>
      
      {/* Centered and bigger arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
        <button 
          onClick={scrollToAbout}
          className="text-text-secondary hover:text-accent-500 transition-colors animate-bounce p-2 rounded-full hover:bg-accent-500/10"
        >
          <ChevronDownIcon className="w-8 h-8" />
        </button>
      </div>
    </section>
  )
}

export default HeroSection