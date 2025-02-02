//Check if the given number is prime or not
function isPrime(num) {
  let count = 0;
  if (num <= 1) {
    return false;
  }
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log("Given number is a prime number");
  } else {
    console.log("Given number is not a prime number");
  }
}

isPrime(8);
