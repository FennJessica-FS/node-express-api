const { add, subtract, multiply, divide, sqrt, max } = require("./math");

describe("Math module tests", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test("multiplies two numbers", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("square root using Math.sqrt", () => {
    expect(sqrt(9)).toBe(3);
  });

  test("max using Math.max", () => {
    expect(max(7, 4)).toBe(7);
  });
});
