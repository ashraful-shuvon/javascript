/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


let weight = 68; 
let height = 1.76; 

let bmi = weight / (height * height);

// if (bmi < 18.5) {
//     console.log("Youre underweight.");
// }
// else if (bmi >= 18.5 && bmi <= 24.9){
//     console.log("Your are normal. ");
// }
// else if(bmi >= 25 && 29.9) {
//     console.log("Youre are overweight.");
// }
// else {
//     console.log("Youre are obese.")
// }

// Ternary operator

console.log(
    bmi < 18.5 ? "youre underweight" : 
    (bmi >= 18.5 && bmi <= 24.9) ? "youre normal" : 
    (bmi >= 25 && 29.9) ? "Youre are overweight." : "Youre are obese."
)
