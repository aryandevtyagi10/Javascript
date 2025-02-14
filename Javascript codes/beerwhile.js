var numofBottles = 99;

while (numofBottles > 0) {
    var bottleword = "bottles";
    
    if (numofBottles === 1) {
        bottleword = "bottle";  // Change to singular when only 1 bottle left
    }

    console.log(`${numofBottles} ${bottleword} of beer on the wall, ${numofBottles} ${bottleword} of beer.`);
    numofBottles--;

    var nextBottleWord = numofBottles === 1 ? "bottle" : "bottles";
    if (numofBottles === 0) {
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    } else {
        console.log(`Take one down and pass it around, ${numofBottles} ${nextBottleWord} of beer on the wall.`);
    }
    
    // console.log("");  // Add a blank line for readability
}

console.log("No more bottles of beer on the wall, no more bottles of beer.");
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
