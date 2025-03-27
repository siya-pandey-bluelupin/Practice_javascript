const marvel_heros = ["thor", "ironman", "captain america", "black widow", "hulk"];
const dc_heros = ["superman", "flash", "batman"];
marvel_heros.push(dc_heros);//does not merge the arrays rather adds the array as an element
console.log("Marvel Heros", marvel_heros);
console.log(marvel_heros[5][1]);//flash

//merge the arrays
const allHeros = marvel_heros.concat(dc_heros);
//push acts on the array itself and returns the length of the array but concat does not act on the array itself rather returns a new array
console.log("All Heros", allHeros);
//people prever spread operator over concat as it is more readable
const allNewHeros = [...marvel_heros, ...dc_heros];
console.log("All New Heros", allNewHeros);
//spread operator can also be used to merge objects
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log("Another Array", another_array);
const real_another_array = another_array.flat(Infinity);
console.log("Real Another Array", real_another_array);

console.log(Array.isArray("Hitesh"));//checks if the argument is an array or not
console.log(Array.from("Hitesh"));//converts string to array
console.log(Array.from({ name: "Hitesh" }))// nahi bana paya to hmesha ek empty array dega
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//creates an array of the arguments passed