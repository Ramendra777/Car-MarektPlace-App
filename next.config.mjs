/** @type {import('next').NextConfig} */
const nextConfig = {
    
    experimental: {
      serverComponentsHmrCache: false, // default to true
    },
    
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brujnceljtjxrhpicicm.supabase.co",
      },
    ],
    },
    
    async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; frame-src 'self' https://example.com https://ramendrasingh.vercel.app;"
          },
        ],
      },
    ];
  },
};

export default nextConfig;
