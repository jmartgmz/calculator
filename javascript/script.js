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


