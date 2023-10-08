// THE GREATEST 

/********************************************************************************************************************
*
* Make a program that reads 3 integer values and present the greatest one followed by the message "eh o maior".
* Use the following formula:
*
*                Maior AB = (a + b + abs(a-b)) / 2
*
* INPUT
* The input file contains 3 integer values.
*
* OUTPUT
* Print the greatest of these three values followed by a space and the message “eh o maior”.
*
********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);
console.log(lines);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// Make a program that reads 3 integer values.

// To read individual values on a single line:
let [A, B, C] = lines.shift().split(" ").map(item => parseInt(item)); // Mapping of values once stored in A, B and C (conversion of text to numbers).

let biggestAB = (A + B + Math.abs(A - B)) / 2; // The formula.

let biggestC = (C + biggestAB + Math.abs(C - biggestAB)) / 2;

console.log( biggestC + " eh o maior"); // Present the greatest one followed by the message "eh o maior". 