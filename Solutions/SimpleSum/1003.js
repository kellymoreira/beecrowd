// SIMPLE SUM
/*****************************************************************************************************************
* 
* Read two integer values, in this case, the variables A and B.
* After this, calculate the sum between them and assign it to the variable SOMA.
* Write the value of this variable.
*
* INPUT
* The input file contains 2 integer numbers.
*
* OUTPUT
* Print the message "SOMA" followed by the corresponding value to the sum of A and B. 
* Like all the problems, don't forget to print the end of line, otherwise you will receive "Presentation Error"
*               
*****************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);
console.log(lines);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// To read individual values on the same line:

// Read two integer values, in this case, the variables A and B.
let A = parseInt(lines.shift()); 
let B = parseInt(lines.shift());

var SOMA = A + B; // After this, calculate the sum between them and assign it to the variable SOMA.

console.log("SOMA = " + SOMA); // Print the message "SOMA" with all the capital letters, with a blank space before and after the equal signal followed by the corresponding value to the sum of A and B.
