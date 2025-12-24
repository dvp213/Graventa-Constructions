import { CheckCircle2, Target, Eye, Heart, Users, Award, Briefcase } from 'lucide-react'
import CTA from '@/components/CTA'
import Team from '@/components/Team'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project, ensuring the highest quality standards in construction.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Honesty and transparency form the foundation of all our business relationships.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients, architects, and engineers to achieve shared goals.',
  },
  {
    icon: Eye,
    title: 'Innovation',
    description: 'Embracing new technologies and methods to deliver better construction solutions.',
  },
]

const milestones = [
  { year: '2015', event: 'Company Founded', description: 'Graventa Constructions established in Colombo' },
  { year: '2017', event: 'First Major Project', description: 'Completed our first commercial building project' },
  { year: '2019', event: '50 Projects Milestone', description: 'Successfully delivered 50 construction projects' },
  { year: '2021', event: 'Team Expansion', description: 'Grew to over 100 skilled professionals' },
  { year: '2023', event: '100 Projects Complete', description: 'Reached milestone of 100 completed projects' },
  { year: '2024', event: 'Industry Recognition', description: 'Received excellence award in construction' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 geo-pattern opacity-30"></div>
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-0.5 bg-primary-500"></span>
            <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">About Us</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Building <span className="text-gradient-gold">Sri Lanka&apos;s</span> Future
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl leading-relaxed">
            Since 2015, Graventa Constructions has been at the forefront of Sri Lanka&apos;s 
            construction industry, delivering exceptional quality and innovative solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-12 h-0.5 bg-primary-500"></span>
                <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Our Story</span>
              </div>
              
              <h2 className="font-display text-4xl font-bold text-white">
                A Decade of <span className="text-gradient-gold">Construction Excellence</span>
              </h2>
              
              <div className="space-y-4 text-dark-300 leading-relaxed">
                <p>
                  Founded in 2015, Graventa Constructions has grown into a trusted name in the 
                  construction industry, bringing leading expertise to Sri Lanka. With a strong 
                  foundation built on excellence, integrity, and innovation, we specialize in 
                  delivering high-quality commercial and residential construction projects.
                </p>
                <p>
                  Our commitment to quality craftsmanship, sustainable practices, and client 
                  satisfaction has positioned us as a leader in the sector. We take pride in 
                  every project, ensuring durability, functionality, and aesthetic appeal that 
                  exceeds industry standards.
                </p>
                <p>
                  Today, we continue to expand our capabilities while maintaining the personal 
                  attention and dedication that has been our hallmark since day one.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-dark-700/50">
                <div>
                  <div className="text-3xl font-display font-bold text-gradient-gold">10+</div>
                  <div className="text-sm text-dark-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-gradient-gold">150+</div>
                  <div className="text-sm text-dark-400">Projects Complete</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-gradient-gold">50+</div>
                  <div className="text-sm text-dark-400">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square bg-dark-800 rounded-sm overflow-hidden border border-dark-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-24 h-24 text-primary-500/30 mx-auto mb-4" />
                    <div className="font-display text-6xl font-bold text-gradient-gold">10+</div>
                    <div className="text-dark-400 mt-2">Years of Excellence</div>
                  </div>
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-dark-900 border border-primary-500/20 rounded-sm p-6 shadow-xl">
                <Briefcase className="w-8 h-8 text-primary-500 mb-3" />
                <div className="text-white font-semibold">Full Service</div>
                <div className="text-sm text-dark-400">End-to-end solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-500/10 border border-primary-500/20 rounded-sm mb-6">
                <Target className="w-7 h-7 text-primary-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-dark-300 leading-relaxed">
                To deliver exceptional construction services that exceed client expectations 
                through innovative solutions, quality craftsmanship, and sustainable practices, 
                while fostering strong relationships built on trust and integrity.
              </p>
            </div>

            {/* Vision */}
            <div className="card p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-500/10 border border-primary-500/20 rounded-sm mb-6">
                <Eye className="w-7 h-7 text-primary-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-dark-300 leading-relaxed">
                To be Sri Lanka&apos;s most trusted construction partner, recognized for our 
                commitment to excellence, innovation, and sustainable development, shaping 
                the built environment for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 justify-center mb-6">
              <span className="w-12 h-0.5 bg-primary-500"></span>
              <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Our Values</span>
              <span className="w-12 h-0.5 bg-primary-500"></span>
            </div>
            <h2 className="font-display text-4xl font-bold text-white">
              What <span className="text-gradient-gold">Drives</span> Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-dark-800 border border-dark-700 rounded-full mb-6 group-hover:border-primary-500/50 transition-colors">
                  <value.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 justify-center mb-6">
              <span className="w-12 h-0.5 bg-primary-500"></span>
              <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Our Journey</span>
              <span className="w-12 h-0.5 bg-primary-500"></span>
            </div>
            <h2 className="font-display text-4xl font-bold text-white">
              Key <span className="text-gradient-gold">Milestones</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card p-6 inline-block">
                      <div className="text-2xl font-display font-bold text-gradient-gold mb-2">{milestone.year}</div>
                      <h3 className="text-white font-semibold mb-2">{milestone.event}</h3>
                      <p className="text-dark-400 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-950 hidden md:block"></div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-primary-500"></span>
                <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                The <span className="text-gradient-gold">Graventa</span> Difference
              </h2>
              <p className="text-dark-300 leading-relaxed mb-8">
                We combine industry expertise with a client-first approach to deliver 
                construction solutions that stand the test of time.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Quality craftsmanship and premium materials',
                'Transparent pricing with no hidden costs',
                'On-time project delivery guarantee',
                'Experienced team of certified professionals',
                'Sustainable and eco-friendly practices',
                'Comprehensive project management',
                'Post-completion support and warranty',
                'Strong focus on safety standards',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-dark-800/50 border border-dark-700/50 rounded-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-dark-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA */}
      <CTA />
    </>
  )
}

