'use client'

import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const highlights = [
  'Quality Craftsmanship & Materials',
  'Sustainable Building Practices',
  'On-Time Project Delivery',
  'Transparent Communication',
  'Expert Project Management',
  'Client-Centric Approach',
]

export default function About() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="about">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute inset-0 geo-pattern opacity-20"></div>
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            {/* Main visual container */}
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/10 to-transparent rounded-sm"></div>
              
              {/* Image placeholder with geometric design */}
              <div className="relative aspect-[4/3] bg-dark-900 rounded-sm overflow-hidden border border-dark-800">
                {/* Geometric pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Construction imagery placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900"></div>
                    
                    {/* Overlay pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
                      {/* Building silhouette */}
                      <rect x="50" y="100" width="80" height="200" fill="#d4a012" opacity="0.3" />
                      <rect x="150" y="50" width="100" height="250" fill="#d4a012" opacity="0.4" />
                      <rect x="270" y="120" width="80" height="180" fill="#d4a012" opacity="0.3" />
                      {/* Crane */}
                      <line x1="200" y1="50" x2="200" y2="0" stroke="#d4a012" strokeWidth="4" />
                      <line x1="200" y1="0" x2="320" y2="0" stroke="#d4a012" strokeWidth="3" />
                      <line x1="320" y1="0" x2="320" y2="40" stroke="#d4a012" strokeWidth="2" />
                    </svg>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent">
                  <div className="font-display text-3xl font-bold text-gradient-gold">Since 2015</div>
                  <div className="text-dark-300">Building Sri Lanka&apos;s Future</div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-8 -right-8 bg-dark-900 border border-primary-500/20 rounded-sm p-6 shadow-xl">
                <div className="text-4xl font-display font-bold text-gradient-gold">10+</div>
                <div className="text-dark-300 text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            {/* Section label */}
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-0.5 bg-primary-500"></span>
              <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">About Graventa</span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Building Trust Through{' '}
              <span className="text-gradient-gold">Quality</span> &{' '}
              <span className="text-gradient-gold">Innovation</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-dark-300 leading-relaxed">
              <p>
                Founded in 2015, <strong className="text-white">Graventa Constructions</strong> has grown 
                into a trusted name in the construction industry, bringing leading expertise to Sri Lanka. 
                With a strong foundation built on excellence, integrity, and innovation, we specialize in 
                delivering high-quality commercial and residential construction projects that exceed industry standards.
              </p>
              <p>
                Our commitment to quality craftsmanship, sustainable practices, and client satisfaction 
                has positioned us highly in the sector. From modern commercial developments to elegant 
                residential spaces, we take pride in every project, ensuring durability, functionality, 
                and aesthetic appeal.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-dark-200 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-400 transition-colors group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

