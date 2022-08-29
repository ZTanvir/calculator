// Select Elements
let processScreenEl = document.querySelector(".calculate-process");
let resultScreenEl = document.querySelector(".calculate-result");

// Store the number user has clicked
let storeDisplayNumber = 0;

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

let numbers = document.querySelectorAll(".number");
// Convert node list to array
let allNumbers = [...numbers];
//allNumbers.forEach(item => console.log(item.textContent));

// Display and store a number when user click on it
function displayNumberOnClick(e) {
  let itemTextContent = e.target.textContent;
  resultScreenEl.textContent = itemTextContent;
  storeDisplayNumber = Number(itemTextContent);
  console.log(typeof storeDisplayNumber);
  console.log(resultScreenEl.textContent);
}

// Add click method to numbers  0 - 9 buttons
// 
allNumbers.forEach((button) =>
  button.addEventListener("click", displayNumberOnClick)
);

