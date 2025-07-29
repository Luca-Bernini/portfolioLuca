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
              I'm a SecDevOps student with a passion for technology and cybersecurity. I've studied 
              cloud infrastructures such as AWS, systems administration, networking, cybersecurity, 
              and programming with Python. My education has given me a comprehensive understanding 
              of secure development practices and modern infrastructure management.
            </p>
            
            <p className="text-text-secondary text-lg sm:text-xl leading-relaxed">
              Currently, I work at McDonald's while pursuing my studies, which has taught me valuable 
              skills in teamwork, customer service, and working under pressure. I'm always eager to 
              learn new technologies and apply my knowledge to real-world challenges.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-xl p-6 hover:border-accent-500 transition-colors">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Cloud & Infrastructure</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>AWS Services</li>
              <li>Cloud Architecture</li>
              <li>Infrastructure as Code</li>
              <li>System Administration</li>
            </ul>
          </div>
          
          <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-xl p-6 hover:border-accent-500 transition-colors">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Security & DevOps</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>Cybersecurity</li>
              <li>Network Security</li>
              <li>DevSecOps Practices</li>
              <li>Security Monitoring</li>
            </ul>
          </div>
          
          <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-xl p-6 hover:border-accent-500 transition-colors">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Programming & Tools</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>Python</li>
              <li>Networking Protocols</li>
              <li>Git & Version Control</li>
              <li>Linux Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection