'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50 py-0" style={{ position: 'sticky', top: 0 }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 relative gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full flex-shrink-0 max-w-[60%] md:max-w-none">
            <div className="relative h-full w-48 sm:w-56 md:w-64 lg:w-80 bg-primary">
              <Image
                src="/logo.png"
                alt="Warwick Quick Tyres Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary hover:text-[#ff4126] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:07578767977"
              className="bg-primary text-black px-6 py-2 rounded-lg hover:bg-[#ff4126] transition-colors flex items-center space-x-2 font-semibold"
            >
              <FaPhone />
              <span>07578 767977</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black bg-white/20 hover:bg-white/30 rounded-lg p-3 transition-colors flex items-center justify-center min-w-[44px] min-h-[44px] z-50 relative flex-shrink-0 ml-2"
            onClick={() => setIsOpen(!isOpen)}
            onTouchStart={(e) => e.stopPropagation()}
            aria-label="Toggle menu"
            type="button"
            style={{ 
              display: 'flex',
              visibility: 'visible',
              opacity: 1,
              WebkitTapHighlightColor: 'rgba(0, 0, 0, 0.1)'
            }}
          >
            {isOpen ? <FaTimes size={24} className="text-black" /> : <FaBars size={24} className="text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-black/20 shadow-lg" style={{ zIndex: 50 }}>
          <div className="px-4 pt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-black font-semibold hover:text-[#ff4126] transition-colors text-lg border-b border-black/10"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:07578767977"
              className="block bg-black text-white px-6 py-3 rounded-lg hover:bg-[#ff4126] transition-colors text-center font-semibold mt-4"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center justify-center space-x-2">
                <FaPhone />
                <span>07578 767977</span>
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
