// Select Elements
let processScreenEl = document.querySelector(".calculate-process");
let resultScreenEl = document.querySelector(".calculate-result");

// Store the number when user clicked it
let storeDisplayNumber = 0;
// Store the symbol when it is clicked
let symbol = "";

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
/* Number buttons */

let numbers = document.querySelectorAll(".number");
// Convert node list to array
let allNumbers = [...numbers];
//allNumbers.forEach(item => console.log(item.textContent));

// Display and store a number when user click on it
function displayNumberOnClick(e) {
  let itemTextContent = e.target.textContent;
  resultScreenEl.textContent = itemTextContent;
  storeDisplayNumber = Number(itemTextContent);
}

// Add click method to button with numbers  0 - 9

allNumbers.forEach((button) =>
  button.addEventListener("click", displayNumberOnClick)
);

/* Symbol buttons */
// Select all symbol button
let allSymbol = document.querySelectorAll(".symbol");
let allSymbolarr = [...allSymbol];

// Add click method to symbol +,-,*,/
function storeSymbol(e) {
  let symbolIs = e.target.textContent;
  symbol = symbolIs;
}

allSymbolarr.forEach((item) => item.addEventListener("click", storeSymbol));
