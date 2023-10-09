// GAME WITH MINUTES

/********************************************************************************************************************
* 
* Read the start time and end time of a game, in hours and minutes (initial hour, initial minute, final hour, final 
* minute). 
* Then print the duration of the game, knowing that the game can begin in a day and finish in another day,
*
* Obs.: With a maximum game time of 24 hours and the minimum game time of 1 minute.
*
* INPUT
* Four integer numbers representing the start and end time of the game.
*
* OUTPUT
* Print the duration of the game in hours and minutes, in this format: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . 
* Which means: the game lasted XXX hour(s) and YYY minutes.
*
********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// Read the start time and end time of a game, in hours and minutes (initial hour, initial minute, final hour, final minute)

 // Four integer numbers representing the start and end time of the game.
let [initialHour, initialMinute, finalHour, finalMinute] = lines[0].split(" ").map(item => parseInt(item));

// 1 Hour has 60 minutes.

initialMinute += initialHour * 60;

finalMinute += finalHour * 60;

let time = finalMinute - initialMinute;

// Here we have the total time in minutes.
if (time <= 0) { 
    time += 24 * 60
}

let hour = time / 60;
let minute = time % 60;

console.log(`O JOGO DUROU ${Math.floor(hour)} HORA(S) E ${Math.floor(minute)} MINUTO(S)`);