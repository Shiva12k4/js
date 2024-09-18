// //data type conversion confusion
// let score=33;
// console.log(typeof score);//number
// console.log(typeof(score));//number

// let Score="33";
// console.log(typeof Score);//string

// let numberInValue=Number(Score);//convert string to number
// console.log(typeof numberInValue);

// let scoreNew1 = "33abc";
// let numberInValue3=Number(scoreNew1);
// console.log(numberInValue3);//NAN - here it convert in number but dont know what type of number

// let scoreNew2 = undefined;
// let numberInValue4=Number(scoreNew2);
// console.log(numberInValue4); //NAN
// console.log(typeof numberInValue4);

// let scoreNew = null;
// let numberInValue5=Number(scoreNew);
// console.log(numberInValue5); //0
// console.log(typeof numberInValue2);

// //for boolean -true-->1
// //for boolean - false->0

// // let isLoggedIn="",0//false
// let isLoggedIn=1;//"hi"true
// let booleanisLoggedIn =Boolean(isLoggedIn);
// console.log(booleanisLoggedIn);

// let number=33;
// let convertInString=String(number);
// console.log(convertInString);
// console.log(typeof convertInString);//string converted 33

//--------------------------------Operational-------------------------------------

//  console.log(2+2);
//  console.log(2-2);
//  console.log(2*2);
//  console.log(2**2);//power
//  console.log(2/3);
//  console.log(2%3);
  
//  let str1="hello";
//  let str2=" shivam"
//  let str3 = str1 + str2;
//  console.log(str3);
 
//  console.log('1' +2);
//  console.log(1+"2");
//  console.log("1"+2+2);
//  console.log(1+2+"2");
 
 ///////////////comparison operator ////////////////////
 // always return output in boolean form i.e true or false

 console.log("2">1);//true
 //js convert string to number i.e called type corcion 
 //other cases- comparison operator, airthmetic operator.
 console.log(null>0);//false
 console.log(null==0);//false
 console.log(null>=0);//true

 //in case of undefiend , it's always false
 
 //>,< in this case null is converted in 0 in js.
 
 console.log("2"==2);
 
 