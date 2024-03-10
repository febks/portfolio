/** @type {import('next').NextConfig} */
const nextConfig = {
  output: {
    target: 'static'
  },
  distDir: 'dist',
  path: '/app',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig
