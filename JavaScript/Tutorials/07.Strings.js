console.log("This is string tutorial");

let a = "Subhransu";
console.log(a[0]);
console.log(a[3]);
console.log(a[5]);
// console.log(a[10]) undefined
console.log(a.length);

let myName = "subhransu";
let frndName = "Ram";
console.log("My name is " + myName + " and my friend's name is " + frndName);
console.log(`My name is ${myName} and my friend's name is ${frndName}`); //String interpolation with Template Literals

let b = "Ritesh";
let c = "Neha";
let d = "Disha";
console.log(b.toUpperCase());
console.log(c.toLocaleLowerCase());
console.log(d.length);
console.log(a.slice(1, 4)); //From 2 to 4 (4 not included)
console.log(a.slice(1)); //From 2 to end
a = "The Subhransu";
console.log(a.replace("The", "Me")); //Replace "the" to "Me"
console.log(a.replace("h", "e")); //Only first occurance will be replaced
console.log(b.concat(c, d)); //concatenate two b,c and d. We can also use + operator
console.log(b.concat(" and ", c, "and ", d, " Subhransu"));
let str = "\tSubhransu \t Ritesh \t Rishi \n";
console.log(str.trim()); //REmove whit spaces

console.log(b, c); //Sring is immutable
console.log(b.indexOf("es"));
console.log(b.indexOf("z")); //Returns -1
