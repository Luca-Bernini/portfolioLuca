'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { projects } from '@/data/projects'

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-8">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            A showcase of my recent work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-xl overflow-hidden hover:border-accent-500 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/10"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-accent-500/20 to-primary-700 relative overflow-hidden">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-3 line-clamp-2 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary-700 text-text-secondary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-primary-700 text-text-secondary text-sm rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {project.demoUrl.startsWith('http') ? (
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-500 hover:text-accent-400 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:ring-offset-2 focus:ring-offset-primary-800 rounded-md px-2 py-1 -mx-2 -my-1 active:scale-95"
                  >
                    View Demo
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                  </a>
                ) : (
                  <Link 
                    href={project.demoUrl}
                    className="inline-flex items-center text-accent-500 hover:text-accent-400 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:ring-offset-2 focus:ring-offset-primary-800 rounded-md px-2 py-1 -mx-2 -my-1 active:scale-95"
                  >
                    View Project
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection