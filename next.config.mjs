/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nightclub2026.onrender.com",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
