
const express = require("express");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
const app = express();
app.use(express.json()); // for the http request body parsing
require("dotenv").config({ path: "../.env" });
const {
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    JWT_SECRET,
    JWT_EXPIRES_IN
} = process.env;

const pool = new Pool({
    host: DB_HOST || "localhost",
    port: DB_PORT || 5432,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
});

async function alreadyExist(email) {
    const result = await pool.query(
        "SELECT id FROM users WHERE email = $1",
        [email]
    );

    return result.rows.length > 0;
}
async function signup(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Username, email and password are required"
        });
    }

    try {
        if (await alreadyExist(email)) {
            return res.status(409).json({
                message: "Email already exists"
            });
        }
        const result = await pool.query(
            `INSERT INTO users
                (username, email, password_hash)
             VALUES
                ($1, $2, crypt($3, gen_salt('bf')))
             RETURNING id, username, email`,
            [username, email, password]
        );
        const token = jwt.sign(
            { id: result.rows[0].id, email: result.rows[0].email },
            JWT_SECRET, {expiresIn: JWT_EXPIRES_IN}
        );

        return res.status(201).json({
            user: result.rows[0],
            token: token
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

async function login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }
    if (!await alreadyExist(email)) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }
    try
    {
        const user = await pool.query(
            `SELECT id, username, email
             FROM users
             WHERE email = $1 AND password_hash = crypt($2, password_hash)`,
            [email, password]
        );
        if (user.rows.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }
        const token = jwt.sign(
            { id: user.rows[0].id, email: user.rows[0].email },
            JWT_SECRET, {expiresIn: JWT_EXPIRES_IN}
        );
        return res.status(200).json({
            token: token
        });
    }
    catch (error) {console.error(error);}
    return res.status(500).json({
        message: "Internal server error"
    });
}
app.post("/api/auth/signup", signup);
app.post("/api/auth/login", login);




app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});