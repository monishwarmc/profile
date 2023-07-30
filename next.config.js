/** @type {import('next').NextConfig} */
const nextConfig = {
    async generateStaticParams() {
        return {
          // Add your static paths here, for example:
          '/': { page: '/' },
          '/about': { page: '/about' },
          // Add more paths as needed
        };
      },
};

module.exports = nextConfig
