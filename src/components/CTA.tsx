'use client'

import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="absolute inset-0 geo-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-dark-950/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-dark-950/10 rounded-full mb-8">
          <Phone className="w-10 h-10 text-dark-950" />
        </div>

        {/* Content */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark-950 mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-dark-950/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Let&apos;s discuss your construction needs and bring your vision to life. 
          Get a free consultation and quote today.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-950 text-white font-semibold rounded-sm hover:bg-dark-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:+94771234567"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-dark-950 text-dark-950 font-semibold rounded-sm hover:bg-dark-950/10 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            +94 77 123 4567
          </a>
        </div>
      </div>
    </section>
  )
}

