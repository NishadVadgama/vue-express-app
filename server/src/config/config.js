module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'vueexpress',
    user: process.env.DB_USER || 'vueexpress',
    password: process.env.DB_PASSWORD || 'vueexpress',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './vue-express.sqlite',
      operatorsAliases: false
    }
  }
}
