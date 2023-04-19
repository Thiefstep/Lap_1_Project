const express = require('express');
const cors = require('cors');
const questions = require('./questions.json')
const logger = require("./logger");

const app = express();
app.use(cors());
app.use(express.json())

app.use(logger);

app.get('/', (req, res) => { 
    res.send(`Welcome to the questions API! There are ${questions} available.`);
})

app.get('/questions', (req, res) => { 
    res.send(questions);
})

app.get('/questions/random', (req, res) => { 
    const randIdx = Math.floor(Math.random()* questions.length);
    res.send(questions[randIdx]);
})

app.get('/questions/:id', (req, res) => { 
    const idx = req.params.id;
    const questions = questions.find(q => q.id === idx);
    if(!questions){
        res.status(404).send({error: "Quote not found"});
    }else
    res.send(questions); 
})

module.exports = app;