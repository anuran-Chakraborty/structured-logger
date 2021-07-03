const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

//here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.FRONTEND_PORT || 3001;
app.listen(port);
console.log(`app is listening on port: ${port}`);
