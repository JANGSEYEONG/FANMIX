import { default as withPWA } from '@ducanh2912/next-pwa';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  swSrc: 'worker/custom-sw.js',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
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
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              connect-src 'self' https://dxa4d1twgpyua.cloudfront.net https://fanmix.vercel.app;
              img-src 'self' https://dxa4d1twgpyua.cloudfront.net data: blob:;
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://fanmix.vercel.app;
              style-src 'self' 'unsafe-inline';
              font-src 'self' data:;
              media-src 'self' https://dxa4d1twgpyua.cloudfront.net;
              frame-src 'self';
              worker-src 'self';
            `
              .replace(/\s{2,}/g, ' ')
              .trim(),
          },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['dxa4d1twgpyua.cloudfront.net'],
  },
};

export default withNextIntl(pwaConfig(nextConfig));
