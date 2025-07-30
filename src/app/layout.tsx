import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ProgressiveHeader } from '@/components/ui'
import { MagneticScrollProvider } from '@/contexts/MagneticScrollContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Luca - SecDevOps Portfolio',
    template: '%s | Luca - SecDevOps Portfolio'
  },
  description: 'SecDevOps student portfolio showcasing cloud infrastructure, cybersecurity projects, and AWS expertise. Explore my journey in secure development and modern infrastructure management.',
  keywords: ['SecDevOps', 'AWS', 'Cloud Infrastructure', 'Cybersecurity', 'Python', 'DevOps', 'Portfolio', 'Luca'],
  authors: [{ name: 'Luca' }],
  creator: 'Luca',
  publisher: 'Luca',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfolio-luca-ten.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    other: [
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-luca-ten.vercel.app',
    title: 'Luca - SecDevOps Portfolio',
    description: 'SecDevOps student portfolio showcasing cloud infrastructure, cybersecurity projects, and AWS expertise.',
    siteName: 'Luca Portfolio',
    images: [
       {
         url: '/images/og-image.svg',
         width: 1200,
         height: 630,
         alt: 'Luca - SecDevOps Portfolio',
       },
     ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luca - SecDevOps Portfolio',
    description: 'SecDevOps student portfolio showcasing cloud infrastructure, cybersecurity projects, and AWS expertise.',
    images: ['/images/og-image.svg'],
    creator: '@luca',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Luca",
    "jobTitle": "SecDevOps Student",
    "description": "SecDevOps student specializing in cloud infrastructure, cybersecurity, and AWS services",
    "url": "https://portfolio-luca-ten.vercel.app",
    "sameAs": [
      "https://linkedin.com/in/luca",
      "https://github.com/luca"
    ],
    "knowsAbout": [
      "AWS Cloud Services",
      "Cybersecurity",
      "DevOps",
      "Python Programming",
      "Cloud Infrastructure",
      "System Administration"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "SecDevOps Program"
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <MagneticScrollProvider>
          <ProgressiveHeader />
          {children}
        </MagneticScrollProvider>
      </body>
    </html>
  )
}