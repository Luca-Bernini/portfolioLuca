'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ProgressiveHeader from '@/components/ProgressiveHeader'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      <ProgressiveHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  )
}