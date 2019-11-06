const readlineSync = require("readline-sync");

const Card = String(readlineSync.question("\nEnter a playing card: "));

let Spades = " of Spades.\n"
let Hearts = " of Hearts.\n"
let Diamonds = " of Diamonds.\n"
let Clubs = " of Clubs.\n"

let King = "\nKing"
let Queen = "\nQueen"
let Jack = "\nJack"
let Ten = "\nTen"
let Nine = "\nNine"
let Eight = "\nEight"
let Seven = "\nSeven"
let Six = "\nSix"
let Five = "\nFive"
let Four = "\nFour"
let Three = "\nThree"
let Two = "\nTwo"


if (Card == "AS" || Card == "as"){
    console.log(Ace.concat(Spades) + "")
} else if (Card == "AH" || Card == "ah"){
    console.log(Ace.concat(Hearts) + "")
} else if (Card == "AD" || Card == "ad"){
    console.log(Ace.concat(Diamonds) + "")
} else if (Card == "AC" || Card == "ac"){
    console.log(Ace.concat(Clubs) + "")
} else if (Card == "KS" || Card == "ks"){
    console.log(King.concat(Spades) + "")
} else if (Card == "KH" || Card == "kh"){
    console.log(King.concat(Hearts) + "")
} else if (Card == "KD" || Card == "kd"){
    console.log(King.concat(Diamonds) + "")
} else if (Card == "KC" || Card == "kc"){
    console.log(King.concat(Clubs) + "")
} else if (Card == "QS" || Card == "qs"){
    console.log(Queen.concat(Spades) + "")
} else if (Card == "QH" || Card == "qh"){
    console.log(Queen.concat(Hearts) + "")
} else if (Card == "QD" || Card == "qd"){
    console.log(Queen.concat(Diamonds) + "")
} else if (Card == "QC" || Card == "qc"){
    console.log(Queen.concat(Clubs) + "")
} else if (Card == "JS" || Card == "js"){
    console.log(Jack.concat(Spades) + "")
} else if (Card == "JH" || Card == "jh"){
    console.log(Jack.concat(Hearts) + "")
} else if (Card == "JD" || Card == "jd"){
    console.log(Jack.concat(Diamonds) + "")
} else if (Card == "JC" || Card == "jc"){
    console.log(Jack.concat(Clubs) + "")
} else if (Card == "TS" || Card == "ts"){
    console.log(Ten.concat(Spades) + "")
} else if (Card == "TH" || Card == "th"){
    console.log(Ten.concat(Hearts) + "")
} else if (Card == "TD" || Card == "td"){
    console.log(Ten.concat(Diamonds) + "")
} else if (Card == "TC" || Card == "tc"){
    console.log(Ten.concat(Clubs) + "")
} else if (Card == "9S" || Card == "9s"){
    console.log(Nine.concat(Spades) + "")
} else if (Card == "9H" || Card == "9h"){
    console.log(Nine.concat(Hearts) + "")
} else if (Card == "9D" || Card == "9d"){
    console.log(Nine.concat(Diamonds) + "")
} else if (Card == "9C" || Card == "9c"){
    console.log(Nine.concat(Clubs) + "")
} else if (Card == "8S" || Card == "8s"){
    console.log(Eight.concat(Spades) + "")
} else if (Card == "8H" || Card == "8h"){
    console.log(Eight.concat(Hearts) + "")
} else if (Card == "8D" || Card == "8d"){
    console.log(Eight.concat(Diamonds) + "")
} else if (Card == "8C" || Card == "8c"){
    console.log(Eight.concat(Clubs) + "")
} else if (Card == "7S" || Card == "7s"){
    console.log(Seven.concat(Spades) + "")
} else if (Card == "7H" || Card == "7h"){
    console.log(Seven.concat(Hearts) + "")
} else if (Card == "7D" || Card == "7d"){
    console.log(Seven.concat(Diamonds) + "")
} else if (Card == "7C" || Card == "7c"){
    console.log(Seven.concat(Clubs) + "")
} else if (Card == "6S" || Card == "6s"){
    console.log(Six.concat(Spades) + "")
} else if (Card == "6H" || Card == "6h"){
    console.log(Six.concat(Hearts) + "")
} else if (Card == "6D" || Card == "6d"){
    console.log(Six.concat(Diamonds) + "")
} else if (Card == "6C" || Card == "6c"){
    console.log(Six.concat(Clubs) + "")
} else if (Card == "5S" || Card == "5s"){
    console.log(Five.concat(Spades) + "")
} else if (Card == "5H" || Card == "5h"){
    console.log(Five.concat(Hearts) + "")
} else if (Card == "5D" || Card == "5d"){
    console.log(Five.concat(Diamonds) + "")
} else if (Card == "5C" || Card == "5c"){
    console.log(Five.concat(Clubs) + "")
} else if (Card == "4S" || Card == "4s"){
    console.log(Four.concat(Spades) + "")
} else if (Card == "4H" || Card == "4h"){
    console.log(Four.concat(Hearts) + "")
} else if (Card == "4D" || Card == "4d"){
    console.log(Four.concat(Diamonds) + "")
} else if (Card == "4C" || Card == "4c"){
    console.log(Four.concat(Clubs) + "")
} else if (Card == "3S" || Card == "3s"){
    console.log(Three.concat(Spades) + "")
} else if (Card == "3H" || Card == "3h"){
    console.log(Three.concat(Hearts) + "")
} else if (Card == "3D" || Card == "3d"){
    console.log(Three.concat(Diamonds) + "")
} else if (Card == "3C" || Card == "3c"){
    console.log(Three.concat(Clubs) + "")
} else if (Card == "2S" || Card == "2s"){
    console.log(Two.concat(Spades) + "")
} else if (Card == "2H" || Card == "2h"){
    console.log(Two.concat(Hearts) + "")
} else if (Card == "2D" || Card == "2d"){
    console.log(Two.concat(Diamonds) + "")
} else if (Card == "2C" || Card == "2c"){
    console.log(Two.concat(Clubs) + "")
} else {
  console.log("\nInvalid\n")
}
