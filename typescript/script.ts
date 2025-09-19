let firstOperand: number | null = null;
let currentOperation: string | null = null;
let waitingForOperand: boolean = false;

// Basic arithmetic operations
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function squareRoot(a: number): number {
  if (a < 0) {
    throw new Error("Square root of negative number is not allowed.");
  }
  return Math.sqrt(a);
}

function modulus(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Modulus by zero is not allowed.");
  }
  return a % b;
}

// Main operation dispatcher
function operate(operation: string, a: number, b: number | null = null): number {
  switch (operation) {
    case 'add':
      return add(a, b!);
    case 'subtract':
      return subtract(a, b!);
    case 'multiply':
      return multiply(a, b!);
    case 'divide':
      return divide(a, b!);
    case 'squareRoot':
      return squareRoot(a);
    case 'modulus':
      return modulus(a, b!);
    default:
      throw new Error("Invalid operation");
  }
}

// Display management functions
function updateDisplay(value: string | number): void {
  const display = document.getElementById('display') as HTMLInputElement;
  display.value = value.toString();
  saveToLocalStorage(value.toString());
}

function appendToDisplay(value: string): void {
  const display = document.getElementById('display') as HTMLInputElement;
  
  if (waitingForOperand) {
    display.value = value;
    waitingForOperand = false;
  } else {
    display.value += value;
  }
  
  saveToLocalStorage(display.value);
}

function clearDisplay(): void {
  updateDisplay('');
  resetCalculatorState();
}

function deleteLastCharacter(): void {
  const display = document.getElementById('display') as HTMLInputElement;
  display.value = display.value.slice(0, -1);
  
  if (display.value === '') {
    resetCalculatorState();
  }
  
  saveToLocalStorage(display.value);
}

// Calculator state management
function resetCalculatorState(): void {
  firstOperand = null;
  currentOperation = null;
  waitingForOperand = false;
}

function setOperation(operation: string): void {
  const display = document.getElementById('display') as HTMLInputElement;
  const currentValue: number = parseFloat(display.value);
  
  if (firstOperand === null) {
    firstOperand = currentValue;
  } else if (currentOperation && !waitingForOperand) {
    const result: number = operate(currentOperation, firstOperand, currentValue);
    updateDisplay(result);
    firstOperand = result;
  }
  
  waitingForOperand = true;
  currentOperation = operation;
}

function calculateResult(): void {
  const display = document.getElementById('display') as HTMLInputElement;
  const secondOperand: number = parseFloat(display.value);
  
  if (firstOperand !== null && currentOperation) {
    console.log("Calculating:", firstOperand, currentOperation, secondOperand);
    
    try {
      const result: number = operate(currentOperation, firstOperand, secondOperand);
      updateDisplay(result);
      resetCalculatorState();
      waitingForOperand = true;
    } catch (error) {
      updateDisplay("Error");
      resetCalculatorState();
    }
  }
}

// Local storage functions
function saveToLocalStorage(value: string): void {
  localStorage.setItem('calculatorValue', value);
}

function loadFromLocalStorage(): void {
  const savedValue: string | null = localStorage.getItem('calculatorValue');
  if (savedValue) {
    updateDisplay(savedValue);
  }
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function(): void {
  loadFromLocalStorage();
});
