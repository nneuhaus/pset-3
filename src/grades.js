const readlineSync = require("readline-sync");

const MIN=0
const MAX=100

Grade=readlineSync.question("Enter a grade:")

if (Grade<MIN || Grade>MAX){
  console.log("\nInvalid.")
}
else if (Grade=="A"|| Grade=="A+" || Grade=="A-") {
  console.log("Your grade is 4.0.")
}
