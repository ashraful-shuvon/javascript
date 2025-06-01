/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// let num = 61;
// while(num <= 100){
//     if(num % 2 !== 0){
//         console.log(num);
//     }

//     num++;
// }

// for(let num = 61; num <=100; num++){
//     if(num % 2 !== 0){
//         console.log(num);
//     }
// }

// let num = 78;

// while (num <= 98){
//     if(num % 2 === 0){
//         console.log(num);
//     }
//     num++;
// }

// for(let num = 78; num <=98; num++){
//     if(num % 2 === 0){
//         console.log(num);
//     }
// }

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let num = 81;
let sum = 0;
while (num <= 131) {
  if (num % 2 !== 0) {
    sum = sum + num;
  }
  num++;
}
console.log(sum);

// for(let num = 78; num <=98; num++){
//     if(num % 2 === 0){
//         console.log(num);
//     }
// }
