/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net'] // This makes images shown possible, AKA a whitelist
  },
}

module.exports = nextConfig
