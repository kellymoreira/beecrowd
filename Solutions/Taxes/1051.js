// TAXES

/**********************************************************************************************************************
* 
* In an imaginary country called Lisarb, all the people are very happy to pay their taxes because they know that 
* don’t exist corrupt politicians and the taxes are used to benefit the population, without any misappropriation. 
* The currency of this country is Rombus, whose symbol is R$.
*
* Read a value with 2 digits after the decimal point, equivalent to the salary of a Lisarb inhabitant. Then print the * due value that this person must pay for taxes, according to the table below.
*
*                             SALARY                |   TAXES
*                    from 0.00 to R$ 2,000.00             8%
*                    from R$ 2.000.01 to R$ 3,000.00      18%
*                    from R$ 3.000.01 to R$ 4,500.00      28%
*
* Remember, if the salary is R$ 3,002.00 for example, the rate of 8% is only over R$ 1,000.00, because
* the salary from R$ 0.00 to R$ 2,000.00 is tax-free. 
* In the following example, the total rate is 8% over R$ 1000.00 + 18% over R$ 2.00, resulting in R$ 80.36 at all. 
* The answer must be printed with 2 digits after the decimal point.
*
* INPUT
* The input contains only a float-point number, with 2 digits after the decimal point.
*
* OUTPUT
* Print the message "R$" followed by a blank space and the total tax to be paid, 
* with two digits after the decimal point. If the value is up to 2000, print the message "Isento".
*
*********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

let salary = lines[0].split(" ").map(item => parseFloat(item).toFixed(2)); 

if (salary >= 0 && salary <= 2000.00) {
    console.log("Isento");

} else if (salary > 2000.00 && salary <= 3000.00) {
    let tax = (salary - 2000.00) * 0.08;
    console.log(`R$ ${tax.toFixed(2)}`);

} else if (salary > 3000.00 && salary <= 4500.00) {
    tax = (salary - 3000.00) * 0.18 + 1000.00 * 0.08;
    console.log(`R$ ${tax.toFixed(2)}`);

} else if (salary > 4500.00) {
    tax = (salary - 4500.00) * 0.28 + 1500.00 * 0.18 + 1000.00 * 0.08;
    console.log(`R$ ${tax.toFixed(2)}`);
}
