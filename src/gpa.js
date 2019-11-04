const readlineSync = require("readline-sync");

const Grade = readlineSync.question("\nEnter an letter grade: ");
console.log(Grade)

if (Grade.NaI) {
console.log("Invalid.")
}
