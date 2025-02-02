const Array = [1, 2, 3, 4, 5.4, true, "Subhransu"];
console.log(Array, Array.length);

let cities = [
  "Dhenkanal",
  "Bhubaneswar",
  "Angul",
  "Roulkela",
  "Cuttack",
  "Keonjhar",
];
let heros = ["Naruto", "Sasuke", "Eren", "Thorfin"];
console.log(typeof heros); //Object
//In JavaScript, arrays are a special type of object.
// Internally, an array is an object where keys are indices (0, 1, 2, ...) and values are the elements.

//Array Indices
console.log(heros[3], heros[1]);
heros[2] = "Luffy"; //Mutable
console.log(heros);

//Looping over an Array
for (let i = 0; i < heros.length; i++) {
  console.log(heros[i]);
}
for (const element of heros) {
  //forof
  console.log(element);
}
for (const element of cities) {
  console.log(element.toUpperCase());
}

let marks = [40, 55, 67, 34, 65, 88, 33];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
console.log(`The average mark is :: ${sum / marks.length}`);

sum = 0;
for (const element of marks) {
  sum += element;
}
console.log(`The average mark is :: ${sum / marks.length}`);

//Array Methods

{
  let narutoHeroes = ["Naruto", "Sasuke", "Itachi", "Madara", "Obito"];
  let onePieceHeroes = ["Luffy", "Zoro", "Ussop", "Sanji", "brook"];
  narutoHeroes.push("Pain", "Kakashi"); //Add to the end
  narutoHeroes.pop();
  console.log(narutoHeroes);
  let str = narutoHeroes.toString(); //Returns a new string
  console.log(str);
  heroes = narutoHeroes.concat(onePieceHeroes);
  console.log(heroes);
  heroes.unshift("Me"); //Add to start
  heroes.shift(); //Delete from the start
  console.log(heroes);
  console.log(heroes.slice(2, 7)); //Return a new array (Last index exlude)
  console.log(heroes.slice(4)); //From 4 to last index
  // splice(stIdx,delCount,newEl)
  heroes.splice(3, 2, "Sonic", "Nuckle"); // Modifies the original array
  console.log(heroes);
  heroes.splice(4, 0, "bumble Bee"); // Replace an element at index 4 without deleting
  console.log(heroes);
  console.log(heroes.splice(4)); //delete from index 4 to the last index
}
