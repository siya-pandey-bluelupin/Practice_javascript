const name="siya"   
const repoCount=20
console.log('====================================');
console.log(name + " has " + repoCount + " repositories");
console.log('====================================');
console.log(`Hello my name is ${name} and i Have ${repoCount} repositories`);

const gameName=new String("PU-BG")
console.log(gameName)//[String: 'PUBG']
// console.log(gameName[0])//P
// console.log(gameName.__proto__)//{}
// console.log(gameName.length)//4
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.indexOf('U'));//1
// console.log(gameName.charAt(2));//B

const newString=gameName.substring(-2,4)//last value is not included
console.log(newString)//PU-B

const anotherString=gameName.slice(-1,2)//last value is not included
console.log(anotherString)//PU-B
const newStringOne="         hello siya      "
console.log(newStringOne.trim())
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url)
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))//true
const sentence="hello siya how are you"
console.log(sentence.split(" "));//[ 'hello', 'siya', 'how', 'are', 'you' ]
const sentenceOne="hello-siya-how-are-you"
console.log(sentenceOne.split("-"));





