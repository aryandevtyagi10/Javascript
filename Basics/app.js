// console.table({age:21});


    //    ***How to create a variable***
    // (reserve word) (variable name) (type of value)
// var not that much used
//shortcut for console.log 
// TYPE clg or log
//Variables

let name = 'aryan';
let whatDoyouWant = 'victory';
let age = 20;
age++;
console.log(name);
console.log(typeof whatDoyouWant);
console.log(age);
console.log(typeof age);

//Basic Maths
console.log(2+2);
console.log(2-5);
console.log(5%2);
console.log(2**3);
age++;
console.log(age); 
console.warn("study");

//  ***let vs const***
//   const/let name1 = 'aryan';
//  name1 = 'dev'                using const will genrate error
//  console.log(name1);                let and var can be used

// let favnum = 2;
// let second_favnum = 10;
// console.log(favnum ** second_favnum);

let num1 = false;
let num2 = true;
console.log(num1);
console.log(num2);
// *** NaN -> Not a Number ***
    let num3 = 20;
    console.log(num3 + undefined);   // it gives NaN as output

//  ***Falsy value***
// these are all falsy values other than this all are truthy values
    // -> false
    // ->f undefined
    // -> null
    // -> 0
    // -> -0
    // NaN
    // -> "",'',``, (empty quotes)
    // exercise 
// let isjs = true;
// let hard = false;
// let favnum4 = 73;
// console.log(favnum4 + null);

              // comparison operators-----> relational and equality operators
     
    // 1.Relational operators >,<,>=,<=
console.log(10 < 10);
console.log(10 > 10);
console.log(10 <= 10);
console.log(10 >= 10);

     // 2.Equaltiy operators 
// (a) === strict equality    checks(type + value)
// (b) !== strict inequality  checks(type + value)
// (c) == lose equalty        checks(only value)
// (d) != lose not equality   checks(only value)

console.log(10 === '10'); //gives false
console.log(10 === 10);   //gives true
console.log(10 !== 10);   //gives false
console.log(10 == '10');  //gives true**** 
console.log(10 != '10');  //gives false
console.log(10 == 10);    //gives true
console.log(10 != 10);    //gives false


//  Strings

let firstName = 'Aryan';
let lastName = ' Dev'
console.log(firstName + lastName);

// 1. Concatenation
let fullName = firstName.concat(lastName)
console.log(fullName);

//2. APPEND
 firstName += " Tyagi"
 console.log(firstName);

//3. LENGTH
console.log(firstName.length);

//4. CASES
 console.log(firstName.toUpperCase());
 console.log(firstName.toLowerCase());

//5. SLICE
console.log(fullName.slice(0, 7));

//6. SPLIT & JOIN
 console.log(fullName.split("").join("-"));
 console.log(fullName.split("")); //***note the difference here between "" and " "  on console */
 console.log(fullName.split(" "));


//7. INCLUDES
 console.log(fullName.includes("Aryan"));

//8. TRIM
console.log(fullName.trim());

let ticks = 'random shit';
console.log(ticks);
// let ticks = 'random shit 
// happens';     error in multi-line strings

let backticks = `random 
shit happens`;  //print text as it is 
console.log(backticks);

//  ***TYPE CONVERSION***
let money = "50";
console.log(typeof money);
// - Convert string to number 3 ways
// money = +money;
// money = Number(money) //constructor number
money = parseInt(money); //***Note ***/
console.log(typeof money);


