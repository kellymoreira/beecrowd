// BHASKARA'S FORMULA

/*****************************************************************************************************************
* 
* Read 3 floating-point numbers. 
* After, print the roots of bhaskara’s formula. 
* If it's impossible to calculate the roots because a division by zero or a square root of a negative number, 
* presents the message “Impossivel calcular”.
*
* INPUT
* Read 3 floating-point numbers (double) A, B and C.
*
* OUTPUT
* Print the result with 5 digits after the decimal point or the message if it is impossible to calculate.
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

// Read 3 floating-point numbers (double) A, B and C.
let [A, B, C] = lines[0].split(" ").map(item => Number(item));

let delta = (Math.pow(B,2)) - (4 * A * C); // Calculating the delta.

// Bhaskara's formula.
let R1 = (-B + Math.sqrt(delta)) / (2 * A);
let R2 = (-B - Math.sqrt(delta)) / (2 * A);


if (delta > 0 && A > 0){ // Print the roots of bhaskara’s formula.
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
} else { // If it's impossible to calculate the roots because a division by zero or a square root of a negative number, presents the message “Impossivel calcular”.
    console.log("Impossivel calcular");
}