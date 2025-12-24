import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Linkedin, Instagram } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact Us' },
]

const services = [
  'Pre-Construction Services',
  'General Contracting',
  'Design-Build Services',
  'Construction Management',
  'Structural & Civil Work',
  'Interior Fit-Out',
]

export default function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-dark-800/50">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-sm flex items-center justify-center">
                <span className="text-dark-950 font-display font-bold text-2xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-white tracking-wide">GRAVENTA</span>
                <span className="text-[10px] tracking-[0.3em] text-primary-500 uppercase">Constructions</span>
              </div>
            </Link>
            <p className="text-dark-400 leading-relaxed mb-6">
              Building excellence since 2015. We deliver high-quality commercial and residential construction projects that exceed industry standards.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-dark-800 rounded-sm flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-dark-950 transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-dark-800 rounded-sm flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-dark-950 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-dark-800 rounded-sm flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-dark-950 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-primary-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="text-primary-500/50 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-dark-400 hover:text-primary-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="text-primary-500/50 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-dark-400">
                  No. 123, Galle Road,<br />
                  Colombo 03, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <a href="tel:+94771234567" className="text-dark-400 hover:text-primary-500 transition-colors">
                  +94 77 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <a href="mailto:info@graventa.lk" className="text-dark-400 hover:text-primary-500 transition-colors">
                  info@graventa.lk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-dark-400">
                  Mon - Fri: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800/50">
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

