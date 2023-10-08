// TIME CONVERSION

/********************************************************************************************************************
* 
* Read an integer value, which is the duration in seconds of a certain event in a factory, 
* and inform it expressed in hours:minutes:seconds.
*
* INPUT
* The input file contains an integer N.
* 
* OUTPUT
* Print the read time in the input file (seconds) converted into hours:minutes:seconds.
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

// The input file contains an integer N.

// To read a single value on the same line:
let quantitySeconds = parseInt(lines.shift()); // Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours:minutes:seconds.

// 1 hour has 60 minutes and each minute has 60 seconds, so: 60 * 60 = 3600

let quantityHours = parseInt(quantitySeconds / 3600);
quantitySeconds = quantitySeconds % 3600

let quantityMinutes = parseInt(quantitySeconds / 60)
quantitySeconds = quantitySeconds % 60

console.log(quantityHours + ":" + quantityMinutes + ":" + quantitySeconds) // Print the read time in the input file (seconds) converted in hours:minutes:seconds.



