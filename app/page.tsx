import Link from 'next/link'
import { 
  FaWrench, 
  FaCar, 
  FaBolt, 
  FaCog, 
  FaTools, 
  FaKey,
  FaCheckCircle,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaStar
} from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
  const services = [
    {
      icon: <FaCar className="text-4xl" />,
      title: 'Tyre Fitting',
      description: 'New and part-worn tyres available for cars (14" to 22"), trailers (10", 12", 13"), and commercial vans. Professional fitting includes balancing and new valve.',
    },
    {
      icon: <FaCheckCircle className="text-4xl" />,
      title: 'Pre MOT Checks',
      description: 'Comprehensive pre-MOT inspections to ensure your vehicle passes first time. Identify issues before the test.',
    },
    {
      icon: <FaWrench className="text-4xl" />,
      title: 'Brakes',
      description: 'Expert brake servicing, repairs, and replacements. Your safety is our priority.',
    },
    {
      icon: <FaCog className="text-4xl" />,
      title: 'Clutches',
      description: 'Professional clutch replacement and repair services for all vehicle makes and models.',
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: 'General Services',
      description: 'Complete car servicing including oil changes, filters, belts, and all routine maintenance.',
    },
    {
      icon: <FaBolt className="text-4xl" />,
      title: 'Jump Start',
      description: '24/7 emergency jump start service. Get back on the road quickly when your battery fails.',
    },
    {
      icon: <FaKey className="text-4xl" />,
      title: 'Locking Wheel Nut Removal',
      description: 'Lost your locking wheel nut key? We can safely remove stuck or damaged locking wheel nuts.',
    },
  ]

  const specialOffers = [
    { title: 'NHS Workers', icon: '🏥' },
    { title: 'Taxi & Uber Drivers', icon: '🚕' },
    { title: 'Teachers', icon: '📚' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
                Professional Tyre & Car Mechanic Services
              </h1>
              <p className="text-xl mb-6 text-black/80">
                Warwick Quick Tyres - Your trusted local garage for all vehicle needs. 
                Open 7 days a week with expert service and competitive prices.
              </p>
              {/* Google Rating Badge */}
              <div className="mb-6">
                <a
                  href="https://www.google.com/search?client=ms-android-samsung-ss&hs=j3t9&sca_esv=2756be51c2b06d29&sxsrf=ANbL-n5X7GzBYkyFAbE6SPuwJXlYfSadUA:1769445554591&q=quick+tyres+warwick+reviews&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORI-_gRGsplOIbgTOcCfZLs27KKE0HastebBpaLK_-dIoZ2aaVUizhyqsnl6j_G_AENjLq4FaiKqAkewgYA3Ywzb3_nx5gV3pvQ7cxLCBsxD8cMcfg%3D%3D&sa=X&sqi=2&ved=2ahUKEwi1jOyt0qmSAxWjXUEAHdXtFMkQ9qsLegQIFhAJ&biw=360&bih=648&dpr=3&aic=0#ebo=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-400 text-xl" />
                    <FaStar className="text-yellow-400 text-xl" />
                    <FaStar className="text-yellow-400 text-xl" />
                    <FaStar className="text-yellow-400 text-xl" />
                    <FaStar className="text-yellow-400 text-xl" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Google Reviews</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </a>
              </div>
              {/* After Hours Button - Highlighted */}
              <div className="flex justify-center mb-6">
                <a
                  href="tel:07578767977"
                  className="relative inline-flex items-center justify-center space-x-3 bg-red-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 animate-pulse border-2 border-red-700"
                  style={{
                    boxShadow: '0 10px 40px rgba(220, 38, 38, 0.5), 0 0 20px rgba(220, 38, 38, 0.3)',
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  }}
                >
                  <FaClock className="text-2xl" />
                  <div className="flex flex-col items-start">
                    <span className="text-xl font-extrabold">24/7 EMERGENCY and AFTER HOURS BOOKING</span>
                  </div>
                  <div className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
                    !
                  </div>
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="tel:07578767977"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <FaPhone />
                  <span>Call Now: 07578 767977</span>
                </a>
                <a
                  href="tel:07846822488"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <FaPhone />
                  <span>Call Now: 07846 822488</span>
                </a>
                <Link
                  href="/services"
                  className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-primary transition-colors text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-96 flex items-center justify-center">
              <div className="relative w-full max-w-2xl h-full flex items-center justify-center bg-primary rounded-lg">
                <Image
                  src="/logo.png"
                  alt="Warwick Quick Tyres"
                  width={800}
                  height={300}
                  className="object-contain w-full h-full"
                  style={{ filter: 'brightness(1.15) contrast(1.1) saturate(1.2)' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-secondary text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <FaClock className="text-2xl" />
              <div>
                <p className="font-semibold">Open 7 Days</p>
                <p className="text-sm text-gray-300">Mon - Sun: 8:30 AM - 6:30 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaMapMarkerAlt className="text-2xl" />
              <div>
                <p className="font-semibold">Warwick Location</p>
                <p className="text-sm text-gray-300">Stratford Road, CV34 6RA</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaPhone className="text-2xl" />
              <div>
                <p className="font-semibold">Call Us Now</p>
                <p className="text-sm text-gray-300">07578 767977</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive vehicle services to keep you safe on the road
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-black mb-4">Special Offers</h2>
              <p className="text-xl text-black/90">
                Discounts available with ID proof for:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialOffers.map((offer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-lg"
                >
                  <div className="text-5xl mb-4">{offer.icon}</div>
                  <h3 className="text-xl font-bold text-secondary">{offer.title}</h3>
                  <p className="text-gray-600 mt-2">Special rates available</p>
                </div>
              ))}
            </div>
            <p className="text-center text-black/80 mt-6 text-lg">
              * Valid ID required. Terms and conditions apply.
            </p>
          </div>
        </div>
      </section>

      {/* Tyre Sizes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-secondary mb-4">Tyre Sizes Available</h2>
              <p className="text-xl text-gray-600">
                We stock a wide range of new and part-worn tyres for all vehicle types
              </p>
            </div>
            
            {/* Car Tyre Sizes */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-secondary mb-4 text-center">Car Tyre Sizes</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                {['14"', '15"', '16"', '17"', '18"', '19"', '20"', '21"', '22"'].map((size) => (
                  <div
                    key={size}
                    className="bg-primary text-black py-4 rounded-lg font-bold text-xl"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Trailer Tyre Sizes */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-secondary mb-4 text-center">Trailer Tyre Sizes</h3>
              <div className="grid grid-cols-3 gap-4 text-center max-w-md mx-auto">
                {['10"', '12"', '13"'].map((size) => (
                  <div
                    key={size}
                    className="bg-accent text-white py-4 rounded-lg font-bold text-xl"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial Van Tyres */}
            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-2">Commercial Van Tyres</h3>
              <p className="text-lg text-gray-700">
                Commercial van tyre sizes also available - Contact us for specific sizes
              </p>
            </div>

            <p className="text-center text-gray-600 mt-8">
              All tyre fitting includes balancing and new valve
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-black/80">
            Contact us today for professional, reliable vehicle services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="tel:07578767977"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <FaPhone />
              <span>Call: 07578 767977</span>
            </a>
            <a
              href="tel:01926784473"
              className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-primary transition-colors"
            >
              Call: 01926 784473
            </a>
            <a
              href="tel:07846822488"
              className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-primary transition-colors"
            >
              Call: 07846 822488
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-primary transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
