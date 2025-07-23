'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { notFound } from 'next/navigation'

interface ProjectData {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  images: string[]
}

const projectsData: Record<string, ProjectData> = {
  'ecommerce-platform': {
    title: 'E-Commerce Platform',
    description: 'A modern, full-stack e-commerce solution with real-time inventory management and secure payment processing.',
    longDescription: 'This comprehensive e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The platform features a modern, responsive design with advanced functionality including real-time inventory tracking, secure payment processing through Stripe, and an intuitive admin dashboard for managing products, orders, and customer data.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Vercel'],
    features: [
      'Responsive design optimized for all devices',
      'Real-time inventory management',
      'Secure payment processing with Stripe',
      'Advanced product filtering and search',
      'User authentication and profile management',
      'Admin dashboard with analytics',
      'Order tracking and management',
      'Email notifications and confirmations'
    ],
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/luca/ecommerce-platform',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600']
  },
  'task-management-app': {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.',
    longDescription: 'A comprehensive task management application designed for teams to collaborate effectively. The app features real-time updates using Socket.io, allowing team members to see changes instantly. With advanced project analytics, team leaders can track progress, identify bottlenecks, and optimize workflow efficiency.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT', 'Chart.js'],
    features: [
      'Real-time collaboration with Socket.io',
      'Drag-and-drop task management',
      'Team member assignment and notifications',
      'Project timeline and milestone tracking',
      'Advanced analytics and reporting',
      'File attachments and comments',
      'Custom project templates',
      'Mobile-responsive design'
    ],
    liveUrl: 'https://taskmanager-demo.herokuapp.com',
    githubUrl: 'https://github.com/luca/task-management-app',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600']
  },
  'ai-analytics-dashboard': {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Intelligent dashboard providing actionable insights through machine learning algorithms and data visualization.',
    longDescription: 'An advanced analytics dashboard that leverages machine learning to provide intelligent insights from complex datasets. Built with Python and TensorFlow for the AI components, and React with D3.js for interactive data visualizations. The dashboard can process large datasets and provide predictive analytics for business decision-making.',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'FastAPI', 'PostgreSQL', 'Docker'],
    features: [
      'Machine learning-powered insights',
      'Interactive data visualizations with D3.js',
      'Predictive analytics and forecasting',
      'Real-time data processing',
      'Customizable dashboard widgets',
      'Export capabilities (PDF, CSV, PNG)',
      'Role-based access control',
      'API integration for external data sources'
    ],
    liveUrl: 'https://ai-dashboard-demo.netlify.app',
    githubUrl: 'https://github.com/luca/ai-analytics-dashboard',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600']
  },
  'mobile-banking-app': {
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
    longDescription: 'A secure mobile banking application built with React Native, featuring biometric authentication, real-time transaction monitoring, and comprehensive financial management tools. The app prioritizes security with end-to-end encryption and follows banking industry standards for data protection.',
    technologies: ['React Native', 'Node.js', 'AWS', 'Redis', 'PostgreSQL', 'JWT', 'Expo'],
    features: [
      'Biometric authentication (fingerprint/face)',
      'Real-time transaction monitoring',
      'Account balance and history',
      'Money transfer and bill payments',
      'Budget tracking and analytics',
      'Push notifications for transactions',
      'Offline mode capabilities',
      'Multi-language support'
    ],
    githubUrl: 'https://github.com/luca/mobile-banking-app',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600']
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center text-text-secondary hover:text-accent-500 transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl">
            {project.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                View Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-700 hover:bg-primary-600 text-text-primary font-medium rounded-lg border border-primary-600 hover:border-primary-500 transition-colors"
              >
                <CodeBracketIcon className="w-5 h-5 mr-2" />
                View Code
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="aspect-video bg-gradient-to-br from-primary-700 to-primary-600 rounded-xl overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-t from-primary-900/20 to-transparent" />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-6">Project Overview</h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              {project.longDescription}
            </p>
            
            <h3 className="text-xl font-semibold text-text-primary mb-4">Key Features</h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-semibold text-text-primary mb-6">Technologies Used</h3>
            <div className="space-y-3">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-lg p-3 text-center hover:border-accent-500 transition-colors"
                >
                  <span className="text-text-primary font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}