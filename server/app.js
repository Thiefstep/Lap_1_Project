const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const facts = require("./facts")

app.get("/", (req, res) => {
    res.send(`Welcome to the facts API! There are ${facts.length} available.`);
  });

module.exports = app
