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

function printFibonacciIterative(n: number): void {
  if (n <= 0) return;
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}

printFibonacciIterative(10); // This will work correctly even for large n