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
  turbopack: {
    root: '/Users/emil/Desktop/kea/15_eksamen/gajol',
  },
};
export default nextConfig;
