import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DevOps Flask Application on AWS',
  description: 'Complete DevOps project showcasing Flask application deployment on AWS with CI/CD pipeline, Infrastructure as Code, load testing, and monitoring. Built with Terraform, Bitbucket Pipelines, and Locust.',
  keywords: ['DevOps', 'AWS', 'Flask', 'Terraform', 'CI/CD', 'Bitbucket Pipelines', 'Locust', 'Load Testing', 'Infrastructure as Code', 'CloudFront', 'EC2', 'RDS'],
  openGraph: {
    title: 'DevOps Flask Application on AWS - Luca Portfolio',
    description: 'Complete DevOps project showcasing Flask application deployment on AWS with CI/CD pipeline, Infrastructure as Code, load testing, and monitoring.',
    type: 'article',
    url: 'https://portfolio-luca-ten.vercel.app/projects/devops_project',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'DevOps Flask Application on AWS Project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps Flask Application on AWS - Luca Portfolio',
    description: 'Complete DevOps project showcasing Flask application deployment on AWS with CI/CD pipeline, Infrastructure as Code, load testing, and monitoring.',
    images: ['/images/og-image.svg'],
  },
  alternates: {
    canonical: '/projects/devops_project',
  },
}