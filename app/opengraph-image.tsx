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
  try {
    // Fetch the logo image
    const logoResponse = await fetch(
      new URL('/logo.png', 'https://www.warwickquicktyres.co.uk'),
      {
        headers: {
          'Accept': 'image/png,image/*,*/*',
        },
      }
    )
    
    if (!logoResponse.ok) {
      throw new Error('Failed to fetch logo')
    }
    
    const logoBuffer = await logoResponse.arrayBuffer()
    // Convert ArrayBuffer to base64 for edge runtime
    const logoBase64 = btoa(
      String.fromCharCode(...new Uint8Array(logoBuffer))
    )
    
    return new ImageResponse(
      (
        <div
          style={{
            background: '#ffcc01',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '40px',
          }}
        >
          <img
            src={`data:image/png;base64,${logoBase64}`}
            alt="Warwick Quick Tyres"
            width={1000}
            height={400}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (error) {
    // Fallback if logo can't be loaded
    return new ImageResponse(
      (
        <div
          style={{
            background: '#ffcc01',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              color: '#000000',
              fontWeight: 'bold',
              textAlign: 'center',
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
              marginTop: 20,
            }}
          >
            Professional Tyre & Car Mechanic Services
          </div>
        </div>
      ),
      {
        ...size,
      }
    )
  }
}
