console.log('hi');
//object declare in two ways-literals and constructor.

//singleton-when  object create by constructor fn, i.e called singleton object.
//Object.create()


//object literals
const jUser={
    name:'shvam',
    age:18,
    location:'jaipur',
    email:'shivam@.mail.com',
    isloggin:false,
    lastLogindaya:['tuesday','saturday'],
    'full-name':"shivam sharma",
}

//two ways to get values- 
console.log(jUser.email);
console.log(jUser['email']);

//but if key is available in string then dot method doesnot work.
console.log(jUser["full-name"]); // o/p-shivam sharma
// console.log(jUser.'full-name) ; not work

//get symbol from object

let mySum=Symbol('hi');

let newObj={
    data:'done',
    [mySum]:'hello2'//right representation for symbol
}
console.log( typeof mySum); //symbol
console.log(typeof newObj.mySum); //string because type of check always value not key.

console.log(newObj);  //{ data: 'done', [Symbol(hi)]: 'hello2' }


//freeze method- to fix value.

jUser.location='jaipur';
Object.freeze(jUser);
jUser.location='mumbai'; //location remains jaipur

console.log(jUser);


/////////////////////////////////////////////////////////////////////

let obj1={1:'a',2:'b'};
let obj2={3:'c',4:'d'};

// let obj3=Object.assign({},obj1,obj2);//merge objects
// console.log(obj3);

//spread is much better approach to merge object
let obj3={...obj1,...obj2};
console.log(obj3);




