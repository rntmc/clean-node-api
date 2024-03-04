const config = {
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: '@shelf/jest-mongodb'
}

module.exports = config
