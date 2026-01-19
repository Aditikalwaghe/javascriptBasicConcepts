// Array
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[1]);

//array methods
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num);
console.log(squared);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

numbers.forEach(num => {
    console.log(num);
});

//Objects
let person = {
     name: "Aditi",
      age: 30
     };
console.log(person.name);

//String methods
let sentence = "JavaScript is fun";
let words = sentence.split(" ");
console.log(words);

let arr = ["Hello", "World"];
console.log(arr.join(" "));

let msg = "I love Java";
console.log(msg.replace("Java", "JavaScript"));

let name = "JavaScript";
console.log(name.substring(0, 4));

let text = " Hello World ";
console.log(text.trim());

//Destructuring 
let [a, b] = [10, 20];
console.log(a); 
console.log(b); 
 
//Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1,4,5];
console.log(arr2);
