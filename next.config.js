/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable styled-components
  compiler: {
    styledComponents: true,
  },
  // Disable source maps to avoid the wasm error
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'eval-source-map';
    }
    return config;
  },
  // Add experimental features for better compatibility
  experimental: {
    esmExternals: 'loose',
  },
  // Disable image optimization to avoid sharp dependency issues
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
