module.exports = {
    roots: ['../../src', '../../test'],
    setupFilesAfterEnv: ['./jest.setup.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testPathIgnorePatterns: ['node_modules/'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/*.test.(ts|tsx)'],
    moduleNameMapper: {
        // Mocks out all these file formats when tests are run
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^@shared(.*)$': '<rootDir>/src/shared/$1',
        '^@components(.*)$': '<rootDir>/src/components/$1',
        '^@layouts(.*)$': '<rootDir>/src/components/layouts/$1',
        '^@hooks(.*)$': '<rootDir>/src/hooks/$1',
        '^@utils(.*)$': '<rootDir>/src/utils/$1',
        '^@api(.*)$': '<rootDir>/src/api/$1',
        '^@graphql(.*)$': '<rootDir>/src/graphql/$1',
        '^@styles(.*)$': '<rootDir>/src/styles/$1',
        '^@types(.*)$': '<rootDir>/src/types/$1',
        '^@constants(.*)$': '<rootDir>/src/constants/$1',
    },
};
