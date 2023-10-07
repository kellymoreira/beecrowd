// AVERAGE 1
/********************************************************************************************************************
* 
* Read two floating points' values of double precision A and B, corresponding to two student's grades.
* After this, calculate the student's average, considering that grade A has weight 3.5 and B has weight 7.5. 
* Each grade can be from zero to ten, always with one digit after the decimal point. 
*
* Don’t forget to print the end of line after the result, otherwise you will receive “Presentation Error”.
*
* INPUT
* The input file contains 2 floating points' values with one digit after the decimal point.
*
* OUTPUT
* Print the message "MEDIA" and the student's average with 5 digits after the decimal point and
* with a blank space before and after the equal signal.
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

// read two floating points' values of double precision A and B, corresponding to two student's grades.
let gradeA = parseFloat(lines.shift());
let gradeB = parseFloat(lines.shift());

// After this, calculate the student's average, considering that grade A has weight 3.5 and B has weight 7.5.
let MEDIA = ((gradeA * 3.5) + (gradeB * 7.5)) / 11;

// Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, with 5 digits after the decimal point and with a blank space before and after the equal signal.
console.log("MEDIA = " + MEDIA.toFixed(5));
