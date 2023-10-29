// AREA OF A CIRCLE

/*****************************************************************************************************************
* 
* The formula to calculate the area of a circumference is defined as A = π. R2. 
* Considering to this problem that π = 3.14159:
*
* Calculate the area using the formula given in the problem description.
*
* INPUT
* The input contains a value of floating point (double precision), that is the variable R.
*
* OUTPUT
* Present the message "A=" followed by the value of the variable, with four places after the decimal point.
* Use double-precision variables.
*               
******************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);
console.log(lines);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

let raio = lines.shift(); // Read lines with a single value on the same line

raio = parseFloat(raio); // The input contains a value of the floating point (double precision), that is the variable R.

let area = 3.14159 * raio * raio; // The formula to calculate the area of a circumference is defined as A = π. R2. Considering this problem that π = 3.14159:

console.log("A=" + area.toFixed(4)); // Present the message "A=" followed by the value of the variable, with four places after the decimal point. Use all double-precision variables. 
