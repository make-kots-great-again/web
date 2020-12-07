const env = Object.freeze({ ...process.env })

module.exports = {
  dev: {
    dialect: 'postgres',
    username: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    database: env.POSTGRES_DB,
    host: env.POSTGRES_HOST,
    port: 5432,
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    dialect: 'postgres',
    username: 'postgres',
    password: 'postgres',
    database: 'kots_test',
    host: 'localhost',
    port: 5432
  },
  production: {
    url: env.DATABASE_URL,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}
