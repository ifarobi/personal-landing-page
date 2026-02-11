import { Code2, Coffee, Server, Smartphone } from 'lucide-react'

const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm a software engineer based in Jakarta, Indonesia, with a passion for building 
              things that matter. I love solving complex problems with simple, elegant solutions.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              When I'm not coding, I'm probably tinkering with my home server setup, exploring 
              new tech stacks, or working on side projects. I believe in continuous learning 
              and real research over assumptions.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently leading frontend development for healthcare solutions, but always open 
              to interesting projects and collaborations. Let's build something great together!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <Code2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
              <p className="text-gray-600 text-sm">React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <Server className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
              <p className="text-gray-600 text-sm">Node.js, Express, Prisma, PostgreSQL</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <Smartphone className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Tools</h3>
              <p className="text-gray-600 text-sm">Docker, Git, Linux, Cloud Services</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <Coffee className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Interests</h3>
              <p className="text-gray-600 text-sm">Home labs, Open source, Gaming, Memes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About