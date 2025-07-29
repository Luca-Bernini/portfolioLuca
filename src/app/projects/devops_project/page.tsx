'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeftIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const DevOpsProjectPage = () => {
  const [expandedSections, setExpandedSections] = useState({})
  
  // Track scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  })
  
  // Create parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const sections = [
    {
      id: 'flask-dev',
      title: "Flask Application Development",
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
      id: 'aws-infrastructure',
      title: "AWS Infrastructure Setup",
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
      id: 'cicd-pipeline',
      title: "CI/CD Pipeline with Bitbucket",
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
      id: 'load-testing',
      title: "Load Testing with Locust",
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
      id: 'infrastructure-code',
      title: "Infrastructure as Code (IaC)",
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
      id: 'lambda-integrations',
      title: "Lambda Functions & Integrations",
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
    "Auto Scaling Groups", "Bitbucket Pipelines", "Locust", "Terraform", "Lambda",
    "CloudWatch", "SNS", "VPC", "Security Groups", "IAM"
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent-500/5 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-500/5 blur-3xl" />
        </motion.div>
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent-500 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />

      <motion.main
        className="relative z-10 px-4 py-16 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <div className="mb-12">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-black via-red-500 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            DevOps Flask Application on AWS
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 mb-8 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A comprehensive DevOps project showcasing the complete lifecycle of deploying a Flask application 
            on AWS infrastructure with modern CI/CD practices, load testing, and Infrastructure as Code.
          </motion.p>
          
          {/* Enhanced Back Button */}
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-500/20 text-accent-400 font-medium border border-accent-500/50 hover:bg-accent-500/30 hover:border-accent-400 hover:text-accent-300 transition-all duration-300 backdrop-blur-sm"
          >
            <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
        >
          {[
            { label: "Uptime", value: "99.9%" },
            { label: "Deployment Time", value: "-50%" },
            { label: "AWS Services", value: "12+" },
            { label: "Test Coverage", value: "95%" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-accent-400 mb-2">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Challenge</h3>
                <p className="text-white/70 leading-relaxed">
                  Deploy a scalable Flask application on AWS with proper DevOps practices, 
                  including automated CI/CD, infrastructure as code, and comprehensive monitoring.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Solution</h3>
                <p className="text-white/70 leading-relaxed">
                  Implemented a complete DevOps pipeline using AWS services, Terraform for IaC, 
                  Bitbucket Pipelines for CI/CD, and Locust for load testing.
                </p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  99.9% uptime with auto-scaling capabilities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  50% reduction in deployment time
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Automated testing and quality assurance
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Infrastructure cost optimization
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Architecture Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Architecture Overview</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-accent-500/30 transition-all duration-300">
            <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center border-2 border-dashed border-white/20 hover:border-accent-500/50 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white text-lg font-medium">Architecture Diagram</p>
                <p className="text-white/60 text-sm mt-2">Visual representation of the AWS infrastructure</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Implementation - Collapsible Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Technical Implementation</h2>
          <div className="space-y-4">
            {sections.map((section, index) => {
              const isExpanded = expandedSections[section.id]
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent-500/30 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-accent-500 rounded-full" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDownIcon className="w-5 h-5 text-white/60" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pt-6 pb-6">
                      <ul className="space-y-4">
                        {section.content.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                            transition={{ delay: itemIndex * 0.03, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                            className="flex items-start text-white/70 leading-relaxed"
                          >
                            <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            <span className="flex-1">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Technologies Used</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium border border-accent-500/30 hover:bg-accent-500/30 hover:border-accent-500/50 transition-all duration-200 hover:scale-105"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Key Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-accent-400 mb-4">Performance & Scalability</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  99.9% uptime with auto-scaling capabilities
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sub-second response times under load
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Horizontal scaling based on demand
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Global content delivery optimization
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-accent-400 mb-4">DevOps Excellence</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fully automated CI/CD pipeline
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Infrastructure as Code implementation
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  50% reduction in deployment time
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Zero-downtime deployments
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  )
}

export default DevOpsProjectPage