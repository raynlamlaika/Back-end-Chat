//  mean work flow of the index.js
/*
index.js
   │
   ├── load configuration
   ├── create/start HTTP server
   ├── connect database
   └── start listening on PORT
*/
const http = require("http");
const app = require("./app");
const { connectDB } = require("./config/db");
const { PORT } = require("./config/env");

const server = http.createServer(app);

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  });
