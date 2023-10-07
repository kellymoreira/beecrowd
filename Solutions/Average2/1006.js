// AVERAGE 2

/********************************************************************************************************************
* 
* Read three values (variables A, B and C), which are the three student's grades. 
* Then, calculate the average, considering that grade A has weight 2, grade B has weight 3 and the grade C has weight 5
* Consider that each grade can go from 0 to 10.0, always with one decimal place.
*
* INPUT
* The input file contains 3 values of floating points (double) with one digit after the decimal point.
*
* OUTPUT
* Print the message "MEDIA" and the student's average with a blank space before and after the equal signal.
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

// To read individual values on more than one line:

// Read three values (variables A, B and C), which are the three student's grades.
// The input file contains 3 values of floating points (double) with one digit after the decimal point.
let notaA = parseFloat(lines.shift());
let notaB = parseFloat(lines.shift());
let notaC = parseFloat(lines.shift());

// Then, calculate the average, considering that grade A has weight 2, grade B has weight 3 and the grade C has weight 5.
// Consider that each grade can go from 0 to 10.0, always with one decimal place.
let MEDIA = ((notaA * 2) + (notaB * 3) + (notaC * 5)) / 10;

// Print the message "MEDIA"(average in Portuguese) and the student's average, with a blank space before and after the equal signal.
console.log("MEDIA = " + MEDIA.toFixed(1));
