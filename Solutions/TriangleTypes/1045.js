// TRIANGLE TYPES

/**********************************************************************************************************************
* 
* Read 3 double numbers (A, B, and C) representing the sides of a triangle and arrange them in decreasing order, 
* so that side A is the biggest of the three sides. 
* Next, determine the type of triangle that they can make, based on the following cases always writing an appropriate * message:
*
*       -> if A ≥ B + C, write the message: NAO FORMA TRIANGULO
*       -> if A2 = B2 + C2, write the message: TRIANGULO RETANGULO
*       -> if A2 > B2 + C2, write the message: TRIANGULO OBTUSANGULO
*       -> if A2 < B2 + C2, write the message: TRIANGULO ACUTANGULO
*       -> if the three sides are the same size, write the message: TRIANGULO EQUILATERO
*       -> if only two sides are the same and the third one is different, write the message: TRIANGULO ISOSCELES
* INPUT
* The input contains three double numbers, A (0 < A), B (0 < B), and C (0 < C).
*
* OUTPUT
* Print all the classifications of the triangle presented in the input.
*
*********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// Read 3 double numbers (A, B and C) representing the sides of a triangle.
let [A, B, C] = lines[0].split(" ").map(item => parseFloat(item)); 

// These variables are to be arranged in descending order so that A is the largest of the three numbers.
let [X, Y, Z] = lines[0].split(" ").map(item => parseFloat(item));

// question ? response_if_yes : response_if_no

// Arrange them in decreasing order, so that side A is the biggest of the three sides.

if (X >= Y && X >= Z) {
    A = X;
    B = (Y >= Z) ? Y : Z;
    C = (Y >= Z) ? Z : Y;
} else if (Y >= X && Y >= Z) {
    A = Y;
    B = (X >= Z) ? X : Z;
    C = (X >= Z) ? Z : X;
} else {
    A = Z;
    B = (X >= Y) ? X : Y;
    C = (X >= Y) ? Y : X;
}

// Determine the type of triangle that they can make, based on the following cases always writing an appropriate message.

if (A >= B + C) { // If A ≥ B + C, write the message: NAO FORMA TRIANGULO
    console.log('NAO FORMA TRIANGULO');

} else if (Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2)) { // If A2 = B2 + C2, write the message: TRIANGULO RETANGULO
    console.log('TRIANGULO RETANGULO');

} else if (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)) { // If A2 > B2 + C2, write the message: TRIANGULO OBTUSANGULO
    console.log('TRIANGULO OBTUSANGULO');

    if (A === B && B === C) { // If A2 < B2 + C2, write the message: TRIANGULO ACUTANGULO
        console.log('TRIANGULO EQUILATERO');

    } else if (A === B || A === C || C === B) { // If the three sides are the same size, write the message: TRIANGULO EQUILATERO
        console.log('TRIANGULO ISOSCELES');
    }
} else if (Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2)) { // If only two sides are the same and the third one is different, write the message: TRIANGULO ISOSCELES
    console.log('TRIANGULO ACUTANGULO');
    if (A === B && B === C) {
        console.log('TRIANGULO EQUILATERO');
    } else if (A === B || A === C || C === B) {
        console.log('TRIANGULO ISOSCELES');
    }
}
