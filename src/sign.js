const readlineSync = require("readline-sync");
const MIN = -9007199254740991;
const MAX = 9007199254740991;

const Number = readlineSync.question("\nEnter a number: \n");
if (Number.isNaN) {
    console.log("\nInvalid");
} else if (Number < MIN || Number > MAX) {
    console.log("\nInvalid.");
} else if (Number>0){
  console.log("\nPositive.");
} else if (Number<0){
  console.log("\nNegative.");
} else {
  console.log("\nZero.");
}
