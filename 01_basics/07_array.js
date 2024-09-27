//array
const myArr=new Array(1,2,3,4);
// console.log(myArr[1]);

const myArr2=[1,2,3,4,5];
myArr2.push(8);//insert last
myArr2.pop()//remove last
myArr2.unshift(9)//add start
myArr2.shift();//remove start

let  newArr=myArr2.join();//convert array to string
console.log(newArr);


let Arr1=[1,2,3,4,5,6];
let Arr2=Arr1.slice(undefined,4);
console.log(Arr2);
console.log(Arr1);//no change in new array

let Arr3=Arr1.splice(1, 1, 2);//index,delete,add 
console.log(Arr3);
console.log(Arr1);//change new array in case of splice


///////////////////////Array part 2/////////////////////

//merging of array
const a1= ['ally', 'andrew','anna'];
const b1= ['ben','brown','best' ];
// a1.push(b1);
// a1.concat(b1);
const d1=a1.concat(b1);//required new array to merge to array
// console.log(a1);
// console.log(a1);
console.log(d1);


//spread
//The spread operator can be used to copy or merge arrays and expand values within function calls.
let data1=[1,2,3,4];
let data2=[5,6,7,8];
let data3=[...data1, ...data2];
console.log(data3);


//flat method- converge all arrays into a single array.
let arrayFlat = [1, 2, 3, 4, [7, 5, 1], [9, 0, [7, 9, [[[2, 5, 0]]]]]]; // Added missing closing brackets
let flattenedArray = arrayFlat.flat(Infinity);  // This will flatten the array completely
console.log(flattenedArray);


//isArray- is that available in
console.log(Array.isArray('1'));// it that value array or not        //o/p- false


//from
console.log(Array.from('shivam')); //convert data into array ,Array-like ya iterable ko array mein convert karta hai.
 //output-[ 's', 'h', 'i', 'v', 'a', 'm' ]
//if can't then return empty array.

console.log(Array.from({name:'shivam'}));//empty array return

console.log(Array.of('shivam'));// Diye gaye elements se ek naya array banata hai.[ 'shivam' ]














