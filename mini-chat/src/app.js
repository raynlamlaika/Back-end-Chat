// the work in here will
/*
app.js
 │
 ├── express()
 │
 ├── JSON parser
 │
 ├── CORS
 │
 ├── authentication middleware
 │
 ├── routes
 │
 └── error handler
*/


const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorHandler");
const { authMiddleware } = require("./middleware/authMiddleware");
const { userRoutes } = require("./routes/userRoutes");
const { messageRoutes } = require("./routes/messageRoutes");

const app = express();

// JSON parser
app.use(express.json());

// CORS
app.use(cors());

// authentication middleware
app.use(authMiddleware);

// routes
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

// error handler
app.use(errorHandler);

module.exports = app;



