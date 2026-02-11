import { Calendar, MapPin, Building2 } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Lead",
      company: "KangarooHealth",
      location: "Remote",
      period: "2024 - Present",
      description: "Leading frontend development for remote patient monitoring solutions. Building healthcare dashboards with Next.js, MUI, and modern React patterns. Working with hospitals to improve patient care through technology.",
      skills: ["Next.js", "React", "TypeScript", "MUI", "Sentry", "Storybook"]
    },
    {
      title: "Fullstack Engineer", 
      company: "Late Checkout Studio",
      location: "Remote",
      period: "2021 - 2024",
      description: "Worked on projects for Fortune 500 companies and startups across e-commerce, Web3, and custom client solutions. Built full-stack applications with modern web technologies.",
      skills: ["React", "Node.js", "Express", "Next.js", "JavaScript", "TypeScript"]
    }
  ]

  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-gray-200"></div>
              )}
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-blue-600 font-medium mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col md:items-end gap-1">
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience