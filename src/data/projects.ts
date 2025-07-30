export interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  technologies: string[]
  githubUrl?: string
  demoUrl: string
  category: string
  featured?: boolean
  slug: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DevOps Flask Application on AWS",
    description: "Complete DevOps pipeline for a Flask application deployed on AWS with CloudFront, Load Balancer, Auto Scaling, CI/CD with Bitbucket, Locust testing, and Infrastructure as Code.",
    imageUrl: "https://via.placeholder.com/400x300/333333/CCCCCC?text=Project+Preview",
    technologies: ["Python", "Flask", "AWS", "CloudFront", "Auto Scaling", "Bitbucket Pipelines", "Locust", "IaC", "Lambda"],
    githubUrl: "https://github.com/PastasciuttaEtonno",
    demoUrl: "/projects/devops_project",
    category: "DevOps",
    featured: true,
    slug: "devops_project"
  },
  {
    id: 2,
    title: "Work in Progress...",
    description: "Exciting new project currently in development. Stay tuned for updates on this upcoming addition to my portfolio.",
    imageUrl: "https://via.placeholder.com/400x300/333333/CCCCCC?text=Project+Preview",
    technologies: ["Coming Soon"],
    demoUrl: "/projects/work_in_progress",
    category: "Development",
    slug: "work_in_progress"
  }
]