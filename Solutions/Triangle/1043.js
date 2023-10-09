// TRIANGLE

/********************************************************************************************************************
* 
* Read three point floating values (A, B and C) and verify if is possible to make a triangle with them. 
* If it is possible, calculate the perimeter of the triangle and print the message:
*
*                          Perimetro = XX.X
*
* If it is not possible, calculate the area of the trapezium which basis A and B and C as height, and print the 
* message:
*
*                          Area = XX.X
*
* INPUT
* The input file has tree floating point numbers.
*
* OUTPUT
* Print the result with one digit after the decimal point.
* 
********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// Read three point floating values (A, B and C).

// Read more than one value on the same line:
let [A, B, C] = lines[0].split(" ").map(item => parseFloat(item)); // The input file has tree floating point numbers.

if (A < B + C && B < A + C && C < A + B) { // Verify if it is possible to make a triangle with them. If it is possible, calculate the perimeter of the triangle and print the message: Perimetro = XX.X
    let trianglePerimeterCalculation = A + B + C
    console.log(`Perimetro = ${trianglePerimeterCalculation.toFixed(1)}`)

} else {  // If it is not possible, calculate the area of the trapezium which basis A and B and C as height, and print the message:
    let trapeziumAreaCalculation = (A + B) * C / 2
    console.log(`Area = ${trapeziumAreaCalculation.toFixed(1)}`)
}



