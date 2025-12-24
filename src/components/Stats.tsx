'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, Users, FolderCheck, Award } from 'lucide-react'

const stats = [
  {
    icon: Calendar,
    value: 10,
    suffix: '+',
    label: 'Years of Experience',
    description: 'A decade of construction excellence',
  },
  {
    icon: Users,
    value: 50,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Trusted partnerships across Sri Lanka',
  },
  {
    icon: FolderCheck,
    value: 150,
    suffix: '+',
    label: 'Projects Complete',
    description: 'Successfully delivered on time',
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'Quality Assured',
    description: 'Commitment to excellence',
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-display font-bold text-gradient-gold">
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 geo-pattern opacity-30"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
        <div className="orb orb-gold w-[400px] h-[400px] -top-48 left-1/4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="reveal text-center group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-dark-800/60 backdrop-blur-sm border border-primary-500/20 rounded-2xl group-hover:border-primary-500/50 group-hover:bg-dark-800 transition-all duration-500 group-hover:scale-110">
                <stat.icon className="w-9 h-9 text-primary-500" />
              </div>

              {/* Number */}
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />

              {/* Label */}
              <div className="mt-3 text-white font-semibold text-lg">{stat.label}</div>

              {/* Description */}
              <div className="mt-1 text-dark-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
