// Function explanations:

// init: Initializes the game by setting up the snake, food, score, direction, and game interval. It also displays a question.
// update: Updates the game by moving the snake, checking for collisions, and drawing the game elements.
// moveSnake: Moves the snake by adding a new segment in the current direction and removing the last segment. If the snake eats food, it grows and doesn't remove the last segment.
// checkCollision: Checks if the snake has collided with the walls or itself. If a collision occurs, it resets the game.
// drawGame: Clears the canvas and redraws the snake and food.
// drawSnake: Draws the snake on the canvas.
// drawFood: Draws the food on the canvas.
// createFood: Creates new food items with random positions and assigns the correct and incorrect colors based on the current question.
// resetGame: Resets the game by clearing the game interval, resetting the snake and direction, and setting the score to 0.
// updateScore: Updates the score and highscore elements in the DOM.
// displayQuestion: Displays a random question and assigns the correct and incorrect answers to the yellow and red elements. It also creates new food items

const { JSDOM } = require('jsdom');
const { init, update, checkCollision, drawGame, drawSnake, drawFood, createFood, resetGame, updateScore, displayQuestion } = require('./game');

const { window } = new JSDOM('<!DOCTYPE html><canvas id="gameCanvas"></canvas><div id="question"></div><div id="yellow"></div><div id="red"></div><div id="score"></div><div id="highscore"></div>');
const { document } = window;

global.document = document;
global.window = window;

describe('Game functions', () => {
    test('All functions should exist and be functions', () => {
      const functions = {
        init,
        update,
        checkCollision,
        drawGame,
        drawSnake,
        drawFood,
        createFood,
        resetGame,
        updateScore,
        displayQuestion,
      };
  
      for (const functionName in functions) {
        expect(functions[functionName]).toBeDefined();
        expect(typeof functions[functionName]).toBe('function');
      }
    });
  });

  test('drawSnake should draw the snake on the canvas', () => {
    // Set up your test environment and run the function
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillRect = jest.fn();

    const snake = [{ x: 0, y: 0 }];
    drawSnake(snake, ctx);

    // Check if fillRect was called with the correct arguments
    expect(ctx.fillRect).toHaveBeenCalledWith(0, 0, 20, 20);
  });

  test('updateScore should update the score and highscore elements', () => {
    // Set up your test environment and run the function
    const scoreEl = document.getElementById('score');
    const highscoreEl = document.getElementById('highscore');
    const score = 5;
    const highscore = 10;

    updateScore(score, highscore, scoreEl, highscoreEl);

    // Check if the score and highscore elements were updated correctly
    expect(scoreEl.textContent).toBe('Score: 5');
    expect(highscoreEl.textContent).toBe('Highscore: 10');
  });

  test('drawFood should draw food items on the canvas', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillRect = jest.fn();

    const food = [{ x: 0, y: 0, color: 'yellow' }, { x: 20, y: 20, color: 'red' }];
    drawFood(food, ctx);

    expect(ctx.fillRect).toHaveBeenCalledWith(0, 0, 20, 20);
    expect(ctx.fillRect).toHaveBeenCalledWith(20, 20, 20, 20);
  });

  test('resetGame should reset the game', () => {
    const gameInterval = setInterval(() => {}, 100);
    const snake = [{ x: 300, y: 300 }];
    const direction = { x: 0, y: 0 };
    const score = 5;

    resetGame(gameInterval, snake, direction, score);

        // ... Continuation from the previous code

        expect(clearInterval).toHaveBeenCalledWith(gameInterval);
        expect(snake).toHaveLength(1);
        expect(direction).toEqual({ x: 0, y: 0 });
        expect(score).toBe(0);
      });
    
      test('createFood should create new food items with random positions and colors', () => {
        const yellowEl = document.getElementById('yellow');
        const redEl = document.getElementById('red');
        yellowEl.textContent = 'Answer A';
        redEl.textContent = 'Answer B';
    
        createFood(yellowEl, redEl);
    
        expect(food).toHaveLength(2);
        expect(food[0].x % 20).toBe(0);
        expect(food[0].y % 20).toBe(0);
        expect(food[1].x % 20).toBe(0);
        expect(food[1].y % 20).toBe(0);
        expect(food[0].color).toMatch(/^(yellow|red)$/);
        expect(food[1].color).toMatch(/^(yellow|red)$/);
        expect(food[0].color).not.toBe(food[1].color);
      });
    
      test('displayQuestion should display a random question and assign correct and incorrect answers', () => {
        const questionEl = document.getElementById('question');
        const yellowEl = document.getElementById('yellow');
        const redEl = document.getElementById('red');
    
        displayQuestion(questions, questionEl, yellowEl, redEl);
    
        const displayedQuestion = questions.find((q) => q.question === questionEl.textContent);
        expect(displayedQuestion).toBeDefined();
    
        const correctColor = yellowEl.textContent === displayedQuestion.correct ? 'yellow' : 'red';
        const incorrectColor = correctColor === 'yellow' ? 'red' : 'yellow';
    
        expect(yellowEl.style.color).toBe('yellow');
        expect(redEl.style.color).toBe('red');
    
        const correctFood = food.find((foodItem) => foodItem.color === correctColor);
        const incorrectFood = food.find((foodItem) => foodItem.color === incorrectColor);
    
        expect(correctFood).toBeDefined();
        expect(incorrectFood).toBeDefined();
      });
    



