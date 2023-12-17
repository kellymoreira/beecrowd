// POSITIVE NUMBERS

/**********************************************************************************************
 *
 * Write a program that reads 6 numbers. These numbers will only be positive or negative
 * (disregard null values).
 * Print the total number of positive numbers.
 *
 * INPUT
 * Six numbers, positive and/or negative.
 *
 * OUTPUT
 * Print a message with the total number of positive numbers.
 *
 *********************************************************************************************/

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

function positiveNumbers() {
  // Input array
  const numbers = ([N1, N2, N3, N4, N5, N6] = lines.map((line) =>
    line.split(" ").map((item) => parseFloat(item))
  ));

  let positiveCount = 0;

  // Count positive numbers
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveCount++;
    }
  }

  // Display the result
  console.log(`${positiveCount} valores positivos`);
}

// Run the function
positiveNumbers();
