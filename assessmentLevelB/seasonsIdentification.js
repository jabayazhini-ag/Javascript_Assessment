console.log("Seasons in India:")

console.log(" 1. Spring Season : March and April")
console.log(" 2. Summer Season : May and June")
console.log(" 3. Monsoon Season : July and August")
console.log(" 4. Autumn Season : September and October")
console.log(" 5. Pre-winter Season : November and December")
console.log(" 6. Winter Season : January and February")
console.log()   //for spacing

let month = "April";

console.log("Check the season for the month : " + month);

if (month === "March" || month === "April") {
    console.log("Current season is Spring Season.");
}
else if (month === "May" || month === "June") {
    console.log("Current season is Summer Season.");
}
else if (month === "July" || month === "August") {
    console.log("Current season is Monsoon Season.");
}
else if (month === "September" || month === "October") {
    console.log("Current season is Autumn Season.");
}
else if (month === "November" || month === "December") {
    console.log("Current season is Pre-winter Season.");
}
else if (month === "January" || month === "February") {
    console.log("Current season is Winter Season.");
}
else {
    console.log("Please enter a valid month.");
}
console.log()   //for spacing







