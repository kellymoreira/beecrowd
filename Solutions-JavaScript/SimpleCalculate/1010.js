// SIMPLE CALCULATE

/*************************************************************************************************************************
*
* In this problem, the task is to read a code of product 1, the number of units of product 1, the price for one unit 
* of product 1, the code of product 2, the number of units of product 2, and the price for one unit of product 2. 
* After this, calculate and show the amount to be paid.
*
* INPUT
* The input file contains two lines of data. 
* In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.
*
* OUTPUT
* The output file must be a message like the following example where "Valor a pagar" means Value to Pay. 
* Remember the space after ":" and after the "R$" symbol. The value must be presented with 2 digits after the point. 
*
*************************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);
console.log(lines);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// To read individual values on a single line:

// Read a code of product 1, the number of units of product 1, the price for one unit of product 1, the code of product 2, the number of units of product 2, and the price for one unit of product 2.

// The input file contains two lines of data. In each line, there will be 3 values: two integers and a floating value with 2 digits after the decimal point.
let [codeProduct1, numberUnitsProduct1, priceOneUnitProduct1] = lines.shift().split(" ");
let [codeProduct2, numberUnitsProduct2, priceOneUnitProduct2] = lines.shift().split(" ");

let totalProduct1 = numberUnitsProduct1 * priceOneUnitProduct1;
let totalProduct2 = numberUnitsProduct2 * priceOneUnitProduct2;

// After this, calculate and show the amount to be paid.
let totalToBePaid = totalProduct1 + totalProduct2;

console.log("VALOR A PAGAR: R$ " + totalToBePaid.toFixed(2));
