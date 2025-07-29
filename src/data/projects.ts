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
    title: 'DevOps Flask Application on AWS',
    description: 'Complete DevOps pipeline for a Flask application deployed on AWS with CloudFront, Load Balancer, Auto Scaling, CI/CD with Bitbucket, Locust testing, and Infrastructure as Code.',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'Flask', 'AWS', 'CloudFront', 'Auto Scaling', 'Bitbucket Pipelines', 'Locust', 'IaC', 'Lambda'],
    slug: 'devops_project'
  }
]