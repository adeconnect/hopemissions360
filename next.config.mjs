/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['nebula.wsimg.com'],
  },
};

export default nextConfig;