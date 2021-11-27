module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/testsAfterEnv.setup.js'],
  setupFiles: ['<rootDir>/tests/tests.setup.js'],
  testMatch: ['**/?(*.)+(test).ts'],
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/tests/assetsTransformer.js',
  //   '\\.(css)$': '<rootDir>/tests/mocks/styleMocks.js',
  //   'test-utils': '<rootDir>/tests/utils/testUtils.js',
  // },
  // testPathIgnorePatterns: ['<rootDir>/.cypress/', '<rootDir>/.storybook/'],
  // snapshotSerializers: [],
  // timers: 'fake',
  // collectCoverageFrom: ['src/**/*.{js,jsx}'],
  // coverageDirectory: '<rootDir>/jest-coverage',
};

