const accountId=13323;
let accountEmail="shivam.sharma@ens.enterprises";
var accountPassword="12345";
accountCity="jaipur";
// accountId=3; not allowed to reassign value of const variable
accountEmail="ab@ab.com";
accountPassword='43333';
accountCity="delhi";
let accountState;
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

//to declare const value we use const
//to declare variable value we use let and var. let is always use
//prefer not to use var because it does not understand scope i.e {}, block scope or functional scope
//only declare not assigned --> gives undefined.