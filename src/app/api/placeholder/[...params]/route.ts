import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Create a simple SVG placeholder
  const svg = `
    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#333333;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1A1A1A;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Inter, sans-serif" font-size="24" fill="#CCCCCC" text-anchor="middle" dy=".3em">Project Preview</text>
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}