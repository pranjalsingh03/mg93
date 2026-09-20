/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist', // Ensure this matches your expectations
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'i.ibb.co' },
        ],
    },
};

export default nextConfig;
