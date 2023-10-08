// AGE IN DAYS

/********************************************************************************************************************
* 
* Read an integer value corresponding to a person's age (in days) and print it in years, months and days, 
* followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”.
*
* Note: only to facilitate the calculation, consider the whole year with 365 days and 30 days every month. 
* In the cases of test there will never be a situation that allows 12 months and some days, like 360, 363 or 364.
*
* INPUT
* The input file contains 1 integer value.
*
* OUTPUT
* Print the output.
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

// To read a single value on the same line:

// Read an integer value corresponding to a person's age (in days).
let ageInDays = parseInt(lines.shift());

let ageInYears, ageInMonths

ageInYears = parseInt(ageInDays / 365);
ageInDays = ageInDays % 365;

ageInMonths = parseInt(ageInDays / 30);
ageInDays = ageInDays % 30;

// And print it in years, months, and days, followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”.
console.log(`${ageInYears} ano(s)`);
console.log(`${ageInMonths} mes(es)`);
console.log(`${ageInDays} dia(s)`);
