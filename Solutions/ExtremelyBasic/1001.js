// EXTREMELY BASIC

/******************************************************************************************************************
* 
* Read 2 variables, named A and B, and make the sum of these two variables, assigning its result to the variable X.
* Print X as shown below. Print the endline after the result otherwise, you will get “Presentation Error”.
*
* INPUT
* The input file will contain 2 integer numbers.
*
* OUTPUT
* Print the letter X (uppercase) with a blank space before and after the equal signal followed by the value.
*               
******************************************************************************************************************/

const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

let a, b, x;

a = parseInt(lines[0]); // Reads the first entry.
b = parseInt(lines[1]); // Reads the second entry.

x = a + b;

console.log("X = " + x)
