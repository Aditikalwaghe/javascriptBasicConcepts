//Function without parameter
function greet(){
    console.log("Hello,Welcome to Javascript");
}
greet();

//Function with parameter
function square(num)
{
    return (num*num);
}
console.log("The square of 4 is:",square(4));
console.log("The square of 6 is:",square(6));
console.log("The square of 8 is:",square(8));

function multiply(a,b)
{
    return a*b;
}
console.log("Multiplication is:",multiply(2,3));

// Function Expression (Anonymous Function) 
const divide=function(a,b)
{
    return a/b;
}
console.log("Division is:",divide(9,3));

// Arrow Function (ES6) 
const add = (a, b) => a + b; 
console.log("Addition is:",add(5, 7)); 

// Immediately Invoked Function Expression (IIFE)
(function () { 
console.log("IIFE executed!"); 
})();

// Function with Default Parameters (ES6) 
function greet(name = "Aditi") { 
console.log(`Hello, ${name}!`); 
} 
greet();       
greet("Vasudha");

// Function with Rest Parameters (... Operator) 
function sum(...numbers) { 
return numbers.reduce((acc, num) => acc + num, 0); 
} 
console.log(sum(2, 4, 6, 8)); 

//Function Scope
function showMessage() { 
let message = "Hello!"; 
console.log(message); 
} 
showMessage();
//console.log(message);

//closure Function
function outer() { 
let count = 0;     
return function inner() { 
count++; 
console.log(count); 
}; 
} 
const increment = outer(); 
increment(); 
increment(); 

// Callback Functions
function processUserInput(name, callback) { 
console.log(`Processing user: ${name}`); 
callback(); 
} 
function greet() { 
console.log("Hello,Welcome to javascript"); 
} 
processUserInput("Aditi", greet); 

//Higher-Order Functions
function multiplyBy(factor) { 
return function (num) { 
return num * factor; 
}; 
} 
const double = multiplyBy(2); 
console.log(double(5));