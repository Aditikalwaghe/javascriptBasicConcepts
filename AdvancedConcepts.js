// setTimeout() Function
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

//setInterval() Function
let count = 1;

setInterval(() => {
    console.log("Count:", count);
    count++;
}, 1000);

//promises
function fetchData() { 
return new Promise((resolve) => { 
setTimeout(() => resolve("Data fetched"), 
2000); 
}); 
} 
async function getData() { 
let data = await fetchData(); 
console.log(data); 
} 
getData();

//Error Handling
try { 
let x = y; 
} catch (error) { 
console.log(error.message); }

//Prototype & Inheritance 
function Person(name) { 
this.name = name; 
} 
Person.prototype.greet = function() { 
console.log("Hello, " + this.name); 
}; 
let john = new  Person("Aditi"); 
john.greet(); 

//Event Loop & Call Stack 
console.log("Start"); 
setTimeout(() => console.log("Async Task"), 0); 
console.log("End"); 