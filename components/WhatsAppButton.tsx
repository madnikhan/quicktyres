'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const whatsappNumber = '447578767977' // 07578 767977 without spaces
  const whatsappMessage = encodeURIComponent('Hello! I would like to inquire about your services.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
      <span className="absolute -top-2 -right-2 bg-white text-[#25D366] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
        1
      </span>
      <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </a>
  )
}
