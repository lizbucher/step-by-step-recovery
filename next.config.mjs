/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  trailingSlash: false,
  reactStrictMode: true,
};

export default config;
