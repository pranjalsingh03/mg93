/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: '.next', // Ensure this matches your expectations
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
    env:{
        GITHUB_TOKEN : process.env.GITHUB_TOKEN
    }
};

export default nextConfig;
