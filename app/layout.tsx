import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Warwick Quick Tyres - Professional Tyre & Car Mechanic Services',
  description: 'Professional tyre fitting, car servicing, MOT checks, brakes, clutches, and more. Open 7 days a week in Warwick. Special offers for NHS workers, taxi drivers, and teachers.',
  keywords: 'tyre fitting, car mechanic, MOT checks, brakes, clutches, Warwick, quick tyres',
  authors: [{ name: 'Warwick Quick Tyres' }],
  creator: 'Warwick Quick Tyres',
  publisher: 'Warwick Quick Tyres',
  metadataBase: new URL('https://www.warwickquicktyres.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Warwick Quick Tyres - Professional Tyre & Car Mechanic Services',
    description: 'Professional tyre fitting, car servicing, MOT checks, brakes, clutches, and more. Open 7 days a week in Warwick. Special offers for NHS workers, taxi drivers, and teachers.',
    url: 'https://www.warwickquicktyres.co.uk',
    siteName: 'Warwick Quick Tyres',
    images: [
      {
        url: 'https://www.warwickquicktyres.co.uk/logo.png',
        width: 1200,
        height: 630,
        alt: 'Warwick Quick Tyres Logo',
        type: 'image/png',
      },
      {
        url: 'https://www.warwickquicktyres.co.uk/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Warwick Quick Tyres Logo',
        type: 'image/png',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warwick Quick Tyres - Professional Tyre & Car Mechanic Services',
    description: 'Professional tyre fitting, car servicing, MOT checks, brakes, clutches, and more. Open 7 days a week in Warwick.',
    images: ['https://www.warwickquicktyres.co.uk/logo.png'],
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveRepair',
    name: 'Warwick Quick Tyres',
    image: 'https://www.warwickquicktyres.co.uk/logo.png',
    '@id': 'https://www.warwickquicktyres.co.uk',
    url: 'https://www.warwickquicktyres.co.uk',
    telephone: ['07578767977', '01926784473', '07846822488'],
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Campbell House, Stratford Road',
      addressLocality: 'Warwick',
      postalCode: 'CV34 6RA',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.2800',
      longitude: '-1.5850',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:30',
        closes: '18:30',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Warwick',
    },
    serviceType: [
      'Tyre Fitting',
      'MOT Checks',
      'Brake Services',
      'Clutch Replacement',
      'Car Servicing',
      'Jump Start Service',
      'Locking Wheel Nut Removal',
    ],
    description: 'Professional tyre fitting and car mechanic services in Warwick. Open 7 days a week with expert service and competitive prices.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
