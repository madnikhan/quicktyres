'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const SLIDE_DURATION_MS = 5000

const slides = [
  { src: '/qucktyres2.webp', alt: 'Warwick Quick Tyres - Tyre fitting and car mechanic services' },
  { src: '/quicktyres1.webp', alt: 'Warwick Quick Tyres - Professional garage services' },
  { src: '/quicktyres3.webp', alt: 'Warwick Quick Tyres - Tyres and vehicle servicing' },
  { src: '/quicktyres5.webp', alt: 'Warwick Quick Tyres - MOT and repairs' },
  { src: '/quicktyres6.webp', alt: 'Warwick Quick Tyres - Quality tyre fitting' },
  { src: '/840f598c-de62-4daf-b874-788f5505ed53.JPG', alt: 'Warwick Quick Tyres - Tyre shop interior with extensive tyre inventory on shelving' },
  { src: '/9693bdcd-c698-4e9f-aa64-6aaecc3e3bd6.JPG', alt: 'Warwick Quick Tyres - Well-stocked tyre facility with wide selection' },
  { src: '/c86c8f7b-a2ea-4b1c-bc11-7b009388a4bc.JPG', alt: 'Warwick Quick Tyres - Quick Tyres building exterior and signage' },
]

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [visibleLayer, setVisibleLayer] = useState(0)
  const [layerIndices, setLayerIndices] = useState([0, 1])
  const isFirstMount = useRef(true)
  const visibleLayerRef = useRef(0)

  useEffect(() => {
    visibleLayerRef.current = visibleLayer
  }, [visibleLayer])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, SLIDE_DURATION_MS)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false
      return
    }
    const visible = visibleLayerRef.current
    const newlyVisible = 1 - visible
    setLayerIndices((prev) => {
      const next = [...prev]
      next[newlyVisible] = currentSlide
      next[visible] = (currentSlide + 1) % slides.length
      return next
    })
    setVisibleLayer(newlyVisible)
  }, [currentSlide])

  return (
    <div className="relative w-full max-w-2xl h-full min-h-[16rem] lg:min-h-[24rem] rounded-lg overflow-hidden bg-primary">
      {[0, 1].map((layer) => (
        <div
          key={layer}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: layer === visibleLayer ? 1 : 0 }}
          aria-hidden={layer !== visibleLayer}
        >
          <Image
            src={slides[layerIndices[layer]].src}
            alt={slides[layerIndices[layer]].alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority={layerIndices[layer] === 0}
            loading={layerIndices[layer] === 0 ? undefined : 'lazy'}
          />
        </div>
      ))}
      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {slides.map((_, i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-white/80 transition-all duration-300"
            style={{
              opacity: i === currentSlide ? 1 : 0.5,
              transform: i === currentSlide ? 'scale(1.2)' : 'scale(1)',
            }}
            aria-hidden
          />
        ))}
      </div>
    </div>
  )
}
