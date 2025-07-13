console.log("Leap Year or Not a Leap Year Checker:");

console.log("  Leap Year: A leap year has 366 days (including Feb 29) instead of the usual 365 days (without Feb 29). It occurs every 4 years.");

console.log("  Not a Leap Year: A non-leap year has 365 days. It occurs in years not divisible evenly by 4, or those divisible by 100 but not by 400.");

const year = 2024;

console.log("If the year is: "+year);

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
}
else {
    console.log("Not a Leap Year");
}









