'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  slug: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern, full-stack e-commerce solution with real-time inventory management and secure payment processing.',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    slug: 'ecommerce-platform'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    slug: 'task-management-app'
  },
  {
    id: '3',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Intelligent dashboard providing actionable insights through machine learning algorithms and data visualization.',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
    slug: 'ai-analytics-dashboard'
  },
  {
    id: '4',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
    image: '/api/placeholder/400/300',
    technologies: ['React Native', 'Node.js', 'AWS', 'Redis'],
    slug: 'mobile-banking-app'
  }
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-xl overflow-hidden hover:border-accent-500 hover:bg-primary-700/50 transition-all duration-300 cursor-pointer">
          {/* Project Image Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-primary-700 to-primary-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowTopRightOnSquareIcon className="w-6 h-6 text-accent-500" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-accent-500/20 text-accent-500 text-xs rounded-full border border-accent-500/30"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 2 && (
                  <span className="px-2 py-1 bg-primary-700/50 text-text-secondary text-xs rounded-full border border-primary-600">
                    +{project.technologies.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            My Projects
          </h2>
          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection