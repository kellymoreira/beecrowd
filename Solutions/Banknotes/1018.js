// BANKNOTES

/************************************************************************************************************************************************
* 
* In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed. 
* The possible banknotes are 100, 50, 20, 10, 5, 2 and 1. 
* Print the read value and the list of banknotes.
*
* INPUT
* The input file contains an integer value N (0 < N < 1000000).
*
* OUTPUT
* Print the read number and the minimum quantity of each necessary banknote in Portuguese language, as in the given example. 
* Do not forget to print the end of the line after each line, otherwise, you will receive a “Presentation Error”.
*
************************************************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);
console.log(lines);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// The input file contains an integer value N (0 < N < 1000000).

// To read individual values in one line:

// In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed. The possible banknotes are 100, 50, 20, 10, 5, 2 and 1. print the read value and the list of banknotes.
let integerValue = parseInt(lines.shift());
const banknotes = [100, 50, 20, 10, 5, 2, 1];

for (const notes of banknotes) {
  const quantityNotes = parseInt(integerValue / notes);
  console.log(`${quantityNotes} nota(s) de R$ ${notes.toFixed(2)}`);
  integerValue %= notes;
}

/* PERSONAL NOTES

integerValue %= notes; is a shorthand way of saying:

"Update the value of integerValue to be the remainder when integerValue is divided by notes."

Here's a simple example to illustrate how it works:

Let's say integerValue is initially 47, and notes is 10.

integerValue %= notes; would mean "47 modulo 10," which is 7 because 47 divided by 10 equals 4 with a remainder of 7.

So, after this line of code executes, integerValue would be updated to 7. 
This is done to keep track of the remaining amount after using the current banknote denomination to represent part of the original value.

The %= operator is just a shorthand way of performing the modulo operation and updating the variable in a single step. 
It's equivalent to writing integerValue = integerValue % notes;.

*/
