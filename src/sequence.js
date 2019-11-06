const readlineSync = require("readline-sync");
const MIN = -9007199254740991;
const MAX = 9007199254740991;
const Num1 =Number(readlineSync.question("\nEnter three numbers.\n\n"));
const Num2= Number(readlineSync.question(""));
const Num3= Number(readlineSync.question(""));

if (Num1.isNaN)
{
console.log("Invalid.")
}
if (Num2.isNaN)
{
console.log("Invalid.")
}
if (Num3.isNaN)
{
console.log("Invalid.")
}
 else if (Num1 < MIN || Num1 > MAX) {
   console.log("Invalid.")
 }
 else if (Num2 < MIN || Num2 > MAX) {
   console.log("Invalid.")
 }else if (Num3 < MIN || Num3 > MAX) {
   console.log("Invalid.")
 }
else if (Num1==Num2 && Num1==Num3)
{
console.log("\nEqual.");
}
else if(Num1<Num2 && Num2<Num3){
  console.log("\nStrictly increasing. ")
}
else if(Num1<Num2 && Num2==Num3){
  console.log("\nIncreasing.")
}
else if (Num2<Num3 && Num1==Num2){
  console.log("\nIncreasing.")
}
//
else if(Num1>Num2 && Num2>Num3){
  console.log("\nStrictly decreasing. ")
}
else if(Num1>Num2 && Num2==Num3){
  console.log("\nDecreasing.")
}
else if (Num2>Num3 && Num1==Num2){
  console.log("\nDecreasing.")
}
else if(Num2>Num3 && Num3<Num1) {
  console.log("\nUnordered")
}
else if(Num2<Num3 && Num3>Num1) {
  console.log("\nUnordered")
}
else if(Num1>Num2 && Num2<Num3) {
  console.log("\nUnordered")
}
else if(Num1<Num2 && Num2>Num3) {
  console.log("\nUnordered")
}
