
var userInput = parseInt(prompt("Enter your birthdate month (1-12):"));

var month;
if (userInput === 1) {
  month = "January";
} else if (userInput === 2) {
  month = "February";
} else if (userInput === 3) {
  month = "March";
} else if (userInput === 4) {
  month = "April";
} else if (userInput === 5) {
  month = "May";
} else if (userInput === 6) {
  month = "June";
} else if (userInput === 7) {
  month = "July";
} else if (userInput === 8) {
  month = "August";
} else if (userInput === 9) {
  month = "September";
} else if (userInput === 10) {
  month = "October";
} else if (userInput === 11) {
  month = "November";
} else if (userInput === 12) {
  month = "December";
} else {
  month = "Invalid input";
}

console.log("The input:", userInput);
console.log("The output:", month);
