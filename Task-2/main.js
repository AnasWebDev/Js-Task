let operation = prompt("Enter an operation (+, -, *, /):");

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let result;
if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
} else {
  console.log("Invalid operation!");
  result = NaN;
}

console.log("Result: " + result);
