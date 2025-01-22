//For Loop
let a  = 0;
for(let i  = 0;i<=50; i++){
console.log(a++)
}

let sum = 0;
for(i=1;i<=10;i++){
 sum+=i;
}
console.log("The sum is :",sum);

//While Loop
i=1
while(i<=10){
  console.log(i,"Subhransu");
  i++
}

{
 //Do-While Loop
  let myname = "SUBHRANSU";
  let i = 1;
  do{
  console.log(i,myname);
  i++;
  }while(i<=5);
}



/*   For-of-Loop :
for(let val of strVal){
    //do some work
}
*/
let myName = "Subhransu";
let size = 0;

for(let i of myName ){
  console.log("i=",i)
  size++;
}
console.log(size);

// For in loop
let student = {
  name : "Subhransu",
  age : 21,
  Role : "Dev",
  "is pass" : true
}
for(let key in student){
  console.log(key,":",student[key]);
}