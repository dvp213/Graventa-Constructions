'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormState({ name: '', email: '', phone: '', subject: '', message: '' })
      
      // Reset to idle after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative py-12 lg:py-14 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 geo-pattern opacity-20"></div>
        <div className="orb orb-gold w-[500px] h-[500px] top-1/3 -right-48"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-3 justify-center mb-6">
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
            <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Get In Touch</span>
            <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto leading-relaxed">
            Ready to start your project? Get in touch with our team for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="reveal space-y-6">
            <h3 className="font-display text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Office', value: '561/A, Madhiwela Road,\nThalawathugoda, Sri Lanka', href: 'https://maps.app.goo.gl/qTCEVCFuxDR5mxPTA', external: true },
                { icon: Phone, label: 'Phone', value: '+94 72 871 5398', href: 'tel:+94728715398' },
                { icon: Mail, label: 'Email', value: 'graventaconstruction@gmail.com', href: 'mailto:graventaconstruction@gmail.com' },
                { icon: Clock, label: 'Hours', value: 'Mon - Fri: 8AM - 6PM' },
              ].map((item, i) => (
                <div key={i} className="card p-4 flex items-start gap-4 hover-card">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center border border-primary-500/20">
                    <item.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">{item.label}</div>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="text-dark-400 text-sm hover:text-primary-400 whitespace-pre-line transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-dark-400 text-sm whitespace-pre-line">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 reveal">
            <div className="card p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 animate-scale-in">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-dark-400">Thank you for contacting us. We&apos;ll get back to you shortly.</p>
                  <p className="text-dark-500 text-sm mt-2">A confirmation email has been sent to your inbox.</p>
                </div>
              ) : status === 'error' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6 animate-scale-in">
                    <AlertCircle className="w-10 h-10 text-red-500" />
                  </div>
                  <h4 className="text-2xl font-semibold text-white mb-2">Failed to Send</h4>
                  <p className="text-dark-400">{errorMessage}</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2 bg-dark-800 text-white rounded-full hover:bg-dark-700 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-200 mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3.5 bg-dark-800/60 border border-dark-700/50 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-200 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3.5 bg-dark-800/60 border border-dark-700/50 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-200 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3.5 bg-dark-800/60 border border-dark-700/50 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="+94 72 871 5398"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-200 mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3.5 bg-dark-800/60 border border-dark-700/50 rounded-xl text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">Select subject</option>
                        <option value="quote">Request Quote</option>
                        <option value="commercial">Commercial Project</option>
                        <option value="residential">Residential Project</option>
                        <option value="renovation">Renovation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-200 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      rows={5}
                      className="w-full px-4 py-3.5 bg-dark-800/60 border border-dark-700/50 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary flex items-center gap-2 w-full md:w-auto justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
