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

  
  //Stack(primitive) and heap(non-primitive) memories
 
//stack
let user1="shivam sharma";
let updateuser = user1;
updateuser = "sam"
console.log(user1);
console.log(updateuser);

//copy of user name created and changes occur in that , that's how stack memory works.

//heap memory
let worker={
name:'rj',
id:'a@',
}
let newworker=worker;
newworker.id='b@';

console.log(worker.id);//b@
console.log(newworker.id);//b@
//here in heap , no copy is created data is taken from same reference.and if data change, it changes for both.


