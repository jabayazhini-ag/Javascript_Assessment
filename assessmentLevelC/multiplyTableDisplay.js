console.log("Multiply Table Display Table 1 to Table 5:")

console.log(); // for spacing

for (let num = 1; num <= 5; num++) {
    for (let i = 1; i <= 10; i++) {
        console.log(i + " * " + num + " = " + (i * num));
    }
    console.log(); // for spacing
}