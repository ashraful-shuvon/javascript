/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 89;
let fare = 800;

if (age < 10) {
  console.log("Children ticket is free");
} else if (age <= 30) {
    let discount = (fare * 50) / 100;
    studentDiscount = fare - discount;
    console.log("student discount: " + studentDiscount);
} else if (age >= 60) {
    let discount = (fare * 15) / 100;
    seniorDiscount = fare - discount;
    console.log("senior discount: " + seniorDiscount);
}
else {
    console.log("Fare: " +fare)
}
