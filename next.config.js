/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async headers() {
    return [
      {
        source: "/:path*", // this applies the headers to all routes. Adjust if needed.
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin", // set this to whatever value you want.
          },
        ],
      },
    ];
  },
};
