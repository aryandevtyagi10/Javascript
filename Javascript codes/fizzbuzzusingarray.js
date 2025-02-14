// var num = [prompt("Enter number")];
// if (num % 3==0 && num%5==0){
// console.log("FizzBuzz");
// }
// else if  (num % 3==0){
//     console.log("Fizz");
// }
// else if  (num % 5==0){
//     console.log("Buzz");
// }
// else
//     console.log("HEHEHE");
var output = [];
var count = 1;

function FizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
    console.log(output);
}

// Run the function multiple times to see FizzBuzz in action
for (let i = 0; i < 15; i++) {
    FizzBuzz();
}