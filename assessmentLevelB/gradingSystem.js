//Sum and Average
let tamil = 90;
let english = 90;
let maths = 99;
let science = 99;
let socialScience = 99;

let total = tamil + english + maths + science + socialScience;
console.log("Total Marks in 5 Subjects = " + total);

let average = total / 5;
console.log("Average = " + average.toFixed(2));

//Grading System
if (average >= 80) {
    console.log("Grade = O & Performance = Outstanding");
}
else if (average >= 70 && average <= 79.99) {
    console.log("Grade = A+ & Performance = Excellent");
}
else if (average >= 60 && average <= 69.99) {
    console.log("Grade = A & Performance = Very Good");
}
else if (average >= 55 && average <= 59.99) {
    console.log("Grade = B+ & Performance = Good");
}
else if (average >= 50 && average <= 54.99) {
    console.log("Grade = B & Performance = About Average");
}
else if (average >= 45 && average <= 49.99) {
    console.log("Grade = C & Performance = Average");
}
else if (average >= 35 && average <= 44.99) {
    console.log("Grade = D & Performance = Pass");
}
else {
    console.log("Grade = Fail & Performance = Requires Improvement");
}





