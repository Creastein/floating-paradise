/** @type {import('next').NextConfig} */
const nextConfig = {

  async redirects() {
    const pages = ['bungalows', 'explore', 'yoga-retreat', 'getting-here', 'about', 'contact']
    return [
      // Redirect bare paths (without locale) to /en/
      ...pages.map((page) => ({
        source: `/${page}`,
        destination: `/en/${page}`,
        permanent: true,
      })),
      // Redirect root / to /en/
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [50, 60, 65, 75, 80],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
}

export default nextConfig
