// DISTANCE BETWEEN TWO POINTS

/*************************************************************************************************************************
* 
* Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1) and p2 (x2, y2) 
* and calculate the distance between them, showing four decimal places after the comma, according to the formula:
*
*              Distance = √(x2 - x1)2 + (y2 - y1)2
*
* INPUT
* The input file contains two lines of data. 
* The first one contains two double values: x1 y1 and the second one also contains two double values with one digit after * the decimal point: x2 y2.
*
* OUTPUT
* Calculate and print the distance value using the provided formula, with 4 digits after the decimal point.
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

// get the first value from the stdin file:
let [x1, y1] = lines[0].split(" ").map(item => Number(item)); // Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1).

// get the second value from the stdin file:
let [x2, y2] = lines[1].split(" ").map(item => Number(item)); // p2 (x2, y2) and calculate the distance between them.

let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)); // The formula.

console.log(distancia.toFixed(4)); // showing four decimal places after the comma, according to the formula.
