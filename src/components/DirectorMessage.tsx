'use client'

import { Quote } from 'lucide-react'

export default function DirectorMessage() {
  return (
    <section className="relative py-12 lg:py-14 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 geo-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-3 justify-center mb-6">
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
            <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Leadership</span>
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Message from the <span className="text-gradient-gold">Director</span>
          </h2>
        </div>

        {/* Quote Card */}
        <div className="reveal card p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-500/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <Quote className="absolute top-6 left-6 w-16 h-16 text-primary-500/10" />
          
          <div className="relative z-10">
            <blockquote className="text-xl md:text-2xl text-dark-200 leading-relaxed italic text-center mb-10">
              &ldquo;At Graventa Constructions, we believe construction is not just about building structures – 
              it&apos;s about creating lasting value. Over the past decade, we have built more than projects; 
              we have built trust and reliability among our clients. Our success lies in our dedication to 
              quality, timely delivery, and innovative solutions tailored to client needs. As we look ahead, 
              our focus remains on driving excellence in every project and contributing positively to the 
              communities we serve.&rdquo;
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-full flex items-center justify-center mb-4 border-2 border-primary-500/30 animate-pulse-glow">
                <span className="text-3xl font-display font-bold text-gradient-gold">D</span>
              </div>
              <div className="text-white font-semibold text-lg">Director</div>
              <div className="text-primary-500 text-sm">Graventa Constructions (Pvt) Ltd</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

