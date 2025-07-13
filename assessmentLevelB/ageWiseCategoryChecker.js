console.log("Age-wise Category Checker:");

let age = 35.5;  

console.log("Age = "+age +" years");

if (age > 0 && age <= 1.99) {
    console.log("Age Group = Infant");
} 
else if (age >= 2 && age <= 3.99) {
    console.log("Age Group = Toddler");
} 
else if (age >= 4 && age <= 5.99) {
    console.log("Age Group = Pre-School Child");
} 
else if (age >= 6 && age <= 12.99) {
    console.log("Age Group = School Age Child");
} 
else if (age >= 13 && age <= 17.99) {
    console.log("Age Group = Adolescent");
} 
else if (age >= 18 && age <= 35.99) {
    console.log("Age Group = Young Adult");
} 
else if (age >= 36 && age <= 45.99) {
    console.log("Age Group = Middle Aged Adult");
} 
else if (age >= 46 && age <= 59.99) {
    console.log("Age Group = Older Adult");
} 
else if (age >= 60) {
    console.log("Age Group = Senior Citizen");
} 
else {
    console.log("Age Group = Foetus");
}




