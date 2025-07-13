// Simple program to check if a string is a palindrome

// Example string to test
let str = "madam";

// Initialize pointers
let left = 0;
let right = str.length - 1;
let isPalindrome = true;

// Check palindrome condition
while (left < right) {
    if (str[left] !== str[right]) {
        isPalindrome = false;
        break;
    }
    left++;
    right--;
}

// Output the result
if (isPalindrome) {
    console.log('"' + str + '" is a palindrome.');
} else {
    console.log('"' + str + '" is not a palindrome.');
}


// Simple program to check if a string or number is a palindrome

// Example number to test
let num = 12321;

// Convert number to string (optional, for demonstration)
let strNum = num.toString();

// Initialize pointers for number check
let left1 = 0;
let right1 = strNum.length - 1;
let isPalindrome1 = true;

// Check palindrome condition for number
while (left1 < right1) {
    if (strNum[left1] !== strNum[right1]) {
        isPalindrome1 = false;
        break;
    }
    left1++;
    right1--;
}

// Output the result
if (isPalindrome) {
    console.log(num + " is a palindrome.");
} else {
    console.log(num + " is not a palindrome.");
}

