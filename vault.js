// Secrets, secrets are no fun. Unless you share with everyone!
// This file contains the calculations to fomr the vault combination key

// Steps 1 & 2) Below is the string message for the user who opens this file  

let str_message = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination'
console.log(str_message) ;


// Step 3) Here, I will assign an intro statement and three variables for the combination code. 
// Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-*/). 
// Each equals one of the three codes in the combination.

// This is the intro message describing what the alert will be 
let intro = 'Congratulations! Please view the following combination lock code:'

// Calculation 1: this code equates to 10 using the addition operator
let num1 = 8+2 ;

// Calculation 2: this code equates to 40 using the multiplication operator
let num2 = 10*4 ;

// Calculation 3: this code equates to 39 using the division operator 
let num3 = 78/2 ;


alert(`${intro}\n\n${num1}-${num2}-${num3}`);

