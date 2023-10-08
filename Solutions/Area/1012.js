// AREA

/********************************************************************************************************************
* 
* Make a program that reads three floating point values: A, B and C. Then, calculate and show:
*     a) the area of the rectangled triangle that has base A and height C.
*     b) the area of the radius's circle C. (pi = 3.14159)
*     c) the area of the trapezium which has A and B by base, and C by height.
*     d) the area of ​​the square that has side B.
*     e) the area of the rectangle that has sides A and B.
*
* INPUT
* The input file contains three double values with one digit after the decimal point.
*
* OUTPUT
* The output file must contain 5 lines of data. 
* Each line corresponds to one of the areas described above, always with a corresponding message (in Portuguese) 
* and one space between the two points and the value. 
* The value calculated must be presented with 3 digits after the decimal point.
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

// Make a program that reads three floating point values: A, B and C.

// To read individual values on a single line:
let [A, B, C] = lines.shift().split(" ").map(item => parseFloat(item)); // Mapping of values once stored in A, B and C (conversion of text to numbers).

let pi = 3.14159;

// Then, calculate and show:
let trianguloRetangulo = (A * C) / 2; // a) the area of the rectangled triangle that has base A and height C.
let circulo = pi * Math.pow(C, 2); // b) the area of the radius's circle C. (pi = 3.14159)
let trapezio = ((A + B) * C) / 2; //b) the area of the radius's circle C. (pi = 3.14159)
let quadrado = B * B; // d) the area of ​​the square that has side B.
let retangulo = A * B; // e) the area of the rectangle that has sides A and B.

// The output file must contain 5 lines of data. Each line corresponds to one of the areas described above:
console.log("TRIANGULO: " + trianguloRetangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));