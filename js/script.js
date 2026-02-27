console.log(5);
var a=10;// global
var a=20;//  we can re declare
let b=10; // block scope only in block
//let b=20;// we cant re declare a variable in let
b=20; // we can re assign it
const c=30;
//c=40; // we cant re assign it
console.log(c);
 let v=10;
 {
     v=20;
 }
 console.log(v);
let x=5
let y=x
y=10
console.log(x)
let obj1={
    name:'ayesha',
    age:22
}
let obj2=obj1
obj2.name ='varshu';
console.log(obj2.name)
// mul(a,b)
// return a*b
// sq(n)
// return mul(n,n)
// print(n)
// sq(n)
// console.log(n)
// main()
// print(4)

//falsy values: false "" 0 null undefined
if(''){
    console.log('hai')
}
else{
    console.log('hello')
}
console.log('5'+5)// conctenation
console.log(5-'5')
console.log(5=='5')// check value
console.log(5==='5')// check type
let arr=[1,'at',2,'3']// it take all trpes of data
console.log(arr)
// operators
// conditional statements
// ternary operator
let marks=40
console.log(marks>=30? 'pass':'fail')

let num=456
console.log(num%2===0? 'even':'odd')

// function 
 function checkmarks(marks)
{
    console.log(marks>=75?'Distinct':marks>=50 ? 'pass':'fail')
} 
checkmarks(75)
checkmarks(30)
checkmarks(61)
//arrow function
const sum=(a,b)=>{console.log(a+b)}
sum(2,4)
const mul=(a,b)=>{console.log(a*b)}
const dif=(a,b)=>{console.log(a-b)}
const div=(a,b)=>{console.log(a/b)}
const calc=(a,b,op)=>{op(a,b)}
calc(3,4,mul)
calc(6,3,div)
calc(10,5,dif)
// for in 
let nums=[1,2,3,4,5]
for(index in nums){
    console.log(index)// index
    console.log(nums[index])
}
// objects
let obj={
    name:'ayesha',
    age:19
}
for(key in obj){
    console.log(key,obj[key])
}