// DIFFERENCE

/**************************************************************************************************************
* 
* Read four integer values named A, B, C, and D. 
* Calculate and print the difference of product A and B by the product of C and D (A * B - C * D).
*
* INPUT
* The input file contains 4 integer values.
*
* OUTPUT
* Print DIFERENCA with all the capital letters, with a blank space before and after the equal signal.
*               
**************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);
console.log(lines);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// To read individual values on more than one line:

// Read four integer values named A, B, C and D.
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());
let D = parseInt(lines.shift());

// Calculate and print the difference of product A and B by the product of C and D (A * B - C * D).
let DIFERENCA = (A * B - C * D); 

// Print DIFERENCA (DIFFERENCE in Portuguese) with all the capital letters.
console.log("DIFERENCA = " + DIFERENCA);


