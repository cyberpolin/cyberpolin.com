module.exports = {
  reactStrictMode: false,
  webpack6: true,
  images: {
    domains: ["loremflickr.com"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};
