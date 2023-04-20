const { describe } = require('yargs');
const {init, update, checkCollison, moveSnake, drawGame, drawSnake, drawFood, createFood, resetGame, updateScore, displayQuestion} = require('./game.js');

describe("createFood", () => {
    it('should create food at a random position', () => {
        const food = [];
        createFood(food);
        expect(food.length).toBe(1);
        expect(food[0].x).toBeGreaterThanOrEqual(0);
        expect(food[0].x).toBeLessThan(600);
        expect(food[0].y).toBeGreaterThanOrEqual(0);
        expect(food[0].y).toBeLessThan(600);
    });
});
