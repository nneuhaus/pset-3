const readlineSync = require("readline-sync");
const MIN = -9007199254740991
const MAX = 9007199254740991

const Number = readlineSync.question("\nEnter a number: ");
if (Number.isNaN) {
    console.log("Invalid")
} else if (Number < MIN || Number > MAX) {
    console.log("Invalid")
} else if (Number>0){
  console.log("Positive")
}
else if (Number<0){
  console.log("Negative")
}
else (Number=0){
  console.log("Zero")
}
