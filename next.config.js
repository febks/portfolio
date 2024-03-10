/** @type {import('next').NextConfig} */
const nextConfig = {
  output: {
    target: 'static'
  },
  distDir: 'dist',
  path: '/dst',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig
