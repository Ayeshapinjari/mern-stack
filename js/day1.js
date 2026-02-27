// function
function greet(){
    console.log("hello people")
}
greet();
 
// function with parameter
function greet2(n){
console.log("hello",n)
}
greet2('Ayesha')

// eligible for vote or not
 function checkage(n){
    if(n>=18){
        console.log('eligible for vote')
    }
    else{
        console.log('not eligible')
    }
 }
 checkage(20)
 checkage(13)

 function checkmarks(marks)
{
    console.log(marks>=75?'Distinct':marks>=50 ? 'pass':'fail')
} 
checkmarks(75)
checkmarks(30)
checkmarks(61)
//ARRAYS
 let nums=[1,2,3,4,5]
 console.log(nums[0])
 for(let n of nums){
    console.log(n)
 }
 // SUM of all dig in array
 let sum=0
 for(let i=0;i<nums.length;i++){
    sum+=nums[i]
 }
 console.log(sum)
// print and count of even nums
let e=0
for(n of nums){
    if(n%2===0){
        console.log(n)
        e++;
    }
}
console.log(e)
// largest number
let max=nums[0]
for(n of nums){
    if(n>max){
        max=n
    }
}
console.log(max)
 // for each
 nums.forEach( function(num){
    console.log(num*10)
 });
 // for each using arrow function
nums.forEach((num)=>{
    console.log(num*10)
})
 // for of -> Used for values in arrays.
 for(num of nums){
    console.log(num)
 }
// for in -> used for objs
// for in give index in array
 let obj={
    name:'ayesha',
    age:19
}
for(key in obj){
    console.log(key,obj[key])
}
