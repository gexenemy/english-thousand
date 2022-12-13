const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }

        config.module.rules.push({
            test: /\.svg/,
            type: 'asset/resource',
        });

        return config;
    },
    images: {
        domains: ['localhost'],
    },
    trailingSlash: true,
};

export default nextConfig;
