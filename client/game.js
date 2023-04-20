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

// Initialize the game
function init() {
    snake = [{ x: 300, y: 300 }];
    food = [{ x: 100, y: 100, color: "yellow" }, { x: 200, y: 200, color: "red" }];
    score = 0;
    direction = { x: 0, y: 0 };
    gameInterval = setInterval(update, 100);
    displayQuestion();
}

// Update the game
function update() {
    moveSnake();
    checkCollision();
    drawGame();
}

function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);
    const eatingFoodIndex = food.findIndex((foodItem) => head.x === foodItem.x && head.y === foodItem.y);

    if (eatingFoodIndex !== -1) {
        const eatingFood = food[eatingFoodIndex];
        const correctAnswer = questions.find((q) => q.correct === yellowEl.textContent || q.correct === redEl.textContent).correct;
        const correctColor = yellowEl.textContent === correctAnswer ? "yellow" : "red";

        if (eatingFood.color === correctColor) {
            score++;
            if (score > highscore) {
                highscore = score;
            }
            displayQuestion();
        } else {
            resetGame();
        }
    } else {
        snake.pop();
    }
}
