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
const { errorHandler } = require("./middlewares/error.middleware");
const { authMiddleware } = require("./middlewares/auth.middleware");

const { userRoutes } = require("./routes/users");
const { messageRoutes } = require("./routes/messages");
const { channelRoutes } = require("./routes/channels");

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
app.use("/api/channels", channelRoutes);
// error handler
app.use(errorHandler);

module.exports = app;



