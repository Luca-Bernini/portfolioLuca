import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Work in Progress | Luca Portfolio',
  description: 'Exciting new project currently in development. Stay tuned for updates.',
}

export default function WorkInProgressPage() {
  return (
    <div className="min-h-screen bg-primary-900 text-text-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-accent-500 hover:text-accent-400 mb-8 transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-accent-500/20 to-primary-700 rounded-full flex items-center justify-center mb-6">
              <div className="text-4xl">🚧</div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Work in Progress
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Exciting new project currently in development. Stay tuned for updates on this upcoming addition to my portfolio.
            </p>
          </div>
          
          <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-xl p-8 max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-text-secondary mb-6">
              This project is currently being developed. Check back soon for more details!
            </p>
            <div className="flex justify-center">
              <div className="animate-pulse flex space-x-1">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <div className="w-2 h-2 bg-accent-500 rounded-full animation-delay-200"></div>
                <div className="w-2 h-2 bg-accent-500 rounded-full animation-delay-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}