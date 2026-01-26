import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Warwick Quick Tyres</h3>
            <p className="text-gray-300 mb-4">
              Professional tyre fitting and car mechanic services in Warwick. 
              Open 7 days a week for all your vehicle needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>
                  Campbell House, Stratford Road<br />
                  Warwick, CV34 6RA<br />
                  (Opposite Aylesford school, inside the car wash)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="tel:07578767977" className="hover:text-white transition-colors">
                  07578 767977
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="tel:01926784473" className="hover:text-white transition-colors">
                  01926 784473
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="tel:07846822488" className="hover:text-white transition-colors">
                  07846 822488
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaClock />
                <span>Mon - Sun: 8:30 AM - 6:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Warwick Quick Tyres. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
