// SNACK
/********************************************************************************************************************
* 
* Using the following table, write a program that reads a code and the amount of an item.
* After, print the value to pay.
*                                CODE |  SPECIFICATION   |    PRICE
*                                 1     Cachorro-quente     R$ 4.00
*                                 2     X-Salada            R$ 4.50
*                                 3     X-Bacon             R$ 5.00
*                                 4     Torrada simples     R$ 2.00
*                                 5     Refrigerante        R$ 1.50
*
* INPUT
* The input file contains two integer numbers X and Y. 
* X is the product code and Y is the quantity of this item according to the above table.
*
* OUTPUT
* The output must be a message "Total: R$ " followed by the total value to be paid, with 2 digits after the decimal 
* point.
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

// To read more than one value on the same line
let [productCode, quantity] = lines.shift().split(" ");

let price;

if (productCode == 1) { // if (condition) = se (condição),
    price = 4.00

} else if (productCode == 2) { // else if (condition) = e se (condição),
    price = 4.50

} else if (productCode == 3) { // e se (condição),
    price = 5.00

} else if (productCode == 4) { // e se (condição),
    price = 2.00

} else {
    price = 1.50  // else = caso contrário (quando nenhuma das condições anteriores é verdadeira).
}

let totalValueToBePaid = quantity * price;

console.log(`Total: R$ ${totalValueToBePaid.toFixed(2)}`);
