let firstNumber = "";
let secondNumber = "";
let operator = null;

const numberButtons = document.querySelectorAll("[number]");
const operatorButtons = document.querySelectorAll("[operator]");
const integerButton = document.querySelector(".integer-button");
const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelector(".delete-button");
const equalButton = document.querySelector(".equal-button");
const pointButton = document.querySelector(".point-button");
const previousEquationBar = document.querySelector(".previous");
const currentEquationBar = document.querySelector(".current");

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
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "−":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}
