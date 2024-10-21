for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);  
} 

// cl


let myArray=["a","b","c"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
//break and continue
for (let s = 0; s < 10; s++) {
    if(s==5){
    console.log(`detected 5`);
    break;//break
    
    }
    console.log(`this value is ${s} `);
    
}
for (let t = 0; t < 10; t++) {
    if(t==5){
    console.log(`detected 5`);
    continue;//skip
    
    }
    console.log(`this value is ${t} `);
    
}