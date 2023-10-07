// SIMPLE PRODUCT
/***************************************************************************************************
* 
* Read two integer values. 
* After this, calculate the product between them and store the result in a variable named PROD. 
* Print the result.
*
* INPUT
* The input file contains 2 integer numbers.
*
* OUTPUT
* Print the message "PROD" with a blank space before and after the equal signal.
*               
***************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);
console.log(lines);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// To read individual values on more than one line:

// Read two integer values.
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

// After this, calculate the product between them and store the result in a variable named PROD.
let PROD = A * B;

// Print the message "PROD="
console.log("PROD = " + PROD);
