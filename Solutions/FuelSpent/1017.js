// FUEL SPENT

/********************************************************************************************************************
* 
* Little John wants to calculate and show the amount of spent fuel liters on a trip, using a car that does 12 Km/L. 
* For this, he would like you to help him through a simple program. 
* To perform the calculation, you have to read spent time (in hours) and the same average speed (km/h). 
* In this way, you can get distance and then, calculate how many liters would be needed. 
* Show the value with three decimal places after the point.
*
* INPUT
* The input file contains two integers. 
* The first one is the spent time in the trip (in hours). 
* The second one is the average speed during the trip (in Km/h).
*
* OUTPUT
* Print how many liters would be needed to do this trip, with three digits after the decimal point.
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

// The input file contains two integers.

// To read individual values in more than one line:
let timeSpentHours = parseInt(lines.shift()); // The first one is the spent time in the trip (in hours).
let averageSpeed = parseInt(lines.shift()); // The second one is the average speed during the trip (in Km/h).

// To perform the calculation, you have to read spent time (in hours) and the same average speed (km/h). In this way, you can get distance and then, calculate how many liters would be needed.
let totalTraveled = timeSpentHours * averageSpeed;

let fuelSpent = totalTraveled / 12; // Divided by 12, as the car achieves 12 km/l.

console.log(fuelSpent.toFixed(3)); // Show the value with three decimal places after the point.
