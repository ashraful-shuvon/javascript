/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let score = 77; 

if(score <= 100 && score >= 90){
    console.log("Your grade is A.")
}
else if(score <= 89 && score >= 80){
    console.log("Your grade is B.")
}
else if(score <= 79 && score >= 70){
    console.log("Your grade is C.")
}
else if(score <= 69 && score >= 60){
    console.log("Your grade is D.")
}
else if(score <= 59 && score >= 0){
    console.log("Your grade is F.")
}
else {
    console.log("Enter a valid test score.")
}