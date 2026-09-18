import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  outputFileTracingRoot: __dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self' https://framerusercontent.com https://*.framerusercontent.com",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://framerusercontent.com https://*.framerusercontent.com https://framer.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://framerusercontent.com https://*.framerusercontent.com",
              "font-src 'self' https://fonts.gstatic.com https://framerusercontent.com https://*.framerusercontent.com data:",
              "img-src 'self' data: blob: https://lh3.googleusercontent.com https://nexagent.group https://images.unsplash.com https://framerusercontent.com https://*.framerusercontent.com",
              "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://framerusercontent.com https://*.framerusercontent.com https://framer.com",
              "worker-src 'self' blob: https://framerusercontent.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/ventures',
        destination: '/about',
        permanent: false,
      },
      {
        source: '/companies',
        destination: '/about',
        permanent: false,
      },
      {
        source: '/case-studies',
        destination: '/solutions',
        permanent: false,
      },
      {
        source: '/ecosystem',
        destination: '/technology',
        permanent: false,
      },
      {
        source: '/model-010',
        destination: '/technology',
        permanent: false,
      },
      {
        source: '/strategy-call',
        destination: '/book-a-strategy-call',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/book-a-strategy-call',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
