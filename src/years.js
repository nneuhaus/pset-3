const readlineSync = require("readline-sync");

Year=readlineSync.question("\nEnter a year:\n")

if (Year % 4==0) {
  if (Year % 100 == 0) {
    if (Year % 400 == 0) {
      console.log("\n" + Year + " is a leap year.")
    } else {
      console.log("\n" + Year + " is not a leap year.")
    }
  } else {
    console.log("\n" + Year + " is a leap year.")
  }
}
else if (Year.NaN) {
  console.log("Invalid.") }

  else {
  console.log("\n" + Year + " is not a leap year.")
}
