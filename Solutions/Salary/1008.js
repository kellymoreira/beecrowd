// SALARY

/********************************************************************************************************************
* 
* Write a program that reads an employee's number, his/her worked hours number in a month 
* and the amount he received per hour. 
* Print the employee's number and salary that he/she will receive at end of the month, with two decimal places.
*
*     -> Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.
*     -> Don’t forget the space before and after the equal signal and after the U$.
*
* INPUT
* The input file contains 2 integer numbers and 1 value of floating point, representing the number, 
* worked hours amount and the amount the employee receives per worked hour.
*
* OUTPUT
* Print the number and the employee's salary, with a blank space before and after the equal signal.
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

// The input file contains 2 integer numbers and 1 value of floating point, representing the number, worked hours amount and the amount the employee receives per worked hour.
let number = parseInt(lines.shift());
let numberHoursWorked = parseInt(lines.shift());
let valueHoursWorked = parseFloat(lines.shift());

let salary = numberHoursWorked * valueHoursWorked;

// Print the employee's number and salary that he/she will receive at end of the month, with two decimal places.
console.log("NUMBER = " + number);
console.log("SALARY = U$ " + salary.toFixed(2));







