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
    <nav className="bg-primary shadow-lg sticky top-0 z-50 py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <div className="relative h-full w-80 bg-primary">
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
            className="md:hidden text-secondary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-secondary hover:text-[#ff4126] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:07578767977"
              className="block bg-primary text-black px-6 py-2 rounded-lg hover:bg-[#ff4126] transition-colors text-center font-semibold"
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
