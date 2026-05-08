/** @type {import('next').NextConfig} */
const nextConfig = {

  async redirects() {
    const pages = ['bungalows', 'explore', 'yoga-retreat', 'getting-here', 'about', 'contact', 'faq']
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
    qualities: [45, 55, 65, 75, 80],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // No source maps in production — reduces JS bytes shipped to browser
  productionBrowserSourceMaps: false,

  // Tree-shake icon libraries and large UI packages to eliminate unused JS
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@phosphor-icons/react',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-label',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-slot',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-tooltip',
    ],
  },

  // Turbopack is the default bundler in Next.js 16.
  // Empty config here silences the "webpack config without turbopack config" error.
  // Turbopack handles code splitting automatically via dynamic import().
  turbopack: {},

  // Remove console.log in production to reduce JS parse/execution time
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
}

export default nextConfig
