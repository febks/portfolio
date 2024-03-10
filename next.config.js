/** @type {import('next').NextConfig} */
const nextConfig = {
  output: {
    target: 'static'
  },
  distDir: 'dist',
  path: '/dist',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig
