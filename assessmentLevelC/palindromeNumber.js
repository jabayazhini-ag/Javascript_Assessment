// Example program to check if a number is a palindrome

// Example numbers to test
let number1 = 121;
let number2 = 12321;
let number3 = 12345;

// Check number1
let numString1 = number1.toString(); // Convert number to string
let left1 = 0;
let right1 = numString1.length - 1;
let isPalindrome1 = true;

while (left1 < right1) {
    if (numString1[left1] !== numString1[right1]) {
        isPalindrome1 = false;
        break;
    }
    left1++;
    right1--;
}

console.log(number1 + " is a palindrome: " + isPalindrome1);

// Check number2
let numString2 = number2.toString(); // Convert number to string
let left2 = 0;
let right2 = numString2.length - 1;
let isPalindrome2 = true;

while (left2 < right2) {
    if (numString2[left2] !== numString2[right2]) {
        isPalindrome2 = false;
        break;
    }
    left2++;
    right2--;
}

console.log(number2 + " is a palindrome: " + isPalindrome2);

// Check number3
let numString3 = number3.toString(); // Convert number to string
let left3 = 0;
let right3 = numString3.length - 1;
let isPalindrome3 = true;

while (left3 < right3) {
    if (numString3[left3] !== numString3[right3]) {
        isPalindrome3 = false;
        break;
    }
    left3++;
    right3--;
}

console.log(number3 + " is a palindrome: " + isPalindrome3);
