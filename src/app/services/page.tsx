import Link from 'next/link'
import { 
  FileSearch, 
  HardHat, 
  Layers, 
  ClipboardCheck, 
  Building, 
  PaintBucket,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import CTA from '@/components/CTA'

const services = [
  {
    icon: FileSearch,
    title: 'Pre-Construction Services',
    description: 'Comprehensive planning and analysis before breaking ground to ensure project success.',
    features: [
      'Project feasibility studies',
      'Site selection and evaluation',
      'Budget estimation and cost analysis',
      'Value engineering',
      'Scheduling and timeline development',
      'Permit acquisition assistance',
    ],
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    description: 'Full-service construction management from start to finish with quality assurance.',
    features: [
      'Full project management and execution',
      'Procurement of materials and subcontractors',
      'On-site supervision and quality control',
      'Coordination with architects and engineers',
      'Progress reporting and documentation',
      'Final inspection and handover',
    ],
  },
  {
    icon: Layers,
    title: 'Design-Build Services',
    description: 'Integrated approach combining design and construction for streamlined delivery.',
    features: [
      'Integrated project delivery',
      'Single-point responsibility',
      'Cost-effective solutions',
      'Streamlined timelines',
      'Reduced communication gaps',
      'Collaborative design process',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Construction Management',
    description: 'Professional oversight ensuring your project meets all objectives and standards.',
    features: [
      'Owner representation and oversight',
      'Risk assessment and mitigation',
      'Budget and schedule monitoring',
      'Quality control and safety enforcement',
      'Vendor and contractor management',
      'Change order management',
    ],
  },
  {
    icon: Building,
    title: 'Structural & Civil Construction',
    description: 'Expert structural work forming the backbone of any construction project.',
    features: [
      'Foundation and structural work',
      'Concrete and steel construction',
      'Roadways and bridges',
      'Infrastructure development',
      'Retaining walls and drainage',
      'Site preparation and earthworks',
    ],
  },
  {
    icon: PaintBucket,
    title: 'Interior Fit-Out & Renovations',
    description: 'Transform existing spaces into functional and aesthetically pleasing environments.',
    features: [
      'Office and retail space renovations',
      'Commercial interior fit-outs',
      'Tenant improvements and modifications',
      'Space planning and optimization',
      'MEP coordination',
      'Finishing and detailing',
    ],
  },
]

const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We begin with understanding your vision, requirements, and budget to create a tailored approach.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Detailed planning phase including designs, permits, schedules, and resource allocation.',
  },
  {
    step: '03',
    title: 'Construction',
    description: 'Expert execution with regular updates, quality checks, and adherence to timelines.',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Final inspections, handover documentation, and post-completion support.',
  },
]

export default function ServicesPage() {
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
            <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Our Services</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive <span className="text-gradient-gold">Construction</span> Solutions
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl leading-relaxed">
            From concept to completion, we offer a full range of construction services 
            tailored to meet your unique project requirements.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/10 border border-primary-500/20 rounded-sm mb-6">
                    <service.icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-dark-300 leading-relaxed mb-6">{service.description}</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-dark-200 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] bg-dark-800 rounded-sm border border-dark-700 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-primary-500/10" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-2xl font-display font-bold text-white">{service.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 justify-center mb-6">
              <span className="w-12 h-0.5 bg-primary-500"></span>
              <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Our Process</span>
              <span className="w-12 h-0.5 bg-primary-500"></span>
            </div>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              How We <span className="text-gradient-gold">Work</span>
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Our streamlined process ensures your project is delivered on time, 
              within budget, and to the highest quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary-500/50 to-transparent"></div>
                )}
                
                <div className="card p-6 h-full">
                  <div className="text-5xl font-display font-bold text-gradient-gold mb-4">{item.step}</div>
                  <h3 className="text-xl font-display font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 justify-center mb-6">
              <span className="w-12 h-0.5 bg-primary-500"></span>
              <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Industries We Serve</span>
              <span className="w-12 h-0.5 bg-primary-500"></span>
            </div>
            <h2 className="font-display text-4xl font-bold text-white">
              Diverse <span className="text-gradient-gold">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Commercial', 'Residential', 'Industrial', 'Hospitality', 'Healthcare', 'Education'].map((industry) => (
              <div key={industry} className="card p-6 text-center hover:border-primary-500/30 transition-colors">
                <div className="font-medium text-white">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  )
}

