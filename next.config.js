/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["rsmcnewdelhi.imd.gov.in"],
    formats: ["image/webp"],
  },
};
