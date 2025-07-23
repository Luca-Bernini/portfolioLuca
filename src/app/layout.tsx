import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ProgressiveHeader from '@/components/ProgressiveHeader'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luca Portfolio | Professional Developer',
  description: 'Modern portfolio showcasing skills, projects, and professional experience. Built with Next.js, TypeScript, and Tailwind CSS.',
  keywords: ['portfolio', 'developer', 'web development', 'react', 'next.js'],
  authors: [{ name: 'Luca' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Luca Portfolio | Professional Developer',
    description: 'Modern portfolio showcasing skills, projects, and professional experience.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ProgressiveHeader />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}