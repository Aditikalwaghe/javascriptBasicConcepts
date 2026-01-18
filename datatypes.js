//  Number
let age = 25;
let price = 99.99;
console.log("Number:", age, price);

//  String
let name = "Aditi";
let message = 'Hello World';
let template = `My name is ${name}`;
console.log(template);


//  Boolean
let isJavaScriptFun = true;
let isRaining = false;
console.log("Boolean:", isJavaScriptFun, isRaining);

//  Undefined
let x;
console.log(x);



//  Null
let emptyValue = null;
console.log(emptyValue);


//  Symbol 
let symbol1 = Symbol("id");
let symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

//  BigInt 
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber);

// Object
let person = {
  name: "John",
  age: 30,
  isStudent: false
};
console.log(person);
console.log("Name:", person.name);

//  Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log( fruits);
console.log("Array 2nd element:", fruits[1]);


//  Function
function greet(user) {
  return `Hello, ${user}!`;
}
console.log( greet("Aditi"));


//  Date
let today = new Date();
console.log("Date=", today);

//  Regular Expression
let pattern = /hello/i;
let result = pattern.test("Hello World");
console.log(result);
