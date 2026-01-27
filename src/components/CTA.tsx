'use client'

import { Phone, ArrowRight } from 'lucide-react'

export default function CTA() {
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
    <section className="relative py-10 lg:py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="absolute inset-0 geo-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-dark-950/20 rounded-full blur-3xl"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[500px] h-[500px] border border-white/10 rounded-full"></div>
          <div className="absolute inset-0 w-[400px] h-[400px] m-auto border border-white/5 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="reveal inline-flex items-center justify-center w-20 h-20 bg-dark-950/20 rounded-full mb-8 backdrop-blur-sm border border-white/10">
          <Phone className="w-10 h-10 text-dark-950" />
        </div>

        {/* Content */}
        <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark-950 mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="reveal text-dark-950/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Let&apos;s discuss your construction needs and bring your vision to life. 
          Get a free consultation and quote today.
        </p>

        {/* CTAs */}
        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-950 text-white font-semibold rounded-full hover:bg-dark-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+94728715398"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-dark-950/40 text-dark-950 font-semibold rounded-full hover:bg-dark-950/10 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            +94 72 871 5398
          </a>
        </div>
      </div>
    </section>
  )
}
