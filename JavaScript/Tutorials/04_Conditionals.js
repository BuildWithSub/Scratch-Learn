console.log("I am conditional tutorial");

let age = 18;

if (age >= 18) {
  console.log("You can drive.");
} else if (age >= 16) {
  console.log("You are almost there");
} else {
  console.log("Opps! You can not drive.");
}
  
// Ternary operator

let a = 5;
let b = 6;

let c = a>b ? (a-b):(b-a);
console.log(c);

/*Translate to :

  if (a>b){
 let c = (a-b);
  }  else{
 let c = (b-a);  
  }
 console.log(c);   */