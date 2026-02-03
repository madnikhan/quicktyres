import { 
  FaCar, 
  FaCheckCircle, 
  FaWrench, 
  FaCog, 
  FaTools, 
  FaBolt, 
  FaKey,
  FaPhone,
  FaPlug
} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Tyre Fitting & Car Repairs Warwick',
  description: 'Tyre fitting, MOT checks, brakes, clutches & car servicing in Warwick. Open 7 days. Jump start & wheel nut removal available.',
  keywords: 'tyre fitting Warwick, MOT checks, brake services, clutch replacement, car servicing, jump start service, wheel nut removal, Warwick garage',
  openGraph: {
    title: 'Our Services | Warwick Quick Tyres',
    description: 'Tyre fitting, MOT checks, brakes, clutches & car servicing in Warwick. Open 7 days a week.',
    url: 'https://www.warwickquicktyres.co.uk/services',
  },
}

export default function Services() {
  const services = [
    {
      icon: <FaPlug className="text-5xl" />,
      title: 'Puncture Repair',
      description: 'Quick puncture repair when it\'s safe to do so. We can repair punctures, nails, holes or cuts up to 6mm on the tyre tread. Not all damage can be repaired—see our Repair or Replace guide below.',
      features: [
        'Punctures up to 6mm on the tread',
        'Nail and screw removal',
        'Professional repair plugs',
        'Quick turnaround',
        'Quality checked',
      ],
    },
    {
      icon: <FaCar className="text-5xl" />,
      title: 'Tyre Fitting & Replacement',
      description: 'Professional tyre fitting service for all vehicle types. We stock new and part-worn tyres for cars (14" to 22"), trailers (10", 12", 13"), and commercial vans.',
      features: [
        'New and part-worn tyres available',
        'Car tyres: 14" to 22"',
        'Trailer tyres: 10", 12", 13"',
        'Commercial van tyres available',
        'Professional fitting service',
        'Balancing included',
        'New valve included',
        'All makes and models',
      ],
    },
    {
      icon: <FaCheckCircle className="text-5xl" />,
      title: 'Pre MOT Checks',
      description: 'Comprehensive pre-MOT inspections to identify any issues before your official MOT test. Save time and money by fixing problems in advance.',
      features: [
        'Full vehicle inspection',
        'Identify potential MOT failures',
        'Expert advice and recommendations',
        'Fix issues before the test',
        'Save time and money',
      ],
    },
    {
      icon: <FaWrench className="text-5xl" />,
      title: 'Brake Services',
      description: 'Expert brake servicing, repairs, and replacements. Your safety is our top priority. We service all types of braking systems.',
      features: [
        'Brake pad replacement',
        'Brake disc replacement',
        'Brake fluid changes',
        'Brake system inspection',
        'Emergency brake repairs',
        'All vehicle types',
      ],
    },
    {
      icon: <FaCog className="text-5xl" />,
      title: 'Clutch Services',
      description: 'Professional clutch replacement and repair services for all vehicle makes and models. Get smooth gear changes with our expert service.',
      features: [
        'Clutch replacement',
        'Clutch repair',
        'Clutch cable adjustment',
        'All makes and models',
        'Expert diagnosis',
        'Quality parts',
      ],
    },
    {
      icon: <FaTools className="text-5xl" />,
      title: 'General Car Services',
      description: 'Complete car servicing including oil changes, filters, belts, and all routine maintenance to keep your vehicle running smoothly.',
      features: [
        'Oil and filter changes',
        'Air filter replacement',
        'Fuel filter replacement',
        'Belt replacements',
        'Fluid top-ups',
        'Full service packages',
      ],
    },
    {
      icon: <FaBolt className="text-5xl" />,
      title: 'Jump Start Service',
      description: '24/7 emergency jump start service. If your battery has died, we can get you back on the road quickly and safely.',
      features: [
        '24/7 availability',
        'Quick response times',
        'All vehicle types',
        'Professional service',
        'Emergency assistance',
      ],
    },
    {
      icon: <FaKey className="text-5xl" />,
      title: 'Locking Wheel Nut Removal',
      description: 'Lost your locking wheel nut key or have a seized nut? We can safely remove all types of locking wheel nuts without damaging your wheels.',
      features: [
        'Specialist tools',
        'No wheel damage',
        'Quick service',
        'All nut types',
        'Professional removal',
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4 text-black">Our Services</h1>
          <p className="text-xl text-black/80">
            Professional vehicle services to keep you safe and on the road
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
              >
                <div className="lg:w-1/3 bg-primary text-black p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-black">{service.title}</h2>
                  </div>
                </div>
                <div className="lg:w-2/3 p-8">
                  <p className="text-xl text-gray-700 mb-6">{service.description}</p>
                  <h3 className="text-xl font-bold text-secondary mb-4">What We Offer:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Puncture Repair – Repair or Replace Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-secondary mb-4">Puncture Repair</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Not every puncture means a new tyre. We can repair tread damage when it&apos;s safe—and we&apos;ll tell you when replacement is the right option.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-xl p-6 md:p-10">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0 flex justify-center">
              <Image
                src="/puncture-repair-replace.jpeg"
                alt="Repair or Replace – When we can repair tread punctures (green) and when you need a new tyre (sidewall or severe damage)"
                width={600}
                height={600}
                className="object-contain rounded-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-3">✓ We can REPAIR</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Punctures, nails, holes or cuts <strong>up to 6mm on the tyre tread</strong></li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-700 mb-3">✗ You need to REPLACE</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Punctures <strong>larger than 6mm</strong> on the tread</li>
                  <li>• <strong>Any sidewall</strong> punctures or damage</li>
                  <li>• Tyres worn <strong>below the tread wear indicators</strong></li>
                </ul>
              </div>
              <p className="text-gray-600">
                We&apos;ll inspect your tyre and give you an honest recommendation—repair when it&apos;s safe, replace when it&apos;s not.
              </p>
              <a
                href="tel:07578767977"
                className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                <FaPhone />
                Call for puncture repair
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tyre Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Tyre Services</h2>
              <p className="text-xl text-gray-300">
                Comprehensive tyre solutions for all your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Available Sizes</h3>
                <p className="text-gray-300 mb-4">
                  We stock tyres in sizes from 10" to 22" for cars, trailers, and commercial vans.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-200 mb-2">Car Tyres:</p>
                  <div className="flex flex-wrap gap-2">
                    {['14"', '15"', '16"', '17"', '18"', '19"', '20"', '21"', '22"'].map((size) => (
                      <span
                        key={size}
                        className="bg-primary px-3 py-1 rounded text-sm font-semibold"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-200 mb-2">Trailer Tyres:</p>
                  <div className="flex flex-wrap gap-2">
                    {['10"', '12"', '13"'].map((size) => (
                      <span
                        key={size}
                        className="bg-accent px-3 py-1 rounded text-sm font-semibold"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-3">
                  ✓ Commercial van tyre sizes also available
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">New & Part-Worn</h3>
                <p className="text-gray-300 mb-4">
                  We offer both new and quality part-worn tyres to suit your budget and needs.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Quality checked part-worn tyres</li>
                  <li>✓ Brand new tyres from leading manufacturers</li>
                  <li>✓ Competitive pricing</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Professional Fitting</h3>
                <p className="text-gray-300 mb-4">
                  Every tyre fitting includes professional service and quality assurance.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Professional fitting</li>
                  <li>✓ Wheel balancing included</li>
                  <li>✓ New valve included</li>
                  <li>✓ Quality guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Need Our Services?</h2>
          <p className="text-xl mb-8 text-black/80">
            Contact us today to book your service or get a free quote
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
              href="tel:07846822488"
              className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-primary transition-colors"
            >
              Call: 07846 822488
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-primary transition-colors"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
