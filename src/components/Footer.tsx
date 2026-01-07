'use client'

import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#reviews', label: 'Reviews' },
]

const services = [
  'Pre-Construction Services',
  'General Contracting',
  'Construction Management',
  'Residential Construction',
  'Commercial Construction',
  'Renovations & Remodeling',
]

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800/50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
      <div className="orb orb-gold w-[400px] h-[400px] -bottom-48 -left-48 opacity-50"></div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 overflow-hidden">
                <Image
                  src="/images/logo/graventa01.png"
                  alt="Graventa Constructions Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-white tracking-wide">GRAVENTA</span>
                <span className="text-[10px] tracking-[0.3em] text-primary-500 uppercase">Constructions</span>
              </div>
            </a>
            <p className="text-dark-400 leading-relaxed mb-6">
              Building excellence since 2015. We deliver high-quality construction and maintenance solutions that exceed expectations.The company is duly registered in Sri Lanka under 
              Company Registration No: PV 00346807.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-dark-800/60 rounded-xl flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-dark-950 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-dark-400 hover:text-primary-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="text-primary-500/50 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500 rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, '#services')}
                    className="text-dark-400 hover:text-primary-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="text-primary-500/50 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500 rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <a 
                  href="https://maps.app.goo.gl/qTCEVCFuxDR5mxPTA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800/60 rounded-xl flex items-center justify-center flex-shrink-0 hover:bg-primary-500 hover:text-dark-950 transition-all duration-300 group"
                >
                  <MapPin size={18} className="text-primary-500 group-hover:text-dark-950" />
                </a>
                <a 
                  href="https://maps.app.goo.gl/qTCEVCFuxDR5mxPTA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-400 text-sm hover:text-primary-500 transition-colors"
                >
                  No. 25, Galle Road,<br />
                  Colombo, Sri Lanka
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dark-800/60 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary-500" />
                </div>
                <a href="tel:+94771234567" className="text-dark-400 text-sm hover:text-primary-500 transition-colors">
                  +94 72 871 5398
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dark-800/60 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary-500" />
                </div>
                <a href="mailto:graventaconstruction@gmail.com" className="text-dark-400 text-sm hover:text-primary-500 transition-colors">
                  graventaconstruction@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dark-800/60 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-primary-500" />
                </div>
                <span className="text-dark-400 text-sm">Mon - Fri: 8AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} Graventa Constructions (Pvt) Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-dark-500">
            <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
