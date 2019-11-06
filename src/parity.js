const readlineSync = require("readline-sync");
const MIN = -9007199254740991;
const MAX = 9007199254740991;

const Integer = Number(readlineSync.question("\nEnter an integer: "));
if (Integer < MIN || Integer > MAX) {
    console.log("Invalid");
} else if (Integer % 2 == 0) {
	console.log("\nEven");
} else if (Integer % 2 > 0) {
	console.log("\nOdd");
} else {
    console.log("\nInvalid.")
}
