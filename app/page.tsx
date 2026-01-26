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
  FaClock
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
              <p className="text-xl mb-8 text-black/80">
                Warwick Quick Tyres - Your trusted local garage for all vehicle needs. 
                Open 7 days a week with expert service and competitive prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="tel:07578767977"
                  className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <FaPhone />
                  <span>Call Now: 07578 767977</span>
                </a>
                <a
                  href="tel:07846822488"
                  className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
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
              {/* After Hours Button - Highlighted */}
              <div className="flex justify-center mt-6">
                <a
                  href="tel:07578767977"
                  className="relative inline-flex items-center justify-center space-x-3 bg-primary text-black px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 animate-pulse border-2 border-primary-dark"
                  style={{
                    boxShadow: '0 10px 40px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3)',
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  }}
                >
                  <FaClock className="text-2xl" />
                  <div className="flex flex-col items-start">
                    <span className="text-xl font-extrabold">After Hours Booking</span>
                    <span className="text-sm font-semibold opacity-90">Available 24/7</span>
                  </div>
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
                    !
                  </div>
                </a>
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
