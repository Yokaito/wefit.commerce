/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["wefit-react-web-test.s3.amazonaws.com"],
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
