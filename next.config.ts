import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export - Geleneksel hosting için
  output: "export",

  // Trailing slash ekle (opsiyonel, bazı hostingler için gerekli)
  trailingSlash: true,

  // Image optimization için external provider (static export ile yerleşik çalışmaz)
  images: {
    unoptimized: true,
  },

  // Headers Plesk/cPanel üzerinden ayarlanacak
  // Static export ile async headers() çalışmaz
};

export default nextConfig;
