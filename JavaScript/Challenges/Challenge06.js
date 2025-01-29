//For a given array of numbers, print the square of each value using the forEach loop.

let arr = [2, 4, 5, 8, 34, 17]
// arr.forEach((val)=>{
//   console.log(val, ":", val**2)
// })

let calcSquare = (sqr)=>{
  console.log(sqr * sqr)
}

arr.forEach(calcSquare);