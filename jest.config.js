'use strict';

module.exports = {
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    'node_modules/*',
  ],
  modulePaths: [
    'assets',
    'assets/js',
    'assets/js/app',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  setupFiles: [
    './jest-setup.js',
  ],
  collectCoverageFrom: [
    'assets/js/**/*.{js,jsx}',
  ],
  coveragePathIgnorePatterns: [
    'assets/js/store.js',
    'assets/js/index.js',
    'assets/js/jquery-index.js',
    'assets/js/constants/*',
    'assets/js/pages/*',
    'assets/js/tests/*',
  ],
  coverageThreshold: {
    global: {
      statements: 10,
    },
  },
};
