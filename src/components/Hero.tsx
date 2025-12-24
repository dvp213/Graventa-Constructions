'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Building2, Hammer, Award } from 'lucide-react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 geo-pattern opacity-40"></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-950/90 to-dark-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/50"></div>
        
        {/* Accent glow */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-500/3 rounded-full blur-3xl"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500/30 to-transparent"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-primary-500/20 rounded-full"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-primary-400 font-medium">Building Excellence Since 2015</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 
                className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.2s' }}
              >
                Expert Solutions For{' '}
                <span className="text-gradient-gold">Buildings</span>,{' '}
                <span className="relative">
                  Renovations
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                    <path d="M0 7 Q50 0, 100 4 T200 3" stroke="#d4a012" strokeWidth="2" fill="none" className="animate-draw" />
                  </svg>
                </span>
                , & Innovative{' '}
                <span className="text-gradient-gold">Construction</span>
              </h1>
            </div>

            {/* Description */}
            <p 
              className={`text-lg text-dark-300 max-w-xl leading-relaxed ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              From modern commercial developments to elegant residential spaces, we deliver 
              high-quality construction projects that exceed industry standards with durability, 
              functionality, and aesthetic appeal.
            </p>

            {/* CTAs */}
            <div 
              className={`flex flex-wrap gap-4 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <Link
                href="/contact"
                className="btn-primary flex items-center gap-2 group"
              >
                Start Your Project
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="btn-outline"
              >
                View Our Projects
              </Link>
            </div>

            {/* Stats mini */}
            <div 
              className={`flex gap-8 pt-8 border-t border-dark-800/50 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.5s' }}
            >
              <div>
                <div className="text-3xl font-display font-bold text-gradient-gold">10+</div>
                <div className="text-sm text-dark-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gradient-gold">150+</div>
                <div className="text-sm text-dark-400">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gradient-gold">50+</div>
                <div className="text-sm text-dark-400">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Decorative Cards */}
          <div className={`hidden lg:block relative ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="relative w-full h-[600px]">
              {/* Floating cards */}
              <div className="absolute top-0 right-0 w-72 glass rounded-sm p-6 animate-float" style={{ animationDelay: '0s' }}>
                <Building2 className="w-10 h-10 text-primary-500 mb-4" />
                <h3 className="text-white font-semibold mb-2">Commercial Projects</h3>
                <p className="text-sm text-dark-400">Modern office spaces and retail developments</p>
              </div>
              
              <div className="absolute top-1/3 left-0 w-72 glass rounded-sm p-6 animate-float" style={{ animationDelay: '2s' }}>
                <Hammer className="w-10 h-10 text-primary-500 mb-4" />
                <h3 className="text-white font-semibold mb-2">Renovations</h3>
                <p className="text-sm text-dark-400">Transform your existing space with expert craftsmanship</p>
              </div>
              
              <div className="absolute bottom-0 right-12 w-72 glass rounded-sm p-6 animate-float" style={{ animationDelay: '4s' }}>
                <Award className="w-10 h-10 text-primary-500 mb-4" />
                <h3 className="text-white font-semibold mb-2">Quality Assured</h3>
                <p className="text-sm text-dark-400">Industry-leading standards and certifications</p>
              </div>

              {/* Background decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary-500/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-primary-500/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-primary-500/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary-500/50" />
      </div>
    </section>
  )
}

