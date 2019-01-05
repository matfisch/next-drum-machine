module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '(components|lib|pages|)/**/*.js',
    '!<rootDir>/lib/constants/**/*.js',
  ],
  testURL: 'http://test.com/foo',
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
};
