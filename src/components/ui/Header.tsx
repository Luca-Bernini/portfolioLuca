'use client'

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 relative">
          {/* Left side - About button */}
          <div className="flex-1">
            <a
              href="#about"
              className="text-text-secondary/80 hover:text-text-primary transition-colors focus:outline-none focus:ring-0 focus:border-transparent"
            >
              About
            </a>
          </div>
          
          {/* Center - Logo/Name */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToTop}
              className="text-xl font-semibold text-text-primary/90 hover:text-text-primary transition-colors focus:outline-none focus:ring-0 focus:border-transparent"
            >
              Luca
            </button>
          </div>
          
          {/* Right side - Projects button */}
          <div className="flex-1 flex justify-end">
            <a
              href="#projects"
              className="text-text-secondary/80 hover:text-text-primary transition-colors focus:outline-none focus:ring-0 focus:border-transparent"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header