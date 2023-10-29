// COMSUMPTION

/*************************************************************************************************************************
* 
* Calculate a car's average consumption being provided the total distance traveled (in Km) and the spent fuel total (in 
* liters).
*
* INPUT
* The input file contains two values: 
* one integer value X representing the total distance (in Km) and 
* the second one is a floating point number Y  representing the spent fuel total, with a digit after the decimal point.
*
* OUTPUT
* Present a value that represents the average consumption of a car with 3 digits after the decimal point, 
* followed by the message "km/l".
*
*************************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);
console.log(lines);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// The input file contains two values.

// To read a single value on the same line:
let X = parseInt(lines.shift()); // One integer value X representing the total distance (in Km).
let Y = parseFloat(lines.shift()); // And the second one is a floating point number Y representing the spent fuel total, with a digit after the decimal point.

// Calculate a car's average consumption being provided the total distance traveled (in Km) and the spent fuel total (in liters).
let consumoMedio = (X / Y);

console.log(consumoMedio.toFixed(3) + " km/l");
