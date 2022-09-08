// Select Elements
const processScreenEl = document.querySelector(".calculate-process");
const resultScreenEl = document.querySelector(".calculate-result");
const clearEl = document.querySelector(".clear");
const allSymbol = document.querySelectorAll(".symbol");
const numbersEl = document.querySelectorAll(".number");
const equalBtnEl = document.querySelector(".equal");

// Store the number when user clicked it and
// If user not select a symbol
let numberOne = null;
let storeNumerOne = "";
// Store the symbol when it is clicked
let symbol = "";
// Store the number when user clicked it and
// when user select a symbol
let numberTwo = null;
let storeNumerTwo = "";
// Number to store pair calculation 5 * 5 = 25
let total = null;

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
  } else if (symbol === "×") {
    return multiply(num1, num2);
  } else if (symbol === "÷") {
    return divide(num1, num2);
  }
};
// Reset the calculator function
function resetAll() {
  numberTwo = null;
  storeNumerOne = "";
  storeNumerTwo = "";
  symbol = "";
  processScreenEl.textContent = "";
}

/* Number buttons */
// Convert node list to array
let allNumbers = [...numbersEl];
// Display and store a number when user click on it
function displayNumberOnClick(e) {
  if (symbol === "+" || symbol === "-" || symbol === "÷" || symbol === "×") {
    let itemTextContent = e.target.textContent;
    // Show Number after symbol(On calululator display)
    processScreenEl.textContent += itemTextContent;
    storeNumerTwo += itemTextContent;
    numberTwo = Number(storeNumerTwo);
    console.log("InputNumberTwo:", numberTwo);
  } else {
    let itemTextContent = e.target.textContent;
    // Show Number before symbol(On calululator display)
    processScreenEl.textContent += itemTextContent;
    storeNumerOne += itemTextContent;
    numberOne = Number(storeNumerOne);
    console.log("InputNumberOne:", numberOne);
  }
}
// Add click method to button with numbers  0 - 9
allNumbers.forEach((button) =>
  button.addEventListener("click", displayNumberOnClick)
);

/* Symbol buttons */
// Select all symbol button
let allSymbolarr = [...allSymbol];
// Add click method to symbol +,-,*,/
function storeSymbol(e) {
  let symbolIs = e.target.textContent;
  // Show symbol on processScreenEl(On calululator display)
  processScreenEl.textContent += symbolIs;
  if (symbol == "") {
    symbol = symbolIs;
  }

  // calculate in pair
  if (symbol === "+" || symbol === "-" || symbol === "÷" || symbol === "×") {
    if (total != null) {
      console.log("InSymbolSymbol:", symbol);
      console.log("InSymbolNumberTwo", numberTwo);
      let answer = operate(symbol, total, numberTwo);
      total = answer;
      console.log("Total:", answer);
      resultScreenEl.textContent = total;
      storeNumerTwo = "";
      symbol = symbolIs;
      console.log("End");
    }
    // when number1 and number2 has number in it
    else if (numberOne != null && numberTwo != null) {
      console.log("InSymbolNumone:", numberOne);
      console.log("InSymbolSymbol:", symbol);
      console.log("InSymbolNumberTwo", numberTwo);
      let answer = operate(symbol, numberOne, numberTwo);
      total = answer;
      resultScreenEl.textContent = total;
      console.log("Total:", answer);
      storeNumerOne = "";
      storeNumerTwo = "";
      symbol = symbolIs;
      console.log("End");
    }
  }
}
allSymbolarr.forEach((item) => item.addEventListener("click", storeSymbol));

/* Equal button */
function calculateEqual(e) {
  if (symbol === "+" || symbol === "-" || symbol === "÷" || symbol === "×") {
    if (total != null) {
      console.log("Totalbefore:", numberOne);
      console.log("Symbol:", symbol);
      console.log("NumberTwo", numberTwo);
      let answer = operate(symbol, total, numberTwo);
      // Check the number is float
      // if float limit 2 digit after decimal
      if (!Number.isInteger(answer)) {
        answer = answer.toFixed(2);
      }
      // If number / 0
      if (answer == Infinity) {
        answer = 0;
        alert("Can't divide by zero");
      }
      total = answer;
      resultScreenEl.textContent = total;
      // Reset everything
      resetAll();
      console.log("Answer:", answer);
      console.log("Total:", total);
    } else if (numberOne != null && numberTwo != null) {
      let answer = operate(symbol, numberOne, numberTwo);
      // Check the number is float
      // if float limit 2 digit after decimal
      if (!Number.isInteger(answer)) {
        answer = answer.toFixed(2);
      }
      // If number / 0
      if (answer == Infinity) {
        answer = 0;
        alert("Can't divide by zero");
      }
      resultScreenEl.textContent = answer;
      console.log("Numberone:", numberOne);
      console.log("Symbol:", symbol);
      console.log("NumberTwo", numberTwo);

      // Reset all
      resetAll();
      total = answer;
      console.log("Total", total);
    }
  }
}

equalBtnEl.addEventListener("click", calculateEqual);
// Click the clear button
function resetCalculator() {
  console.log("click clear");
  resetAll();
  resultScreenEl.textContent = 0;
}
clearEl.addEventListener("click", resetCalculator);
