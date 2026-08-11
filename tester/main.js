// test.js
const fs = require("fs");

setInterval(() => {
    fs.readFile("/etc/hosts", () => {
        console.log("file read");
    });
}, 1000);