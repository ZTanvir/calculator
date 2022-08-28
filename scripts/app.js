/*
 * Basic calculator calculation function
 */
let add = (number1, number2) => number1 + number2;
let subtract = (number1, number2) => number1 - number2;
let multiply = (number1, number2) => number1 * number2;
let divide = (number1, number2) => number1 / number2;

// Calculate number based on symbol passed
let operate = (symbol, num1, num2) => {
  if (symbol === "+") {
    return add(num1, num2);
  } else if (symbol === "-") {
    return subtract(num1, num2);
  } else if (symbol === "*") {
    return multiply(num1, num2);
  } else if (symbol === "/") {
    return divide(num1, num2);
  }
};


