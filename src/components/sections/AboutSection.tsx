'use client'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-8">
            About Me
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-text-secondary text-lg sm:text-xl leading-relaxed mb-6">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating 
              seamless user experiences. With expertise in modern web technologies, I transform ideas 
              into elegant, performant applications that make a difference.
            </p>
            
            <p className="text-text-secondary text-lg sm:text-xl leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-xl p-6 hover:border-accent-500 transition-colors">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Frontend</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          
          <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-xl p-6 hover:border-accent-500 transition-colors">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Backend</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>Prisma</li>
              <li>API Development</li>
            </ul>
          </div>
          
          <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-xl p-6 hover:border-accent-500 transition-colors">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Tools</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>Vercel</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection