'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Building2, Hammer, Award, ArrowRight } from 'lucide-react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-start overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute inset-0 geo-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-950/90 to-dark-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/50"></div>
        
        {/* Animated orbs */}
        <div className="orb orb-gold w-[600px] h-[600px] top-1/4 -right-1/4 animate-pulse"></div>
        <div className="orb orb-gold w-[400px] h-[400px] bottom-1/4 -left-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500/30 to-transparent"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"></div>
        </div>
        
        {/* Rotating rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[500px] h-[500px] border border-primary-500/10 rounded-full animate-rotate-slow"></div>
          <div className="absolute inset-0 w-[400px] h-[400px] m-auto border border-primary-500/5 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-4 pb-20 lg:pt-6 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-3 px-5 py-2.5 bg-dark-800/60 backdrop-blur-sm border border-primary-500/20 rounded-full ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.1s' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-sm text-primary-400 font-medium">10+ Years of Excellence</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 
                className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.2s' }}
              >
                Transforming Spaces Into{' '}
                <span className="text-gradient-gold">Enduring</span>{' '}
                <span className="relative inline-block">
                  Landmarks
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                    <path d="M0 7 Q50 0, 100 4 T200 3" stroke="#d4a012" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p 
              className={`text-lg text-dark-300 max-w-xl leading-relaxed ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              Expert solutions for buildings, renovations, and innovative construction ideas. 
              Delivering high-quality construction across residential, commercial, and industrial 
              sectors in Sri Lanka.
            </p>

            {/* CTAs */}
            <div 
              className={`flex flex-wrap gap-4 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="btn-primary flex items-center gap-2 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="btn-outline"
              >
                View Our Projects
              </a>
            </div>

            {/* Stats */}
            <div 
              className={`flex gap-8 pt-8 border-t border-dark-800/50 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.5s' }}
            >
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '150+', label: 'Projects Done' },
                { value: '50+', label: 'Happy Clients' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-display font-bold text-gradient-gold">{stat.value}</div>
                  <div className="text-sm text-dark-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className={`hidden lg:block relative ${isLoaded ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="relative w-full h-[600px]">
              {/* Floating cards */}
              <div className="absolute top-0 right-0 w-72 card p-6 animate-float hover-card" style={{ animationDelay: '0s' }}>
                <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center mb-4 border border-primary-500/20">
                  <Building2 className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Commercial Projects</h3>
                <p className="text-sm text-dark-400">Modern office spaces and retail developments</p>
              </div>
              
              <div className="absolute top-1/3 left-0 w-72 card p-6 animate-float hover-card" style={{ animationDelay: '2s' }}>
                <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center mb-4 border border-primary-500/20">
                  <Hammer className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Renovations</h3>
                <p className="text-sm text-dark-400">Transform your space with expert craftsmanship</p>
              </div>
              
              <div className="absolute bottom-0 right-12 w-72 card p-6 animate-float hover-card" style={{ animationDelay: '4s' }}>
                <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center mb-4 border border-primary-500/20">
                  <Award className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Quality Assured</h3>
                <p className="text-sm text-dark-400">Industry-leading standards and certifications</p>
              </div>

              {/* Background circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-primary-500/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-primary-500/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#stats" 
        onClick={(e) => scrollToSection(e, '#stats')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-xs text-dark-500 uppercase tracking-widest group-hover:text-primary-500 transition-colors">Scroll</span>
        <ChevronDown className="w-6 h-6 text-primary-500 animate-bounce" />
      </a>
    </section>
  )
}
