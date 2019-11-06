const readlineSync = require("readline-sync");

const Temperature = Number(readlineSync.question("\nEnter a temperature: "));
const Scale = String(readlineSync.question("Enter a scale: "))

const FahrenheitFreezing = 32;
const FahrenheitBoiling = 212;
const CelsiusFreezing = 0;
const CelsiusBoiling = 100;
const KelvinFreezing = 273;
const KelvinBoiling = 373;


if (Temperature < (Number.MIN_SAFE_INTEGER) || Temperature > Number.MAX_SAFE_INTEGER) {
      console.log("\nInvalid.\n")

} else if (Temperature <= FahrenheitFreezing && (Scale == "F" || Scale == "f")){
      console.log("\nSolid.\n")

} else if ((Temperature > FahrenheitFreezing && Temperature < FahrenheitBoiling) && (Scale == "F" || Scale == "f")){
      console.log("\nLiquid.\n")

} else if (Temperature >= FahrenheitBoiling && (Scale == "F" || Scale == "f")){
      console.log("\nGas.\n")

} else if (Temperature <= CelsiusFreezing && (Scale == "C" || Scale == "c")){
      console.log("\nSolid.\n")

} else if ((Temperature > CelsiusFreezing && Temperature < CelsiusBoiling) && (Scale == "C" || Scale == "c")){
      console.log("\nLiquid.\n")

} else if (Temperature >= CelsiusBoiling && (Scale == "C" || Scale == "c")){
      console.log("\nGas.\n")

} else if (Temperature <= KelvinFreezing && (Scale == "K" || Scale == "k")){
      console.log("\nSolid.\n")

} else if ((Temperature > KelvinFreezing && Temperature < KelvinBoiling) && (Scale == "K" || Scale == "k")){
      console.log("\nLiquid.\n")

} else if (Temperature >= KelvinBoiling && (Scale == "K" || Scale == "k")){
      console.log("\nGas.\n")

} else {
      console.log("\nInvalid.\n")
}
