import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Warwick Quick Tyres - Professional Tyre & Car Mechanic Services'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#ffcc01',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: 72,
            color: '#000000',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
            padding: '0 40px',
          }}
        >
          QUICK TYRES
        </div>
        <div
          style={{
            fontSize: 48,
            color: '#000000',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '0 40px',
            marginBottom: 20,
          }}
        >
          Professional Tyre & Car Mechanic Services
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#000000',
            marginTop: 20,
            opacity: 0.9,
          }}
        >
          Open 7 Days a Week | Warwick
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#000000',
            marginTop: 10,
            opacity: 0.8,
          }}
        >
          07578 767977
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
