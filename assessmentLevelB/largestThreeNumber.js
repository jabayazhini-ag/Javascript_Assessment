console.log("Finding the Largest Number using Three Input Variables:");

let casualWear = 500;
let westernWear = 1000;
let traditionalWear = 1500;

if (casualWear > westernWear) {
    if (casualWear > traditionalWear) {
        console.log("The highest price is: Casual Wear = ₹" + casualWear);
    }
    else {
        console.log("The highest price is: Traditional Wear = ₹" + traditionalWear);
    }
}
else {
    if (westernWear > traditionalWear) {
        console.log("The highest price is: Western Wear = ₹" + westernWear);
    }
    else {
        console.log("The highest price is: Traditional Wear = ₹" + traditionalWear)
    }
}




