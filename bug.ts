function printFibonacci(n: number): void {
  let a = 0, b = 1, temp;
  for (let i = 0; i < n; i++) {
    console.log(a);
    temp = a + b;
    a = b;
    b = temp;
  }
}

printFibonacci(10); // This will print 10 Fibonacci numbers correctly

function printFibonacciRecursive(n: number): void {
  if (n <= 0) {
    return;
  }
  printFibonacciRecursive(n - 1);
  console.log(fibonacci(n));
}

function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

printFibonacciRecursive(10); // This will throw a stack overflow error for large values of n