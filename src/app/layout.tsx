import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Graventa Constructions (Pvt) Ltd | Building Excellence',
  description: 'Expert solutions for buildings, renovations, and innovative construction ideas. Sri Lanka\'s trusted construction partner delivering quality commercial and residential projects.',
  keywords: 'construction, Sri Lanka, building, renovation, commercial construction, residential construction, Graventa',
  openGraph: {
    title: 'Graventa Constructions (Pvt) Ltd',
    description: 'Building Excellence - Expert solutions for buildings, renovations, and innovative construction ideas.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dark-950 text-dark-100 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

