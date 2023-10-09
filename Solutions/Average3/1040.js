// AVERAGE 3
/********************************************************************************************************************
* 
* Read four numbers (N1, N2, N3, N4), which one with 1 digit after the decimal point, corresponding to 4 scores 
* obtained by a student.
* Calculate the average with weights 2, 3, 4 e 1 respectively, for these 4 scores and print the message "Media: " 
* (Average), followed by the calculated result.
*
*    -> If the average was 7.0 or more, print the message "Aluno aprovado." (Approved Student).
*    -> If the average was less than 5.0, print the message: "Aluno reprovado." (Reproved Student).
*    -> If the average was between 5.0 and 6.9, including these, the program must print the message "Aluno em exame." 
*    (In exam student).
* 
* In case of exam, read one more score. 
* Print the message "Nota do exame: " (Exam score) followed by the typed score. 
* Recalculate the average (sum the exam score with the previous calculated average and divide by 2) and print the 
* message “Aluno aprovado.” (Approved student) in case of average 5.0 or more) or "Aluno reprovado." (Reproved 
* student) in case of average 4.9 or less. 
* For these 2 cases (approved or reproved after the exam) print the message "Media final: " (Final average) 
* followed by the final average for this student in the last line.
*
* INPUT
* The input contains four floating point numbers that represent the students' grades.
*
* OUTPUT
* Print all the answers with one digit after the decimal point.
* 
********************************************************************************************************************/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// Reads more than one value on the same line:
let [N1, N2, N3, N4] = lines[0].split(" ").map(item => parseFloat(item)); // Read four numbers (N1, N2, N3, N4), which one with 1 digit after the decimal point, corresponding to 4 scores obtained by a student.

let [N5] = lines[1].split(" ").map(item => parseFloat(item));

let sum = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)); // Calculate the average with weights 2, 3, 4 e 1 respectively, for these 4 scores and print the message "Media: " (Average), followed by the calculated result. 

let average = sum / 10; // Divided by 10 because the maximum score is 10.

if (average >= 7.0) {  // If the average was 7.0 or more, print the message "Aluno aprovado." (Approved Student).
    console.log("Media: " + average.toFixed(1));
    console.log("Aluno aprovado.");

} else if (average < 5.0) { // If the average was less than 5.0, print the message: "Aluno reprovado." (Reproved Student).
    console.log("Media: " + average.toFixed(1));
    console.log("Aluno reprovado.");
} else { // If the average was between 5.0 and 6.9, including these, the program must print the message "Aluno em exame." (In exam student).
    console.log("Media: " + average.toFixed(1));
    console.log("Aluno em exame.");

    let examScore = N5 // In case of exam, read one more score.
    let final = (examScore + average) / 2; // Recalculate the average (sum the exam score with the previous calculated average and divide by 2) and print the message “Aluno aprovado.”

    if(finalAverage >= 5.0) { // In case of average 5.0 or more) or "Aluno reprovado." (Reproved student) in case of average 4.9 or less. 
        console.log("Nota do exame: " + examScore.toFixed(1)); // Print the message "Nota do exame: " (Exam score) followed by the typed score. 
        console.log("Aluno aprovado."); // And print the message “Aluno aprovado.”(Approved student).
        console.log("Media final: " + finalAverage.toFixed(1)); // For these 2 cases (approved or reproved after the exam) print the message "Media final: " (Final average) followed by the final average for this student in the last line.

    } else {

        console.log("Nota do exame: " + examScore.toFixed(1));
        console.log("Aluno reprovado.");
        console.log("Media final: " + finalAverage.toFixed(1));// For these 2 cases (approved or reproved after the exam) print the message "Media final: " (Final average) followed by the final average for this student in the last line.
    }
}
