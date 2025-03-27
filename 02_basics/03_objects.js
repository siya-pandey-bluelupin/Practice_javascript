//singleton object is an object that is created only once in the application by Constructor function

// object literal

const mySym=Symbol("key1");
const JsUser={
name : "Hitesh",
"full name":"Hitesh Choudhary",
[mySym]:"myKey1",
age:18,
location:"Jaipur",
email:"hitesh@google.com",
isLoggedIn:false,
lastLoginDays:["Monday","Saturday"],
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log( JsUser[mySym])

JsUser.email="newmail.chatp"
console.log(JsUser);
//Object.freeze(JsUser);//does not allow to change the object
JsUser.email="new frozen"
console.log(JsUser);//got no error but value did not change as object is frozen

JsUser.greeting=function(){
    console.log("Helo js user");
}
JsUser.greetingTwo=function(){
    console.log(`Helo js user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//symbol will be used as a key in the object only 
