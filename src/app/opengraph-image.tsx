import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'hmu.ai - Your AI Workforce';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background Glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
          }}
        />

        {/* Robot Head Logo (SVG representation) */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginBottom: '40px' }}
        >
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>

        {/* Title */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            color: 'white',
            letterSpacing: '-0.05em',
            display: 'flex',
            marginBottom: '20px',
          }}
        >
          hmu.ai
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '32px',
            color: '#94a3b8',
            maxWidth: '800px',
            textAlign: 'center',
            lineHeight: '1.4',
          }}
        >
          Your AI Workforce: Architect, Builder, Money, Operator.
          Scale solo with 520+ specialized agents.
        </div>

        {/* Bottom Border Accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '8px',
            background: 'linear-gradient(to right, #3b82f6, #a855f7, #3b82f6)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
