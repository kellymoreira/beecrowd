// SALARY WITH BONUS

/**********************************************************************************************************************
* 
* Make a program that reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the 
* month (in money).
* Considering that this seller receives 15% over all products sold, write the final salary (total) of this seller at the 
* end of the month , with two decimal places.
*
*     - Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.
*     - Don’t forget the blank spaces.
*
* INPUT
* The input file contains a text (employee's first name), and two double precision values, that are the seller's salary 
* and the total value sold by him/her.
*
* OUTPUT
* Print the seller's total salary.
*
**********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);
console.log(lines);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// To read individual values on more than one line:

// Make a program that reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the month (in money).
let seller = (lines.shift());
let fixedSalary = parseFloat(lines.shift());
let totalSales = parseFloat(lines.shift());

// Considering that this seller receives 15% over all products sold.
let commission = totalSales * 0.15; 

let totalSalary = fixedSalary + commission; 
 
// Write the final salary (total) of this seller at the end of the month , with two decimal places.
console.log("TOTAL = R$ " + totalSalary.toFixed(2));