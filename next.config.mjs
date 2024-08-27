/** @type {import('next').NextConfig} */
import config from "./next-i18next.config.js";
const nextConfig = {
  ...config,
  images: {
    domains: [
      "gangahealthcare.s3.us-east-2.amazonaws.com",
      "gangahealthcare.s3.amazonaws.com",
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
