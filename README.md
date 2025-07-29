# Luca's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, interactive elements, and a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean, minimal aesthetic with dark theme and red accents
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Accessibility**: WCAG 2.1 AA compliant with proper semantic markup
- **TypeScript**: Full type safety throughout the application
- **Project Showcase**: Dynamic project pages with detailed information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

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

## 🎨 Design System

### Color Palette
- **Primary**: Black to Dark Grey (#000000, #1A1A1A, #333333)
- **Accent**: Red variants (#FF0000, #CC0000, #990000)
- **Text**: White and Light Grey (#FFFFFF, #CCCCCC)

### Typography
- **Font Family**: Inter (sans-serif)
- **Responsive sizing**: Mobile-first approach with breakpoint scaling

## 🚀 Getting Started

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

## 📝 Customization

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

## 🔧 Build & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deployment Options

This project is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Firebase Hosting**
- Any static hosting service

## 📊 Performance

The website is optimized for:
- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Excellent scores
- **SEO**: Proper meta tags and semantic markup
- **Accessibility**: WCAG 2.1 AA compliance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔒 Security

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

## 🔍 SEO Optimization

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

## 📞 Contact

- **Email**: luca@example.com
- **LinkedIn**: [linkedin.com/in/luca](https://linkedin.com/in/luca)
- **GitHub**: [github.com/luca](https://github.com/luca)

---

Built with ❤️ by Luca