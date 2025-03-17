console.log('====================================');
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);
// console.log(2===1);
// console.log(2!==1);

console.log("Trick operators varying datatypes avoid such comparisions");
// console.log("2">1);// here js already converts 2 into number thus 2>1 and 2 is greater than 1
// console.log("2">"1");// here js already converts 2 into number thus 2>1 and 2 is greater than 1
console.log("null > 0",null>0);//false sometimes Nan sometime 0 
console.log("null==0",null==0);//false
console.log("null>=0",null>=0);//true
//how ? null >=0 is true because null is converted to 0 here comparision and > symbols work differently 
console.log(undefined==0);//false

console.log("null==undefined",null==undefined);
console.log("null===undefined",null===undefined);

console.log('Strict check');
console.log("2"===2);//false beacuse strct check does not convert the datatypes

