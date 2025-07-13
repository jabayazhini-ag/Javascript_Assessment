// Example program to check if a string is a palindrome

// Example strings to test
let string1 = "madam";
let string2 = "racecar";
let string3 = "hello";

// Check string1
let left1 = 0;
let right1 = string1.length - 1;
let isPalindrome1 = true;

while (left1 < right1) {
    if (string1[left1] !== string1[right1]) {
        isPalindrome1 = false;
        break;
    }
    left1++;
    right1--;
}

console.log('"' + string1 + '" is a palindrome: ' + isPalindrome1);

// Check string2
let left2 = 0;
let right2 = string2.length - 1;
let isPalindrome2 = true;

while (left2 < right2) {
    if (string2[left2] !== string2[right2]) {
        isPalindrome2 = false;
        break;
    }
    left2++;
    right2--;
}

console.log('"' + string2 + '" is a palindrome: ' + isPalindrome2);

// Check string3
let left3 = 0;
let right3 = string3.length - 1;
let isPalindrome3 = true;

while (left3 < right3) {
    if (string3[left3] !== string3[right3]) {
        isPalindrome3 = false;
        break;
    }
    left3++;
    right3--;
}

console.log('"' + string3 + '" is a palindrome: ' + isPalindrome3);
