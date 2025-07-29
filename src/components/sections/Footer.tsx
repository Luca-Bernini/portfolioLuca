'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'luca@example.com',
      href: 'mailto:luca@example.com'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'New York, NY',
      href: '#'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/luca', icon: '🔗' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/luca', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/luca', icon: '🐦' }
  ]

  return (

    // Remove the centering constraint and make it full width
    <footer className="w-full bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 border-t border-primary-700 py-12">
      {/* Changed py-16 to py-12 for less vertical padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">Luca</h3>
            <p className="text-text-secondary mb-6 max-w-md">
              Passionate full-stack developer creating innovative solutions and exceptional user experiences.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-text-primary mb-4">Contact</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center text-text-secondary hover:text-accent-500 transition-colors group"
                >
                  <item.icon className="w-5 h-5 mr-3 group-hover:text-accent-500" />
                  <span>{item.value}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-text-primary mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-accent-500 transition-colors"
                >
                  <span className="mr-3">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-primary-700 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-text-secondary text-sm mb-4 sm:mb-0">
            © {currentYear} Luca. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-text-secondary hover:text-accent-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-secondary hover:text-accent-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer