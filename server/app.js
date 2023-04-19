const logger = require("./logger");
const express = require("express");
const cors = require("cors");

let facts = require("./facts") 

const app = express();

app.use(express.json())
app.use(cors());
app.use(logger);



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

  app.get("/facts/:id", (req, res) => {
    const idx = req.params.id;
  
    const fact = facts[idx - 1];
  
    if (!fact) {
      res.status(404).json({ message: `Fact with id ${idx} not found` });
    } else {
      res.send(fact);
    }
  });

module.exports = app
