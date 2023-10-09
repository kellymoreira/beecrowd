// COORDINATES OF A POINT

/********************************************************************************************************************
* 
* Write an algorithm that reads two floating values (x and y), which should represent the coordinates of a point in a 
* plane. 
* Next, determine which quadrant the point belongs, to or if you are at one of the Cartesian axes or the origin (x = y = * 0).
*
*                          Q2  | y Q1 x
*                         --------------
*                          Q3  |   Q4
*
* If the point is at the origin, write the message "Origem".
* If the point is at the X axis write "Eixo X", else if the point is on the Y axis write "Eixo Y".
*
* INPUT
* The input contains the coordinates of a point.
*
* OUTPUT
* The output should display the quadrant in which the point is.
*
********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// Write an algorithm that reads two floating values (x and y), which should represent the coordinates of a point in a plane.

// Read more than one value on the same line:
let [x, y] = lines[0].split(" ").map(item => parseFloat(item)); // The input contains the coordinates of a point.

// next, determine which quadrant the point belongs, to or if you are at one of the Cartesian axes or the origin (x = y = 0).

// The output should display the quadrant in which the point is.

if (x == 0 && y == 0) { // If the point is at the origin, write the message "Origem".
    console.log("Origem");

} else if (x == 0 && y != 0) { // Else if the point is at Y axis write "Eixo Y".
    console.log("Eixo Y");

} else if (x != 0 && y == 0) { // If the point is at X-axis write "Eixo X"
    console.log("Eixo X"); 

} else if (x > 0 && y > 0) {
    console.log("Q1");

} else if (x < 0 && y > 0) {
    console.log("Q2");

} else if (x < 0 && y < 0) {
    console.log("Q3");

} else if (x > 0 && y < 0) {
    console.log("Q4");

}
