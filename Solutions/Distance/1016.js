// DISTANCE

/********************************************************************************************************************
* 
* Two cars (X and Y) leave in the same direction. 
* The car X leaves with a constant speed of 60 km/h and the car Y leaves with a constant speed of 90 km / h.
*
* In one hour (60 minutes) the car Y can get a distance of 30 kilometers from the X car, in other words, 
* it can get away one kilometer for each 2 minutes.
*
* Read the distance (in km) and calculate how long it takes (in minutes) for the car Y to take this distance in 
* relation to the other car.
*
* INPUT
* The input file contains 1 integer value.
*
* OUTPUT
* Print the necessary time followed by the message "minutos" that means minutes in Portuguese.
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

// Two cars (X and Y) leave in the same direction. The car X leaves with a constant speed of 60 km/h and the car Y leaves with a constant speed of 90 km / h.

// To read a value on the same line
let distanceKM = parseFloat(lines.shift());

// Read the distance (in km) and calculate how long it takes (in minutes) for the car Y to take this distance in relation to the other car.
let minutesQuantity = (60 * distanceKM) / 30; // In one hour (60 minutes) the car Y can get a distance of 30 kilometers from the X car, in other words, it can get away one kilometer for each 2 minutes.

console.log(minutesQuantity + " minutos")