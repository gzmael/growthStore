export default {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/modules/**/useCases/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  moduleNameMapper: {
    '^@modules/(.*)$': '<rootDir>/modules/$1',
    '^@shared/(.*)$': '<rootDir>/shared/$1',
    '^@config/(.*)$': '<rootDir>/config/$1',
  },
  preset: 'ts-jest',
  rootDir: './src',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
