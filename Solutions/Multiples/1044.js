// MULTIPLES

/********************************************************************************************************************
* 
* Read two integer values (A and B). 
* After, the program should print the message "Sao Multiplos" (are multiples) or "Nao sao Multiplos" (aren’t 
* multiples), corresponding to the read values.
*
* INPUT
* The input has two integer numbers.
*
* OUTPUT
* Print the relative message to the input as stated above.
*
********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// Read two integer values (A and B).
 
// Read multiple values on the same line:
let [A, B] = lines[0].split(" ").map(item => parseInt(item)); // The input has two integer numbers.

// After, the program should print the message "Sao Multiplos" (are multiples) or "Nao sao Multiplos" (aren’t multiples), corresponding to the read values.

if (A % B === 0 || B % A === 0) { // // A divided by B or B divided by A to compare which of the two has something left from the division.
    console.log(`Sao Multiplos`);

} else { // To be a multiple, the result of the division must be 0, and if it is not a multiple, there must be something left over in the division process.
    console.log(`Nao sao Multiplos`);

}

/* PERSONAL NOTES

to know if a number is a multiple of another, we must divide the multiple by the number and the division must be exact (remainder equal to zero).

*/