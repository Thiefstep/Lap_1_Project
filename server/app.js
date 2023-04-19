const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let facts = require("./facts") 

app.get("/", (req, res) => {
    res.send(`Welcome to the facts API! There are ${facts.length} available.`);
  });

  app.get("/facts", (req, res) => {
    facts = facts.map((fact, i) => {
      fact["id"] = i + 1;
      return fact;
    });
    res.json(facts);
  });

  app.get("/facts/random", (req, res) => {
    const randInx = Math.floor(Math.random() * facts.length);
    res.json(facts[randInx]);
  });


module.exports = app
