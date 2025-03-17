//primitive 
//7 types: String : call by value changes done to copy 
//Number : call by value changes done to copy
// const score=100
// const scoreValue=100.3
// //Boolean : call by value changes done to copy
// const isLoggedIn=false
// //Null : empty value
// const outSideTemp=null
// //Undefined : variable + memory is allocated but no value is assigned
// let userEmail;//undefined
// //Symbol : unique value for advance js use case : Button can be made unique

// const id=Symbol('123') // the return type is symbol
// const anotherId=Symbol('123')
// console.log(id===anotherId)//false
// //BigInt : large number scientific values or large numbers
// const bigNumber=32588789345878454545522n

//Non-Primitive - Reference types : call by reference changes done to original
//Array
// const names=['siya','riya','piya']
// //Object
// const person={
//     name:'siya',
//     age:18
// }
// // function
// const myFunction=function(){
//     console.log('hello')
// }
// //how to check datatype 
// console.log(typeof(myFunction)) //function object object function 
//how to master js ? Web browser events and objects 
// js is dynamicly typed? or statically typed ? we dont define the type of variable in js
//js is loosly typed language 
//js is single threaded language
//js is synchronous language
//js is single threaded language
//js is synchronous language

//===================================================================

// Stack , Heap 
// Stack : (Primitive)function call , variables , primitives
// Heap : (Non primitive) objects , arrays , functions
let myName='siya';
let aontherName=myName;
aontherName="billu"
console.log(myName);
console.log(aontherName);
//output : siya billu
//call by value : changes done to copy

let userOne ={
    email:'user@google.com',
    upi:'user@ybl.com'
}
let userTwo=userOne;
console.log(userTwo);
userTwo.email="siya@billu.com"
console.log("userOne=",userOne);
console.log("userTwo=",userTwo);
//output :
//userOne= { email: 'siya@billu.com', upi: 'user@ybl.com' }
//userTwo= { email: 'siya@billu.com', upi: 'user@ybl.com' }