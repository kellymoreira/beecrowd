// ODD NUMBERS

/*******************************************************************************************
 *
 * Read an integer value X (1 <= X <= 1000).
 * Then print the odd numbers from 1 to X, each one in a line, including X if is the case.
 *
 * INPUT
 * The input will be an integer value.
 *
 * OUTPUT
 * Print all odd values between 1 and X, including X if is the case.
 *
 *******************************************************************************************/

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

let X = parseInt(lines.shift());

// Odd Numbers
for (let i = 1; i <= X; i += 2) {
  console.log(i);
}

// An integer number between 1 and 1000
if (X < 1 || X > 1000) {
}
