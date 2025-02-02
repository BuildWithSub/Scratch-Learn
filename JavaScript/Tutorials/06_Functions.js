function about(name) {
  console.log(`Hey ${name} you are nice !`);
  console.log(`Hey ${name} you are good !`);
  console.log(`Hey ${name} you are a good character !`);
  console.log(`Hey ${name} you are looking good !`);
  console.log(`Hey ${name} your bike is also good !`);
}

about("Subhransu");
about("Ram");

function sum(a, b, c = 5) {
  //c = 5 Default parameter
  return a + b + c;
}
result = sum(5, 6, 20);
result1 = sum(10, 6);
console.log(`Sum of the result is : ${result}`);
console.log(`Sum of the result is : ${result1}`);

const func1 = (x) => {
  //Arrow Function
  console.log("I am a arrow function", x);
};

func1(34);
func1(24);
func1(54);
func1(324);

let ArrowMult = (a, b) => {
  return a * b;
};
console.log(ArrowMult(3, 5));

let hello = () => {
  console.log("Hello");
};
hello();

/* forEach method  (HOF/HOM)  A higher-order function is a function that takes another function as an argument or returns a function.
arr.forEach(callBackFunction)
- A callback is a function passed as an argument to another function
The forEach method in JavaScript is used to iterate over arrays and execute a provided function once for each array element.
*/
// let arr = [1, 2, 3, 4, 5];
let arr = ["Dhenkanal", "Cuttack", "Bhubaneswar", "Puri"]

arr.forEach((val,idx, arr) =>{ //Can use only one parameter
  
  console.log(val.toUpperCase(),arr,idx)
});
