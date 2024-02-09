function fibonacci(index) {
  let fib = [0, 1];
  for(let i = 2; i <= index; i++) {
    fib.push(fib[i - 1] + fib[i - 2])
  }
  return fib[index]
}

console.log(fibonacci(50))