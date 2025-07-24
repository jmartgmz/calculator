let firstOperand = null;
let currentOperation = null;
let waitingForOperand = false;


function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
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
    return a % b;
}

function operate(operation, a, b) {
  switch (operation) {
    case 'addition':
      return addition(a, b);
    case 'subtraction':
      return subtraction(a, b);
    case 'multiplication':
      return multiplication(a, b);
    case 'division':
      return division(a, b);
    case 'squareRoot':
      return squareRoot(a);
    case 'modulus':
      return modulus(a, b);
    default:
      throw new Error("Invalid operation");
  }
} 

function calculateResult() {
  const firstDisplayValue = document.getElementById('display').value;
  const secondDisplayValue = document.getElementById('display').value; // Assuming you want to use the same value for both operands

  console.log("Calculating result for:", firstDisplayValue);
  clearDisplay();
  let result = operate('addition', parseFloat(firstDisplayValue), parseFloat(secondDisplayValue));
  appendToDisplay(result);

}

function setOperation(operation) {
  const display = document.getElementById('display');
  
  if (firstOperand === null) {
    firstOperand = parseFloat(display.value);
  } else if (currentOperation) {
    const secondOperand = parseFloat(display.value);
    const result = operate(currentOperation, firstOperand, secondOperand);
    display.value = result;
    firstOperand = result;
  }
  
  waitingForOperand = true;
  currentOperation = operation;
}

function appendToDisplay(value) {
  const display = document.getElementById('display');
  
  if (waitingForOperand) {
    display.value = value;
    waitingForOperand = false;
  } else {
    display.value += value;
  }
  
  saveValue();
}

function calculateResult() {
  const display = document.getElementById('display');
  const secondOperand = parseFloat(display.value);
  
  if (firstOperand !== null && currentOperation) {
    console.log("Calculating result for:", firstOperand, currentOperation, secondOperand);
    
    let result = operate(currentOperation, firstOperand, secondOperand);
    display.value = result;
    
    // Reset calculator state
    firstOperand = null;
    currentOperation = null;
    waitingForOperand = true;
    
    saveValue();
  }
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
  
  // Reset calculator state
  firstOperand = null;
  currentOperation = null;
  waitingForOperand = false;
}

function deleteLastCharacter() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
  
  // If the display is empty, reset calculator state
  if (display.value === '') {
    firstOperand = null;
    currentOperation = null;
    waitingForOperand = false;
  }
} 