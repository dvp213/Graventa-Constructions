'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Team from '@/components/Team'
import DirectorMessage from '@/components/DirectorMessage'
import Contact from '@/components/Contact'
import CTA from '@/components/CTA'

export default function Home() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <DirectorMessage />
      <Team />
      <Contact />
      <CTA />
    </>
  )
}
