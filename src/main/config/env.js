module.exports = {
  mongoUrl: global.__MONGO_URI__ || 'mongodb://localhost:27017/clean-node-api',
  tokenSecret: process.env.TOKEN_SECRET || 'secret'
}
