'use client'

import { 
  FileSearch, 
  HardHat, 
  ClipboardCheck, 
  Home,
  Building2,
  Factory,
  PaintBucket,
  Wrench,
  BarChart3
} from 'lucide-react'

const services = [
  {
    icon: FileSearch,
    title: 'Pre-Construction Services',
    description: 'Feasibility studies, site analysis, budget planning, and design coordination.',
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    description: 'Full project execution with skilled workforce and quality materials.',
  },
  {
    icon: ClipboardCheck,
    title: 'Construction Management',
    description: 'Planning, monitoring timelines, and coordinating stakeholders.',
  },
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Luxury homes, apartments, renovations, and extensions.',
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Office buildings, retail outlets, and hospitality projects.',
  },
  {
    icon: Factory,
    title: 'Industrial Projects',
    description: 'Warehouses, factories, and large-scale infrastructure.',
  },
  {
    icon: PaintBucket,
    title: 'Renovations & Remodeling',
    description: 'Complete remodeling, interior and exterior upgrades.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Services',
    description: 'Routine inspections, repairs, and facility management.',
  },
  {
    icon: BarChart3,
    title: 'Project Management',
    description: 'End-to-end planning, cost management, and quality assurance.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 geo-pattern opacity-20"></div>
        <div className="orb orb-gold w-[600px] h-[600px] bottom-0 left-1/4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-3 justify-center mb-6">
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
            <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">What We Build</span>
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive construction services 
            tailored to meet your unique project requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal group card hover-card"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-5 bg-primary-500/10 border border-primary-500/20 rounded-2xl group-hover:bg-primary-500/20 group-hover:border-primary-500/40 group-hover:scale-110 transition-all duration-500">
                <service.icon className="w-8 h-8 text-primary-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-dark-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
