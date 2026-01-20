//Variables and Data types
var userName = "Aditi";
var marks = 85;
var isPassed = true;
console.log(userName, marks, isPassed);
var value = "Can be anything";
var user = { name: "John",
    age: 30 };
console.log(value, user);
//Functions & Return Types
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
// Default Parameters
function greet(name) {
    if (name === void 0) { name = "dipali"; }
    return "Hello, ".concat(name);
}
console.log(greet());
console.log(greet("Aditi"));
//Optional parameters
function greetUser(name) {
    return name ? "Hello, ".concat(name) : "Hello, Vasudha";
}
console.log(greetUser());
console.log(greetUser("Aditi"));
var user1 = {
    name: "Alice",
    age: 22
};
console.log(user1.name);
console.log(user1.age);
var user2 = {
    name: "Aditi",
    age: 22
};
console.log(user2.name);
console.log(user2.age);
