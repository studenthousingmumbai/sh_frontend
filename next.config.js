/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   scrollRestoration: true,
  // },
  images: {
    domains: ['d22y2gqvewxrcl.cloudfront.net', 'google.com', 'i.pinimg.com', 'www.iconinc.co.uk']
  }
}

module.exports = nextConfig
