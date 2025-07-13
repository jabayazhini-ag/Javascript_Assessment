console.log("Checking if a number is an Armstrong number:");

console.log("Definition: Armstrong number is a number that is equal to the sum of cubes of its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers.");

// Example to check if a number is an Armstrong number
let number = 153; // Change this number to test different cases

let originalNumber = number;
let numberOfDigits = 0;
let sum = 0;
let result = "";    // Initialize an empty string for storing the result message

// Count number of digits
let temp = originalNumber;
while (temp !== 0) {
    numberOfDigits++;
    temp = parseInt(temp / 10); // Divide by 10 and convert to integer
}

// Calculate Armstrong number condition
temp = originalNumber;
while (temp !== 0) {
    let digit = temp % 10;
    sum += digit * digit * digit; // Calculate cube of digit and add to sum
    temp = parseInt(temp / 10); // Divide by 10 and convert to integer
}

// Check if number is Armstrong
if (sum === originalNumber) {
    result = originalNumber + " is an Armstrong number";
} else {
    result = originalNumber + " is not an Armstrong number";
}

// Output result
console.log(result);
