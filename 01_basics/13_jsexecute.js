//javascript execution context

//1. global E.C--------------------ex- this
//in browser - GEC is different and in other environment like node or burn it;s different

//therfore we get "this" value in browser- window object || "this" in node environment - empty object

//The global execution context is created when JavaScript starts running.
//This context is the default execution environment where the global scope is defined.
//In browsers, the global object is window, while in Node.js, it's global.
//Variables and functions defined outside of any function are stored in the global execution context.



// var x = 10; // part of global context
// function sayHello() {
//     console.log('Hello!');
// }
//2. function E.C


//A new function execution context is created each time a function is invoked.

// function multiply(a, b) {
//     return a * b;
// }
// multiply(2, 5); // New function execution context is created for each call.






//3. Eval E.C
//Created when eval() is used within any of the above contexts.