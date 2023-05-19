/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = (phase, nextConfig) => {
  return withBundleAnalyzer(nextConfig);
};
