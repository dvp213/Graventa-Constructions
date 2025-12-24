'use client'

import Link from 'next/link'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'

const projects = [
  {
    title: 'Ocean View Residences',
    category: 'Residential',
    location: 'Colombo 03',
    year: '2024',
    description: 'Luxury apartment complex with modern amenities and stunning ocean views.',
  },
  {
    title: 'Tech Park Office Complex',
    category: 'Commercial',
    location: 'Malabe',
    year: '2023',
    description: 'State-of-the-art office space designed for tech companies and startups.',
  },
  {
    title: 'Grand Plaza Shopping Mall',
    category: 'Retail',
    location: 'Kandy',
    year: '2023',
    description: 'Multi-story shopping destination with modern retail spaces.',
  },
  {
    title: 'Heritage Hotel Renovation',
    category: 'Hospitality',
    location: 'Galle',
    year: '2022',
    description: 'Historical building restoration and modern hospitality upgrade.',
  },
]

export default function Projects() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="projects">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute inset-0 geo-pattern opacity-20"></div>
        <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-0.5 bg-primary-500"></span>
              <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Our Portfolio</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-gradient-gold">Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-400 transition-colors group mt-6 md:mt-0"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-dark-900/50 border border-dark-700/50 rounded-sm overflow-hidden hover:border-primary-500/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
                {/* Geometric pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full opacity-10" viewBox="0 0 400 250">
                    <rect x="20" y="50" width="100" height="180" fill="#d4a012" opacity="0.5" />
                    <rect x="140" y="30" width="120" height="200" fill="#d4a012" opacity="0.7" />
                    <rect x="280" y="70" width="100" height="160" fill="#d4a012" opacity="0.5" />
                  </svg>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary-500/90 text-dark-950 text-xs font-semibold rounded-sm">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-dark-400 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-primary-500" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-primary-500" />
                    {project.year}
                  </div>
                </div>

                <p className="text-dark-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium hover:text-primary-400 transition-colors group/link"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

