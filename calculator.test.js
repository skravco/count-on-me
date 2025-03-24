const { add, subtract, multiply, divide, sin, cos, log, sqrt } = require("./calculator");

describe("Calculator Tests", () => {
    test("adds 5 + 3 to equal 8", () => {
        expect(add(5, 3)).toBe(8);
    });

    test("subtracts 10 - 4 to equal 6", () => {
        expect(subtract(10, 4)).toBe(6);
    });

    test("multiplies 3 * 3 to equal 9", () => {
        expect(multiply(3, 3)).toBe(9);
    });

    test("divides 9 / 3 to equal 3", () => {
        expect(divide(9, 3)).toBe(3);
    });
	
    // 🚀 Scientific Function Tests
    test("sin of 0 should be 0", () => {
        expect(sin(0)).toBe(0);
    });

    test("cos of 0 should be 1", () => {
        expect(cos(0)).toBe(1);
    });

    test("log of 1 should be 0", () => {
        expect(log(1)).toBe(0);
    });

    test("log of a number > 1", () => {
        expect(log(10)).toBeCloseTo(2.3026, 4);
    });

    test("throws error for log of non-positive number", () => {
        expect(() => log(0)).toThrow("Logarithm is undefined for non-positive numbers");
        expect(() => log(-5)).toThrow("Logarithm is undefined for non-positive numbers");
    });

    test("sqrt of 4 should be 2", () => {
        expect(sqrt(4)).toBe(2);
    });

    test("throws error for sqrt of negative number", () => {
        expect(() => sqrt(-4)).toThrow("Square root is undefined for negative numbers");
    });

    // 🚀 Edge Cases  
    test("adds negative numbers: -5 + (-3) = -8", () => {
        expect(add(-5, -3)).toBe(-8);
    });

    test("subtracts negative numbers: -10 - (-4) = -6", () => {
        expect(subtract(-10, -4)).toBe(-6);
    });

    test("multiplies by zero: 7 * 0 = 0", () => {
        expect(multiply(7, 0)).toBe(0);
    });

    test("divides by negative: 10 / -2 = -5", () => {
        expect(divide(10, -2)).toBe(-5);
    });

    test("handles decimal addition: 0.1 + 0.2 ≈ 0.3", () => {
        expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test("handles large numbers: 1e12 + 1e12 = 2e12", () => {
        expect(add(1e12, 1e12)).toBe(2e12);
    });

    test("throws error when dividing by zero", () => {
        expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
    });
});

