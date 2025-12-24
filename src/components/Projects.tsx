'use client'

import { MapPin, Calendar, Building2, Home, ShoppingBag, Hotel } from 'lucide-react'

const projects = [
  {
    title: 'Ocean View Residences',
    category: 'Residential',
    location: 'Colombo 03',
    year: '2024',
    description: 'Luxury apartment complex with modern amenities and ocean views.',
    icon: Home,
  },
  {
    title: 'Tech Park Office Complex',
    category: 'Commercial',
    location: 'Malabe',
    year: '2023',
    description: 'State-of-the-art office space for technology companies.',
    icon: Building2,
  },
  {
    title: 'Grand Plaza Shopping Mall',
    category: 'Retail',
    location: 'Kandy',
    year: '2023',
    description: 'Multi-level shopping destination with premium retail spaces.',
    icon: ShoppingBag,
  },
  {
    title: 'Heritage Hotel Renovation',
    category: 'Hospitality',
    location: 'Galle',
    year: '2022',
    description: 'Historical building restoration and modern hospitality upgrade.',
    icon: Hotel,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute inset-0 geo-pattern opacity-20"></div>
        <div className="orb orb-gold w-[500px] h-[500px] top-1/2 -right-48"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-3 justify-center mb-6">
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
            <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Our Portfolio</span>
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto leading-relaxed">
            Explore our diverse portfolio of successfully completed construction projects across Sri Lanka.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="reveal group card overflow-hidden hover-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Image area */}
              <div className="aspect-[16/10] bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden rounded-xl mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-24 h-24 text-primary-500/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-4 py-1.5 bg-primary-500 text-dark-950 text-xs font-semibold rounded-full">
                  {project.category}
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary-500/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary-500/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="px-2">
                <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-dark-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary-500" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary-500" />
                    {project.year}
                  </div>
                </div>

                <p className="text-dark-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
