import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
		remotePatterns: [{ protocol: 'https', hostname: '*' }],
	},
	basePath: '/my-portofolio',
	assetPrefix: '/my-portofolio',
	allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};
export default nextConfig;
