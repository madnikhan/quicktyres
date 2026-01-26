import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4 text-black">Contact Us</h1>
          <p className="text-xl text-black/80">
            Get in touch with Warwick Quick Tyres - We're here to help
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Visit us at our Warwick location or give us a call. We're open 7 days a week 
                  and ready to help with all your vehicle needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-black p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Address</h3>
                    <p className="text-gray-600">
                      Campbell House<br />
                      Stratford Road<br />
                      Warwick, CV34 6RA<br />
                      <span className="text-sm text-gray-500 mt-2 block">
                        (Opposite Aylesford school, inside the car wash)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-black p-3 rounded-lg">
                    <FaPhone className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Phone Numbers</h3>
                    <div className="space-y-2">
                      <a
                        href="tel:07578767977"
                        className="block text-primary hover:text-primary-dark font-semibold text-lg"
                      >
                        07578 767977
                      </a>
                      <a
                        href="tel:01926784473"
                        className="block text-primary hover:text-primary-dark font-semibold text-lg"
                      >
                        01926 784473
                      </a>
                      <a
                        href="tel:07846822488"
                        className="block text-primary hover:text-primary-dark font-semibold text-lg"
                      >
                        07846 822488
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-black p-3 rounded-lg">
                    <FaClock className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Opening Hours</h3>
                    <p className="text-gray-600">
                      <span className="font-semibold">Monday - Sunday:</span><br />
                      8:30 AM - 6:30 PM
                    </p>
                    <p className="text-primary font-semibold mt-2">Open 7 Days a Week!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map and Directions */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Find Us</h2>
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                  <div className="aspect-video rounded-lg mb-4 overflow-hidden bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps?q=Campbell+House+Stratford+Road+Warwick+CV34+6RA&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      title="Warwick Quick Tyres Location"
                    ></iframe>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/Campbell+House+Stratford+Road+Warwick+CV34+6RA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary text-black text-center py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Get Directions on Google Maps
                  </a>
                </div>
              </div>

              {/* Special Offers Reminder */}
              <div className="bg-primary rounded-lg p-6 text-black">
                <h3 className="text-2xl font-bold mb-4">Special Offers</h3>
                <p className="mb-4">Discounts available with valid ID for:</p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span>🏥</span>
                    <span>NHS Workers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>🚕</span>
                    <span>Taxi & Uber Drivers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>📚</span>
                    <span>Teachers</span>
                  </li>
                </ul>
                <p className="text-sm mt-4 opacity-90">
                  * Valid ID required. Terms and conditions apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-primary text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Ready to Book a Service?</h2>
          <p className="text-xl mb-8 text-black/80">
            Call us now or visit us at our Warwick location
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>
    </div>
  )
}
