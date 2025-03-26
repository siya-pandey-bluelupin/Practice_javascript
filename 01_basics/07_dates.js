//Dates 
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());

//let myCreatedDate=new Date(2023,0,23,5,3)
//let myCreatedDate=new Date("2023-01-14")
let myCreatedDate=new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());
// month start with 0 in javascript
// but for DD-MM-YYYY etc type strings month starts with 01 only 
let myTimeStamp=Date.now();
console.log("myTimeStamp=",myTimeStamp);
console.log(myCreatedDate.getTime());
//the Date.now and getTime are comparable 
//since both are in miliseconds 
// to convert into seconds : 
console.log(Date.now()/1000);
//to remove decimal value
//never do ceil, always floor or round
console.log(Math.floor(Date.now()/1000))


let newDate=new Date()
console.log("GET DATE",newDate.getDate());
console.log("GET DAY",newDate.getDay());
console.log("GET FULL YEAR",newDate.getFullYear());
console.log("GET HOURS",newDate.getHours());
console.log("GET MILLISECONDS",newDate.getMilliseconds());
console.log("GET MINUTES",newDate.getMinutes());
console.log("GET MONTH",newDate.getMonth()+1);//for understanding month starts with 0 so add 1
console.log("GET SECONDS",newDate.getSeconds());
console.log("GET TIME",newDate.getTime());
//to write full tme
console.log(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);

//to write full time in a better way
console.log(newDate.toLocaleDateString('default',{
    day:'numeric',
    month:'long',
    year:'numeric',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    weekday:'long',
    timeZoneName:'short',
}))


