// EVEN, ODD, POSITIVE

/*********************************************************************************
 *
 * Make a program that reads five integer values.
 * Count how many of these values are even, odd, positive and negative.
 * Print these information like following example.
 *
 * INPUT
 * The input will be 5 integer values.
 *
 * OUTPUT
 * Print a message like the following example with all letters in lowercase,
 * indicating how many of these values ​​are even, odd, positive and negative.
 *
 ********************************************************************************/

const fileSystem = require("fs");
const endereco = require("path");
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(
  enderecoDesteScriptJS + "\\dev\\stdin",
  "utf8"
);
const quebraLinhaWindows = "\r\n";

let lines = conteudoArquivo.split(quebraLinhaWindows);
console.log(lines);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

let numbers = ([N1, N2, N3, N4, N5] = lines.map((line) =>
  line.split(" ").map((item) => parseInt(item))
));

let evenCount = 0;
let oddCount = 0;
let positiveCount = 0;
let negativeCount = 0;

// Even Numbers
for (let i = 0; i < 5; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++;
  }
}

// Odd Numbers
for (let i = 0; i < 5; i++) {
  if (numbers[i] % 2 !== 0) {
    oddCount++;
  }
}

// Positive Numbers
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveCount++;
  }
}

// Negative Numbers
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    negativeCount++;
  }
}

console.log(`${evenCount} valor(es) par(es)`);
console.log(`${oddCount} valor(es) impar(es)`);
console.log(`${positiveCount} valor(es) positivo(s)`);
console.log(`${negativeCount} valor(es) negativo(s)`);

