// Global type definitions
export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  slug: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}