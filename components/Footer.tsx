import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa'

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
            {/* Google Rating Badge */}
            <a
              href="https://www.google.com/search?client=ms-android-samsung-ss&hs=j3t9&sca_esv=2756be51c2b06d29&sxsrf=ANbL-n5X7GzBYkyFAbE6SPuwJXlYfSadUA:1769445554591&q=quick+tyres+warwick+reviews&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORI-_gRGsplOIbgTOcCfZLs27KKE0HastebBpaLK_-dIoZ2aaVUizhyqsnl6j_G_AENjLq4FaiKqAkewgYA3Ywzb3_nx5gV3pvQ7cxLCBsxD8cMcfg%3D%3D&sa=X&sqi=2&ved=2ahUKEwi1jOyt0qmSAxWjXUEAHdXtFMkQ9qsLegQIFhAJ&biw=360&bih=648&dpr=3&aic=0#ebo=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/20"
            >
              <div className="flex items-center space-x-1">
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
              </div>
              <span className="text-sm font-semibold text-white">Google Reviews</span>
            </a>
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
