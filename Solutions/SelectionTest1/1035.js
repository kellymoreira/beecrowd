// SELECTION TEST 1

/********************************************************************************************************************
* 
* Read 4 integer values A, B, C and D. 
* Then:
*      - if B is greater than C 
*      - and D is greater than A 
*      - and if the sum of C and D is greater than the sum of A and B 
*      - and if C and D were positives values 
*      - and if A is even, write the message “Valores aceitos” (Accepted values). Otherwise, write the message 
*       “Valores nao aceitos” (Values not accepted).
* 
* INPUT
* Four integer numbers A, B, C and D.
*
* OUTPUT
* Show the corresponding message after the validation of the values​​.
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

// To read more than one individual value on the same line
let [A,B,C,D] = lines.shift().split(" "); // Read 4 integer values A, B, C and D.

if (B > C && D > A && (A + B) < (C + D) && C > 0 && D > 0 && A % 2 === 0 ) { // Then if B is greater than C and D is greater than A and if the sum of C and D is greater than the sum of A and B and if C and D were positives values and if A is even, write the message “Valores aceitos” (Accepted values). 
 console.log("Valores aceitos")
} else { // Otherwise, write the message “Valores nao aceitos” (Values not accepted).
 console.log("Valores nao aceitos")
}