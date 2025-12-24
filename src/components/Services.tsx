'use client'

import Link from 'next/link'
import { 
  FileSearch, 
  HardHat, 
  Layers, 
  ClipboardCheck, 
  Building, 
  PaintBucket,
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    icon: FileSearch,
    title: 'Pre-Construction Services',
    description: 'Project feasibility studies, site selection, budget estimation, value engineering, and timeline development.',
    features: ['Feasibility Studies', 'Site Evaluation', 'Cost Analysis', 'Value Engineering'],
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    description: 'Full project management, materials procurement, on-site supervision, and coordination with all stakeholders.',
    features: ['Project Management', 'Materials Procurement', 'Quality Control', 'Stakeholder Coordination'],
  },
  {
    icon: Layers,
    title: 'Design-Build Services',
    description: 'Integrated project delivery with single-point responsibility for efficient and streamlined construction.',
    features: ['Integrated Delivery', 'Single-Point Responsibility', 'Cost-Effective', 'Streamlined Timelines'],
  },
  {
    icon: ClipboardCheck,
    title: 'Construction Management',
    description: 'Owner representation, risk assessment, budget monitoring, and safety enforcement throughout the project.',
    features: ['Owner Representation', 'Risk Mitigation', 'Budget Monitoring', 'Safety Enforcement'],
  },
  {
    icon: Building,
    title: 'Structural & Civil Work',
    description: 'Foundation work, concrete and steel construction, roadways, bridges, and infrastructure development.',
    features: ['Foundation Work', 'Steel Construction', 'Infrastructure', 'Civil Engineering'],
  },
  {
    icon: PaintBucket,
    title: 'Interior Fit-Out & Renovations',
    description: 'Office and retail renovations, commercial interior fit-outs, and tenant improvements.',
    features: ['Office Renovations', 'Retail Spaces', 'Commercial Fit-Outs', 'Tenant Improvements'],
  },
]

export default function Services() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="services">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute inset-0 geo-pattern opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 justify-center mb-6">
            <span className="w-12 h-0.5 bg-primary-500"></span>
            <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">What We Build</span>
            <span className="w-12 h-0.5 bg-primary-500"></span>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card hover-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-primary-500/10 border border-primary-500/20 rounded-sm group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-all duration-500">
                <service.icon className="w-7 h-7 text-primary-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-dark-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium hover:text-primary-400 transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

