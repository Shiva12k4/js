//primitive-call by value.
// string, boolean , null, undefiend, number, symbol , bigint

//nonprimitive -call by reference.
//arrays , objects, functions.


//symbol
let id=Symbol('123');
let newId=Symbol('123');

console.log(id==newId);//false
console.log(id===newId);//false

const bigNumber= 75849759847429874985374945n;
//this above no. is consider as bigInt (n-means bigInt number)


 //arrays, objects, functions
 const data= ['abc','def','ghi']
 const obj={
    name:'shivam',
    number:32,
 }
 const fun = function(){
console.log('hi');

 }
 console.table({
    data: typeof data,  // 'object' (array is of type 'object' in JS)
    obj: typeof obj,    // 'object'
    fun: typeof fun     // 'function'
  });
 