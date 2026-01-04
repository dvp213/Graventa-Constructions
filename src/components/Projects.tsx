'use client'

import { useState, useCallback } from 'react'
import { MapPin, Calendar, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Interior Works',
    category: 'Interior',
    location: 'Sri Lanka',
    year: '2024',
    description: 'Expert interior finishing including flooring, ceiling work, and detailed craftsmanship.',
    folderName: 'interior-works',
    imageCount: 4,
  },
  {
    title: 'Masonry & Wall Works',
    category: 'Masonry',
    location: 'Sri Lanka',
    year: '2024',
    description: 'Professional masonry and wall construction with quality materials and precision.',
    folderName: 'masonry-wall-works',
    imageCount: 5,
  },
  {
    title: 'Plumbing, Steel & Installation Works',
    category: 'Plumbing & Steel',
    location: 'Sri Lanka',
    year: '2024',
    description: 'Comprehensive plumbing, iron, steel, and installation services for all projects.',
    folderName: 'plumbing-steel-works',
    imageCount: 5,
  },
  {
    title: 'Structural Works',
    category: 'Structural',
    location: 'Sri Lanka',
    year: '2024',
    description: 'Robust structural construction including foundations, beams, and reinforced concrete work.',
    folderName: 'structural-works',
    imageCount: 8,
  },
]

// Generate image paths for a project
const getProjectImages = (folderName: string, count: number) => {
  return Array.from({ length: count }, (_, i) => `/images/projects/${folderName}/image-${i + 1}.jpeg`)
}

export default function Projects() {
  // Track current image index for each project
  const [currentImages, setCurrentImages] = useState<Record<string, number>>(
    Object.fromEntries(projects.map(p => [p.folderName, 0]))
  )
  
  // Lightbox state
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean
    projectFolder: string
    imageIndex: number
    totalImages: number
  } | null>(null)

  const navigateImage = useCallback((folderName: string, direction: 'prev' | 'next', totalImages: number) => {
    setCurrentImages(prev => {
      const current = prev[folderName]
      let newIndex: number
      if (direction === 'next') {
        newIndex = (current + 1) % totalImages
      } else {
        newIndex = current === 0 ? totalImages - 1 : current - 1
      }
      return { ...prev, [folderName]: newIndex }
    })
  }, [])

  const openLightbox = (folderName: string, imageIndex: number, totalImages: number) => {
    setLightbox({ isOpen: true, projectFolder: folderName, imageIndex, totalImages })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox(null)
    document.body.style.overflow = 'unset'
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!lightbox) return
    const { imageIndex, totalImages, projectFolder } = lightbox
    let newIndex: number
    if (direction === 'next') {
      newIndex = (imageIndex + 1) % totalImages
    } else {
      newIndex = imageIndex === 0 ? totalImages - 1 : imageIndex - 1
    }
    setLightbox({ ...lightbox, imageIndex: newIndex })
  }

  // Handle keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!lightbox) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') navigateLightbox('prev')
    if (e.key === 'ArrowRight') navigateLightbox('next')
  }, [lightbox])

  return (
    <>
      <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute inset-0 geo-pattern opacity-20"></div>
          <div className="orb orb-gold w-[500px] h-[500px] top-1/2 -right-48"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-3 justify-center mb-6">
              <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
              <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">Our Portfolio</span>
              <span className="w-12 h-0.5 bg-primary-500 rounded-full"></span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-gradient-gold">Projects</span>
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto leading-relaxed">
              Explore our diverse portfolio of successfully completed construction projects across Sri Lanka.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const images = getProjectImages(project.folderName, project.imageCount)
              const currentIndex = currentImages[project.folderName]
              
              return (
                <div
                  key={project.title}
                  className="reveal group card overflow-hidden hover-card"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Image area with carousel */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden rounded-xl mb-6">
                    {/* Current Image */}
                    <Image
                      src={images[currentIndex]}
                      alt={`${project.title} - Image ${currentIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent pointer-events-none"></div>
                    
                    {/* Navigation Arrows */}
                    {project.imageCount > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            navigateImage(project.folderName, 'prev', project.imageCount)
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-950/70 hover:bg-dark-950/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            navigateImage(project.folderName, 'next', project.imageCount)
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-950/70 hover:bg-dark-950/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
                          aria-label="Next image"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                    
                    {/* View Full Photo Button */}
                    <button
                      onClick={() => openLightbox(project.folderName, currentIndex, project.imageCount)}
                      className="absolute bottom-4 right-4 px-4 py-2 bg-primary-500 hover:bg-primary-400 text-dark-950 text-xs font-semibold rounded-full flex items-center gap-2 transition-all duration-200 hover:scale-105 z-10"
                    >
                      <ZoomIn size={14} />
                      View Full Photo
                    </button>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-4 py-1.5 bg-primary-500 text-dark-950 text-xs font-semibold rounded-full z-10">
                      {project.category}
                    </div>
                    
                    {/* Image counter */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-dark-950/70 backdrop-blur-sm text-white text-xs font-medium rounded-full z-10">
                      {currentIndex + 1} / {project.imageCount}
                    </div>
                    
                    {/* Dot Indicators */}
                    {project.imageCount > 1 && (
                      <div className="absolute bottom-4 left-4 flex gap-1.5 z-10">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation()
                              setCurrentImages(prev => ({ ...prev, [project.folderName]: i }))
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              i === currentIndex 
                                ? 'bg-primary-500 w-6' 
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="px-2">
                    <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm text-dark-400 mb-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary-500" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary-500" />
                        {project.year}
                      </div>
                    </div>

                    <p className="text-dark-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox?.isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-dark-800/80 hover:bg-dark-700 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Image counter */}
          <div className="absolute top-6 left-6 px-4 py-2 bg-dark-800/80 rounded-full text-white text-sm font-medium">
            {lightbox.imageIndex + 1} / {lightbox.totalImages}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('prev')
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-dark-800/80 hover:bg-dark-700 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('next')
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-dark-800/80 hover:bg-dark-700 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Full size image */}
          <div 
            className="relative w-[90vw] h-[85vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/projects/${lightbox.projectFolder}/image-${lightbox.imageIndex + 1}.jpeg`}
              alt={`Project image ${lightbox.imageIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-3 bg-dark-800/80 backdrop-blur-sm rounded-2xl max-w-[90vw] overflow-x-auto">
            {Array.from({ length: lightbox.totalImages }, (_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation()
                  setLightbox({ ...lightbox, imageIndex: i })
                }}
                className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                  i === lightbox.imageIndex 
                    ? 'ring-2 ring-primary-500 ring-offset-2 ring-offset-dark-900' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={`/images/projects/${lightbox.projectFolder}/image-${i + 1}.jpeg`}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Keyboard hint */}
          <div className="absolute bottom-6 right-6 text-dark-500 text-xs hidden md:block">
            Use ← → arrows to navigate • ESC to close
          </div>
        </div>
      )}
    </>
  )
}
