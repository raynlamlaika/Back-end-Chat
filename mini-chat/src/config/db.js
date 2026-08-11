const { Pool } = require("pg");
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = require("./env");

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
});

async function connectDB() {
  await pool.query("SELECT 1");
  return pool;
}

module.exports = {
  pool,
  connectDB,
};