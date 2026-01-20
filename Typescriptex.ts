//Variables and Data types
let userName: string = "Aditi";
let marks: number = 85;
let isPassed: boolean = true;
console.log(userName, marks,isPassed);
let value: any = "Can be anything";    
let user: { name: string; age: number } = { name: "John", 
age: 30 };
console.log(value,user);

//Functions & Return Types
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(10, 20));

// Default Parameters
function greet(name: string = "dipali"): string {
    return `Hello, ${name}`;
}
console.log(greet());
console.log(greet("Aditi"));

//Optional parameters
function greetUser(name?: string): string {
    return name ? `Hello, ${name}` : "Hello, Vasudha";
}
console.log(greetUser());
console.log(greetUser("Aditi"));

//Alises
type User = {
    name: string;
    age: number;
};
let user1: User = {
    name: "Aditi",
    age: 22
};
console.log(user1.name);
console.log(user1.age);

//Interfaces
interface Person {
    name: string;
    age: number;
}

let user2: Person = {
    name: "Aditi",
    age: 22
};

console.log(user2.name);
console.log(user2.age);
