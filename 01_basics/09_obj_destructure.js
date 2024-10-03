//destructuring of object

let course={
    name:'abc',
    price:234,
    manager:'shivam'
}
//console.log(course.manager);   instead of doing course.manager again and again, we do

let {manager}=course;
console.log(manager);//shivam

//we can also change key
let{manager:man}=course;
console.log(man);//shivam


