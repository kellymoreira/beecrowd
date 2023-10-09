// SIMPLE SORT

/********************************************************************************************************************
* 
* Read three integers and sort them in ascending order. 
* After, print these values in ascending order, a blank line and then the values in the sequence as they were readed.
*
* INPUT
* The input contains three integer numbers.
* 
* OUTPUT
* Present the output as requested above.
* 
********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// Read multiple values on the same line:
let [n1, n2, n3] = lines[0].split(" ").map(item => parseInt(item)); // The input contains three integer numbers.

values = [n1, n2, n3]
valuesOriginalOrder = [n1, n2, n3]

valuesAscendingOrder = values.sort((a, b) => a - b); // Sort the values in ascending order

for (let value of valuesAscendingOrder) {
  console.log(value); // Print each sorted value.
}

console.log(""); // Print an empty line.

for (let value of valuesOriginalOrder) {
  console.log(value); // Print each value in the original order.
}