//this is used to refer current context.
let obj={
    username:'shivam',
    number:8139810238,

   welcomeMsg: function getValues(){
                    return(`${this.username}, we are welcoming you`)
    }
}

console.log(obj.welcomeMsg());//shivam
obj.username='sharmaji';
console.log(obj.welcomeMsg());//sharma ji 

console.log(obj);//sharmaji replace shivam from object obj.

console.log(this);//refer window object in browser. 

function chai(){
    const user="sam";
    console.log(this.user);//undefined because this refer to here global object.
    
}
chai();

function tea(){
    this.users="sam"
    console.log(this.users);//here this refer to its particular property
    
}
tea();




//arrow fn 


const masala=(num1, num2)=>{
return num1 + num2;
}
console.log(masala(2,3));


//implicit return arrow fn

//curly braces+ return or only()
const sugar=(n1,n2)=>( n1+n2);
console.log(sugar(2,3));



//IIFE       () ()
//immediately invoked function expression

// The main purpose of an IIFE is to create a new scope,immediately executed and avoid polluting the global scope.

(function gaur(){
    console.log('cascade');
    
})();    //no need to call fn name 


(()=>{
    console.log('hii');
    
})();


((name)=>{
    console.log(`${name}`);
    
})('sam');
