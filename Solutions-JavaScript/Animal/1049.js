// ANIMAL

/********************************************************************************************************************
* 
* In this problem, your job is to read three Portuguese words. 
* These words define an animal according to the table below, from left to right. 
* After, print the chosen animal defined by these three words.
*
* [Animal classification table available on beecrowd]
*
* INPUT
* The input contains 3 words, one by line, that will be used to identify the animal, according to the above table, 
* with all letters in lowercase.
*
* OUTPUT
* Print the animal name according to the given input.
*
********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// The input contains 3 words, one by line, that will be used to identify the animal.
let [animalClassification1] = lines.shift().split(" "); 
let [animalClassification2] = lines.shift().split(" "); 
let [animalClassification3] = lines.shift().split(" "); 

if (animalClassification1 == `vertebrado` && animalClassification2 == `ave` && animalClassification3 == `carnivoro`) {
    console.log(`aguia`);

} else if (animalClassification1 == `vertebrado` && animalClassification2 == `ave` && animalClassification3 == `onivoro`) {
    console.log(`pomba`);

} else if (animalClassification1 == `vertebrado` && animalClassification2 == `mamifero` && animalClassification3 == `onivoro`) {
    console.log(`homem`);

} else if (animalClassification1 == `vertebrado` && animalClassification2 == `mamifero` && animalClassification3 == `herbivoro`) {
    console.log(`vaca`);

} else if (animalClassification1 == `invertebrado` && animalClassification2 == `inseto` && animalClassification3 == `hematofago`) {
    console.log(`pulga`);

}  else if (animalClassification1 == `invertebrado` && animalClassification2 == `inseto` && animalClassification3 == `herbivoro`) {
    console.log(`lagarta`);

} else if (animalClassification1 == `invertebrado` && animalClassification2 == `anelideo` && animalClassification3 == `hematofago`) {
    console.log(`sanguessuga`);

} else if (animalClassification1 == `invertebrado` && animalClassification2 == `anelideo` && animalClassification3 == `onivoro`) {
    console.log(`minhoca`);

}
