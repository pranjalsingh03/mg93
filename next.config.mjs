/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
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
        unoptimized: true,
        remotePatterns: [
            { protocol: 'https', hostname: 'i.ibb.co' },
        ],
    },
};

export default nextConfig;
