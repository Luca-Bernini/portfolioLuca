import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ProgressiveHeader } from '@/components/ui'
import { MagneticScrollProvider } from '@/contexts/MagneticScrollContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luca - Portfolio',
  description: 'Full-stack developer portfolio showcasing innovative solutions and exceptional user experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MagneticScrollProvider>
          <ProgressiveHeader />
          {children}
        </MagneticScrollProvider>
      </body>
    </html>
  )
}