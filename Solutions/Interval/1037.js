// INTERVAL

/************************************************************************************************************************
* 
* You must make a program that reads a float-point number and print a message saying in which of the following intervals
* the number belongs: [0,25] (25,50], (50,75], (75,100]. 
* If the read number is less than zero or greater than 100, the program must print the message “Fora de intervalo” 
* that means "Out of Interval".
*
* The symbol '(' represents greater than. 
* For example:
*             [0,25] indicates numbers between 0 and 25.0000, including both.
*             (25,50] indicates numbers greater than 25 (25.00001) up to 50.0000000.
*
* INPUT
* The input file contains a floating-point number.
*
* OUTPUT
* The output must be a message like the following example.
*
************************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// To read an individual value on the same line:
let valor = lines.shift();

intervalo(valor);

function intervalo(valor) {
    if (valor >= 0 && valor <= 100) {
        if (valor <= 25) {
            // Code to handle the interval [0, 25]
            console.log("Intervalo [0,25]")
        } else if (valor > 25 && valor <= 50) {
            // Code to handle the interval (25, 50]
            console.log("Intervalo (25,50]")
        } else if (valor > 50 && valor <= 75) {
            // Code to handle the interval (50, 75]
            console.log("Intervalo (50,75]")
        } else {
             // Code to handle the interval (75, 100]
            console.log("Intervalo (75,100]")
        }
    } else {
         // code to handle when valor is outside the range [0, 100]
        console.log("Fora de intervalo")
    }
        }


/* PERSONAL NOTES

- [0, 25]: This interval includes all values greater than or equal to 0 and less than or equal to 25. In other words, if the input number is between 0 and 25 (inclusive), it falls into this interval.

- (25, 50]: This interval includes all values greater than 25 and less than or equal to 50. The parentheses () indicate that 25 itself is not included in the interval, but any value greater than 25 up to and including 50 is part of this interval.

- (50, 75]: This interval includes all values greater than 50 and less than or equal to 75. Similar to the previous interval, 50 is not included, but any value greater than 50 up to and including 75 is in this interval.

- (75, 100]: This interval includes all values greater than 75 and less than or equal to 100. Again, 75 is not included, but any value greater than 75 up to and including 100 belongs to this interval.
    
*/
