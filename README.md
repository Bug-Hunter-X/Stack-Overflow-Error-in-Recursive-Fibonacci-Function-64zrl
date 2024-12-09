# TypeScript Stack Overflow Bug

This repository demonstrates a stack overflow error that can occur in recursive functions, specifically in a recursive implementation of the Fibonacci sequence.  The iterative approach avoids this issue.

## Bug Description

The recursive `fibonacci` function has exponential time complexity, leading to a large number of function calls for larger inputs.  This eventually exceeds the call stack's limit, causing a stack overflow error.

## Bug Solution

The solution involves using an iterative approach to calculate the Fibonacci sequence, avoiding the recursive calls and thus preventing the stack overflow.

## How to Run

1. Clone the repository.
2. Run `tsc bug.ts` to compile the TypeScript code.
3. Run `node bug.js` to execute the buggy code and observe the stack overflow error.
4. Run `tsc bugSolution.ts` and then `node bugSolution.js` to see the corrected iterative approach.