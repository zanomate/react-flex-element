module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/testsAfterEnv.setup.js'],
  setupFiles: ['<rootDir>/tests/tests.setup.js'],
  testMatch: ['**/?(*.)+(test).ts'],
};
