'use client'

import { Quote, Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    text: "We are very satisfied with the service provided. The project was completed on time with good quality. The team was professional and easy to work with.",
    rating: 5,
    highlight: "Completed on time with good quality",
  },
  {
    id: 2,
    text: "The team kept us informed at every stage of the project. All our concerns were addressed promptly, which gave us great peace of mind.",
    rating: 5,
    highlight: "Great communication",
  },
  {
    id: 3,
    text: "Good quality work at a reasonable cost.",
    rating: 5,
    highlight: "Value for money",
  },
  {
    id: 4,
    text: "Very transparent and honest in their dealings. Costs and timelines were clearly explained from the beginning.",
    rating: 5,
    highlight: "Transparent & honest",
  },
  {
    id: 5,
    text: "Professional team with timely delivery.",
    rating: 5,
    highlight: "Professional service",
  },
  {
    id: 6,
    text: "The finishing was neat and well done. Good quality materials.",
    rating: 5,
    highlight: "Quality finishing",
  },
  {
    id: 7,
    text: "Happy with the final result.",
    rating: 5,
    highlight: "Satisfied customer",
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-12 lg:py-14 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 geo-pattern opacity-10"></div>
        <div className="orb orb-gold w-[400px] h-[400px] -top-48 -left-48 opacity-30"></div>
        <div className="orb orb-gold w-[300px] h-[300px] bottom-0 right-0 opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-3 justify-center mb-6">
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
            <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Testimonials</span>
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className="text-gradient-gold">Reviews</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto leading-relaxed">
            What our valued clients say about working with Graventa Constructions.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`reveal card p-6 hover-card group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center border border-primary-500/20">
                  <Quote size={18} className="text-primary-500" />
                </div>
                
                {/* Star Rating */}
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-primary-500 fill-primary-500"
                    />
                  ))}
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full mb-4 border border-primary-500/20">
                {review.highlight}
              </div>

              {/* Review Text */}
              <p className="text-dark-300 leading-relaxed text-sm group-hover:text-dark-200 transition-colors">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Decorative line */}
              <div className="mt-4 pt-4 border-t border-dark-800/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
                  <span className="text-dark-500 text-xs">Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 reveal">
          <div className="card p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-display font-bold text-gradient-gold mb-1">100%</div>
                <div className="text-dark-400 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gradient-gold mb-1">150+</div>
                <div className="text-dark-400 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gradient-gold mb-1">50+</div>
                <div className="text-dark-400 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gradient-gold mb-1">10+</div>
                <div className="text-dark-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

