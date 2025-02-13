const display = document.getElementById("display");
let operator;
let operand;

function appendToDisplay(input) {
  display.value += input;
  operand = input;
  console.log(operand);
}

function appendOperatorToDisplay(input) {
  display.value += input;
  operator = input;
  console.log(operator);
}

function clearDisplay() {
  display.value = "";
  operator = "";
  operand = "";
}

function backSpace() {
  display.value = display.value.substr(0, display.value.length - 1);
}

function appendSignToDisplay() {}

function calculate() {
  try {
    if (["+", "-", "*", "/"].includes(operator)) {
      display.value = eval(display.value);
    } else if (operator === "^") {
      display.value = operand ** 2;
    } else if (operator === "√") {
      display.value = Math.sqrt(operand);
    } else if (operator === "%") {
      display.value = operand / 100;
    }

    operator = "";
    operand = "";
  } catch (error) {
    display.value = "Error";
    operator = "";
    operand = "";
  }
}
