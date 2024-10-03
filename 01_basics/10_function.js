function sayMyName(){
console.log('s');
console.log('h');
console.log('i');
console.log('v');
}
sayMyName//reference
sayMyName()//call //output-shiv

let myName=sayMyName;
myName();//shiv


// function sumOfTwo(num1,num2)//para
// {
//     console.log(num1+num2);
// }
// sumOfTwo(2,3);//argument
// //o/p-5

// let result=sumOfTwo(2,3);//5
// // console.log(result); undefiend


function sumOfTwo(num1,num2)//para
{
    let result=num1+num2;
    return result;
    //after return no code works
    console.log('abc')
}
let result=sumOfTwo(2,3);
console.log(result);// 5


//modify
function sum(n1,n2){
return n1+n2;
}
let o_p=sum(1,2);
console.log(o_p);


function justLogin(username){
return `${username} just logged in`;
}
console.log(justLogin('shivam'));



function data(...val1){    //with the help of rest operator we can get all values.
    return val1;
}
console.log(data(100,200,300));  //o/p- all three in array


//object and function
//method 1 -declare separately obj and fn
const obj={
    user:'shivam',
    price:199
}
function getobj(objname){
    console.log(`username is ${objname.user} and price is ${objname.price}`);
}
getobj(obj);


//method 2- at the time of fn execution or call we insert obj.
function getobj(objname){
    console.log(`username is ${objname.user} and price is ${objname.price}`);
}
getobj({
    user:'satyam',
    price:299
})



//array and fn
let newArray=[100,200,300,400];
//create a fn and get 2nd value;

function arrayNew(arrayYes){
    return arrayYes[1];
}
console.log(arrayNew(newArray));
