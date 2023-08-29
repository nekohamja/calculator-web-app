// PREMADE VALUES
let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let resetScreenSwitch = false;

// DOM SELECTORS
const numberButtons = document.querySelectorAll("[number]");
const operatorButtons = document.querySelectorAll("[operator]");
const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelector(".delete-button");
const percentButton = document.querySelector(".percent-button");
const pointButton = document.querySelector(".point-button");
const integerButton = document.querySelector(".integer-button");
const equalButton = document.querySelector(".equal-button");
const previousEquationBar = document.querySelector(".previous");
const currentEquationBar = document.querySelector(".current");

// EVENT LISTENERS
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
percentButton.addEventListener("click", percent);
pointButton.addEventListener("click", appendPoint);
integerButton.addEventListener("click", integer);
equalButton.addEventListener("click", evaluate);
numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);
operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);

// FUNCTIONS
function appendNumber(number) {
  if (currentEquationBar.textContent === "0" || resetScreenSwitch == true)
    resetScreen();
  currentEquationBar.textContent += number;
}

function setOperation(operator) {
  if (currentOperator !== null) evaluate();
  firstNumber = currentEquationBar.textContent;
  currentOperator = operator;
  previousEquationBar.textContent = `${firstNumber} ${currentOperator}`;
  resetScreenSwitch = true;
}

function evaluate() {
  if (currentOperator === null || resetScreenSwitch == true) return;
  if (currentOperator === "÷" && currentEquationBar.textContent === "0") {
    previousEquationBar.textContent = "Dividing to zero not possible.";
    currentOperator = null;
    return;
  }
  secondNumber = currentEquationBar.textContent;
  currentEquationBar.textContent = roundResult(
    operate(currentOperator, firstNumber, secondNumber)
  );
  previousEquationBar.textContent = `${firstNumber} ${currentOperator} ${secondNumber} =`;
  currentOperator = null;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return a + b;
    case "−":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      if (b === 0) return null;
      else return a / b;
    default:
      return null;
  }
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function clear() {
  currentEquationBar.textContent = "0";
  previousEquationBar.textContent = "";
  firstNumber = "";
  secondNumber = "";
  currentOperator = null;
}

function resetScreen() {
  currentEquationBar.textContent = "";
  resetScreenSwitch = false;
}

function deleteNumber() {
  currentEquationBar.textContent = currentEquationBar.textContent
    .toString()
    .slice(0, -1);
}

function integer() {
  const number = currentEquationBar.textContent;
  if (number > 0)
    currentEquationBar.textContent = `-${currentEquationBar.textContent}`;
  else
    currentEquationBar.textContent = Math.abs(currentEquationBar.textContent);
}

function percent() {
  currentEquationBar.textContent =
    parseFloat(Number(currentEquationBar.textContent)) / 100;
}

function appendPoint() {
  if (resetScreenSwitch == true) resetScreen();
  if (currentEquationBar.textContent === "")
    currentEquationBar.textContent = "0";
  if (currentEquationBar.textContent.includes(".")) return;
  currentEquationBar.textContent += ".";
}
