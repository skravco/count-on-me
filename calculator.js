// calculator.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

function sin(x) {
    return Math.sin(x);
}

function cos(x) {
    return Math.cos(x);
}

function log(x) {
    if (x <= 0) throw new Error("Logarithm is undefined for non-positive numbers");
    return Math.log(x);
}

function sqrt(x) {
    if (x < 0) throw new Error("Square root is undefined for negative numbers");
    return Math.sqrt(x);
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide, sin, cos, log, sqrt };

