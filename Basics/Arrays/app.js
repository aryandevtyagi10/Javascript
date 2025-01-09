const fruits = [
    "apples",
    "pomegranate",
    "mango",
    "strawberries",
    "pineapple",
    "grapefruit",
  ];
  console.log(fruits);
fruits.shift("Banana");//unshift
console.log(fruits);
fruits.pop("Banana");//push
console.log(fruits);
// fruits.splice("mango")
// console.log(fruits);
const lang = ['js','py','java','C','Ruby'];
console.log(fruits.concat(lang)); 
console.log(lang.push('poppi')); 
console.log(lang.unshift('popa')); 
console.log(lang.pop('js')); 
console.log(lang.slice(0,2)); 
console.log(lang.splice(0,2)); 
