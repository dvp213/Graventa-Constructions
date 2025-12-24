'use client'

import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: 'Eranga Dias',
    role: 'Manager - Costing & Quality Assurance',
    qualifications: 'BSc. (Hons) Quantity Surveying & Construction Management',
    image: null,
    initials: 'ED',
  },
  {
    name: 'Sarah Hedwige',
    role: 'Head of Project Sales',
    qualifications: 'Bachelor of Business (Marketing) - RMIT University, Australia',
    image: null,
    initials: 'SH',
  },
  {
    name: 'Chamara Prageeth',
    role: 'Lead Engineer',
    qualifications: 'B.Sc Eng (Hons), M.Sc/PG Dip. Structural Design, MIESL - Chartered Engineer',
    image: null,
    initials: 'CP',
  },
  {
    name: 'Kavinda Senarathne',
    role: 'Director - Business Development',
    qualifications: 'BA (Hons) International Business Management - University of Staffordshire UK',
    image: null,
    initials: 'KS',
  },
]

export default function Team() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="team">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 geo-pattern opacity-30"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 justify-center mb-6">
            <span className="w-12 h-0.5 bg-primary-500"></span>
            <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Meet The Experts</span>
            <span className="w-12 h-0.5 bg-primary-500"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient-gold">Team</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto leading-relaxed">
            Our team of experienced professionals brings diverse expertise and 
            a shared commitment to excellence in every project we undertake.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-6 w-40 h-40">
                {/* Background ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Avatar container */}
                <div className="relative w-full h-full bg-dark-800 border-2 border-dark-700 group-hover:border-primary-500/50 rounded-full overflow-hidden transition-all duration-500">
                  {/* Initials fallback */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-800 to-dark-900">
                    <span className="text-4xl font-display font-bold text-gradient-gold">
                      {member.initials}
                    </span>
                  </div>
                </div>

                {/* Social links overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="w-10 h-10 bg-dark-950/90 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-dark-950 transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-dark-950/90 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-dark-950 transition-all"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-lg font-display font-semibold text-white group-hover:text-primary-400 transition-colors">
                {member.name}
              </h3>
              <div className="text-primary-500 text-sm font-medium mt-1 mb-3">
                {member.role}
              </div>
              <p className="text-dark-400 text-xs leading-relaxed px-4">
                {member.qualifications}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

