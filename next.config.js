/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable source maps to avoid the wasm error
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'eval-source-map';
    }
    return config;
  },
  // Disable image optimization to avoid sharp dependency issues
  // images: {
  //   unoptimized: true,
  // },
};

module.exports = nextConfig;
