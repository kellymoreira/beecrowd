// EXTREMELY BASIC

const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

// COLAR NO BEECROWD O CÓDIGO DESTE PONTO EM DIANTE

// read 2 variables, named A and B and make the sum of these two variables, assigning its result to the variable X.

let a, b, x;

a = parseInt(lines[0]); // lê a primeira entrada.
b = parseInt(lines[1]); // lê a segunda entrada.

x = a + b;

console.log("X = " + x)

// EXTREMELY BASIC

/********************************************************************************** 
* 

* Read 2 variables, named A and B and make the sum of these two variables, assigning its result to the variable X. * * Print X as shown below. Print endline after the result otherwise you will get “Presentation Error”.


*               
**********************************************************************************/