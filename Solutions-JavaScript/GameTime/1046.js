// GAME TIME

/******************************************************************************************************************
* 
* Read the start time and end time of a game, in hours.
* Then calculate the duration of the game, knowing that the game can begin in a day and finish in another day, 
* with a maximum duration of 24 hours. 
* The message must be printed in Portuguese “O JOGO DUROU X HORA(S)” which means “THE GAME LASTED X HOUR(S)”
*
* INPUT
* Two integer numbers representing the start and end time of a game.
*
* OUTPUT
* Print the duration of the game as in the sample output.
*
******************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// Two integer numbers representing the start and end time of a game.
let [startTimeHoursGame, endTimeHoursGame] = lines[0].split(" ").map(item => parseInt(item));

if (startTimeHoursGame < endTimeHoursGame) {
    totalHoursGame = endTimeHoursGame - startTimeHoursGame;

} else {
    totalHoursGame = (24 - startTimeHoursGame) + endTimeHoursGame;
}

console.log(`O JOGO DUROU ${totalHoursGame} HORA(S)`);
