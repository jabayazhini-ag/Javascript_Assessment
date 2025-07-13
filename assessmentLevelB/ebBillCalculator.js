console.log("EB Bill Calculator:");

//Source: Tariff Order - FY 2O22-23 - TANGEDCO
console.log("Cost per unit as per TANGEDCO tariff FY 2022-23");
console.log("1 to 100 units = ₹ 0.00 per unit");
console.log("101 to 200 units = ₹ 2.25 per unit");
console.log("201 to 400 units = ₹ 4.50 per unit");
console.log("401 to 500 units = ₹ 6.00 per unit");
console.log("501 to 600 units = ₹ 8.00 per unit");
console.log("601 to 800 units = ₹ 9.00 per unit");
console.log("801 to 1000 units = ₹ 10.00 per unit");
console.log("Greater than 1000 units = ₹ 11.00 per unit");

console.log("Enter the total units consumed = 550 units");

const unitsConsumed = 550;

if (unitsConsumed >= 1 && unitsConsumed <= 100) {
    console.log("Electricity Bill Amount = ₹ " + unitsConsumed * 0);
}

else if (unitsConsumed >= 101 && unitsConsumed <= 200) {
    console.log("Electricity Bill Amount = ₹ " + unitsConsumed * 2.25);
}

else if (unitsConsumed >= 201 && unitsConsumed <= 400) {
    console.log("Electricity Bill Amount = ₹ " + unitsConsumed * 4.5);
}

else if (unitsConsumed >= 401 && unitsConsumed <= 500) {
    console.log("Electricity Bill Amount = ₹ " + unitsConsumed * 6);
}

else if (unitsConsumed >= 501 && unitsConsumed <= 600) {
    console.log("Electricity Bill Amount = ₹ " + unitsConsumed * 8);
}

else if (unitsConsumed >= 601 && unitsConsumed <= 800) {
    console.log("Electricity Bill Amount = ₹ " + unitsConsumed * 9);
}

else if (unitsConsumed >= 801 && unitsConsumed <= 1000) {
    console.log("Electricity Bill Amount = ₹ " + unitsConsumed * 10);
}

else {
    console.log("Electricity Bill Amount = ₹ " + unitsConsumed * 11);   //units > 1000
}







