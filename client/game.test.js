const { describe } = require("yargs");
const { init, moveSnake, checkCollision, createFood, drawGame, drawSnake, drawFood,resetGame, updateScore, displayQuestion} = require("./game.js");

describe("init", () => {

  it("Is a function", () => {
    expect(init).toBeDefined();
    expect(init instanceof Function).toEqual(true);
  });

  it("Sets up the start of the game", () => {
    expect(snake).toEqual([{ x: 300, y: 300 }]);
    expect(food).toEqual([
      { x: 100, y: 100, color: "yellow" },
      { x: 200, y: 200, color: "red" },
    ]);
    expect(score).toEqual(0);
    expect(direction).toEqual({ x: 0, y: 0 });
    expect(typeof gameInterval).toBe("number");
  });
});

describe("moveSnake", () => {
  it("Is a function", () => {
    expect(moveSnake).toBeDefined();
    expect(moveSnake instanceof Function).toEqual(true);
  });
});

describe("checkCollision", () => {
  it("Is a function", () => {
    expect(checkCollision).toBeDefined();
    expect(checkCollision instanceof Function).toEqual(true);
  });
});

describe("createFood", () => {
  it("Is a function", () => {
    expect(createFood).toBeDefined();
    expect(createFood instanceof Function).toEqual(true);
  });
    it("should create food at a random position", () => {
      const food = [];
      createFood(food);
      expect(food.length).toBe(1);
      expect(food[0].x).toBeGreaterThanOrEqual(0);
      expect(food[0].x).toBeLessThan(600);
      expect(food[0].y).toBeGreaterThanOrEqual(0);
      expect(food[0].y).toBeLessThan(600);
    });
  });

  describe("drawGame", () => {
    it("Is a function", () => {
      expect(drawGame).toBeDefined();
      expect(drawGame instanceof Function).toEqual(true);
    });
});

describe("drawSnake", () => {
    it("Is a function", () => {
      expect(drawSnake).toBeDefined();
      expect(ddrawSnake instanceof Function).toEqual(true);
    });
});

describe("drawFood", () => {
    it("Is a function", () => {
      expect(drawFood).toBeDefined();
      expect(drawFood instanceof Function).toEqual(true);
    });
});

describe("resetGame", () => {
    it("Is a function", () => {
      expect(resetGame).toBeDefined();
      expect(resetGame instanceof Function).toEqual(true);
    });
});

describe("resetGame", () => {
    it("Is a function", () => {
      expect(resetGame).toBeDefined();
      expect(resetGame instanceof Function).toEqual(true);
    });
});

describe("updateScore", () => {
    it("Is a function", () => {
      expect(updateScore).toBeDefined();
      expect(updateScore instanceof Function).toEqual(true);
    });
});

describe("displayQuestion", () => {
    it("Is a function", () => {
      expect(displayQuestion).toBeDefined();
      expect(displayQuestion instanceof Function).toEqual(true);
    });
});
