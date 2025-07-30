import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { params: string[] } }
) {
  // Extract width and height from URL params
  const [width = '800', height = '600'] = params.params || []
  
  // Ensure dimensions are valid numbers
  const w = Math.max(100, Math.min(2000, parseInt(width) || 800))
  const h = Math.max(100, Math.min(2000, parseInt(height) || 600))
  
  // Create a simple SVG placeholder with dynamic dimensions
  const svg = `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#333333;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1A1A1A;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Inter, sans-serif" font-size="${Math.min(w, h) / 20}" fill="#CCCCCC" text-anchor="middle" dy=".3em">Project Preview</text>
      <text x="50%" y="60%" font-family="Inter, sans-serif" font-size="${Math.min(w, h) / 40}" fill="#999999" text-anchor="middle" dy=".3em">${w} × ${h}</text>
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}