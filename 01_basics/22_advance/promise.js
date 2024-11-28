const promiseOne= new Promise((res,rej)=>{
//do any async task
//DB calls
//cryptography related
//n/w call
setTimeout(()=>{
    console.log('async task is complete');
    res();
},1000)
})
promiseOne.then(()=>{
    console.log('promise consumed')
})


new Promise ((res,rej)=>{
setTimeout(()=>{
    console.log('async task 2');
    res()
},1000)
}).then(()=>{
    console.log("async 2 resolved");
    
})


const promiseThree=new Promise((res,rej)=>{
setTimeout(()=>{
res({username:"shivam",email:'shivam@gmail.com'})
    
},1000)
})
promiseThree.then((user)=>{
console.log(user);

})

//effective
const promiseFour=new Promise((res,rej)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            res({username:"shivam",password:124
            })
        }
        else{
            rej('Error:something went wrong')
        }

    },1000)
})
promiseFour
.then((user)=>{//callback hell
console.log(user);
return user.username;
})
.then((username)=>{
    console.log(username);

    
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{    //tjis method execute always
    console.log('finally ');
    
})
//premise can also be handle by async await and put them in try catch to handle error

const promiseFive=new Promise((res,rej)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            res({username:'js',password:123})
        }
        else{
            reject('error:js went wrong')
        }
    },1000)
})

const consumePromiseFive = async()=>{
    try{

        const res= await promiseFive
        console.log(res);
    }catch(error){
        console.log(error);
        
    }
    
}
consumePromiseFive()








const getAllUsers=async()=>{
    try{

       const response=await fetch('https://api.github.com/users/Shiva2k14')
        const data=await response.json()
        console.log(data);
    }
    catch(error){
        console.log("error");
        
    }
    
}
getAllUsers()



fetch('https://api.github.com/users/Shiva2k14')
.then((response)=>{
return response.json()
})
.then((data)=>{
 console.log(data);
 
})
.catch((error)=>{
    console.log(error);
    
})