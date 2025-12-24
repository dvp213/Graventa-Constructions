'use client'

import { useState } from 'react'
import { MapPin, Calendar, ArrowRight, Building2, Home, ShoppingBag, Hotel } from 'lucide-react'
import CTA from '@/components/CTA'

const categories = ['All', 'Commercial', 'Residential', 'Retail', 'Hospitality']

const projects = [
  {
    title: 'Ocean View Residences',
    category: 'Residential',
    location: 'Colombo 03',
    year: '2024',
    description: 'Luxury apartment complex featuring 120 units with modern amenities, ocean views, and sustainable design elements.',
    size: '45,000 sq ft',
    duration: '18 months',
    icon: Home,
  },
  {
    title: 'Tech Park Office Complex',
    category: 'Commercial',
    location: 'Malabe',
    year: '2023',
    description: 'State-of-the-art office complex designed for technology companies featuring smart building systems.',
    size: '80,000 sq ft',
    duration: '24 months',
    icon: Building2,
  },
  {
    title: 'Grand Plaza Shopping Mall',
    category: 'Retail',
    location: 'Kandy',
    year: '2023',
    description: 'Multi-level shopping destination with premium retail spaces, food court, and entertainment facilities.',
    size: '120,000 sq ft',
    duration: '30 months',
    icon: ShoppingBag,
  },
  {
    title: 'Heritage Hotel Renovation',
    category: 'Hospitality',
    location: 'Galle',
    year: '2022',
    description: 'Careful restoration of a colonial-era building transformed into a boutique hotel.',
    size: '25,000 sq ft',
    duration: '12 months',
    icon: Hotel,
  },
  {
    title: 'Skyline Corporate Tower',
    category: 'Commercial',
    location: 'Colombo 02',
    year: '2022',
    description: 'Premium 15-story corporate headquarters with modern facilities and LEED certification.',
    size: '150,000 sq ft',
    duration: '36 months',
    icon: Building2,
  },
  {
    title: 'Serenity Villas',
    category: 'Residential',
    location: 'Negombo',
    year: '2022',
    description: 'Exclusive gated community of 24 luxury villas with private pools and landscaped gardens.',
    size: '60,000 sq ft',
    duration: '20 months',
    icon: Home,
  },
  {
    title: 'Metro Mall Expansion',
    category: 'Retail',
    location: 'Colombo 10',
    year: '2021',
    description: 'Major expansion of existing shopping complex adding new retail and parking facilities.',
    size: '40,000 sq ft',
    duration: '14 months',
    icon: ShoppingBag,
  },
  {
    title: 'Coastal Resort & Spa',
    category: 'Hospitality',
    location: 'Bentota',
    year: '2021',
    description: 'Beachfront resort with 80 rooms, spa facilities, and multiple dining venues.',
    size: '70,000 sq ft',
    duration: '24 months',
    icon: Hotel,
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 geo-pattern opacity-30"></div>
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-0.5 bg-primary-500"></span>
            <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Our Portfolio</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="text-gradient-gold">Projects</span>
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl leading-relaxed">
            Explore our diverse portfolio of successfully completed construction projects 
            across Sri Lanka.
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-sm text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-500 text-dark-950'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="group card overflow-hidden hover-card"
              >
                {/* Image */}
                <div className="aspect-[16/10] bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-24 h-24 text-primary-500/20" />
                  </div>
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

                  {/* Details */}
                  <div className="flex gap-6 pt-4 border-t border-dark-700/50">
                    <div>
                      <div className="text-xs text-dark-500 uppercase">Size</div>
                      <div className="text-sm text-white font-medium">{project.size}</div>
                    </div>
                    <div>
                      <div className="text-xs text-dark-500 uppercase">Duration</div>
                      <div className="text-sm text-white font-medium">{project.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-display font-bold text-gradient-gold mb-2">150+</div>
              <div className="text-dark-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-gradient-gold mb-2">2M+</div>
              <div className="text-dark-400">Sq Ft Constructed</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-gradient-gold mb-2">50+</div>
              <div className="text-dark-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-gradient-gold mb-2">100%</div>
              <div className="text-dark-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  )
}

