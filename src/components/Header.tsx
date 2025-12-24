'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark-950 border-b border-dark-800/50 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-dark-400">
            <a href="tel:+94771234567" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
              <Phone size={14} />
              <span>+94 77 123 4567</span>
            </a>
            <a href="mailto:info@graventa.lk" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
              <Mail size={14} />
              <span>info@graventa.lk</span>
            </a>
          </div>
          <div className="text-dark-500">
            Building Excellence Since 2015
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark-950/95 backdrop-blur-lg shadow-lg shadow-dark-950/50 border-b border-primary-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-sm flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  <span className="text-dark-950 font-display font-bold text-2xl">G</span>
                </div>
                <div className="absolute -inset-1 bg-primary-500/20 rounded-sm blur-sm group-hover:blur-md transition-all duration-300 -z-10"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-white tracking-wide">GRAVENTA</span>
                <span className="text-[10px] tracking-[0.3em] text-primary-500 uppercase">Constructions</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-2 text-dark-200 hover:text-white font-medium transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 group-hover:w-4/5 transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-dark-950 font-semibold rounded-sm hover:from-primary-500 hover:to-primary-400 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-0.5"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-dark-200 hover:text-primary-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-dark-950/98 backdrop-blur-xl border-b border-primary-500/10 transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-lg text-dark-200 hover:text-primary-500 transition-colors border-b border-dark-800/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center py-4 mt-4 bg-gradient-to-r from-primary-600 to-primary-500 text-dark-950 font-semibold rounded-sm"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

