/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net'] // This makes images shown possible, AKA a whitelist
  },
  i18n: {
    locales: ["en", "da"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
