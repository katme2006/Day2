//Fibonacci sequence

function fibonacci(num) {
  //Array to begin Fibonacci Sequence
  fibArr = [0, 1];

  if (num === 1) {
    return fibArr[0];
  } else {
    //Loop to adding together two numbers and replacing last element in array
    for (i = 2; i < num; i++) {
      fibArr.push(fibArr[0] + fibArr[1]);
      fibArr.shift();
    }
  }

  const fibNum = fibArr[0] + fibArr[1];

  return fibNum;
}

console.log(fibonacci(4)); //3
console.log(fibonacci(12)); //144
