let number=400;
console.log(number);
let newNumber=new Number(400);
console.log(newNumber);
console.log(newNumber.toFixed(1));

let count= 1432.1;
console.log(count.toPrecision(5));//return string

let num = 100000;
console.log(num.toLocaleString('en-IN'))//convert no. in india sub-standard

/////////////////MATH//////////////////

// console.log(Math);
// console.log(Math.abs(-10));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.7));
// console.log(Math.floor(4.7));
// console.log(Math.random(333434));//generate no. between 0 & 1

const max=6;
const min=1;
console.log(Math.floor(Math.random()* (max - min + 1)));




