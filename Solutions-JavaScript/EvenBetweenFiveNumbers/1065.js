// EVEN BETWEEN FIVE NUMBERS

/*****************************************************************************************************
 *
 * Make a program that reads five integer values.
 * Count how many of these values ​​are even and  print this information like the following example.
 *
 * INPUT
 * The input will be 5 integer values.
 *
 * OUTPUT
 * Print a message like the following example with all letters in lowercase,
 * indicating how many even numbers were typed.
 *
 **************************************************************************************************/

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

function evenBetweenFiveNumbers() {
  // Input array
  const numbers = ([N1, N2, N3, N4, N5] = lines.map((line) =>
    line.split(" ").map((item) => parseInt(item))
  ));

  let evenCount = 0;

  for (let i = 0; i < 5; i++) {
    if (numbers[i] % 2 === 0) {
      evenCount++;
    }
  }

  console.log(`${evenCount} valores pares`);
}

evenBetweenFiveNumbers();
