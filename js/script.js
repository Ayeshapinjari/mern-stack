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