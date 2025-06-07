// let a = true;
// let b = false;
// let c = a && b;

// console.log("The value of c is:", c);

// let name1 = "John";
// let name2 = "Doe";
// console.log(`Hello, ${name1} ${name2}`);

let receipe = true;
function receipe1(receipename){
    return receipename
}
function receipe2(receipename){
    return receipename
}
if (receipe) {
    console.log(receipe1("Pasta"));
}
else {
    console.log(receipe2("Salad"));
}
// Output: Pasta

receipe1 ? console.log(receipe1("pizza")) : console.log(receipe2("Salad"));
// Output: pizza

//objects
const person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
person.greet();

// Output: Hello, my name is Alice and I am 30 years old.

const person1 = {
  name: "Aryan",
  age: 20,
  isStudent: true
};
console.log(person1.name);        // Dot notation → Aryan
console.log(person1["age"]);     // Bracket notation → 21
delete person1.isStudent; // Deleting a property

console.log(person1); 

// Output: { name: 'Aryan', age: 20 }



//object destructuring
const person2 = {
    name2: "Bob",
    age: 25,
    city: "New York"
};
const { name2, age, city } = person2; // Destructuring assignment
console.log(name2); // Output: Bob
console.log(age);  // Output: 25
console.log(city); // Output: New York

// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers; // Destructuring assignment
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]   


//default parameters
function greet(name = "Guest") { // Default parameter
    console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice! (overriding the default parameter)


// Spread operator 
const array1 = [1, 2, 3];   
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2]; // Merging arrays
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6] 
// Spread operator with objects 
const obj1 = { a: 1, b: 2 };    
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 }; // Merging objects
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }


// Rest operator
function sum(...numbers) { // Accepts any number of arguments 
    return numbers.reduce((acc, num) => acc + num, 0); // Sums all numbers
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Rest operator with destructuring
const person3 = {  
    name3: "Charlie",
    age: 28,
    hobbies: ["reading", "gaming", "hiking"]
};
const { name3: personName, ...restOfPerson } = person3; // Destructuring with rest operator
console.log(personName); // Output: Charlie
console.log(restOfPerson); // Output: { age: 28, hobbies: [ 'reading', 'gaming', 'hiking' ] }




// Array methods:
//map,filter,reduce,find,forEach,some,every,includes,indexOf,join,findIndex,sort,reverse

const numbersArray = [1, 2, 3, 4, 5];
// Using map to double each number
const doubledArray = numbersArray.map(num => num * 2); //do not modify the original array
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]

// Using filter to get even numbers
const evenNumbers = numbersArray.filter(num => num % 2 === 0); //do not modify the original array
console.log(evenNumbers); // Output: [2, 4]

// Using reduce to sum all numbers
const sum = numbersArray.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// Using find to get the first number greater than 3
const firstGreaterThanThree = numbersArray.find(num => num > 3);
console.log(firstGreaterThanThree); // Output: 4

// Using forEach to log each number
numbersArray.forEach(num => console.log(num)); // Output: 1 2 3 4 5

// Using some to check if any number is greater than 4
const hasGreaterThanFour = numbersArray.some(num => num > 4);
console.log(hasGreaterThanFour); // Output: true

// Using every to check if all numbers are less than 6
const allLessThanSix = numbersArray.every(num => num < 6);
console.log(allLessThanSix); // Output: true

// Using includes to check if the array contains the number 3
const containsThree = numbersArray.includes(3);
console.log(containsThree); // Output: true

// Using indexOf to find the index of the number 3
const indexOfThree = numbersArray.indexOf(3);
console.log(indexOfThree); // Output: 2

// Using join to create a string from the array
const joinedString = numbersArray.join(", ");
console.log(joinedString); // Output: "1, 2, 3, 4, 5"

// Using findIndex to get the index of the first number greater than 3
const indexOfFirstGreaterThanThree = numbersArray.findIndex(num => num > 3);
console.log(indexOfFirstGreaterThanThree); // Output: 3

// Using sort to sort the array in ascending order
const sortedArray = [...numbersArray].sort((a, b) => a - b); // Using spread operator to avoid mutating the original array
console.log(sortedArray); // Output: [1, 2, 3, 4, 5]

// Using reverse to reverse the order of the array
const reversedArray = [...numbersArray].reverse(); // Using spread operator to avoid mutating the original array
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
