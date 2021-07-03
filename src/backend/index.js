const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const controllers = require("./controllers");
require("./database/connect");

const app = express();
const port = process.env.BACKEND_PORT;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Server working" });
});

// Log space
app.post("/log-spaces", controllers.LogSpace.create);
app.get("/log-spaces", controllers.LogSpace.read);
app.put("/log-spaces/:id", controllers.LogSpace.update);
app.delete("/log-spaces/:id", controllers.LogSpace.delete);

// Logs
app.post("/logs", controllers.Logs.create);
app.get("/logs/:id", controllers.Logs.read);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
