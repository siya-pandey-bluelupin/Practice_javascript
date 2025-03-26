//array

const myArr=[0,1,2,3,4,5];
const myHeros=["shaktiman","superman","batman","spiderman","ironman"];
console.log(myHeros);
const myArr2=new Array(1,2,3,4,5,9);
console.log(myArr2);
console.log("myArr2.includes(9)?: ",myArr2.includes(9));//boolean
console.log("myArr2.indexOf(12)?: ",myArr2.indexOf(12));//if not found returns -1

const newArr=myArr2.join()

console.log("myArr2",myArr2);
console.log("newArr",newArr);
console.log("typeof myArr2",typeof myArr2);
console.log("typeof newArr",typeof newArr);
