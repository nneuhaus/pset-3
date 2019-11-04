const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const Amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(Amount)) {
    console.log("Invalid")
} else if (Amount < MIN || Amount > MAX) {
    console.log("Invalid")
} else {
    const Qval=0.25
    const Dval=0.10
    const Nval=0.05
    const Pval=0.01
    let Q=Math.floor(Amount/Qval)
    let Minus_q=Amount-(Q*Qval)
    let D=Math.floor(Minus_q/Dval)
    let Minus_d=Minus_q-(D*Dval)
    let N=Math.floor(Minus_d/Nval)
    let Minus_n=Minus_d-(N*Nval)
    let P=Math.ceil(Minus_n/Pval)

    console.log("\n"+Q + " quarters, "+ D + " dimes, "+ N + " nickels, and "+ P +" pennies.")
}
