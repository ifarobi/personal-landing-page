import { Mail, MessageSquare, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Work Together
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 text-balance">
          I'm always interested in new opportunities and exciting projects. 
          Whether you need a full-stack solution, frontend expertise, or technical consulting, 
          let's discuss how we can bring your ideas to life.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Me</h3>
            <p className="text-gray-300 mb-3">Quick response guaranteed</p>
            <a 
              href="mailto:ilhamfarobi@gmail.com" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ilhamfarobi@gmail.com
            </a>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Let's Chat</h3>
            <p className="text-gray-300 mb-3">Free consultation call</p>
            <a 
              href="mailto:ilhamfarobi@gmail.com?subject=Consultation%20Request" 
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Schedule a call
            </a>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Availability</h3>
            <p className="text-gray-300 mb-3">GMT+7 (Jakarta Time)</p>
            <span className="text-purple-400">Usually responds in 24h</span>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-12">
          <p className="text-gray-400 mb-6">
            Currently accepting freelance projects • Full-stack development • 
            Frontend leadership • Technical consulting
          </p>
          
          <a 
            href="mailto:ilhamfarobi@gmail.com?subject=Project%20Inquiry"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            <Mail size={20} />
            Start a project
          </a>
          
          <p className="text-gray-500 mt-8 text-sm">
            © 2026 Ilham Farobi. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact