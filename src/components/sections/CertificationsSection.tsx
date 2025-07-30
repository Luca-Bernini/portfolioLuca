'use client'

import { motion } from 'framer-motion'
import { CheckBadgeIcon, CloudIcon, ShieldCheckIcon, CpuChipIcon, ClockIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface Certification {
  id: string
  name: string
  provider: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  date: string
  status: 'completed' | 'next-up'
  credentialId?: string
  verifyUrl?: string
  badgeImage?: string
}

const certifications: Certification[] = [
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Cloud Practitioner',
    provider: 'Amazon Web Services',
    icon: CloudIcon,
    color: 'from-accent-500 to-accent-600',
    date: '2024',
    status: 'completed',
    credentialId: 'AWS-CCP-XXXXXX',
    verifyUrl: 'https://aws.amazon.com/verification',
    badgeImage: '/images/cloud_practitioner.png'
  },
  {
    id: 'aws-solutions-architect',
    name: 'AWS Solutions Architect Associate',
    provider: 'Amazon Web Services',
    icon: CloudIcon,
    color: 'from-accent-600 to-accent-700',
    date: 'Next Up',
    status: 'next-up'
  },
  {
    id: 'cisco-ccna',
    name: 'CCNA: Enterprise Networking',
    provider: 'Cisco',
    icon: ShieldCheckIcon,
    color: 'from-accent-700 to-accent-500',
    date: 'Working on it',
    status: 'next-up'
  }
]

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-8"
          >
            Certifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Professional certifications that validate my expertise in cloud technologies and networking.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            const isCompleted = cert.status === 'completed'
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`group relative backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl overflow-hidden ${
                  isCompleted 
                    ? 'bg-primary-800/30 border-primary-700/50 hover:border-accent-500/50 hover:shadow-accent-500/10' 
                    : 'bg-primary-900/20 border-primary-800/30 hover:border-yellow-500/30 hover:shadow-yellow-500/5'
                }`}
              >
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Floating icon background */}
                <div className="absolute -top-4 -right-4 w-24 h-24 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${cert.color} rounded-full blur-xl`} />
                </div>
                
                <div className="relative z-10">
                  {/* Icon and Provider */}
                  <div className="flex items-start justify-between mb-4">
                    {cert.badgeImage ? (
                      <Image 
                        src={cert.badgeImage} 
                        alt={`${cert.name} badge`}
                        width={55}
                        height={55}
                        className="w-20 h-20"
                      />
                    ) : (
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                        <IconComponent className={`w-6 h-6 text-transparent bg-gradient-to-br ${cert.color} bg-clip-text`} />
                      </div>
                    )}
                    <div className="text-right">
                      <div className={`text-xs font-medium ${
                        isCompleted ? 'text-text-secondary/60' : 'text-yellow-500/80'
                      }`}>{cert.date}</div>
                      <div className="text-xs text-text-secondary/80 mt-1">{cert.provider}</div>
                    </div>
                  </div>
                  
                  {/* Certification Name */}
                  <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 leading-tight ${
                    isCompleted 
                      ? 'text-text-primary group-hover:text-accent-400' 
                      : 'text-text-secondary group-hover:text-yellow-400'
                  }`}>
                    {cert.name}
                  </h3>
                  
                  {/* Status Section */}
                  <div className="flex items-center justify-between">
                    {isCompleted ? (
                      <>
                        <div className="text-xs text-text-secondary/70 font-mono">
                          ID: {cert.credentialId}
                        </div>
                        
                        {/* Verification Badge */}
                        <div className="flex items-center space-x-1">
                          <CheckBadgeIcon className="w-4 h-4 text-green-500" />
                          {/* <span className="text-xs text-green-500 font-medium">Verified</span> */}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center space-x-1">
                          <ClockIcon className="w-4 h-4 text-yellow-500" />
                          <span className="text-xs text-yellow-500 font-medium">In Progress</span>
                        </div>
                        <div className="text-xs text-text-secondary/60">
                          Planning Phase
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Verify Link for completed certifications */}
                  {/* {isCompleted && cert.verifyUrl && (
                    <motion.a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-accent-500 hover:text-accent-400 font-medium mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ x: 2 }}
                    >
                      Verify Credential →
                    </motion.a>
                  )} */}
                </div>
                
                {/* Subtle border glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection