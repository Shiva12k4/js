//if
// const isUserLoggedIn=true;

// <,>,<=,>=,==,!=,===

// const temp = 40;
// if (temp<43){
//     console.log('temp. is less than 50');
// }

const score =200;
 if(score>100){
    let power='fly'
    console.log(`user power:${power}`);
 }

 //if elseif elseif else

 const userLoggedIn = true;
 const debitCard = true;
 const loggedInFromGoogle = false;
 const loggedInFromEmail=true;

 if(userLoggedIn && debitCard && 2==3){  //&& check if both condition true
    console.log('hi');
    
 }
 if(loggedInFromGoogle || loggedInFromEmail){ //or check any one condition true 
    console.log('access done');
    
 }


 //nullish coalescing operator(??): null undefined

 //The nullish coalescing operator (??) in JavaScript is used to provide a default value when dealing with null or undefined. It allows you to specify a fallback value if the left-hand side of the operator is either null or undefined.

 let val=null;
let defaultValue= "default";

let result=val??defaultValue;
console.log(result);




 //switch case
 let month=2;
 switch (month) {
    case 1:
        console.log('jan');
        break;
    case 2:
        console.log('feb');
        break;
    case 3:
        console.log('march');
        break;
 
    default:
        console.log('default');
        break;
 }
 //if break will not use then it execute all value after value matched except default.


 //truthy falsy values.
 //falsy values- false, 0 , -0, bigInt 0n, null, undefined, NAN.

 //truthy- "0",'false', " "{space in string consider truthy value},[],{},function(){}

 let userEmail=[];
 if(userEmail.length==0){
    console.log('array is empty ');
    
 }

 let emptyObj={};
 if(Object.keys(emptyObj.length==0)){
    console.log('empty object');
    
 }


 //ternary operator

 //condition ? true:false;

 let con_result = 100;
 (con_result<80)?console.log('yes it is'):console.log("no its not");
 