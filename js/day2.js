let arr=[1,2,3,4,5,6]
// MAP
const addone=(num)=>{return num+1} // if we use {} in arrow function we should use return
let res=arr.map(addone)
console.log(res)
let double=arr.map((num)=>num*2)
console.log(double)
// ARRAY OF OBJECTS
// Creates a NEW array.
let products=[
    {id:1,name:'laptop',price:20000},
    {id:2,name:'mouse',price:1000},
    {id:3,name:'headphones',price:1000},
    {id:4,name:'phone',price:10000}   
]
let pname=products.map((i)=>{console.log(i.name)})
//products greater than 2000
let pro=products.filter((p)=>p.price>2000)
console.log(pro)
// sum of prices using reduce
let psum=products.reduce((t,c)=>{return t+c.price},0)
console.log('sum '+ psum)
// find
let ff=products.find((p)=>p.id==1)
console.log(ff.name+' '+ff.id)
// Filters based on condition.
let a=[1,2,5,3,1,4,1,5,6]
let b=a.filter((n)=>n>1)
console.log(b)
let e=a.filter((n)=>n%2===0)
console.log(e)
let sum=a.reduce((t,c)=> t+c,0) // t value has intial value 0 and c points to value in array and chages every time and c is added to t 
console.log(sum)
// find returns single first matching element
let f=a.find((n)=>n===5)
console.log(f)

// Use map → multiply all by 2
//  Use filter → keep numbers > 20
//  Use reduce → find total sum
let nums=[1,2,3,4,5]
let mul=nums.map((num)=>num*2)
console.log(mul)
let fff=mul.filter((n)=>n>2)
console.log(fff)
let sum_nums=fff.reduce((t,c)=>t+c,0)
console.log(sum_nums)
// method 2
let numbers=[5, 10, 15, 20, 25]
let result=numbers.map((n)=>n*20).filter((n)=>n>2).reduce((t,c)=>t+c,0)
console.log(result)
 //DESTRUCTING 
 let [p,q,r]=numbers
 console.log(p)
 let student={id:1,name:'ayesha',dept:'cse'}
const {id,age}=student 
console.log(id,age)
let user = {
  username: "Ayesha",
  email: "ayesha@gmail.com",
  role: "admin"
}
// const {username,role}=user
// renaming
const {username:name,role:job}=user
console.log(name,job)
// spread operator 
//React state updates
// Copying arrays
// Merging objects
let nn=[...nums]// copy array
console.log(nn)
let nnn=[...nums,6,7,8] // add elements
console.log(nnn)
// merging objects
let u={name:'ayesha'}
let d={age:19}
let user_details={...u,...d}
console.log(user_details)
// Use reduce
//  Find total cart price
let cart = [
  { item: "Shoes", price: 1000 },
  { item: "Bag", price: 1500 },
  { item: "Watch", price: 2000 }
];
let total=cart.reduce((t,c)=>t+c.price,0)
console.log('Total: '+ total)

//rest collects all arguments into an array
let arr1=[1,2,3,4,5,6]
let [first,...other]=arr1
console.log(other)
console.log(first)
 let arr2=[7,8,9,10]
 let arr3=[...arr1,...arr2]
 console.log(arr3)
 //promise
//  Pending 
// Resolved (Fulfilled)
// Rejected
 let promise = new Promise((resolve, reject) => {
  
  let success = true;

  if (success) {
    resolve("Task completed successfully");
  } else {
    reject("Something went wrong");
  }

});
promise
  .then((data)=> 
    console.log(data))  .catch((error) => console.log(error))

   async function fetchdata(){
    try{
      const res=await fetch('https://jsonplaceholder.typicode.com/users')
      const data=await res.json()
      data.map((user)=>console.log(user.email))
      console.log(data)
    }
    catch(error){
      console.log(error)
    }
    }
    fetchdata()
   