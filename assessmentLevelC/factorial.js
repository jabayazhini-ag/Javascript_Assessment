console.log("Factorial:");

console.log("Meaning: The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. In mathematical terms: n!=n*(n-1)*(n-2)*...*2*1 ");

let factorial = 1;

for (let i = 1; i <= 10; i++) {
    factorial = factorial * i;
    console.log("Factorial of " + i + " is " + factorial);
}



