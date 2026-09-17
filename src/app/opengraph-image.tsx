import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'NexAgent — AI, Automation & Intelligent Business Technology';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F7F7F5',
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(61, 157, 153, 0.12) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(191, 161, 95, 0.08) 0%, transparent 50%)',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          border: '12px solid #E5E5E0',
          position: 'relative',
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#17191A',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F7F7F5',
                fontSize: '24px',
                fontWeight: 700,
                letterSpacing: '-1px',
              }}
            >
              NA
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  color: '#17191A',
                }}
              >
                NEXAGENT
              </span>
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '2px',
                  color: '#57595B',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Intelligent Technology Group
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(23, 25, 26, 0.15)',
              padding: '6px 16px',
              borderRadius: '999px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#3D9D99',
              }}
            />
            <span
              style={{
                fontSize: '12px',
                fontFamily: 'monospace',
                color: '#17191A',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              Global Systems · SF / London / Dubai / BLR
            </span>
          </div>
        </div>

        {/* Center Main Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '920px',
          }}
        >
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              color: '#17191A',
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            The Next Era of Business Is{' '}
            <span style={{ color: '#3D9D99', fontStyle: 'italic' }}>Intelligent.</span>
          </h1>
          <p
            style={{
              fontSize: '22px',
              lineHeight: 1.45,
              color: '#57595B',
              margin: 0,
              maxWidth: '820px',
            }}
          >
            NexAgent builds AI-powered software, automation systems, AI agents and intelligent business technology for organizations of every scale.
          </p>
        </div>

        {/* Bottom Capabilities & Positioning */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            paddingTop: '24px',
            borderTop: '1px solid rgba(23, 25, 26, 0.12)',
          }}
        >
          <div style={{ display: 'flex', gap: '20px' }}>
            <span
              style={{
                fontSize: '13px',
                fontFamily: 'monospace',
                color: '#17191A',
                backgroundColor: '#FFFFFF',
                padding: '6px 12px',
                border: '1px solid rgba(23, 25, 26, 0.1)',
                borderRadius: '4px',
                textTransform: 'uppercase',
              }}
            >
              AI Agents & Automation
            </span>
            <span
              style={{
                fontSize: '13px',
                fontFamily: 'monospace',
                color: '#17191A',
                backgroundColor: '#FFFFFF',
                padding: '6px 12px',
                border: '1px solid rgba(23, 25, 26, 0.1)',
                borderRadius: '4px',
                textTransform: 'uppercase',
              }}
            >
              SaaS & Custom Software
            </span>
            <span
              style={{
                fontSize: '13px',
                fontFamily: 'monospace',
                color: '#17191A',
                backgroundColor: '#FFFFFF',
                padding: '6px 12px',
                border: '1px solid rgba(23, 25, 26, 0.1)',
                borderRadius: '4px',
                textTransform: 'uppercase',
              }}
            >
              Digital Infrastructure
            </span>
          </div>

          <span
            style={{
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'monospace',
              color: '#3D9D99',
              letterSpacing: '1px',
            }}
          >
            nexagent.group
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
