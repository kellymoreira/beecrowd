// DDD

/********************************************************************************************************************
* 
* Read an integer number that is the code number for phone dialing. 
* Then, print the destination according to the following table:
* 
*                      DDD  |  DESTINATION
*                      61      Brasilia
*                      71      Salvador
*                      11      Sao Paulo
*                      21      Rio de Janeiro
*                      32      Juiz de Fora
*                      19      Campinas
*                      27      Vitoria
*                      31      Belo Horizonte
*
* If the input number isn’t found in the above table, the output must be:
* DDD nao cadastrado
* That means “DDD not found” in Portuguese language.
*
* INPUT
* The input consists of a unique integer number.
*
* OUTPUT
* Print the city name corresponding to the input DDD.
* Print DDD nao cadastrado if doesn't exist corresponding DDD to the typed number.
*
********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// Read an integer number that is the code number for phone dialing.
let codeNumberPhone = lines[0].split(" ").map(item => parseInt(item)); 

if (codeNumberPhone == 61) {
    console.log(`Brasilia`);

} else if (codeNumberPhone == 71) {
    console.log(`Salvador`);

} else if (codeNumberPhone == 11) {
    console.log(`Sao Paulo`);

} else if (codeNumberPhone == 21) {
    console.log(`Rio de Janeiro`);
    
} else if (codeNumberPhone == 32) {
    console.log(`Juiz de Fora`);

} else if(codeNumberPhone == 19) {
    console.log(`Campinas`);

} else if (codeNumberPhone == 27) {
    console.log(`Vitoria`);

} else if (codeNumberPhone == 31) {
    console.log(`Belo Horizonte`);

} else {
    console.log(`DDD nao cadastrado`)
}

