'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon, CloudIcon, CpuChipIcon, ShieldCheckIcon, CodeBracketIcon, ServerIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const DevOpsProjectPage = () => {
  const sections = [
    {
      title: "1. Flask Application Development",
      icon: CodeBracketIcon,
      content: [
        "Built a scalable Flask web application with RESTful API endpoints",
        "Implemented proper error handling and logging mechanisms",
        "Created modular application structure with blueprints",
        "Added database integration with SQLAlchemy ORM",
        "Implemented authentication and authorization features",
        "Created comprehensive unit and integration tests"
      ]
    },
    {
      title: "2. AWS Infrastructure Setup",
      icon: CloudIcon,
      content: [
        "Configured EC2 instances with proper security groups",
        "Set up Application Load Balancer for traffic distribution",
        "Implemented Auto Scaling Groups for high availability",
        "Configured CloudFront CDN for global content delivery",
        "Set up RDS for database management",
        "Implemented VPC with public and private subnets"
      ]
    },
    {
      title: "3. CI/CD Pipeline with Bitbucket",
      icon: ServerIcon,
      content: [
        "Created Bitbucket Pipelines configuration for automated deployment",
        "Implemented multi-stage pipeline (build, test, deploy)",
        "Set up automated testing in the pipeline",
        "Configured deployment to different environments (dev, staging, prod)",
        "Implemented rollback mechanisms for failed deployments",
        "Added security scanning and code quality checks"
      ]
    },
    {
      title: "4. Load Testing with Locust",
      icon: ChartBarIcon,
      content: [
        "Designed comprehensive load testing scenarios",
        "Created Locust test scripts for different user behaviors",
        "Performed stress testing to identify bottlenecks",
        "Analyzed performance metrics and response times",
        "Optimized application based on testing results",
        "Implemented monitoring and alerting for performance issues"
      ]
    },
    {
      title: "5. Infrastructure as Code (IaC)",
      icon: CpuChipIcon,
      content: [
        "Implemented Terraform for infrastructure provisioning",
        "Created reusable modules for common AWS resources",
        "Implemented state management with remote backends",
        "Added infrastructure validation and testing",
        "Created documentation for infrastructure components",
        "Implemented infrastructure versioning and change management"
      ]
    },
    {
      title: "6. Lambda Functions & Integrations",
      icon: ShieldCheckIcon,
      content: [
        "Developed serverless functions for background processing",
        "Implemented API Gateway integration with Lambda",
        "Created event-driven architecture with SQS and SNS",
        "Added CloudWatch monitoring and logging",
        "Implemented automated backup and maintenance tasks",
        "Created cost optimization through serverless architecture"
      ]
    }
  ]

  const technologies = [
    "Python", "Flask", "AWS EC2", "AWS RDS", "CloudFront", "Application Load Balancer",
    "Auto Scaling Groups", "Bitbucket Pipelines", "Locust", "Terraform", "Lambda", "API Gateway",
    "CloudWatch", "SQS", "SNS", "VPC", "Security Groups", "IAM"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/#projects"
            className="inline-flex items-center text-text-secondary hover:text-accent-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:ring-offset-2 focus:ring-offset-primary-800 rounded-md px-2 py-1 -mx-2 -my-1 active:scale-95 mb-8"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              DevOps Flask Application on AWS
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl leading-relaxed">
              A comprehensive DevOps project showcasing the complete lifecycle of deploying a Flask application 
              on AWS infrastructure with modern CI/CD practices, load testing, and Infrastructure as Code.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-6">Project Overview</h2>
          <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-xl p-8">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              This project demonstrates a complete DevOps workflow for deploying a Python Flask application 
              on AWS cloud infrastructure. The implementation covers everything from application development 
              to production deployment, including automated testing, monitoring, and scaling capabilities.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              The project emphasizes best practices in cloud architecture, security, automation, and 
              performance optimization, making it a comprehensive showcase of modern DevOps methodologies.
            </p>
          </div>
        </motion.div>

        {/* Implementation Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-xl p-8 hover:border-accent-500/50 transition-colors"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-accent-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Technologies Used */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-text-primary mb-4">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-700/30 text-text-secondary text-sm rounded-full border border-primary-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8">Key Achievements</h3>
          <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-accent-500 mb-4">Performance & Scalability</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li>• 99.9% uptime with auto-scaling capabilities</li>
                  <li>• Sub-second response times under load</li>
                  <li>• Horizontal scaling based on demand</li>
                  <li>• Global content delivery via CloudFront</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent-500 mb-4">DevOps Excellence</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Fully automated CI/CD pipeline</li>
                  <li>• Infrastructure as Code implementation</li>
                  <li>• Comprehensive monitoring and alerting</li>
                  <li>• Security best practices throughout</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DevOpsProjectPage