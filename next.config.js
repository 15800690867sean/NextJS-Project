/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  basePath: "/nextjs-app",
  images: {
    unoptimized: true
}
};

module.exports = nextConfig;
