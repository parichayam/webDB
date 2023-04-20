/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: [localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : "th"],
  },
};

module.exports = nextConfig;

 