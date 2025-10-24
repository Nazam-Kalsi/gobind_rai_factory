import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  output: 'export',
  basePath: '',     
  assetPrefix: '', 
  images: { unoptimized: true } 
};

export default nextConfig;
