console.log("Fibonacci sequence / Fibonacci numbers:");

console.log("   The Fibonacci sequence, also known as Fibonacci numbers, is defined as the sequence of numbers in which each number in the sequence is equal to the sum of two numbers before it.");

console.log("     The Fibonacci Sequence is given as:");

console.log("       Fibonacci Sequence = 0, 1, 1, 2, 3, 5, 8, 13, 21, ....");

console.log("     Here, the third term “1” is obtained by adding the first and second term. (i.e., 0+1 = 1). Similarly, “2” is obtained by adding the second and third term (1+1 = 2), “3” is obtained by adding the third and fourth term (1+2) and so on.");

console.log();  //for spacing

// Number of Fibonacci numbers to generate
let n = 10;

// Initialize the first two Fibonacci numbers
let n1 = 0, n2 = 1;

// Display the Fibonacci series
console.log("The list of first " +n +" terms in the Fibonacci Sequence is:")
console.log(n1); // First Fibonacci number
console.log(n2); // Second Fibonacci number

// Generate the rest of the Fibonacci series using a for loop
for (let i = 3; i <= n; i++) {
    let nextTerm = n1 + n2;
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
}



