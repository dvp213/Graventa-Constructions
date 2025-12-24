'use client'

import { CheckCircle2, Target, Eye } from 'lucide-react'

const highlights = [
  'Modern Engineering Practices',
  'International Quality Standards',
  'Cost-Effective & Sustainable',
  'Transparent Communication',
  'Skilled Workforce & Technology',
  'Long-term Partnerships',
]

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute inset-0 geo-pattern opacity-20"></div>
        <div className="orb orb-gold w-[500px] h-[500px] top-1/3 -right-48"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-3 justify-center mb-6">
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
            <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">About Graventa</span>
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Building Trust Through{' '}
            <span className="text-gradient-gold">Quality</span> &{' '}
            <span className="text-gradient-gold">Innovation</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="reveal">
            <div className="relative">
              {/* Main card */}
              <div className="relative aspect-[4/3] bg-dark-900/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-dark-700/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900"></div>
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
                      <rect x="50" y="100" width="80" height="200" fill="#d4a012" opacity="0.3" />
                      <rect x="150" y="50" width="100" height="250" fill="#d4a012" opacity="0.4" />
                      <rect x="270" y="120" width="80" height="180" fill="#d4a012" opacity="0.3" />
                      <line x1="200" y1="50" x2="200" y2="0" stroke="#d4a012" strokeWidth="4" />
                      <line x1="200" y1="0" x2="320" y2="0" stroke="#d4a012" strokeWidth="3" />
                      <line x1="320" y1="0" x2="320" y2="40" stroke="#d4a012" strokeWidth="2" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark-950 via-dark-950/90 to-transparent">
                  <div className="font-display text-4xl font-bold text-gradient-gold">Since 2015</div>
                  <div className="text-dark-300 text-lg">Building Sri Lanka&apos;s Future</div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 card p-6 shadow-2xl hover-card">
                <div className="text-4xl font-display font-bold text-gradient-gold">10+</div>
                <div className="text-dark-300 text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="reveal space-y-4 text-dark-300 leading-relaxed">
              <p>
                <strong className="text-white">Graventa Constructions (Pvt) Ltd</strong> is a trusted name 
                in the construction industry with over 10 years of proven experience in delivering high-quality 
                construction and maintenance solutions. We have successfully completed numerous projects across 
                residential, commercial, and industrial sectors.
              </p>
              <p>
                Our strength lies in combining modern engineering practices with practical expertise, enabling 
                us to deliver projects that meet international standards while being cost-effective and sustainable. 
                At Graventa, we believe that every project is more than just brick and mortar – 
                it is about building trust, value, and long-term partnerships.
              </p>
            </div>

            {/* Highlights */}
            <div className="reveal grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={item} 
                  className="flex items-center gap-3 p-3 bg-dark-800/40 rounded-xl border border-dark-700/30 hover:border-primary-500/30 transition-all duration-300"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-dark-200 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Vision & Mission Cards */}
            <div className="reveal grid md:grid-cols-2 gap-4">
              <div className="card p-5 hover-card">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4 border border-primary-500/20">
                  <Eye className="w-6 h-6 text-primary-500" />
                </div>
                <h4 className="text-white font-semibold mb-2">Our Vision</h4>
                <p className="text-dark-400 text-sm italic">
                  &ldquo;To be a leading construction partner that transforms spaces into enduring landmarks.&rdquo;
                </p>
              </div>
              <div className="card p-5 hover-card">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4 border border-primary-500/20">
                  <Target className="w-6 h-6 text-primary-500" />
                </div>
                <h4 className="text-white font-semibold mb-2">Our Mission</h4>
                <p className="text-dark-400 text-sm">
                  Delivering solutions that exceed expectations with safety, quality, and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
