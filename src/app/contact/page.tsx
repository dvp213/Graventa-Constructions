'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to a backend
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

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
            <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Get In Touch</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl leading-relaxed">
            Ready to start your project? Get in touch with our team for a free consultation 
            and quote.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-dark-400 leading-relaxed">
                  Reach out to us through any of the following channels. We&apos;re here to help 
                  bring your construction vision to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">Office Address</div>
                    <div className="text-dark-400 text-sm">
                      No. 123, Galle Road,<br />
                      Colombo 03, Sri Lanka
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">Phone Number</div>
                    <a href="tel:+94771234567" className="text-dark-400 text-sm hover:text-primary-500 transition-colors">
                      +94 77 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">Email Address</div>
                    <a href="mailto:info@graventa.lk" className="text-dark-400 text-sm hover:text-primary-500 transition-colors">
                      info@graventa.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">Business Hours</div>
                    <div className="text-dark-400 text-sm">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="font-display text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-dark-400">Thank you for contacting us. We&apos;ll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark-200 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-sm text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-sm text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-dark-200 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-sm text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="+94 77 123 4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-dark-200 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-sm text-white focus:outline-none focus:border-primary-500 transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="quote">Request a Quote</option>
                          <option value="commercial">Commercial Project</option>
                          <option value="residential">Residential Project</option>
                          <option value="renovation">Renovation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-sm text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary flex items-center gap-2"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Visit Our <span className="text-gradient-gold">Office</span>
            </h2>
            <p className="text-dark-400">We&apos;d love to meet you in person</p>
          </div>

          <div className="aspect-[21/9] bg-dark-800 rounded-sm overflow-hidden border border-dark-700">
            {/* Map placeholder */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary-500/30 mx-auto mb-4" />
                <div className="text-dark-400">
                  Interactive map would be displayed here<br />
                  <span className="text-sm">No. 123, Galle Road, Colombo 03, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-dark-400 mb-8">
            Check out our frequently asked questions or reach out to our team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+94771234567"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a
              href="mailto:info@graventa.lk"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

