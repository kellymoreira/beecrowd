// BANKNOTES AND COINS

/********************************************************************************************************************
* 
* Read a value of floating point with two decimal places. This represents a monetary value. 
* After this, calculate the smallest possible number of notes and coins on which the value can be decomposed. 
* The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01.
* Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.
*
* INPUT
* The input file contains a value of floating point N (0 ≤ N ≤ 1000000.00).
*
* OUTPUT
* Print the minimum quantity of banknotes and coins necessary to change the initial value, as the given example.
*
********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

let monetaryValue = lines.shift();

console.log("NOTAS:")

note = 100
quantityNotes = parseInt(monetaryValue / note);
rest = monetaryValue % note;
console.log(quantityNotes + " nota(s) de R$ " + note + ".00")

note = 50
quantityNotes = parseInt(rest / note);
rest = rest % note;
console.log(quantityNotes + " nota(s) de R$ " + note + ".00")

note = 20
quantityNotes = parseInt(rest / note);
rest = rest % note;
console.log(quantityNotes + " nota(s) de R$ " + note + ".00")

note = 10
quantityNotes = parseInt(rest / note);
rest = rest % note;
console.log(quantityNotes + " nota(s) de R$ " + note + ".00")

note = 5
quantityNotes = parseInt(rest / note);
rest = rest % note;
console.log(quantityNotes + " nota(s) de R$ " + note + ".00")

note = 2
quantityNotes = parseInt(rest / note);
rest = rest % note;
console.log(quantityNotes + " nota(s) de R$ " + note + ".00")

/**************************************************************************/

console.log("MOEDAS:")
coin = 1
quantityCoins = parseInt(rest / coin);
rest = rest % coin;
console.log(quantityCoins + " moeda(s) de R$ 1.00")

rest = parseInt(rest * 100)

// 0.50 cents
coin = 50
quantityCoins = parseInt(rest / coin);
rest = rest % coin;
console.log(quantityCoins + " moeda(s) de R$ 0." + coin)

// 25 cents
coin = 25
quantityCoins = parseInt(rest / coin);
rest = rest % coin;
console.log(quantityCoins + " moeda(s) de R$ 0." + coin)

// 10 cents
coin = 10
quantityCoins = parseInt(rest / coin);
rest = rest % coin;
console.log(quantityCoins + " moeda(s) de R$ 0." + coin)

// 5 cents
coin = 5
quantityCoins = parseInt(rest / coin);
rest = rest % coin;
console.log(quantityCoins + " moeda(s) de R$ 0.0" + coin)

// 1 cents
coin = 1
quantityCoins = parseInt(rest / coin);
rest = rest % coin;
console.log(quantityCoins + " moeda(s) de R$ 0.0" + coin)