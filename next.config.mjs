/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  // PENTING: Ganti tulisan 'NAMA_REPO_ANDA' dengan nama persis repositori ini.
  // Misalnya jika nama reponya adalah 'anniversary-website', maka tulis: '/anniversary-website'
  basePath: isProd ? "/anniversary-website" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
