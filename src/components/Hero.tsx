import { Github, Linkedin, Mail, Twitter, Instagram, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Hi, I'm Ilham Farobi
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 text-balance">
            Software Engineer & Independent Developer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            I build full-stack applications with React and Node.js. Currently Frontend Lead at 
            KangarooHealth, working on healthcare solutions. Also working on side projects 
            and available for freelance opportunities.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="mailto:ilhamfarobi@gmail.com" 
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://github.com/ifarobi" 
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ifarobi/" 
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://twitter.com/IFarobi" 
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a 
            href="https://instagram.com/ifarobi" 
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>

        <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          <Mail size={18} />
          <a href="mailto:ilhamfarobi@gmail.com">Available for freelance work</a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-gray-400" />
      </div>
    </section>
  )
}

export default Hero