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
        domains: ['i.ibb.co'],  // Add the external image domain here
    },
    env:{
        GITHUB_TOKEN : process.env.GITHUB_TOKEN
    }
};

export default nextConfig;
