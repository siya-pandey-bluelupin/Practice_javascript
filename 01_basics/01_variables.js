const accountId =144553
let accountEmail="sia@google.com"
var accountPassword="12345"
let accountCity="Lucknow "
let accountState;
/* accountId=2 */ 
// never use var because of issue in block scope and functional scope
// var is not block scope
// var is functional scope  
// var is hoisted

console.log(accountId,accountEmail,accountCity);
 console.table([accountId,accountEmail,accountCity,accountState]);