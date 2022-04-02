"use strict";

// selecting elements
const calculatorGroupElem = document.querySelector(".calculator--group");
const calculatorDisplayElem = document.querySelector(
  ".calculation--display__text"
);

// internal states
let calculatorOperation = "";

// functions
const displayCalculationOperation = function (value) {
  calculatorDisplayElem.textContent = value || "Result";
};

const computeAndDisplayCalculationResult = function (value) {
  const result = eval(value);
  // reset the calculator Operation
  calculatorOperation = "";
  // set the calculator operation to the result
  calculatorOperation = String(result);
  // display operation result
  displayCalculationOperation(calculatorOperation);
};

const calculator = function (e) {
  let keyPressed;
  const target = e.target.closest(".calculator--group__key");
  keyPressed = (target && target.dataset.calcKey) || e.key;

  //  guard clause
  const allPossibleChar = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Enter",
    "Backspace",
    "C",
    "=",
    "/",
    "+",
    "*",
    "-",
    ".",
  ];
  if (!allPossibleChar.includes(keyPressed)) return;

  if (keyPressed === "C") {
    calculatorOperation = "";
    displayCalculationOperation(calculatorOperation);
  } else if (keyPressed === "=" || keyPressed === "Enter") {
    computeAndDisplayCalculationResult(calculatorOperation);
  } else if (keyPressed === "Backspace") {
    // anytime user click backspace then delete a char from the calculatorOperation
    calculatorOperation = calculatorOperation.slice(0, -1);
    displayCalculationOperation(calculatorOperation);
  } else {
    calculatorOperation += keyPressed;
    displayCalculationOperation(calculatorOperation);
  }
};

// event listeners
calculatorGroupElem.addEventListener("click", calculator);
document.addEventListener("keyup", calculator);
