// SALARY INCREASE

/*********************************************************************************************************************
* 
* The company ABC decided to give a salary increase to its employees, according to the following table:
* 
*                           SALARY           |     Readjustment Rate
*                        0 - 400.00                   15%
*                        400.01 - 800.00              12%
*                        800.01 - 1200.00             10%
*                        1200.01 - 2000.00            7%
*                        Above 2000.00                4%
*
* Read the employee's salary, calculate and print the new employee's salary, 
* as well the money earned and the increased percentual obtained by the employee, with corresponding messages.
*
* INPUT
* The input contains only a floating-point number, with 2 digits after the decimal point.
*
* OUTPUT
* Print 3 messages followed by the corresponding numbers (see example) informing the new salary, the amount of money
* earned (both must be shown with 2 decimal places) and the percentual obtained by the employee. 
* Note:
*      Novo salario:  means "New Salary"
*      Reajuste ganho: means "Money earned"
*      Em percentual: means "In percentage"
*
*********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// The input contains only a floating-point number, with 2 digits after the decimal point.
let salaryArray = lines[0].split(" ").map(item => parseFloat(item).toFixed(2));
let salary = parseFloat(salaryArray[0]);

if (salary <= 400.00) { // Salary: 0 - 400.00 readjustment rate: 15%
    let readjustment = (salary * 0.15) + salary;
    let percentage = 15;
    console.log(`Novo salario: ${readjustment.toFixed(2)}`);
    console.log(`Reajuste ganho: ${(readjustment - salary).toFixed(2)}`);
    console.log(`Em percentual: ${percentage} %`);

} else if (salary <= 800.00) { // Salary: 400.01 - 800.00 readjustment rate: 12%
    let readjustment = (salary * 0.12) + salary;
    let percentage = 12;
    console.log(`Novo salario: ${readjustment.toFixed(2)}`);
    console.log(`Reajuste ganho: ${(readjustment - salary).toFixed(2)}`);
    console.log(`Em percentual: ${percentage} %`);

} else if (salary <= 1200.00) { // Salary: 800.01 - 1200.00 readjustment rate: 10%
    let readjustment = (salary * 0.10) + salary;
    let percentage = 10;
    console.log(`Novo salario: ${readjustment.toFixed(2)}`);
    console.log(`Reajuste ganho: ${(readjustment - salary).toFixed(2)}`);
    console.log(`Em percentual: ${percentage} %`);

} else if (salary <= 2000.00) { // Salary: 1200.01 - 2000.00 readjustment rate: 7%
    let readjustment = (salary * 0.07) + salary;
    let percentage = 7;
    console.log(`Novo salario: ${readjustment.toFixed(2)}`);
    console.log(`Reajuste ganho: ${(readjustment - salary).toFixed(2)}`);
    console.log(`Em percentual: ${percentage} %`);
    
} else { // Above 2000.00, readjustment rate: 4%
    let readjustment = (salary * 0.04) + salary;
    let percentage = 4;
    console.log(`Novo salario: ${readjustment.toFixed(2)}`);
    console.log(`Reajuste ganho: ${(readjustment - salary).toFixed(2)}`);
    console.log(`Em percentual: ${percentage} %`);
}
