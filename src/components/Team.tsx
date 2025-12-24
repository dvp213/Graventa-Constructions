'use client'

import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: 'Eranga Dias',
    role: 'Manager - Costing & QA',
    qualifications: 'BSc. (Hons) Quantity Surveying',
    initials: 'ED',
  },
  {
    name: 'Sarah Hedwige',
    role: 'Head of Project Sales',
    qualifications: 'Bachelor of Business - RMIT',
    initials: 'SH',
  },
  {
    name: 'Chamara Prageeth',
    role: 'Lead Engineer',
    qualifications: 'B.Sc Eng, MIESL Chartered',
    initials: 'CP',
  },
  {
    name: 'Kavinda Senarathne',
    role: 'Director - Business Dev',
    qualifications: 'BA (Hons) - Staffordshire UK',
    initials: 'KS',
  },
]

export default function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute inset-0 geo-pattern opacity-20"></div>
        <div className="orb orb-gold w-[400px] h-[400px] -bottom-48 left-1/4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-3 justify-center mb-6">
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
            <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Meet The Experts</span>
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient-gold">Team</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto leading-relaxed">
            Our team of experienced professionals brings diverse expertise and 
            a shared commitment to excellence in every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="reveal text-center group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-6 w-36 h-36">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Avatar container */}
                <div className="relative w-full h-full bg-dark-800/60 backdrop-blur-sm border-2 border-dark-700 group-hover:border-primary-500/50 rounded-full overflow-hidden transition-all duration-500 flex items-center justify-center group-hover:scale-105">
                  <span className="text-4xl font-display font-bold text-gradient-gold">
                    {member.initials}
                  </span>
                </div>

                {/* Decorative dot */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-primary-500/50"></div>
              </div>

              {/* Info */}
              <h3 className="text-lg font-display font-semibold text-white group-hover:text-primary-400 transition-colors">
                {member.name}
              </h3>
              <div className="text-primary-500 text-sm font-medium mt-1 mb-2">
                {member.role}
              </div>
              <p className="text-dark-400 text-xs leading-relaxed">
                {member.qualifications}
              </p>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href="#"
                  className="w-9 h-9 bg-dark-800/60 rounded-xl flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-dark-950 transition-all duration-300"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-dark-800/60 rounded-xl flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-dark-950 transition-all duration-300"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
