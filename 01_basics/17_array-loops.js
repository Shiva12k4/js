//high order array loops

//for of
//Iterate over values of iterable objects
// works with Arrays, Strings, Map, Set, etc.

const arr=[1,2,3,4,5];
for (const num of arr) {
    // console.log(num);
    
}

const greeting="shivam sharma";
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
    
}

//map
//A Map is a collection of key-value pairs where both keys and values can be of any type (numbers, strings, objects, etc.).

let map=new Map();
map.set("in","india");
map.set("usa","america");
map.set("afg","afganistan");

for (const [newMap, value] of map) {
    console.log(newMap,'',value);
    
}

const myObj={
    "game1":'nfs',
    "game2":'spiderman'
}
// for (const myGame of myObj) {
//     // console.log(myGame);
    
// }//error------objects are not iterable.
// Objects are not iterable by default in JavaScript, meaning they do not implement the iterable protocol. That's why you need to use one of the above helper methods to transform the object into an array (or something iterable) to use the for...of loop.
const myObj1={
    "game1":'nfs',
    "game2":'spiderman'
}
// for (const [key,value] of Object.entries(myObj)) {
//     console.log(`${key}:${value}`);
    
// }
//here we make first it iterable by using entries method then use for of.


//for in 
//Iterate over keys of objects
//only works with object

const myObject={
    "js":"javascript",
    "cpp":'c++',
    "rb":'ruby'
}
// for (const key in myObject) {
//         console.log(`${key} is shortcut for ${myObject[key]}`);
          
//     }
//we can also use for in for array but it's not a good practice.


// for each 

const forArray=['js','c++',"ruby"];
forArray.forEach(function(item,index,array){ //its a callback fn
    console.log(item.toUpperCase(),index,array);
    
});

const arrObj=[
    {
    "name":'js',
    "id":0
},
{
    "name":'java',
    "id":1
},
{
    "name":'ruby',
    "id":2
},
{
    "name":'phython',
    "id":3
}
]
arrObj.forEach((items)=>{
console.log(items.name);

})