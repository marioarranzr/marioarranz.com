/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
            {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'bento.engage-dev.com',
      },
      {
        protocol: 'https',
        hostname: 'bento.engage-dev.comcrypto',
      },
      {
        protocol: 'https',
        hostname: 'akm-img-a-in.tosshub.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
    ];
  },
};

export default nextConfig;
