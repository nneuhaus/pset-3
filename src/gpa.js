const readlineSync = require("readline-sync");

const Letter = String(readlineSync.question("\nEnter a letter grade: "));

if (Letter == "A+" || Letter == "A" || Letter == "a+" || Letter == "a") {
      console.log("\nYour GPA is 4.00.\n")

} else if  (Letter == "A-" || Letter == "a-") {
      console.log("\nYour GPA is 3.67.\n")

} else if  (Letter == "B+" || Letter == "b+") {
      console.log("\nYour GPA is 3.33.\n")

} else if  (Letter == "B"  || Letter == "b") {
      console.log("\nYour GPA is 3.00.\n")

} else if  (Letter == "B-" || Letter == "b-") {
      console.log("\nYour GPA is 2.67.\n")

} else if  (Letter == "C+" || Letter == "c+") {
      console.log("\nYour GPA is 2.33.\n")

} else if  (Letter == "C"  || Letter == "c") {
      console.log("\nYour GPA is 2.00.\n")

} else if  (Letter == "C-" || Letter == "c-") {
      console.log("\nYour GPA is 1.67.\n")

} else if  (Letter == "D+" || Letter == "d+") {
      console.log("\nYour GPA is 1.33.\n")

} else if  (Letter == "D"  || Letter == "d") {
      console.log("\nYour GPA is 1.00.\n")

} else if  (Letter == "D-" || Letter == "d-") {
      console.log("\nYour GPA is 0.67.\n")

} else if  (Letter == "F"  || Letter == "f") {
      console.log("\nYour GPA is 0.00.\n")

} else {
      console.log("\nInvalid.\n")
}
