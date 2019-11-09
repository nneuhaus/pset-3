const readlineSync = require ("readline-sync")
let Month = String(readlineSync.question("\nEnter a month: "));
console.log(Month)

if (Month == "January" ||Month == "january" || Month =="jan" ||Month == "Jan") {
  console.log("\n31 days.")
} else if (Month == "March" ||Month =="march" || Month =="mar" ||Month == "Mar") {
  console.log("\n31 days.")
} else if (Month == "May" ||Month =="may") {
  console.log("\n31 days.")
} else if (Month== "July" || Month =="july" ||Month == "jul" ||Month == "Jul") {
  console.log("\n 31 days.")
} else if (Month== "August" ||Month == "august" ||Month == "aug" || Month =="Aug") {
  console.log("\n 31 days.")
} else if (Month== "October" || Month =="october" || Month =="oct" || Month =="Oct") {
  console.log("\n 31 days.")
} else if (Month== "December" || Month =="december" ||Month == "dec" || Month =="Dec") {
  console.log("\n 31 days.")
} else if (Month== "April" ||Month == "april" ||Month == "apr" || Month =="Apr") {
  console.log("\n30 days.")
} else if (Month== "June" ||Month == "june" ||Month == "jun" || Month =="Jun") {
  console.log("\n 30 days.")
} else if (Month== "September" ||Month == "september" ||Month == "sep" ||Month == "Sep") {
  console.log("\n 30 days.")
} else if (Month== "November" || Month =="november" ||Month == "nov" ||Month == "Nov") {
  console.log("\n 30 days.")
} else if (Month== "February" ||Month == "february" ||Month == "feb" ||Month == "Feb") {
  console.log("\n 28 or 29 days.")
} else {
  console.log("\nInvalid.")
}
