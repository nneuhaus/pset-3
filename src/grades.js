const readlineSync = require("readline-sync");

const MIN=0
const MAX=100

Grade=readlineSync.question("\nEnter a grade:\n")

if (Grade<MIN || Grade>MAX){
  console.log("\nInvalid.")
} else if (Grade>=90) {
  console.log("\nYou recieved an A\n")
}
else if ( Grade <=89 && Grade >=80){
console.log("\nYou recieved a B\n")
}
else if (Grade <=79 && Grade >=70) {
console.log("\nYou recieved a C\n")
}
else if (Grade <=69 && Grade>=60) {
console.log("\nYou recieved a D\n")
}
else if (Grade<=59 && Grade>=0) {
console.log("\nYou recieved a F\n")
} else {
  console.log("\nInvalid.")
}
