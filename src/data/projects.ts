export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  slug: string
}

export const projects: Project[] = [
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