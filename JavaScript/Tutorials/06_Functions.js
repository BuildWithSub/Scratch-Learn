function about(name) {
  console.log(`Hey ${name} you are nice !`);
  console.log(`Hey ${name} you are good !`);
  console.log(`Hey ${name} you are a good character !`);
  console.log(`Hey ${name} you are looking good !`);
  console.log(`Hey ${name} your bike is also good !`);
}

about("Subhransu");
about("Ram");



 function sum(a, b, c=5) {  //c = 5 Default parameter
  return a + b + c;
}
result = sum(5, 6, 20);
result1 = sum(10, 6);
console.log(`Sum of the result is : ${result}`);
console.log(`Sum of the result is : ${result1}`);


const func1 = (x)=>{  //Arrow Function
  console.log("I am a arrow function", x)

}

func1(34);
func1(24);
func1(54);
func1(324);