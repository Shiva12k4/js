//scopes
//{}-scope

if(true){
  let a= 10;
  const b=20;
  var c=30;
  
}
// console.log(a); not defined
//console.log(b); not defined
//console.log(c);  30 



//nested scope

//ice-cream concept
function one(){

    const username="shivam";

    function two(){
    
        const website='Myweb';
        console.log(username);//shivam
    }
    // console.log(website); not defined
    two();
}
one();

//doing this by if condition

if(true){
    const usernames="shivam";
    if(true){
        const websites="youtube";
        console.log(`${usernames} ${websites}`)
    }
   // console.log(websites); not defined
    
}
//console.log(usernames); not defined
