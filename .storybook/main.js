const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    stories: [
        '../src/stories/**/*.stories.mdx',
        '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
        '../src/components/**/*.stories.mdx',
        '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
        '../src/components/**/**/*.stories.mdx',
        '../src/components/**/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    staticDirs: ['../src/assets'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        config.plugins.push(new NodePolyfillPlugin());

        config.resolve = {
            ...config.resolve,
            fallback: {
                fs: false,
            },
            alias: {
                ...config.resolve.alias,
                '@components': path.resolve(__dirname, '../src/components/'),
                '@types': path.resolve(__dirname, '../src/types/'),
                '@constants': path.resolve(__dirname, '../src/constants/'),
                '@hooks': path.resolve(__dirname, '../src/hooks/'),
                '@utils': path.resolve(__dirname, '../src/utils/'),
                '@api': path.resolve(__dirname, '../src/api/'),
                '@styles': path.resolve(__dirname, '../src/styles/'),
            },
        };

        return config;
    },
};
