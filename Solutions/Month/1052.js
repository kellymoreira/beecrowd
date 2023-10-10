// MONTH

/********************************************************************************************************************
* 
* Read an integer number between 1 and 12, including. 
* Corresponding to this number, you must print the month of the year, in english, with the first letter in uppercase.
* 
* INPUT
* The input contains only an integer number.
*
* OUTPUT
* Print the name of the month according to the input number, with the first letter in uppercase.
*
********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

let month = lines[0].split(" ").map(item => parseInt(item));

if (month == 1) {
    console.log(`January`);

} else if (month == 2) {
    console.log(`February`);

} else if (month == 3) {
    console.log(`March`);

} else if (month == 4) {
    console.log(`April`);

} else if (month == 5) {
    console.log(`May`);

} else if (month == 6) {
    console.log(`June`);

} else if (month == 7) {
    console.log(`July`);

} else if (month == 8) {
    console.log(`August`);

} else if (month == 9) {
    console.log(`September`)

} else if (month == 10) {
    console.log(`October`);

} else if (month == 11) {
    console.log(`November`);

} else if (month == 12) {
    console.log(`December`);

} else {
    console.log(`Mês não encontrado`);
}
