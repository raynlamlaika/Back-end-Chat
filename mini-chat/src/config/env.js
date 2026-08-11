const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = Number(process.env.DB_PORT || 5432);
const DB_NAME = process.env.DB_NAME || "mini_chat";
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "postgres";
const JWT_SECRET = process.env.JWT_SECRET || "change_me";

module.exports = {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  JWT_SECRET,
};
