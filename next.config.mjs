/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export', // Genera una versión estática
  trailingSlash: true, // Asegura que las rutas terminen con "/"
  distDir: 'out', // Carpeta de salida para el build estático
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
