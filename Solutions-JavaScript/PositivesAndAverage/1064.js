// POSITIVES AND AVERAGE

/*************************************************************************************************
 *
 * Read 6 values that can be floating point numbers.
 * After, print how many of them were positive.
 * In the next line, print the average of all positive values typed,
 * with one digit after the decimal point.
 *
 * INPUT
 * The input consist in 6 numbers that can be integer or floating point values.
 * At least one number will be positive.
 *
 * OUTPUT
 * The first output value is the amount of positive numbers.
 * The next line should show the average of the positive values ​typed.
 *
 ***********************************************************************************************/

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

let numbers = ([N1, N2, N3, N4, N5, N6] = lines.map((line) =>
  line.split(" ").map((item) => parseFloat(item))
));

let positiveCount = 0;
let positiveSum = 0;

// Sum positive numbers and count positive values
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    if (numbers[i] > 0) {
      positiveCount++;
      positiveSum += numbers[i][j];
    }
  }
}
// Calculate and display the average with one digit after the decimal point
console.log(`${positiveCount} valores positivos`);
const average = positiveSum / positiveCount;
console.log(average.toFixed(1));
