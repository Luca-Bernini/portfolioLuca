# Luca's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.


## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── placeholder/        # Placeholder image API
│   ├── projects/
│   │   └── [slug]/            # Dynamic project pages
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   ├── not-found.tsx          # 404 page
│   └── page.tsx               # Home page
└── components/
    ├── AboutSection.tsx       # About me section
    ├── HeroSection.tsx        # Hero/landing section
    └── ProjectsSection.tsx    # Projects showcase
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/luca/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Adding New Projects

1. Add project data to `src/app/projects/[slug]/page.tsx` in the `projectsData` object
2. Add the project card to `src/components/ProjectsSection.tsx` in the `projects` array
3. Create project images or use the placeholder API

### Updating Content

- **Hero Section**: Edit `src/components/HeroSection.tsx`
- **About Section**: Edit `src/components/AboutSection.tsx`
- **Skills**: Update the skills array in `AboutSection.tsx`
- **Contact Info**: Update metadata in `src/app/layout.tsx`

### Styling

- **Colors**: Modify `tailwind.config.ts` to update the color palette
- **Animations**: Customize Framer Motion animations in component files
- **Typography**: Update font settings in `tailwind.config.ts`

## Build & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deployment Options

Optimized for deployment on Vercel, Netlify, Firebase Hosting, or any static hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Security

This project implements several security best practices:

### Security Headers
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-XSS-Protection**: Enables XSS filtering
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Restricts access to browser features

### Docker Security
- Multi-stage builds for minimal attack surface
- Non-root user execution
- Security updates in base images
- Optimized layer caching

### Code Security
- TypeScript for type safety
- ESLint for code quality
- Proper input validation
- Accessible focus management
- No hardcoded secrets or credentials

### Environment Variables
- `.env.example` file for reference
- Proper `.gitignore` configuration
- Environment-specific configurations

### Dependencies
- Regular dependency updates
- Minimal dependency footprint
- Production-only dependencies in Docker

## SEO Optimization

This portfolio is optimized for search engines and social media sharing:

### Meta Tags & Open Graph
- Comprehensive meta descriptions and keywords
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data (JSON-LD) for rich snippets

### Technical SEO
- **robots.txt**: Search engine crawling instructions
- **sitemap.xml**: Site structure for search engines
- **Canonical URLs**: Prevent duplicate content issues
- **Semantic HTML**: Proper heading hierarchy and structure

### Performance SEO
- Optimized images with proper alt text
- Fast loading times with Next.js optimization
- Mobile-responsive design
- Accessibility compliance

### Content SEO
- Descriptive page titles and meta descriptions
- Keyword optimization for SecDevOps and AWS
- Professional portfolio structure
- Regular content updates