import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transforma o site inteiro em arquivos estáticos ultrarrápidos (SSG)
  output: "export",
  
  // Desativa o servidor de imagens do Next.js (perfeito para o Netlify não travar)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;