const readlineSync = require("readline-sync");

let Grade = readlineSync.question("\nEnter an letter grade: ");
let Gradelength = Grade.length();
let GradeNumber = 0;

switch (Grade.charAt(0)) {
  case 'A':
    GradeNumber = 4;

}
if (Gradelength==2) {
  switch (Grade.charAt(1)) {
    case '+':
      GradeNumber = GradeNumber + 0.33;

    case '-':
      GradeNumber = GradeNumber - 0.33;

  }
}
else if (Gradelength==1){

}
else {
  console.log("Invalid.")
}
switch (Grade.charAt(0)) {
  case 'B':
    GradeNumber = 3; }

switch (Grade.charAt(0)) {
  case 'C':
        GradeNumber = 2; }

switch (Grade.charAt(0)) {
    case 'C':
          GradeNumber = 2; }

console.log("Your gpa is" + GradeNumber)
