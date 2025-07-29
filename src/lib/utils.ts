// Utility functions for the application
export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}