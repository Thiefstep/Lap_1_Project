const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const questionEl = document.getElementById("question");
const yellowEl = document.getElementById("yellow");
const redEl = document.getElementById("red");
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highscore");

// Game variables
let snake;
let food;
let score;
// let highscore;
let highscore = 0;
let direction;
let gameInterval;
