'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#reviews', label: 'Reviews' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark-950 border-b border-dark-800/50 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-dark-400">
            <a href="tel:+94728715398" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
              <Phone size={14} className="text-primary-500" />
              <span>+94 72 871 5398</span>
            </a>
            <a href="mailto:graventaconstruction@gmail.com" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
              <Mail size={14} className="text-primary-500" />
              <span>graventaconstruction@gmail.com</span>
            </a>
          </div>
          <div className="text-dark-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Company Registration No: PV 00346807
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark-950/95 backdrop-blur-xl shadow-lg shadow-dark-950/50 border-b border-primary-500/10'
            : 'bg-dark-950/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary-500/20 overflow-hidden">
                  <Image
                    src="/images/logo/graventa01.png"
                    alt="Graventa Constructions Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute -inset-1 bg-primary-500/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300 -z-10"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-wide">GRAVENTA</span>
                <span className="text-[10px] tracking-[0.3em] text-primary-500 uppercase">Constructions</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-5 py-2 font-medium transition-all duration-300 rounded-full ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary-500'
                      : 'text-dark-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full"></span>
                  )}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-dark-950 font-semibold rounded-full hover:from-primary-500 hover:to-primary-400 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-dark-200 hover:text-primary-500 transition-colors rounded-xl hover:bg-dark-800/50 z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-dark-950/60 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[280px] bg-dark-950 border-l border-dark-800/50 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 px-6 pb-8 h-full overflow-y-auto">
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block py-4 text-lg font-medium transition-all duration-300 border-b border-dark-800/50 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-primary-500'
                    : 'text-dark-200 hover:text-primary-500'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="block w-full text-center py-4 mt-8 bg-gradient-to-r from-primary-600 to-primary-500 text-dark-950 font-semibold rounded-full"
          >
            Contact Us
          </a>
          
          {/* Mobile contact info */}
          <div className="mt-8 pt-8 border-t border-dark-800/50 space-y-4">
            <a href="tel:+94728715398" className="flex items-center gap-3 text-dark-400 hover:text-primary-500 transition-colors">
              <Phone size={18} className="text-primary-500" />
              <span>+94 72 871 5398</span>
            </a>
            <a href="mailto:graventaconstruction@gmail.com" className="flex items-center gap-3 text-dark-400 hover:text-primary-500 transition-colors">
              <Mail size={18} className="text-primary-500" />
              <span>graventaconstruction@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
