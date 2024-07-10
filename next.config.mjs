/** @type {import('next').NextConfig} */
import config from "./next-i18next.config.js";
const nextConfig = {
  ...config,
  reactStrictMode: true,
};

export default nextConfig;
