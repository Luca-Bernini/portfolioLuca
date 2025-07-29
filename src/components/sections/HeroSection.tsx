'use client'

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import DecryptedText from '../animations/DecryptedText'

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="text-4xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
          <div>
            <DecryptedText 
              text="Luca"
              animateOn="view"
              speed={15}
              maxIterations={8}
              revealDirection="center"
              className="text-text-primary"
              encryptedClassName="text-text-secondary opacity-70"
            />
            <span className="block text-accent-500">
              <DecryptedText 
                text="Developer"
                animateOn="view"
                speed={15}
                maxIterations={10}
                revealDirection="start"
                className="text-accent-500"
                encryptedClassName="text-accent-300 opacity-60"
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]/\|!@#$%^&*()"
              />
            </span>
          </div>
        </div>
        
        <div className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
          <DecryptedText 
            text="Crafting exceptional digital experiences with modern web technologies"
            animateOn="view"
            speed={20}
            maxIterations={15}
            revealDirection="start"
            sequential={true}
            className="text-text-secondary"
            encryptedClassName="text-text-secondary opacity-40"
            characters="abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={scrollToAbout}
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-colors group"
          >
            <DecryptedText 
              text="View My Work"
              animateOn="hover"
              speed={30}
              maxIterations={8}
              className="text-white"
              encryptedClassName="text-white opacity-80"
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            />
          </button>
          <a 
            href="mailto:luca@example.com"
            className="border border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors group"
          >
            <DecryptedText 
              text="Get In Touch"
              animateOn="hover"
              speed={35}
              maxIterations={10}
              className="group-hover:text-white text-accent-500"
              encryptedClassName="group-hover:text-white text-accent-300 opacity-70"
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            />
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-secondary hover:text-accent-500 transition-colors animate-bounce"
      >
        <ChevronDownIcon className="w-6 h-6" />
      </button>
    </section>
  )
}

export default HeroSection