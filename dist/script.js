"use strict";
let firstOperand = null;
let currentOperation = null;
let waitingForOperand = false;
// Basic arithmetic operations
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
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
function squareRoot(a) {
    if (a < 0) {
        throw new Error("Square root of negative number is not allowed.");
    }
    return Math.sqrt(a);
}
function modulus(a, b) {
    if (b === 0) {
        throw new Error("Modulus by zero is not allowed.");
    }
    return a % b;
}
// Main operation dispatcher
function operate(operation, a, b = null) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        case 'squareRoot':
            return squareRoot(a);
        case 'modulus':
            return modulus(a, b);
        default:
            throw new Error("Invalid operation");
    }
}
// Display management functions
function updateDisplay(value) {
    const display = document.getElementById('display');
    display.value = value.toString();
    saveToLocalStorage(value.toString());
}
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (waitingForOperand) {
        display.value = value;
        waitingForOperand = false;
    }
    else {
        display.value += value;
    }
    saveToLocalStorage(display.value);
}
function clearDisplay() {
    updateDisplay('');
    resetCalculatorState();
}
function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        resetCalculatorState();
    }
    saveToLocalStorage(display.value);
}
// Calculator state management
function resetCalculatorState() {
    firstOperand = null;
    currentOperation = null;
    waitingForOperand = false;
}
function setOperation(operation) {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.value);
    if (firstOperand === null) {
        firstOperand = currentValue;
    }
    else if (currentOperation && !waitingForOperand) {
        const result = operate(currentOperation, firstOperand, currentValue);
        updateDisplay(result);
        firstOperand = result;
    }
    waitingForOperand = true;
    currentOperation = operation;
}
function calculateResult() {
    const display = document.getElementById('display');
    const secondOperand = parseFloat(display.value);
    if (firstOperand !== null && currentOperation) {
        console.log("Calculating:", firstOperand, currentOperation, secondOperand);
        try {
            const result = operate(currentOperation, firstOperand, secondOperand);
            updateDisplay(result);
            resetCalculatorState();
            waitingForOperand = true;
        }
        catch (error) {
            updateDisplay("Error");
            resetCalculatorState();
        }
    }
}
// Local storage functions
function saveToLocalStorage(value) {
    localStorage.setItem('calculatorValue', value);
}
function loadFromLocalStorage() {
    const savedValue = localStorage.getItem('calculatorValue');
    if (savedValue) {
        updateDisplay(savedValue);
    }
}
// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function () {
    loadFromLocalStorage();
});
//# sourceMappingURL=script.js.map