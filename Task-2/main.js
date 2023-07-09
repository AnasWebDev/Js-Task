
/*Prompt the user to enter an operation*/
let operation = prompt("Enter an operation (+, -, *, /):");

// Prompt the user to enter two numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// Perform the operation based on the input
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

// Print the result in the console
console.log("Result: " + result);