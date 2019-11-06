const readlineSync = require ("readline-sync")
let Month = readlineSync.question("\nEnter a month: ");
console.log(Month)

if (Month == "January" ||"january" || "jan" || "Jan") {
  console.log("\n31 days.")
} else if (Month == "March" ||"march" || "mar" || "Mar") {
  console.log("\n31 days.")
} else if (Month == "May" ||"may") {
  console.log("\n31 days.")
} else if (Month== "July" || "july" || "jul" || "Jul") {
  console.log("\n 31 days.")
} else if (Month== "August" || "august" || "aug" || "Aug") {
  console.log("\n 31 days.")
} else if (Month== "October" || "october" || "oct" || "Oct") {
  console.log("\n 31 days.")
} else if (Month== "December" || "december" || "dec" || "Dec") {
  console.log("\n 31 days.")
} else if (Month== "April" || "april" || "apr" || "Apr") {
  console.log("\n30 days.")
} else if (Month== "June" || "june" || "jun" || "Jun") {
  console.log("\n 30 days.")
} else if (Month== "September" || "september" || "sep" || "Sep") {
  console.log("\n 30 days.")
} else if (Month== "November" || "november" || "nov" || "Nov") {
  console.log("\n 30 days.")
} else if (Month== "February" || "february" || "feb" || "Feb") {
  console.log("\n 28 or 29 days.")
} else {
  console.log("\nInvalid.")
}
