console.log("Fahrenheit to Celsius Converter:");

//Example
console.log("Convert 98.6°F to Celsius:")

//Formula
console.log("Formula: °C = [(°F-32)*5]/9");
console.log("  where,");
console.log("  °F is the measurement of temperature in Fahrenheit.");
console.log("  °C is the measurement of temperature in Celsius.");

//Calculation
const fahrenheit1 = 98.6
const celsius1 = ((fahrenheit1 - 32) * 5) / 9;
console.log("98.6°F = " + celsius1.toFixed() + "°C");

console.log("Celsius to Fahrenheit Converter:");

//Example
console.log("Convert 37°C to Fahrenheit:");

//Formula
console.log("Formula:  °F = (°C*(9/5))+32");

//Calculation
const celsius2 = 37
const fahrenheit2 = (celsius2 * (9 / 5)) + 32;
console.log("37°C = " + fahrenheit2.toFixed(1) + "°F");




