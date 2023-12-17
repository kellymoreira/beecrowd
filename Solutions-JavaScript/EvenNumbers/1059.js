// EVEN NUMBER

/*****************************************************************************************************************
* 
* Write a program that prints all even numbers between 1 and 100, including them if it is the case.
*
* INPUT
* In this extremely simple problem there is no input.
*
* OUTPUT
* Print all even numbers between 1 and 100, including them, one by row.
*
*****************************************************************************************************************/

// COPY AND PASTE INTO BEECROWD FROM THIS POINT ON:

// In this extremely simple problem there is no input.

// Write a program that prints all even numbers between 1 and 100, including them , one by row.

for (let number = 2; number <= 100; number += 2) {
    console.log(number);
}

/*
1. we start by declaring a variable named number and initializing it with the value 2. this variable will represent the current even number that we want to print.

2. next, we have a for loop, which is a control structure used for iteration. the loop is defined with the following components:

INITIALIZATION: let number = 2 sets the initial value of number to 2.
CONDITION: number <= 100 specifies that the loop should continue as long as the value of number is less than or equal to 100.
ITERATION: number += 2 increments the value of number by 2 in each iteration.

3. inside the loop, we have a console.log(number) statement. this statement is responsible for printing the current value of number to the console.

4. in each iteration of the loop, the value of number is printed to the console, and it represents an even number between 2 and 100.

5. the loop continues to execute until the condition number <= 100 is no longer met, at which point the loop terminates.

*/
