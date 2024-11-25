// const coding=['js','ruby','c++','python','java'];
// const data=coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(data);//for each never return any value.


const numbers=[1,2,3,4,5,6,7,8,9,10];

//filter
//  const newNums= numbers.filter((num)=>{
// return num>4;
// })
// console.log(newNums);

//foreach
const result=[]
const forNums=numbers.forEach((itm)=>{
if (itm>4) {
    result.push(itm)
}
})


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981,
    edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
    edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999,
    edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
    edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009,
    edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987,
    edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986,
    edition: 1996 }
]
const bookData=books.filter((bk)=>{
return bk.genre==="History"
})
console.log(bookData);


//map


const numers=[1,2,3,4,5,6,7,8,9,10];
const updatenumers=numers.map((e)=>e + 10).filter((e)=>e<=15).map((e)=>e*20);
console.log(updatenumers);

//reduce

const myNums=[1,2,3];
const op=myNums.reduce(function(acc,currvalue){
    console.log(`acc:${acc} and currval:${currvalue}`);
    
    return acc+currvalue;
},0);
console.log(op);

const ops=myNums.reduce((acu,cv)=> acu+cv,0);
console.log(ops);


//ex
const shoppingCart = [
    {
    itemName: "js course",
    price: 2999
    },
    {
    itemName: "py course",
    price: 9999
    },
    {
        itemName: "c course",
        price: 9999  
    }
]
const addPrice=shoppingCart.reduce((first,current)=>first + current.price,0);
console.log(addPrice);
