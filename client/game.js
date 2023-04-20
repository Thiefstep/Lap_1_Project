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

function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height || snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)) {
        resetGame();
    }
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawFood();
    updateScore();
}

function drawSnake() {
    ctx.fillStyle = "lime";
    snake.forEach((segment) => {
        ctx.fillRect(segment.x, segment.y, 20, 20);
    });
}

function drawFood() {
    food.forEach((foodItem) => {
        ctx.fillStyle = foodItem.color;
        ctx.fillRect(foodItem.x, foodItem.y, 20, 20);
    });
}

function createFood() {
    const x1 = Math.floor(Math.random() * (canvas.width / 20)) * 20;
    const y1 = Math.floor(Math.random() * (canvas.height / 20)) * 20;
    const x2 = Math.floor(Math.random() * (canvas.width / 20)) * 20;
    const y2 = Math.floor(Math.random() * (canvas.height / 20)) * 20;

    const correctColor = yellowEl.textContent === questions.find((q) => q.correct === yellowEl.textContent || q.correct === redEl.textContent).correct ? "yellow" : "red";
    const incorrectColor = correctColor === "yellow" ? "red" : "yellow";

    food = [
        { x: x1, y: y1, color: correctColor },
        { x: x2, y: y2, color: incorrectColor },
    ];
}


function resetGame() {
    clearInterval(gameInterval);
    snake = [{ x: 300, y: 300 }];
    direction = { x: 0, y: 0 };
    score = 0;
    gameInterval = setInterval(update, 100);
}

function updateScore() {
    scoreEl.textContent = `Score: ${score}`;
    highscoreEl.textContent = `Highscore: ${highscore}`;
    if (score > highscore) {
        highscore = score;
    }
}

function displayQuestion() {
    let randomIndex = Math.floor(Math.random() * questions.length);
    let question = questions[randomIndex];
    let correctColor, incorrectColor;

    do {
        randomIndex = Math.floor(Math.random() * questions.length);
        question = questions[randomIndex];
        correctColor = Math.random() < 0.5 ? "yellow" : "red";
        incorrectColor = correctColor === "yellow" ? "red" : "yellow";
    } while (question.correct === question.incorrect);

    questionEl.textContent = question.question;

    if (correctColor === "yellow") {
        yellowEl.textContent = question.correct;
        redEl.textContent = question.incorrect;
    } else {
        yellowEl.textContent = question.incorrect;
        redEl.textContent = question.correct;
    }

    yellowEl.style.color = "yellow";
    redEl.style.color = "red";

    createFood();
}

// Keyboard controls
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" || event.key === "w") {
        if (direction.y === 0) {
            direction = { x: 0, y: -20 };
        }
    } else if (event.key === "ArrowDown" || event.key === "s") {
        if (direction.y === 0) {
            direction = { x: 0, y: 20 };
        }
    } else if (event.key === "ArrowLeft" || event.key === "a") {
        if (direction.x === 0) {
            direction = { x: -20, y: 0};
        }
    } else if (event.key === "ArrowRight" || event.key === "d") {
            if (direction.x === 0) {
                direction = { x: 20, y: 0 };
        }
    }
});

    // Start the game
    init(); 
